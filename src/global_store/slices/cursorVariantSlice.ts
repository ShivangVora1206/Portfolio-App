import { createSlice } from "@reduxjs/toolkit";

export const cursorVariantSlice = createSlice({
    name:"cursorVariant",
    initialState:{
        value:"default"
    },
    reducers:{
        updateCursorVariant:(state, action)=>{
            state.value = action.payload
        }
    }
})

export const {updateCursorVariant} = cursorVariantSlice.actions;

export default cursorVariantSlice.reducer;