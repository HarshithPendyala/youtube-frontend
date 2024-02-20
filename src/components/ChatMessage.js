import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center shadow-md m-1">
			<FontAwesomeIcon
				icon={faCircleUser}
				className="text-stone-300 py-2 px-1 cursor-pointer"
				size="3x"
			/>
			<div className="items-center py-1 px-2 flex gap-2">
				<p className="font-bold text-lg">{name}</p>
				<p className="font-semibold text-md"> {message}</p>
			</div>
		</div>
	);
};

export default ChatMessage;
