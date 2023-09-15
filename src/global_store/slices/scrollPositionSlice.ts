import { createSlice } from "@reduxjs/toolkit";

export const scrollPositionSlice = createSlice({
    name:"scrollPosition",
    initialState:{
        value:0
    },
    reducers:{
        updateScrollPosition:(state, action)=>{
            state.value = action.payload
        }
    }
})

export const {updateScrollPosition} = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;