import { createSlice } from "@reduxjs/toolkit";

export const imageModalSlice = createSlice({
	name: "imageModal",
	initialState: {
		value: false,
	},
	reducers: {
		toggleImageModal: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { toggleImageModal } = imageModalSlice.actions;

export default imageModalSlice.reducer;
