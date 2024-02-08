import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";
import { useDispatch } from "react-redux";
import { addVideoList } from "../utils/videoListSlice";

const MainContainer = () => {
	const dispatch = useDispatch();
	const getPopularVideos = async () => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`;
		const data = await fetch(url);
		const jsonData = await data.json();
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
