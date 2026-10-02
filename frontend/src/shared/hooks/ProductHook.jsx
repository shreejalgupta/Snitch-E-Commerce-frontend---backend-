import { getAllProductApi, getSingleProduct } from "../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../state/productSlice";
import { addToCartApi, incItemQty } from "../../features/cart/api/cartApi";
import { useState } from "react";
import { addOneProduct, incProductQty } from "../../features/cart/state/cartSlice";
import useCart from "../../features/cart/hook/cartHook";

const productHook = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(store => store.cart)
  const [added, setAdded] = useState(false);
  const getAllProduct = async () => {
    try {
      const res = await getAllProductApi();

      dispatch(addAllProducts(res.data.product));
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    const res = await getSingleProduct(id);
    return res.data;
  };
  
  const handleAdd = async (
      e,
      { id, size: selectedSize, title, price, image, onAddToCart, stock },
    ) => {
        e.stopPropagation();
        setAdded(true);
        const isInCart = cart?.find(p => p?.productId === id && p?.size === selectedSize)

        if(isInCart){
            if(isInCart.quantity === stock){
              return
            } 
            await incItemQty({ productId: id, size: selectedSize, quantity: 1 });
        
            dispatch(incProductQty({productId: id, size: selectedSize, quantity: isInCart?.quantity+1}))
            setTimeout(() => setAdded(false), 2000)
        return
    }


    await addToCartApi({
      productId: id,
      quantity: 1,
      size: selectedSize,
    });
    dispatch(
      addOneProduct({
        product: {
          title,
          price: {
            ammount: price,
          },
          images: [image],
          sizes: [stock]
        },
        productId: id,
        quantity: 1,
        size: selectedSize,
      }),
    );
    if (onAddToCart) onAddToCart({ title, price, size: selectedSize });
    setTimeout(() => setAdded(false), 2000)
  };

  return {
    getAllProduct,
    getProduct,
    added,
    handleAdd,
    setAdded
  };
};

export default productHook;
