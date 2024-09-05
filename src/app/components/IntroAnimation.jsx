"use client";

import React, { useState, useEffect } from "react";

const IntroAnimation = () => {
	const [showFirstDiv, setShowFirstDiv] = useState(true);
	const [shrinkText, setShrinkText] = useState(false);
	const [moveOut, setMoveOut] = useState(false);

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setShowFirstDiv(false); // Switch divs
		}, 500); // 0.5 seconds delay to switch divs

		const timer2 = setTimeout(() => {
			setShrinkText(true); // Shrink the text
		}, 1000); // After switching, shrink the text after an additional 0.5 seconds

		const timer3 = setTimeout(() => {
			setMoveOut(true); // Move the text off screen
		}, 2000); // After shrinking, move the text off screen after an additional 1 second

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
		};
	}, []);

	return (
		<div>
			{showFirstDiv ? (
				<div className="bg-white min-h-screen flex justify-center items-center">
					<div className="flex items-end absolute space-x-2">
						<h1 className="text-9xl text-black font-semibold">
							Harman
						</h1>
						<div className="w-3 mb-[18px] aspect-square bg-black"></div>
					</div>
				</div>
			) : (
				<div
					className={`bg-black min-h-screen flex justify-center items-center transition-all duration-1000 ${
						moveOut ? "-translate-y-full" : "items-center"
					}`}
				>
					<div
						className={`flex items-end absolute space-x-2 transition-all duration-1000 ${
							shrinkText ? "transform scale-50" : ""
						}`}
					>
						<h1 className="text-9xl text-white font-semibold">
							Harman
						</h1>
						<div className="w-3 mb-[18px] aspect-square bg-white"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default IntroAnimation;
