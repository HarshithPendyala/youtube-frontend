import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoList = () => {
	const videos = useSelector((store) => store.videoList?.videos);
	if (videos == null) return;
	return (
		<div className="flex flex-wrap">
			{videos?.map((video) => (
				<VideoCard video={video} key={video?.id} />
			))}
		</div>
	);
};

export default VideoList;
