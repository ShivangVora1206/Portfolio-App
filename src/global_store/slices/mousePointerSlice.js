import { createSlice } from "@reduxjs/toolkit";

export const mousePointerSlice = createSlice({
    name:"mousePointerCoord",
    initialState:{
        value:{
            x:0,
            y:0
        }
    },
    reducers:{
        updatePointerCoords:(state, action) => {
            state.value.x = action.payload.x
            state.value.y = action.payload.y
        }
    }
})

export const {updatePointerCoords} = mousePointerSlice.actions;

export default mousePointerSlice.reducer;