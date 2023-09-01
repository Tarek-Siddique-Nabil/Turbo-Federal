import React from "react";
import aiImage from "../../../assets/ai.webp";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <main className="grid md:grid-cols-2 grid-cols-1  justify-center md:justify-between gap-5 lg:px-16 md:px-10 px-5 md:py-10 py-4">
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold"
        >
          <p>
            Accelerating <span className="text-blue-700">✸</span>{" "}
          </p>
          <p className="flex items-center gap-1">
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
          className="order-last md:order-none flex justify-center md:justify-end"
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
        >
          <p className="text-lg">
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
            whileHover={{ width: "300px" }}
            style={{ boxShadow: "10px 10px  black  " }}
            className="year-box -translate-x-3 bg-[#050757]"
          >
            2020
          </motion.button>

          <motion.button
            whileHover={{ width: "300px" }}
            style={{ boxShadow: "7px 7px 1px 1px black " }}
            className="year-box transform-gpu z-50  shadow-gray-800 bg-[#BF3B41]"
          >
            2021
          </motion.button>
        </motion.div>
      </main>
      <section className="flex flex-wrap justify-center md:justify-between gap-4 lg:px-16 md:px-10 px-5 md:py-10 py-4">
        <div className="md:w-1/2 flex flex-wrap gap-5 justify-start">
          <button className="hero-btn">Contact Us</button>
          <button className="hero-btn">News letter</button>
          <button className="hero-btn">Twitter</button>
          <motion.button className="group relative w-[150px] h-10 bg-violet-600 text-white rounded-3xl ">
            <span className="w-7 h-7 top-1/2 right-2 group-focus:w-8/12 -translate-y-1/2 absolute rounded-full transition-all duration-150 ease-in-out bg-gray-200">
              <span className="group-focus:flex items-center justify-center hidden text-black text-xs transition-all duration-150 delay-100 ease-in-out w-full h-full">
                WE ARE HIRING!
              </span>
            </span>
          </motion.button>
        </div>

        <div className="md:w-1/2">
          <p className="flex justify-start md:justify-end text-3xl">
            Next-Gen AI <span className="text-blue-800">✸</span> services
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
