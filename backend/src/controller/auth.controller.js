import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs"
import { generateAccessToken, generateRefreshToken, readRefreshToken } from "../utils/auth.utils.js";


/**
 * @description Register an user and save the data from req.body
 * @param req express.Request
 * @param req.body Object
 * @param req.body.email String
 * @param req.body.name String
 * @param req.body.password String
 */

export const registreController = async (req, res) => {
    const { email, name, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User is Already Exists",
            errors: [
                {
                    path: "email",
                    message: "User is Already Exists"
                }
            ]
        })
    }

    const user = await userModel.create({
        email,
        name,
        passwordHash: await bcrypt.hash(password, 12)
    })

    const accessToken = generateAccessToken({
        userId: user._id,
        role: user.role
    })

    const refreshToken = generateRefreshToken({
        userId: user._id,
        role: user.role
    })

    // Refresh Token Saves in Hash Format 
    await userModel.findByIdAndUpdate(user._id, {
        refreshToken: await bcrypt.hash(refreshToken, 15)
    })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    return res.status(201).json({
        message: "Regestration Succefull!",
        data: {
            user: {
                email: user.email,
                name: user.name,
                id: user._id,
                role: user.role
            },
            accessToken
        }
    })
}


/**
 * @description Login user and create new access and refresh token 
 * @param req express.Request
 * @param req req.body Object
 * @param req req.body.email String
 * @param req req.body.password String
 */

export const loginController = async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        })
    }


    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
        return res.status(404).json({
            message: "Email or password is Wrong",
        })
    }

    const refreshToken = generateRefreshToken({
        userId: user._id, role: user.role
    })

    const accessToken = generateAccessToken({
        userId: user._id, role: user.role
    })

    await userModel.findByIdAndUpdate(user._id, {
        refreshToken: await bcrypt.hash(refreshToken, 15)
    })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })

    return res.status(200).json({
        message: "User Login Succefully",
        data: {
            user: {
                email: user.email,
                name: user.name,
                id: user._id,
                role: user.role
            },
            accessToken
        }
    })
}


/**
 * @description For getting new refresh token and access token 
 * @param req req.cookie.refreshToken String
 * @doubt -> when i use old refresh token than it still valid, check it and give me reason why, i find it a lot and o didn't find it
 */

export const refreshTokenController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh Token Required"
        })
    }

    try {

        const decode = readRefreshToken(refreshToken);

        const user = await userModel.findById(decode.userId)
        if (!user || !user.refreshToken) {
            return res.status(401).json({ message: "Invalid Refresh Token" });
        }

        const isValidRefreshToke = await bcrypt.compare(refreshToken, user.refreshToken)
        console.log(isValidRefreshToke)
        if (!isValidRefreshToke) {

            await userModel.findByIdAndUpdate(user._id, {
                refreshToken: null
            })

            return res.status(401).json({
                message: "Invalid Refresh Token"
            })
        }


        const accessToken = generateAccessToken({
            userId: user._id,
            role: user.role
        });

        const newRefreshToken = generateRefreshToken({
            userId: user._id,
            role: user.role
        })

        await userModel.findByIdAndUpdate(user._id, {
            refreshToken: await bcrypt.hash(newRefreshToken, 15)
        })

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })

        return res.status(200).json({
            message: "Token Rotated Sucessfully",
            data: {
                user: {
                    email: user.email,
                    name: user.name,
                    id: user._id,
                    role: user.role
                }
            },
            accessToken
        })


    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token",
        })
    }
}


/**
 * @description accessToken verify and given to the user
 */

export const getMe = async (req, res) => {
    const { userId, role } = req.user

    const user = await userModel.findById(userId);
    console.log(user)

    return res.status(200).json({
        message: "Fetched Successfully",
        data: {
            email: user.email,
            name: user.name,
            id: user.id,
            role: role
        }
    })
}

export const logoutController = async (req, res) => {
    const { userId } = req.user;

    await userModel.findByIdAndUpdate(userId, {
        refreshToken: null
    })

    res.cookie("refreshToken", null, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })

    return res.status(200).json({
        message: "LogOut Succefully!",
        accessToken: null
    })
}