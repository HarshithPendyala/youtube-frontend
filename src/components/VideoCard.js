import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoCard = ({ video }) => {
	const extractTime = (duration) => {
		const matchWithHours = duration.match(/PT(\d{1,2})H(\d{1,2})M(\d{1,2})S/);
		const matchWithoutHours = duration.match(/PT(\d{1,2})M(\d{1,2})S/);
		const matchWithoutMinutes = duration.match(/PT(\d{1,2})S/);

		if (matchWithHours) {
			const hours = matchWithHours[1];
			const minutes = matchWithHours[2];
			const seconds = matchWithHours[3];

			const formattedTime = `${hours.padStart(2, "0")}:${minutes.padStart(
				2,
				"0"
			)}:${seconds.padStart(2, "0")}`;
			return formattedTime;
		} else if (matchWithoutHours) {
			const minutes = matchWithoutHours[1];
			const seconds = matchWithoutHours[2];

			const formattedTime = `${minutes.padStart(2, "0")}:${seconds.padStart(
				2,
				"0"
			)}`;
			return formattedTime;
		} else if (matchWithoutMinutes) {
			const seconds = matchWithoutMinutes[1];

			const formattedTime = `${seconds.padStart(2, "0")}`;
			return formattedTime;
		} else {
			return null;
		}
	};
	return (
		<div className="text-white py-2 m-2 ">
			<div className="relative">
				<img
					alt={video.snippet?.title}
					src={video.snippet?.thumbnails?.medium?.url}
					className="rounded-xl cursor-pointer w-[480px] h-[300px] "
				/>
				<div className="absolute bottom-0 right-2 bg-black text-stone-100 py-1 px-3 rounded-md m-1">
					{extractTime(video.contentDetails.duration)}
				</div>
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
