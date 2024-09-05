import React from "react";

const TopLogo = () => {
	return (
		<div className="max-w-fit flex items-end space-x-1">
			<h1 className="text-2xl md:text-3xl text-white font-semibold">
				Harman
			</h1>
			<div className="w-1 mb-[8px] md:mb-[7.5px] aspect-square bg-white"></div>
		</div>
	);
};

const CTA = ({ content, url, children }) => {
	return (
		<button className="flex items-center gap-2 px-5 py-3 font-medium bg-white hover:bg-[#cccccc] transition-colors duration-500 text-black rounded-full">
			<a href={url} target="_blank" className="text-sm md:text-base">
				{content}
			</a>
			{children}
		</button>
	);
};

const Link = ({ content, url, children }) => {
	return (
		<button className="flex items-center gap-2 px-5 py-3 font-medium bg-[#101010] hover:bg-[#202020] transition-colors duration-500 text-white rounded-md">
			<a href={url} target="_blank" rel="noreferrer" className="text-sm md:text-base">
				{content}
			</a>
			{children}
		</button>
	);
};

const MainContent = () => {
	return (
		<div className="min-h-[80vh] flex flex-col justify-center space-y-8">
			<div className="w-full flex items-end space-x-2">
				<h1 className="leading-none text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] font-semibold">
					Harman <br></br> Singh
				</h1>
				{/* <div className="w-2 mb-[24px] sm:w-4 sm:mb-[14px] md:w-6 md:mb-[18px] lg:mb-[22px] xl:mb-[26px] 2xl:mb-[30px] aspect-square bg-white"></div> */}
			</div>
			<div className="flex items-baseline space-y-2 space-x-2">
				<Link content="LinkedIn" url="https://www.linkedin.com/in/harmanpnahal/"></Link>
				<Link content="GitHub" url="https://github.com/Harmxn02/"></Link>
				<Link content="Portfolio" url="https://www.harmansingh.nl"></Link>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="min-h-screen max-w-screen-2xl mx-auto bg-black text-white pl-8 2xl:pl-1 pr-8 2xl:pr-1 pt-8">
			<div className="flex items-center justify-between">
				<TopLogo />
				<CTA content="Contact" url="mailto:harman.pnahal@gmail.com">
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
				</CTA>
			</div>
			<MainContent />
		</div>
	);
};

export default Hero;
