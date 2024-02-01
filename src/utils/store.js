import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./sideBarSlice";
import videoList from "./videoListSlice";

const store = configureStore({
	reducer: {
		sideBar: sideBar,
		videoList: videoList,
	},
});

export default store;
