import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
	const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);
	return (
		<div className="flex">
			{isSideBarOpen && <SideBar />}
			<MainContainer />
		</div>
	);
};

export default Body;
