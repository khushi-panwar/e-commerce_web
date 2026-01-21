import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice"
import cartReducer from "./features/CartSlice"
import authReducer from "./features/AuthSlice"


export const store = configureStore({
    reducer: {
        product :  productReducer, 
        cart : cartReducer,
        auth : authReducer,
    }
})