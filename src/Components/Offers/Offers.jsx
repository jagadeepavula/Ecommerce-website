import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers w-5/6 h-auto m-auto flex mt-20 mb-20">
      <div className="offers-left flex-1 flex flex-col justify-center space-y-3">
        <h1 className="font-bold text-5xl">Exclusive</h1>
        <h1 className="font-bold text-5xl">offers for you</h1>
        <p className="font-normal text-xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-28 h-10 rounded-2xl bg-blue-500 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-right flex items-center justify-end w-44">
        <img src={exclusive_image} alt="" className="" />
      </div>
    </div>
  );
};

export default Offers;
