import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const commentData = [
	{
		name: "Harshith Pendyala",
		comment: "Lorem ipst, this is a youtube video comment",
		replies: [],
	},
	{
		name: "Harshith Pendyala",
		comment: "Lorem ipst, this is a youtube video comment",
		replies: [],
	},
	{
		name: "Harshith Pendyala",
		comment: "Lorem ipst, this is a youtube video comment",
		replies: [
			{
				name: "Harshith Pendyala",
				comment: "Lorem ipst, this is a youtube video comment",
				replies: [],
			},
			{
				name: "Harshith Pendyala",
				comment: "Lorem ipst, this is a youtube video comment",
				replies: [],
			},
			{
				name: "Harshith Pendyala",
				comment: "Lorem ipst, this is a youtube video comment",
				replies: [
					{
						name: "Harshith Pendyala",
						comment: "Lorem ipst, this is a youtube video comment",
						replies: [],
					},
					{
						name: "Harshith Pendyala",
						comment: "Lorem ipst, this is a youtube video comment",
						replies: [],
					},
					{
						name: "Harshith Pendyala",
						comment: "Lorem ipst, this is a youtube video comment",
						replies: [],
					},
				],
			},
		],
	},
	{
		name: "Harshith Pendyala",
		comment: "Lorem ipst, this is a youtube video comment",
		replies: [
			{
				name: "Harshith Pendyala",
				comment: "Lorem ipst, this is a youtube video comment",
				replies: [],
			},
			{
				name: "Harshith Pendyala",
				comment: "Lorem ipst, this is a youtube video comment",
				replies: [],
			},
		],
	},
	{
		name: "Harshith Pendyala",
		comment: "Lorem ipst, this is a youtube video comment",
		replies: [],
	},
];

const Comment = ({ data }) => {
	return (
		<>
			<div className="flex m-1 bg-stone-700 p-2 rounded-md">
				<div>
					<FontAwesomeIcon
						icon={faCircleUser}
						className="text-stone-300 py-2 px-4 cursor-pointer"
						size="3x"
					/>
				</div>
				<div>
					<h1 className="text-xl font-bold text-stone-100">{data.name}</h1>
					<p className="text-lg font-semibold text-stone-300">{data.comment}</p>
				</div>
			</div>
		</>
	);
};

const CommentList = ({ comments }) => (
	<>
		{comments.map((comment, i) => (
			<div key={i}>
				<Comment data={comment} />
				{comment.replies && (
					<div className="ml-6 border-l border-l-stone-300 pl-4">
						<CommentList comments={comment.replies} />
					</div>
				)}
			</div>
		))}
	</>
);
const VideoComments = () => {
	return (
		<div>
			<h1 className="text-2xl py-2">Comments</h1>
			<CommentList comments={commentData} />
		</div>
	);
};

export default VideoComments;
