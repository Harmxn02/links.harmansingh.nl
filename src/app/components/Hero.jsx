import React from "react";




const TopLogo = () => {
    return (
        <div className="flex items-end space-x-1">
            <h1 className="text-3xl text-white font-semibold">Harman</h1>
            <div className="w-1 mb-[7.5px] aspect-square bg-white"></div>
        </div>
    );
}






const Hero = () => {
	return (
        <div className="min-h-screen max-w-screen-xl mx-auto bg-black text-white pt-8">
            <TopLogo />
        </div>
	);
};

export default Hero;
