import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ButtonList = () => {
	const buttonList = useRef();
	const [scrollX, setScrollX] = useState(0);
	const [scrollEnd, setScrollEnd] = useState(false);
	const list = [
		"All",
		"movies that are set in future",
		"netflix teen drama",
		"brooklyn 99 bloopers",
		"john wick",
		"action-packed movies",
	];

	const handleButtonListScroll = (shift) => {
		buttonList.current.scrollLeft += shift;
		setScrollX(scrollX + shift);

		if (
			Math.floor(
				buttonList.current.scrollWidth - buttonList.current.scrollLeft
			) <= buttonList.current.offsetWidth
		) {
			setScrollEnd(true);
		} else setScrollEnd(false);
	};

	useEffect(() => {
		if (
			buttonList.current &&
			buttonList?.current?.scrollWidth === buttonList?.current?.offsetWidth
		) {
			setScrollEnd(true);
		} else setScrollEnd(false);

		return () => {};
	}, [
		buttonList.current && buttonList?.current?.scrollWidth,
		buttonList?.current?.offsetWidth,
	]);
	return (
		<div className="flex">
			<div>
				{scrollX !== 0 && (
					<button
						className="hover:bg-stone-600 mt-3 p-2 rounded-lg mr-2"
						onClick={() => handleButtonListScroll(-400)}
					>
						<FontAwesomeIcon icon={faChevronLeft} size="xl" />
					</button>
				)}
			</div>
			<div
				className="flex whitespace-nowrap overflow-x-scroll no-scrollbar scroll-smooth"
				ref={buttonList}
			>
				{list.map((item, i) => (
					<Button name={item} key={i} />
				))}
			</div>
			<div>
				{!scrollEnd && (
					<button
						className="hover:bg-stone-600 mt-3 p-2 rounded-lg ml-2"
						onClick={() => handleButtonListScroll(400)}
					>
						<FontAwesomeIcon icon={faChevronRight} size="xl" />
					</button>
				)}
			</div>
		</div>
	);
};

export default ButtonList;
