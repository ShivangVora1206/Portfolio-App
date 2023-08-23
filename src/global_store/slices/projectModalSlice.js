import {createSlice} from '@reduxjs/toolkit';

export const projectModalSlice = createSlice({
    name:"projectModal",
    initialState:{
        value:false,
        project:{
            "name": "",
            "description": "",
            "stack": [],
            "image":"",
            "github":""
        }
    },
    reducers:{
        toggleProjectModal:(state, action)=>{
            state.value = action.payload;
        },
        setProject:(state, action)=>{
            state.project = action.payload;
        }
    }
})

export const {toggleProjectModal, setProject} = projectModalSlice.actions;
export default projectModalSlice.reducer;