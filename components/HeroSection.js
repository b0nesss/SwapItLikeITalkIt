import React from "react";

import SwapComponent from "./SwapComponent";
const HeroSection = () => {
  return (
    <section className="bg-[#1A1A1A] text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            SwapIt
            {""} <span className="text-[#7765F3]">LikeITalkIt</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Swap, trade, all within a few clicks...
            <br className="hidden md:inline lg:hidden" />
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#7765F3] text-gray-900"
            >
              Get Started
            </a>

            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded border-gray-100"
            >
              Swap ERC20
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">

          <SwapComponent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
