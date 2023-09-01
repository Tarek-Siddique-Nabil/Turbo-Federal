import React from "react";
import ChatSvg from "../../../libs/svg/ChatSvg";

const Work = () => {
  return (
    <>
      <section className="lg:px-16 md:px-10 px-5 md:py-10 py-4">
        <hr className="border border-violet-500 my-5" />
        <div className="flex flex-col items-center md:gap-10 gap-7">
          <p className="text-4xl text-violet-500 capitalize">Our Work</p>
          <p className="text-3xl ">interactive experiences</p>
          <p className="font-Manrope">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-10 items-center bg-black px-4 py-5 md:py-0">
        <div className="">
          <ChatSvg />
        </div>
        <div className="w-1/2 lg:text-end md:text-end text-center text-white">
          <p className="text-4xl ">Better company</p>
          <p className="text-3xl text-violet-800">insights</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minimveniam,si.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
