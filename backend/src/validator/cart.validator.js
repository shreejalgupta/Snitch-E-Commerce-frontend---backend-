import { body, validationResult } from 'express-validator'

export const cartVallidator = [
    body("productId")
        .exists().withMessage("Product Id is required").bail()
        .isString().withMessage("Product Id must be in String").bail()
        .isMongoId().withMessage("Product Id must be valid Mongo ID"),
    body("quantity")
        .exists().withMessage("Quantity is required").bail()
        .isInt({min: 1}).withMessage("Quanitity should in Integer and greater than 0"),
    body("size")
        .exists().withMessage("Size is required").bail()
        .isString().withMessage("Size is in String required").bail()
        .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage("Size must be one of '[XS, S, M, L, XL, XXL]'"),
    (req, res, next) => {
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message: "Validation is Required",
                errors: error.array()
            })
        }

        next()
    }
]