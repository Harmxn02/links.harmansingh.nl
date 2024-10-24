"use client";

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const IntroAnimation = ({ onEnd }) => {
	const [shrinkText, setShrinkText] = useState(false);
	const [moveOut, setMoveOut] = useState(false);

	useEffect(() => {
		const shrinkText = setTimeout(() => {
			setShrinkText(true); // Shrink the text
		}, 1500);

		const moveOffScreen = setTimeout(() => {
			setMoveOut(true); // Move the text off screen
		}, 2500);

		const removeFromDOM = setTimeout(() => {
			onEnd(); // Remove the intro animation from the DOM
		}, 3500);

		return () => {
			clearTimeout(shrinkText);
			clearTimeout(moveOffScreen);
			clearTimeout(removeFromDOM);
		};
	}, [onEnd]);

	return (
		<div>
			<div className={`bg-black min-h-screen flex justify-center items-center transition-all duration-1000 ${moveOut ? "-translate-y-full" : "items-center"}`}>
				<div className={`flex items-end absolute space-x-1 md:space-x-2 transition-all duration-1000 ${shrinkText ? "transform scale-50" : ""}`}>
					<h1 className="tracking-tighter md:tracking-tight text-5xl md:text-9xl text-white font-semibold">
						<Typewriter words={["Harman."]} loop={false} cursor={false} cursorStyle="_" typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default IntroAnimation;
