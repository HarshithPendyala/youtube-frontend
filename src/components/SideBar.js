import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faFilm,
	faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="w-72">
			<ul className="mx-2 p-4">
				<li className="py-2 px-4 my-2 cursor-pointer hover:bg-stone-600 hover:rounded-lg">
					<FontAwesomeIcon
						icon={faHouse}
						className="text-stone-300"
						size="xl"
					/>{" "}
					<Link to={"/"}>
						<span className="font-bold text-xl pl-4 text-stone-200">
							{" "}
							Home{" "}
						</span>
					</Link>
				</li>
				<li className="py-2 px-4 cursor-pointer my-2 hover:bg-stone-600">
					<FontAwesomeIcon icon={faFilm} size="xl" className="text-stone-300" />{" "}
					<span className="font-bold text-xl pl-4 text-stone-200">
						{" "}
						Shorts{" "}
					</span>
				</li>
				<li className="py-2 px-4 cursor-pointer my-2 hover:bg-stone-600">
					<FontAwesomeIcon
						icon={faSquarePlus}
						size="xl"
						className="text-stone-300"
					/>{" "}
					<span className="font-bold text-xl pl-4 text-stone-200">
						{" "}
						Subscriptions{" "}
					</span>
				</li>
			</ul>
			<hr className="mx-2" />
		</div>
	);
};

export default SideBar;
