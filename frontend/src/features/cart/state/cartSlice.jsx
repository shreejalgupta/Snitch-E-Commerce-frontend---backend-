import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartValue: 0
  },
  reducers: {
    addAllProduct: (state, action) => {
      state.cart = action.payload;
    },
    addOneProduct: (state, action) => {
      if (!state.cart) {
        state.cart = [action.payload];
      } else {
        state.cart.push(action.payload);
      }
    },
    removeOneProduct: (state, action) => {
      const { productId, size } = action.payload;
      state.cart = state.cart.filter(
        (p) => !(p.productId === productId && p.size === size),
      );
    },
    setCartValue: (state, action) => {
        state.cartValue += action.payload
    },
    incProductQty: (state, action) => {
      const { productId, size, quantity } = action.payload;
      const itemIndex = state.cart.findIndex((p) => (p.productId === productId && p.size === size)
    );
    if(itemIndex != -1) {
      state.cart[itemIndex].quantity = quantity;
    }
    },
    decProductQty: (state, action) => {
      const {productId, size, quantity} = action.payload;
      const itemIndex = state.cart.findIndex((p) => (p.productId === productId && p.size === size))
      if(itemIndex != -1){
        state.cart[itemIndex].quantity = quantity
      }
    }

  },
});

export const { addAllProduct, addOneProduct, removeOneProduct, setCartValue, incProductQty, decProductQty } =
  cartSlice.actions;
export default cartSlice.reducer;
