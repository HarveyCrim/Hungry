import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "userSlice",
    initialState : {
        appDrawer : false
    },
    reducers : {
        setAppDrawer : (state, action) => {
            state.appDrawer = action.payload
        }
    }
})
export const {setAppDrawer} = userSlice.actions
export default userSlice.reducer