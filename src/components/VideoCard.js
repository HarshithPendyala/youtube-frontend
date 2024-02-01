import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoCard = ({ video }) => {
	return (
		<div className="text-white py-2 m-2 ">
			<div>
				<img
					alt={video.snippet?.title}
					src={video.snippet?.thumbnails?.medium?.url}
					className="rounded-xl cursor-pointer w-[480px] h-[300px] "
				/>
				<div>{video.contentDetails.duration}</div>
			</div>
			<div className="flex my-2">
				<div className="mx-3">
					<FontAwesomeIcon
						icon={faCircleUser}
						size="3x"
						className="text-stone-500"
					/>
				</div>
				<div className="flex flex-col gap-0.5">
					<h1 className="text-xl max-w-[400px] font-bold text-stone-200 cursor-pointer hover:text-stone-100">
						{video.snippet?.title}
					</h1>
					<p className="text-stone-200 text-md font-semibold cursor-pointer hover:text-stone-100">
						{video.snippet?.channelTitle}
					</p>
					<p className="text-stone-200 text-md">
						{Math.round((video.statistics?.viewCount / 100000) * 10) / 10}M
						views
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
