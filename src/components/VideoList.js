import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoList = () => {
	const videos = useSelector((store) => store.videoList?.videos);
	if (videos == null) return;
	return (
		<div className=" flex flex-wrap">
			{videos?.map((video) => (
				<Link to={"/watch?v=" + video?.id} key={video?.id}>
					<VideoCard video={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoList;
