import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
export const store = configureStore({
    reducer : {
        [userReducer.name] : userReducer
    }
})
export type IRootState = ReturnType<typeof store.getState>