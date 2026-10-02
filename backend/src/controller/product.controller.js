import productModel from "../model/product.model.js";
import { uploadFile } from "../services/imagekit.service.js";

export const createProductController = async (req, res) => {
    const { title, description, price, sizes } = req.body

    const fileUrls = await Promise.all(
        (req.files ?? []).map(async file => {
            const response = await uploadFile({
                buffer: file.buffer,
                fileName: file.originalname
            });

            return response.url;
        })
    );


    const product = await productModel.create({
        title,
        description,
        price: {
            ammount: price.ammount,
            currency: price.currency
        },
        sizes,
        images: fileUrls,
        seller: req.user.userId
    })



    return res.status(201).json({
        message: "Product created Succefully",
        data: {
            product
        }
    })
}

export const allProductsController = async(req, res) => {
    
    const product = await productModel.find();

    return res.status(200).json({
        message: "Product is Fetched Succefully",
        data: {
            product
        }
    })
    
}

export const getProductByIdController = async(req, res) => {
    const { id } = req.params;
    const product = await productModel.findById(id);
    
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    return res.status(200).json({
        message: "Product fetched successfully",
        data: {
            product
        }
    })
}