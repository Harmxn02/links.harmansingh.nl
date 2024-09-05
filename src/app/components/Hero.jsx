import React from "react";

const TopLogo = () => {
	return (
		<div className="max-w-fit flex items-end space-x-1">
			<h1 className="text-2xl md:text-3xl text-white font-semibold">
				Harman
			</h1>
			<div className="w-1 mb-[7.5px] aspect-square bg-white"></div>
		</div>
	);
};

const CTA = ({ content, url }) => {
	return (
		<button className="flex items-center gap-2 px-5 py-3 font-medium bg-white hover:bg-[#cccccc] transition-colors duration-500 text-black rounded-full">
			<a href={url} className="text-sm md:text-base">
				{content}
			</a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="size-5"
			>
				<path
					fillRule="evenodd"
					d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
					clipRule="evenodd"
				/>
			</svg>
		</button>
	);
};

const Hero = () => {
	return (
		<div className="min-h-screen max-w-screen-2xl mx-auto bg-black text-white pl-8 2xl:pl-0 pr-8 2xl:pr-0 pt-8">
			<div className="flex items-center justify-between">
				<TopLogo />
				<CTA content="Contact" url="mailto:harman.pnahal@gmail.com" />
			</div>
		</div>
	);
};

export default Hero;