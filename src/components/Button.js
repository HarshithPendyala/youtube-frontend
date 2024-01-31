import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className="bg-stone-600 px-6 py-2 m-2 rounded-xl text-lg font-semibold">
				{name}
			</button>
		</div>
	);
};

export default Button;
