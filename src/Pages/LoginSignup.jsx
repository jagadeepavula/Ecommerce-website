import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup flex justify-center w-full h-4/5 pt-10 bg-[#fce3fe] pb-10">
      <div className="loginsignup-container w-[580px] h-[600px] bg-white pl-10 pr-10 m-auto pt-5 pb-5">
        <h1 className="font-black text-2xl">Sign Up</h1>
        <div className="logonsignup-fields flex flex-col gap-4 mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[72px] w-full pl-5 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-[72px] w-full pl-5 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[72px] w-full pl-5 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full h-[72px] bg-red-500 cursor-pointer rounded-3xl mt-5 text-white font-semibold text-lg">
          Continue
        </button>
        <p className="loginsignup-login text-md text-gray-500">
          Already have an account? <span className="text-black">Login</span>
        </p>
        <div className="loginsignup-agree flex items-center mt-5 gap-5 ">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
