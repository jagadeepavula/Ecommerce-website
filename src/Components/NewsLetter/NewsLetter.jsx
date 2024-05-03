import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-5/6 flex flex-col items-center justify-center m-auto mb-20">
      <h1 className="text-5xl font-bold mb-5">
        Get Exclusive Offers on your email
      </h1>
      <p className="font-normal text-2xl mb-10">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-center h-10 ">
        <input
          type="email"
          placeholder="Your Email"
          className="w-48 bg-teal-200 h-10 border-none font-xl rounded-3xl flex items-center justify-center"
        />
        <button className="w-20 h-10 cursor-pointer bg-yellow-400 rounded-3xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
