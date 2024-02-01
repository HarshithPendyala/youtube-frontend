import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
	name: "videoList",
	initialState: {
		videos: null,
	},
	reducers: {
		addVideoList: (state, action) => {
			state.videos = action.payload;
		},
	},
});

export const { addVideoList } = videoListSlice.actions;
export default videoListSlice.reducer;
