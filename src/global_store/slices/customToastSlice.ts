import { createSlice } from "@reduxjs/toolkit";
import { customToastProps } from "../../config";
const initialState: customToastProps = {
    visible: false,
	message: "",
	timeout: 2000,
	type: "success",
};

const customToastSlice = createSlice({
	name: "customToast",
	initialState,
	reducers: {
		showCustomToast: (state, action) => {
            state.visible = true;
			state.message = action.payload.message;
			state.timeout = action.payload.timeout;
			state.type = action.payload.type;
		},
        hideCustomToast: (state) => {
            state.visible = false;
        }
	},
});

export const { showCustomToast, hideCustomToast } = customToastSlice.actions;

export default customToastSlice.reducer;
