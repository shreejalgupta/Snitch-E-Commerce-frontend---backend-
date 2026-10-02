import express from "express"
import { accessTokenAuthentication } from "../middleware/auth.middleware.js";
import { cartVallidator } from "../validator/cart.validator.js";
import { addToCartController, decCartItemController, getAllCartItemsController, removeCartProductController } from "../controller/cart.controller.js";

const router = express.Router();

/**
 * @descritpion Add to cart by the user and user can add multiple products in cart and also can add same product with different size
 * @method POST
 * @route /api/cart/addtocart
 * @access Only user
 * @req req.body => {product: productId, quantity: number, size: string}
 */

router.post('/addtocart', accessTokenAuthentication, cartVallidator, addToCartController)


/**
 * @description decrease existing product from cart
 * @method POST
 * @route /api/cart/decrease
 * @access Only user
 * @req req.body => {product: productId, quantity: number, size: string}
 */

router.post('/decrease', accessTokenAuthentication, cartVallidator, decCartItemController)


/**
 * @description Get all products in cart by the user
 * @method GET
 * @route /api/cart/
 * @access Only user
 * @req req.user => {userId: string}
 */

router.get("/", accessTokenAuthentication, getAllCartItemsController)


/**
 * @descrioption Remove product from cart by the user
 * @method DELETE
 * @route /api/cart/remove
 * @access Only user
 * @req req.body => {product: productId, size: string, quantity: 1}
 */

router.delete('/remove', accessTokenAuthentication, cartVallidator, removeCartProductController)



export default router