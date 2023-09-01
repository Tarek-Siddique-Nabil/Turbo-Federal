import React from "react";
import ChatSvg from "../../../libs/svg/ChatSvg";
import { delay, motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <section className="lg:px-40 md:px-10 px-5 md:py-32 py-4">
        <hr className="border border-violet-500 my-5" />
        <motion.div
          initial={{ opacity: 0.75, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="flex flex-col items-center md:gap-10 gap-7 px-48"
        >
          <p className="text-4xl lg:text-6xl text-[#373ae4] capitalize">
            Our Work
          </p>
          <p className="lg:text-[45px] text-3xl">interactive experiences</p>
          <p className="font-Manrope text-xl text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className="flex lg:flex-row flex-col-reverse justify-center gap-10 items-center bg-black px-4 py-5 md:py-0"
      >
        <div className="">
          <ChatSvg />
        </div>
        <div className="w-1/2  lg:text-end md:text-end text-center text-white flex flex-col gap-5">
          <p className="text-4xl lg:text-6xl">Better company</p>
          <p className="text-3xl lg:text-5xl text-violet-800">insights</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minimveniam,si.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
