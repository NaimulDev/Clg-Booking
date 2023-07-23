// eslint-disable-next-line no-unused-vars
import React from "react";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" className="w-full" />
      <div className="absolute right-4 md:right-12 lg:right-72 top-4 md:top-8 lg:top-24">
        <h2 className="text-lg md:text-xl lg:text-2xl">Online Booking system for</h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mt-2">Colleges</h1>
        <div className="mt-6">
          <button className="bg-red-600 text-base md:text-lg lg:text-xl font-bold px-6 py-3 rounded-full mr-4">
            Get a Free Account
          </button>
          <button className="bg-cyan-700 text-base md:text-lg lg:text-xl font-bold px-6 py-3 rounded-full">
            Get Inspired
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
