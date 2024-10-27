import React from "react";

interface HeroType {
  heroUrl: string;
  heroText?: string;
}

const Hero = ({ heroUrl, heroText }: HeroType) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroUrl})`,
    with:'full',
    backgroundSize: "cover",     
    //\backgroundPosition: "center", 
    // width: '100%',                 
    // height: '100%',
    zIndex: 1,
  };

  return (
    <div className="h-full w-full relative">
    <div
      style={backgroundImageStyle}
      className="opacity-90 h-[350px] w-full relative bg-no-repeat"
    >
      <div className="lg:px-[190px] mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fde68a]">
        {/* Center the text horizontally and vertically */}
        <h1 className="text-5xl font-bold">{heroText}</h1>
        {/* Add any additional text or elements as needed */}
      </div>
      <div className="jumbotron-background-overlay"></div>
    </div>
  </div>
  );
};

export default Hero;
