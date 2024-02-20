import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/sideBarSlice";
import VideoComments from "./VideoComments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [URLSearchParams, setURLSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const videoId = URLSearchParams.get("v");
	useEffect(() => {
		dispatch(closeSideBar());
	}, []);
	return (
		<div className="p-5 flex w-full">
			<div>
				<iframe
					width="1400"
					height="700"
					src={`https://www.youtube.com/embed/${videoId}?si=k3Sa2XTM-3JQRY7U&autoplay=1`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<VideoComments />
			</div>
			<div className="w-full">
				<LiveChat />
			</div>
		</div>
	);
};

export default WatchPage;
