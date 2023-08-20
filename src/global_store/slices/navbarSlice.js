import {createSlice} from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name:'navbar',
    initialState:{
        value:{mode:false,  visibility:false}
    },
    reducers:{
        toggleMode: (state) =>{

            state.value.mode = !state.value.mode
        },

        toggleVisibility: (state, action) => {

            state.value.visibility = action.payload
        }
    }
})

export const {toggleMode, toggleScrolled, toggleVisibility} = navbarSlice.actions

export default navbarSlice.reducer;