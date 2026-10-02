import { useDispatch, useSelector } from "react-redux";
import {
  addToCartApi,
  decItemQty,
  getCartApi,
  incItemQty,
  removeItemsFromCartApi,
} from "../api/cartApi";
import { addAllProduct, decProductQty, incProductQty, removeOneProduct } from "../state/cartSlice";
import { useEffect, useState } from "react";
import productHook from "../../../shared/hooks/ProductHook";

const useCart = () => {
  const dispatch = useDispatch();
  const { getProduct } = productHook();
  const [cart, setCart] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const getAllProductInCart = async () => {
    const cartItems = await getCartApi();
    setCart(cartItems.data);
    console.log(cart);
    return cartItems;
  };


  const fetchCartProducts = async () => {
    try {
      const cartIs = await Promise.all(
        cart?.map(async (c) => {
          try {
            const res = await getProduct(c.productId);
            console.log(res)
            return {
              ...res, 
              productId: c.productId,
              size: c.size, 
              quantity: c.quantity
            };
          } catch (error) {
            console.log(error);
          }
        }),
      );
      console.log(cartIs)
      dispatch(addAllProduct(cartIs));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cart?.length) {
      fetchCartProducts();
    }
  }, [cart]);

  const setCartProduct = async() => {
    try {
      const res = await getCartApi();
      console.log(res)
      dispatch(addAllProduct(res.data))

    } catch (error) {
      console.log(error)
    }
  }
  const handleRemove = async (id, size) => {
    setIsLoding(true);
    await removeItemsFromCartApi({ productId: id, size });
    dispatch(removeOneProduct({ productId: id, size }));
    setIsLoding(false)
  };

  const handleQuantity = async (id, size, quantity, stock) => {
    setIsLoding(true);
    if(quantity == stock){
      setIsLoding(false)
      return
    } 
    await incItemQty({ productId: id, size, quantity: 1 });

    dispatch(incProductQty({productId: id, size, quantity: quantity+1}))
    setIsLoding(false)
  }

  const handleQuantityDec = async (id, size, quantity) => {
    setIsLoding(true);
    if(quantity === 1) {
      setIsLoding(false)
      return
    }
    await decItemQty({productId: id, size, quantity: 1});

    dispatch(decProductQty({productId: id, size, quantity: quantity - 1}))
    setIsLoding(false)
  }


  // Cart Drawer 

  const cartIs = useSelector((store) => store.cart);
  
  const totalPrice =
    cartIs?.cart?.reduce((total, item) => {
      const price = Number(
        item.product?.price?.ammount ?? item.price?.ammount ?? 0,
      );
      return total + price * Number(item.quantity ?? 0);
    }, 0) ?? 0;
  

  // Calculations
  const bagCurrentTotal = totalPrice;
  const shippingFee =
    bagCurrentTotal >= 999 || cartIs?.cart?.length === 0 ? 0 : 149;
  const finalPayable = Math.max(
    0,
    bagCurrentTotal + shippingFee,
  );


  return {
    getAllProductInCart,
    handleRemove,
    setCartProduct,
    handleQuantity,
    handleQuantityDec,
    isLoding,
    cartIs,
    finalPayable,
    bagCurrentTotal,
    shippingFee,
    totalPrice
  };
};

export default useCart;
