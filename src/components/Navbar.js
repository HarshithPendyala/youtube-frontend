import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faVideoCamera,
	faCircleUser,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const [searchRef, setSearchRef] = useState("");

	const handleSideBarToggle = () => {
		dispatch(toggleSideBar());
	};

	const getSearchSuggestions = async () => {
		const data = await fetch(
			process.env.REACT_APP_BACKEND_URL + "/search/" + searchRef
		);
		const jsonData = await data.json();
		console.log(jsonData);
	};

	useEffect(() => {
		const timer = setTimeout(() => getSearchSuggestions(), 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchRef]);
	return (
		<div className="grid grid-flow-col items-center ">
			<div className="flex col-span-1 items-center px-2">
				<FontAwesomeIcon
					icon={faBars}
					className="cursor-pointer px-4"
					onClick={handleSideBarToggle}
					size="xl"
				/>
				<a href="/">
					<img
						className="w-40 h-24 py-2 cursor-pointer"
						alt="youtube-icon"
						src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
					/>
				</a>
			</div>
			<div className="col-span-10 pl-16 flex">
				<input
					type="text"
					placeholder="search"
					className="w-6/12 rounded-l-full h-10 py-2 px-4  bg-stone-700 focus:outline-none border border-stone-500 focus:border-blue-500 placeholder-stone-200 placeholder-"
					onChange={(e) => setSearchRef(e.target.value)}
					value={searchRef}
				/>
				<img
					src="https://www.freeiconspng.com/uploads/search-icon-png-2.png"
					className="w-10 h-10 p-2 bg-stone-700 rounded-r-full border border-stone-500 cursor-pointer"
				/>
			</div>
			<div className="col-span-1">
				<FontAwesomeIcon
					icon={faVideoCamera}
					className="text-stone-300 py-2 px-4 cursor-pointer hover:bg-stone-600 hover:rounded-full"
					size="xl"
				/>
				<FontAwesomeIcon
					icon={faBell}
					className="text-stone-300 py-2 px-4 cursor-pointer hover:bg-stone-600 hover:rounded-full"
					size="xl"
				/>
				<FontAwesomeIcon
					icon={faCircleUser}
					className="text-stone-300 py-2 px-4 cursor-pointer"
					size="2xl"
				/>
			</div>
		</div>
	);
};

export default Navbar;
