import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./sideBarSlice";
import videoList from "./videoListSlice";
import searchCache from "./searchSlice";

const store = configureStore({
	reducer: {
		sideBar: sideBar,
		videoList: videoList,
		searchCache: searchCache,
	},
});

export default store;
