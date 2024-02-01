import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
	const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);
	return (
		<div className="flex">
			{isSideBarOpen && <SideBar />}
			<Outlet />
		</div>
	);
};

export default Body;
