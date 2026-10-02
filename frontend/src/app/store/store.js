import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../features/auth/state/authSlice.jsx'
import allProductsReducer from '../../shared/state/productSlice.jsx'
import cartReducer from '../../features/cart/state/cartSlice.jsx'

const store = configureStore({
    reducer: {
        auth: authReducer,
        allProduct: allProductsReducer,
        cart: cartReducer
    }
})

export default store