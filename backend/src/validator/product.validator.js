import { body, validationResult } from "express-validator"

export const productValidator = [
    body("title")
        .exists().withMessage("Title is required").bail()
        .isString().withMessage("Title is in to be String").bail()
        .trim()
        .isLength({min: 2, max: 100}).withMessage("Title length must lie between 2 - 100 charcter ").bail()
        .isAlpha("en-US", {ignore: " -"}).withMessage("Title is in should be english"),
    body("description")
        .exists().withMessage("Description is required").bail()
        .isString().withMessage("Description should be in String")
        .trim()
        .isLength({min:20, max: 500}).withMessage("Description should be lie between 20 - 500 charcter"),
    body("price.ammount")
        .exists().withMessage("ammount is required").bail()
        .isFloat({min: 0}).withMessage("ammoun must be in Float and min ammount is 0").bail(),
    body("price.currency")
        .exists().withMessage("Currency is Required").bail()
        .isString().withMessage("Currency must be in String").bail()
        .isIn(["INR", "USD"]).withMessage("Currency either in INR or USD"),
    body("sizes")
        .exists().withMessage("Sizes is requrired").bail()
        .isArray().withMessage("Sizes must be an array of object"),
    body("sizes.*.size")
        .exists().withMessage("Size must be present in evry entry").bail()
        .isString().withMessage("Size must be in String").bail()
        .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage('"XS", "S", "M", "L", "XL", "XXL" will accepted'),
    body("sizes.*.stock")
        .exists().withMessage("Stock must ber required for all enitity").bail()
        .isInt({min: 0}).withMessage("Stock should be in Integer").bail(),
        
    (req, res, next) => {
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(401).json({
                message: "Invalid Product",
                error: error.array()
            })
        }

        next()
    }
]