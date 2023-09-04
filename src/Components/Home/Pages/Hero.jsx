import React from "react";
import aiImage from "../../../assets/ai.webp";
import { motion } from "framer-motion";
import { useSidebar } from "../../Header/zustand";
const Hero = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <>
      <main
        className={`${
          isSidebarOpen && " -z-50"
        } grid -z-50 md:grid-cols-2 grid-cols-1   justify-center md:justify-between gap-5 lg:px-40 md:px-10 px-5 md:py-10 py-4`}
      >
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="font-Manrope text-3xl md:text-5xl lg:text-6xl font-medium -z-50"
        >
          <p>
            Accelerating <span className="text-[#050757]">✸</span>{" "}
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span>mission</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-red-600 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
            <span>success</span>
          </p>
        </motion.div>
        <motion.figure
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className=" order-last md:order-none flex justify-center md:justify-end -z-50"
        >
          <img className="base-image object-cover" src={aiImage} alt="" />
        </motion.figure>

        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="-z-50"
        >
          <p className="text-[20px] font-Manrope">
            Turbo Federal is a Top-Secret cleared trusted provider of digital
            transformation, application modernization, cybersecurity, training,
            and program management/PMO services to federal government customers.
            Leveraging Agile and DevSecOps best practices specifically tailored
            for the Federal government, we are adept at increasing efficiencies,
            accelerating delivery, and improving quality so you can meet your
            mission objectives.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="hidden md:flex flex-col items-end gap-1"
        >
          <motion.button
            whileHover={{ width: "350px" }}
            style={{ boxShadow: "10px 10px  black  " }}
            className="year-box font-Manrope  bg-[#050757]"
          >
            AI
          </motion.button>

          <motion.button
            whileHover={{ width: "350px" }}
            style={{ boxShadow: "7px 7px 1px 1px black " }}
            className="year-box   transform-gpu z-50  shadow-gray-800 bg-[#BF3B41]"
          >
            IT
          </motion.button>
        </motion.div>
      </main>
      <section className=" lg:px-40 md:px-10 px-5 md:py-10 py-4">
        <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-0 lg:gap-0 md:justify-between">
          <div className="md:w-1/2 flex flex-wrap  gap-4 justify-center md:justify-start">
            <button className="hero-btn">Contact Us</button>
            <button className="hero-btn">News letter</button>
            <button className="hero-btn">Twitter</button>
            <motion.button
              className={`${
                isSidebarOpen && "-z-50"
              } relative lg:ml-12 group  w-[150px] h-10 bg-[#050757] text-white rounded-3xl `}
            >
              <span className="w-7 h-7 top-1/2 right-2 group-focus:w-8/12 -translate-y-1/2 absolute rounded-full transition-all duration-150 ease-in-out bg-gray-200">
                <span className="capitalize group-focus:flex items-center justify-center hidden text-black text-xs transition-all duration-150 delay-100 ease-in-out w-full h-full">
                  We are Hiring
                </span>
              </span>
            </motion.button>
          </div>

          <div className="md:w-1/2 ">
            <p className="flex justify-start md:justify-end text-4xl">
              Next-Gen AI <span className="text-[#050757]">✸ </span> Services
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
