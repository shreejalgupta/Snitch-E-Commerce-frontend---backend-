import { body, validationResult } from "express-validator"


export const registerValidator = [
    body("email")
        .exists().withMessage("Email is required").bail()
        .trim()
        .isEmail().withMessage("Enter valid email address"),
    body("name")
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be String").bail()
        .trim()
        .isLength({ min: 2, max: 50 }).withMessage("Name length must be between 2 to 50 characters"),
    body("password")
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a string").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must be minimum 6 charcter long"),
    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({
                message: "Invalid Request",
                error: error.array()
            })
        }
        next()
    }
]

export const loginValidator = [
    body("email")
        .exists().withMessage("Email is Required").bail()
        .trim()
        .isEmail().withMessage("Invalid Email"),
    body("password")
        .exists().withMessage("Password is Required").bail()
        .isString().withMessage("Password must be in String").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must have been 6 charchter"),
    (req, res, next) => {

        const error = validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).json({
                message: "Invalid Response",
                error: error.array()
            })
        }

        next();
    }
]