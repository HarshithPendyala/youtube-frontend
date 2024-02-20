import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./sideBarSlice";
import videoList from "./videoListSlice";
import searchCache from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
	reducer: {
		sideBar: sideBar,
		videoList: videoList,
		searchCache: searchCache,
		chat: chatSlice,
	},
});

export default store;
