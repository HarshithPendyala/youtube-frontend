import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate } from "../utils/helper";

const LiveChat = () => {
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);
	const [liveMsg, setLiveMsg] = useState("");
	useEffect(() => {
		//API Polling
		const i = setInterval(() => {
			dispatch(
				addMessage({
					name: randomNameGenerate(),
					message: "This is a test message 🙋‍♂️👋",
				})
			);
		}, 4000);

		return () => clearInterval(i);
	}, []);
	return (
		<>
			<div className="p-3 border border-stone-400 rounded-md w-full mx-1 bg-stone-700 h-[650px] overflow-y-scroll flex flex-col-reverse">
				{chatMessages.map((msg, i) => (
					<ChatMessage key={i} name={msg.name} message={msg.message} />
				))}
			</div>
			<form
				className="p-1 mx-1"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessage({
							name: "Harshith",
							message: liveMsg,
						})
					);
					setLiveMsg("");
				}}
			>
				<input
					type="text"
					placeholder="enter a message"
					className="w-5/6 p-2 rounded-l-md bg-stone-600 focus:outline-none border-b border-b-stone-300"
					value={liveMsg}
					onChange={(e) => setLiveMsg(e.target.value)}
				/>
				<button className="w-1/6 cursor-pointer bg-stone-600 px-2 py-2 rounded-r-md font-bold text-stone-300 border-b border-b-stone-300">
					Send
				</button>
			</form>
		</>
	);
};

export default LiveChat;
