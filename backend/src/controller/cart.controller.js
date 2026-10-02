import cartModel from "../model/cart.model.js";
import productModel from "../model/product.model.js";

export const addToCartController = async (req, res) => {
    const { productId, size, quantity } = req.body;
    const { userId } = req.user;
    const product = await productModel.findById(productId);

    if (!product) {
        return res.status(404).json({
            message: "Invalid Product"
        })
    }

    const selectedSize = product.sizes.find(s => s.size === size);

    if (!selectedSize) {
        return res.status(404).json({
            message: "Invalid Size"
        })
    }

    if (selectedSize.stock < quantity) {
        return res.status(400).json({
            meassage: "Insufficient Stock"
        })
    }

    const cart = (await cartModel.findOne({ user: userId })) ?? (await cartModel.create({ user: userId }))

    console.log(cart)
    const productInCart = cart.products.find(p => (p.productId.toString() === productId) && (p.size === size))

    if(productInCart){
        if((productInCart.quantity + quantity) > selectedSize.stock) {
            return res.status(400).json({
                meassage: "Insufficiant Stock"
            })
        }

        await cartModel.updateOne({
            user: userId,
            products: {
                $elemMatch: {productId, size}
            }
        },{
            $inc: {
                "products.$.quantity": quantity
            }
        })

        return res.status(200).json({
            message: "Product Updated Succefully"
        })
    }

    const newCartProduct = await cartModel.findOneAndUpdate(
        {user : userId},
        {
            $push: {
                products: {
                    productId: productId,
                    size: size,
                    quantity: quantity
                }
            }
        },
        {new: true}
    )


    return res.status(201).json({
        message: "Product Added in Cart",
        data: {
            product: newCartProduct
        }
    })
}

export const getAllCartItemsController = async (req, res) => {
    const {userId } = req.user;

    const cart = await cartModel.findOne({
        user: userId
    })

    if(!cart){
        return res.status(404).json({
            message: "Cart is not created"
        })
    }

    return res.status(200).json({
        meassage: "Cart fetched Succefully",
        data: cart.products
    })
}


export const decCartItemController = async (req, res) => {
  const { productId, size, quantity } = req.body;
  const { userId } = req.user;

  const cart = await cartModel.findOne({ user: userId });

  if (!cart) {
    return res.status(404).json({ message: "Invalid Cart" });
  }

  const productInCart = cart.products.find(
    p => p.productId.toString() === productId && (p.size === size)
  );

  if (!productInCart) {
    return res.status(404).json({ message: "Product not found in cart" });
  }

  if (productInCart.quantity <= 1 || productInCart.quantity - quantity < 1) {
    return res.status(400).json({ message: "Minimum one product is required" });
  }
  console.log(productInCart)
  await cartModel.updateOne(
    {
      user: userId,
      products: {
        $elemMatch: {
            productId, size
        }
      }
    },
    {
      $inc: { "products.$.quantity": -quantity }
    }
  );

  return res.status(200).json({ message: "Product quantity decreased" });
};


export const removeCartProductController = async (req, res) => {
    const { productId, size } = req.body;
    
    const { userId } = req.user;

    const cart = await cartModel.findOne({
        user: userId
    })

    if(!cart){
        return res.status(404).json({
            message: "Invalid Cart"
        })
    }

    const productIsInCart = cart.products.find(p => (p.productId.toString() === productId) && (p.size === size))

    if(!productIsInCart){
        return res.status(404).json({
            message: "Product is not found"
        })
    }

    await cartModel.updateOne({
        user: userId,
    }, {
        $pull: {
            products: {
                productId,
                size
            }
        }
    })

    return res.status(200).json({
        mesage: "Product Removed Succefully"
    })
}