import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import { useDispatch } from "react-redux";
import { addVideoList } from "../utils/videoListSlice";

const MainContainer = () => {
	const dispatch = useDispatch();
	const getPopularVideos = async () => {
		const url =
			"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=AIzaSyB65viqbBeAUUIA5CnzWLmito3y42cZz2s";
		const data = await fetch(url);
		const jsonData = await data.json();
		console.log(jsonData);
		dispatch(addVideoList(jsonData.items));
	};

	useEffect(() => {
		getPopularVideos();
	}, []);
	return (
		<div className="w-[1600px]">
			<ButtonList />
			<VideoList />
		</div>
	);
};

export default MainContainer;
