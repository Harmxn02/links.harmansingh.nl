"use client";

import Hero from "./components/Hero";
import IntroAnimation from "./components/IntroAnimation";

import { useState, useEffect } from "react";

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);

	// Callback to remove the intro animation from the DOM
	const handleIntroEnd = () => {
		setShowIntro(false);
	};

	return (
		<div className="bg-black text-white">
			{showIntro && <IntroAnimation onEnd={handleIntroEnd} />}
			<Hero />
		</div>
	);
}
