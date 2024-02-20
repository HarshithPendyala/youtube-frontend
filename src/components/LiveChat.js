import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
	useEffect(() => {
		//API Polling
		const i = setInterval(() => {
			console.log("API Polling");
		}, 2000);

		return () => clearInterval(i);
	}, []);
	return (
		<div className="p-3 border border-stone-400 rounded-md w-full mx-1 bg-stone-700 h-[700px] overflow-y-scroll">
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
			<ChatMessage name="Harshith" message="This is a test message" />
		</div>
	);
};

export default LiveChat;
