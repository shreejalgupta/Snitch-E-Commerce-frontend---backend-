import { readAccessToken } from "../utils/auth.utils.js"

export const accessTokenAuthentication = async(req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if(!accessToken){
        return res.status(401).json({
            message: "Access Token is not Found"
        })
    }

    try {
        
        const decode = readAccessToken(accessToken)

        const { userId, role } = decode

        req.user = { userId, role }
        
        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or Expired Token"
        })
    }


} 