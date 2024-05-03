import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-[100vh] flex bg-blue-50">
      <div className="hero-left flex-1 flex flex-col justify-center gap-4 pl-10">
        <h2 className="font-bold text-lg">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon flex items-center gap-4">
            <p className="font-bold text-5xl">new</p>
            <img src={hand_icon} alt="" className="w-auto h-10" />
          </div>
          <p className="font-bold text-5xl">collection</p>
          <p className="font-bold text-5xl">for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-5 rounded-3xl w-52 h-10 bg-red-500">
          <div className="rounded-2xl flex justify-center items-center font-semibold text-lg">
            Latest Collection
          </div>
          <img src={arrow_icon} alt="" className="" />
        </div>
      </div>
      <div className="hero-right flex-1 flex items-center justify-center">
        <img src={hero_image} alt="" className=" " />
      </div>
    </div>
  );
};

export default Hero;
