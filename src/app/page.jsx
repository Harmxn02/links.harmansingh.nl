"use client";

import Hero from "./components/Hero";
import IntroAnimation from "./components/IntroAnimation";

import { useState } from "react";

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);
	const [showHero, setShowHero] = useState(false);

	// Callback to remove the intro animation from the DOM
	const handleIntroEnd = () => {
		setShowIntro(false);
		setShowHero(true);
	};

	return (
		<div className="bg-black text-white font-[family-name:var(--font-geist-sans)]">
			{showIntro && <IntroAnimation onEnd={handleIntroEnd} />}
			{showHero && <Hero />}
		</div>
	);
}
