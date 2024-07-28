import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import signedInUserReducer from "./actUserslice"
import cartReducer from "./cartSlice"
export const store = configureStore({
    reducer : {
        userReducer : userReducer,
        signedInUserReducer : signedInUserReducer,
        cartReducer: cartReducer
    },
})
export type IRootState = ReturnType<typeof store.getState>