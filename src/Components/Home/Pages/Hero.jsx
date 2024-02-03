import React from "react";
import { motion } from "framer-motion";
import { useSidebar } from "../../Header/zustand";
import { Link } from "react-router-dom";
import { magic_wand, techPerson } from "../../../assets/image";
import CountUp from "react-countup";
import DownlaodButton from "../../../libs/ui/DownlaodButton";
const Hero = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <main className="flex flex-col lg:gap-14 gap-5 lg:px-40 md:px-10 px-5 md:py-10">
      {/* section One */}
      <section className=" flex xl:flex-row flex-col xl:justify-between xl:items-center md:items-center items-center justify-center gap-5 xl:gap-0 mt-10 md:mt-0">
        {/* div one */}
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className={`${
            isSidebarOpen ? "-z-50" : "z-0"
          } flex flex-col lg:justify-center lg:items-start justify-center items-center lg:gap-5 gap-3  xl:w-1/2 `}
        >
          <p className="lg:text-4xl md:text-xl  text-3xl text-center md:text-start font-Manrope md:font-semibold font-bold  ">
            AI, IT and Management Consulting to:{" "}
          </p>{" "}
          <ul className="lg:text-2xl md:text-start text-center text-lg font-semibold leading-10 font-Manrope list-inside lg:space-y-5 space-y-3 ">
            <li>
              🚀 Increase Employee Productivity by{" "}
              <span className="text-red-600 font-semibold">10x</span>
            </li>
            <li>💰 Lower Costs</li>
            <li>🎯 Accelerate Mission Objectives</li>
            <li>💡 Extract Knowledge & Key Insights</li>
          </ul>
          <Link
            to="/solutions"
            className="bg-black hover:bg-violet-700 text-white font-Manrope w-52  p-3 my-3 rounded-2xl   text-lg flex justify-center items-center gap-2 group transition-all ease-in-out duration-150"
          >
            {" "}
            Explore Solutions{" "}
            <img
              src={magic_wand}
              className="w-6 h-6 group-hover:scale-125 "
              alt=""
            />
          </Link>
          <Link
            to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
            target="_blank"
            className={`lg:hidden bg-black text-white hover:bg-violet-700  font-Manrope p-3  rounded-2xl  text-lg   transition-all ease-in-out duration-150`}
          >
            {" "}
            Request Demo 🤯
          </Link>
          <Link
            to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
            target="_blank"
            className={`lg:hidden bg-black text-white hover:bg-violet-700  font-Manrope p-3  rounded-2xl  text-lg   transition-all ease-in-out duration-150`}
          >
            {" "}
            Assess my AI Readiness 📋
          </Link>
          <Link
            to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
            target="_blank"
            className={`lg:hidden bg-black text-white hover:bg-violet-700  font-Manrope p-3 rounded-2xl  text-lg   transition-all ease-in-out duration-150`}
          >
            {" "}
            Questions❓
          </Link>
        </motion.div>

        {/* div two*/}

        <motion.div
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className={`${
            isSidebarOpen ? "-z-50" : "z-0"
          } flex lg:justify-end lg:items-end justify-center items-center xl:w-1/2 w-full   `}
        >
          <iframe
            src="https://player.vimeo.com/video/876921474?h=d5916c4221&color=ff9933&title=0&byline=0&portrait=0"
            height="420"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className={`${
              isSidebarOpen ? "-z-50" : "z-0"
            } xl:w-fit w-full aspect-video `}
          ></iframe>
        </motion.div>
      </section>

      {/* section two */}
      <section>
        <div className="flex flex-col md:flex-row text-center justify-center items-center px-5 lg:col-span-2 gap-9 md:gap-0 ">
          <Count
            number="150"
            duration="5"
            sign="+"
            label="Gen-AI project integrations"
          />
          <Count
            number="200"
            duration="7"
            sign="k+"
            label="User prompts processed"
          />
          <Count
            number="2"
            duration="5"
            sign="M+"
            label="Records Prcessed by AI"
          />
          <Count
            number="20"
            duration="5"
            sign="+"
            label="Gen-AI Engineers & Developers"
          />
        </div>
      </section>
      {/* section three */}
      <section>
        <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-0 lg:gap-0 md:justify-between">
          <div className="md:w-1/2 flex flex-wrap  gap-2 justify-center md:justify-start">
            <a href={`mailto:info@turbofederal.com`} className="hero-btn">
              Contact Us
            </a>
            <DownlaodButton />
          </div>

          <div className="md:w-1/2 -z-50">
            <p className="flex justify-start md:justify-end text-2xl md:text-4xl">
              Next-Gen AI
              <span className="text-[#050757]">✸ </span>
              Services
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

const Count = ({ ...props }) => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-3
    "
    >
      <p className="lg:text-6xl text-5xl  font-bold text-red-600">
        <CountUp start={0} end={props?.number} duration={props?.duration} />
        {props.sign}
      </p>
      <p className="text-xl lg:text-2xl font-normal text-gray-800 font-Manrope capitalize">
        {props.label}
      </p>
    </div>
  );
};
