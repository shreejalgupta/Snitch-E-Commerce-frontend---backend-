import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "all roducts",
    initialState: {
        products: null
    },
    reducers: {
        addAllProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { addAllProducts } = productSlice.actions;
export default productSlice.reducer