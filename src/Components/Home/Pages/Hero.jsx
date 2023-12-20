import React, { useEffect, useRef, useState } from "react";
import aiImage from "../../../assets/ai.webp";
import { motion } from "framer-motion";
import { useSidebar } from "../../Header/zustand";
import { Link } from "react-router-dom";
import { magic_wand, techPerson } from "../../../assets/image";
import CountUp from "react-countup";
const Hero = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <main
        className={`${
          isSidebarOpen ? "-z-50" : "z-0"
        } grid  md:grid-cols-2 grid-cols-1 items-center  justify-center md:justify-between gap-14 lg:px-40 md:px-10 px-5 md:py-10 py-4`}
      >
        <div className="flex flex-col md:flex-row text-center justify-center items-center px-5 lg:col-span-2 gap-9 md:gap-0 ">
          <Count
            number="130"
            duration="5"
            sign="+"
            label="Gen-AI project integrations"
          />
          <Count
            number="200"
            duration="7"
            sign="k+"
            label="Gen-AI user prompts processed"
          />
          <Count
            number="20"
            duration="5"
            sign="+"
            label="Gen-AI Engineers & Developers"
          />
          <Count
            number="2"
            duration="5"
            sign="M+"
            label="Records Prcessed by AI"
          />
        </div>
        {/* <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className={`font-Manrope text-5xl md:text-5xl lg:text-[75px] font-medium ${
            isSidebarOpen ? "-z-50" : "z-0"
          }`}
        >
          <p className="flex items-center ">
            Accelerating{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 lg:w-24 lg:h-24 h-10 text-red-600 mt-2 animation-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>{" "}
          </p>
          <div className="flex flex-wrap items-center gap-1 ">
            <span>Mission</span>
            <span className="text-[#050757] ">&#10040;</span>
            <span>Success</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3.5">
              <Link
                to="/solutions"
                className="bg-black hover:bg-violet-700 text-white font-Manrope w-52  p-3 rounded-2xl mt-6 md:mt-10  text-lg flex justify-center items-center gap-2 group transition-all ease-in-out duration-150"
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
                className="bg-black hover:bg-violet-700 text-white font-Manrope  p-3 rounded-2xl mt-6 md:mt-10  text-lg  gap-2 group transition-all ease-in-out duration-150"
              >
                {" "}
                Request Demo 🤯
              </Link>
            </div>
            <div className="flex gap-3">
              <Link
                to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
                target="_blank"
                className="bg-black hover:bg-violet-700 text-white font-Manrope  p-3 rounded-2xl   text-lg  group transition-all ease-in-out duration-150"
              >
                {" "}
                Assess my AI Readiness 📋
              </Link>
              <Link
                to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
                target="_blank"
                className="bg-black hover:bg-violet-700 text-white font-Manrope  p-3 rounded-2xl  text-lg   group transition-all ease-in-out duration-150"
              >
                {" "}
                Questions❓
              </Link>
            </div>
          </div>
        </motion.div> */}

        {/* <motion.figure
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className=" order-last md:order-none flex md:flex-row flex-col gap-2 items-center justify-center md:justify-end -z-50"
        >
          <img
            className="base-image-1 object-cover rounded-tr-[50px] rounded-bl-[50px]"
            src={techPerson}
            loading="lazy"
          />
          <img
            className="base-image object-cover rounded-tl-[50px] rounded-br-[50px]"
            src={aiImage}
            loading="lazy"
            alt=""
          />
        </motion.figure> */}

        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className={`${
            isSidebarOpen ? "-z-50" : ""
          } flex flex-col justify-center items-center md:justify-start md:items-start gap-5   `}
        >
          <Link
            to="/solutions"
            className="bg-black hover:bg-violet-700 text-white font-Manrope w-52  p-3 lg:my-5 my-3 rounded-2xl mt-6 md:mt-10  text-lg flex justify-center items-center gap-2 group transition-all ease-in-out duration-150"
          >
            {" "}
            Explore Solutions{" "}
            <img
              src={magic_wand}
              className="w-6 h-6 group-hover:scale-125 "
              alt=""
            />
          </Link>
          <p className=" font-Manrope font-bold flex flex-col">
            <span className="lg:text-5xl text-3xl text-center ">
              AI, IT and Management Consulting to :{" "}
            </span>{" "}
          </p>
          <ul className="lg:text-2xl text-lg font-semibold leading-10 font-Manrope list-inside lg:space-y-5 space-y-3 ">
            <li>
              🚀 Increase Employee Productivity by{" "}
              <span className="text-red-600 font-semibold">10x</span>
            </li>
            <li>💰 Lower Costs</li>
            <li>🎯 Accelerate Mission Objectives</li>
            <li>💡 Extract Knowledge & Key Insights</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className={`${
            isSidebarOpen ? "-z-50" : ""
          } flex relative justify-center items-center md:justify-end md:items-end  `}
        >
          <iframe
            src="https://player.vimeo.com/video/876921474?h=d5916c4221&color=ff9933&title=0&byline=0&portrait=0"
            width="700"
            height="320"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className={`${isSidebarOpen ? "-z-50" : "z-0"} `}
          ></iframe>
        </motion.div>
      </main>
      {/* //number list */}

      <section className=" lg:px-40 md:px-10 px-5 md:py-10 py-4 ">
        <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-0 lg:gap-0 md:justify-between">
          <div className="md:w-1/2 flex flex-wrap  gap-2 justify-center md:justify-start">
            <a href={`mailto:info@turbofederal.com`} className="hero-btn">
              Contact Us
            </a>
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
    </>
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
      <p className="text-2xl lg:text-4xl font-normal text-gray-800 font-Manrope capitalize">
        {props.label}
      </p>
    </div>
  );
};
