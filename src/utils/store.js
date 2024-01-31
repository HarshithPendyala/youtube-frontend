import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./sideBarSlice";

const store = configureStore({
	reducer: {
		sideBar: sideBar,
	},
});

export default store;
