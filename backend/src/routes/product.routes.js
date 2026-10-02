import express from 'express'
import { productValidator } from '../validator/product.validator.js';
import { accessTokenAuthentication } from '../middleware/auth.middleware.js';

import multer, { memoryStorage } from "multer"
import { allProductsController, createProductController, getProductByIdController } from '../controller/product.controller.js';


const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1 * 1024 * 1024, // 1MB per file
        files: 5                   // max 5 files per request
    } 
});

const router = express.Router();

/**
 * @method POST
 * @route /api/products/
 * @description Seller will only send data in this api and data is store in database and image will save in imagekit and images url stores in data base
 * @access Only seller
 * @req re.body => {title, description, images[max5], size:[{size, stock}], price:{amount, currency}}
 */

router.post('/',
    //    ___________ AccessToken verification_________________
    accessTokenAuthentication,
    //    ______ Cheking the request comes from Seller_________
    (req, res, next) => {
        if (req.user.role !== "seller") {
            return res.status(403).json({
                message: "User is not authorize to create product"
            })
        }
        next();
    },
    //   __________Reading form data using Multer_______________
    upload.array('images'),
    //   _________Converting complex data into json_____________
    (req, res, next) => {
        req.body.price && (req.body.price = JSON.parse(req.body.price))
        req.body.sizes && (req.body.sizes = JSON.parse(req.body.sizes))
        next();
    },
    productValidator,
    createProductController)


router.get('/', accessTokenAuthentication, allProductsController);

/**
 * @description Get specific product by id
 * @method GET
 * @route /api/products/:id
 * @access Only user
 * @req req.params => {id: string}
 */

router.get('/:id', accessTokenAuthentication, getProductByIdController);

export default router