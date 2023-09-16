import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:false
}

const blackBarSlice = createSlice({
    name: "blackBar",
    initialState,
    reducers: {
        toggleBlackBar: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { toggleBlackBar } = blackBarSlice.actions

export default blackBarSlice.reducer