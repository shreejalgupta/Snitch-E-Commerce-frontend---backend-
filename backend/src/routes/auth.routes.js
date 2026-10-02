import express from "express"
import { loginValidator, registerValidator } from "../validator/auth.validator.js";
import { getMe, loginController, logoutController, refreshTokenController, registreController } from "../controller/auth.controller.js";
import { accessTokenAuthentication } from "../middleware/auth.middleware.js";

const router = express.Router();


/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */

router.post('/register', registerValidator, registreController);

/**
 * @POST /api/auth/login
 * @param req Express req
 * @param req.body = { email, password }
 * @response res.status = 201 & uesr { email, name, id } (if successfull)
 */

router.post('/login',loginValidator, loginController);

/**
 * @POST /api/auth/refresh
 */

router.post('/refresh', refreshTokenController)


/**
 * @GET /api/auth/me
 * @param req req.Express
 * @param req.header = 'Beerer accessToken"
 * @respons res.status = 200 & user get { email, name, id} (if successful)
 */

router.get('/me', accessTokenAuthentication, getMe)

/**
 * @description Logout user and clear refresh token from cookie
 * @method POST
 * @route /api/auth/logout
 * @access Only user
 * @req req.user => {userId: string}
 */

router.post('/logout', accessTokenAuthentication, logoutController )

export default router