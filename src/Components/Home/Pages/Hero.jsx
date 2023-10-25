import React, { useEffect, useRef, useState } from "react";
import aiImage from "../../../assets/ai.webp";
import { motion } from "framer-motion";
import { useSidebar } from "../../Header/zustand";
import { Link } from "react-router-dom";
import { magic_wand, poster, techPerson } from "../../../assets/image";
const Hero = () => {
  const { isSidebarOpen } = useSidebar();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // const videoRef = useRef();
  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (isFullscreen === true) {
  //     if (video.ended) {
  //       restartVideo();
  //     }
  //     video.play();
  //   } else if (isFullscreen === false) {
  //     video.pause();
  //   }
  //   // Function to handle full-screen change
  //   const handleFullScreenChange = () => {
  //     setIsFullscreen(
  //       !!(
  //         document.fullscreenElement ||
  //         document.mozFullScreenElement ||
  //         document.webkitFullscreenElement ||
  //         document.msFullscreenElement
  //       )
  //     );
  //   };

  //   // Add event listeners for full-screen change
  //   document.addEventListener("fullscreenchange", handleFullScreenChange);
  //   document.addEventListener("mozfullscreenchange", handleFullScreenChange);
  //   document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
  //   document.addEventListener("msfullscreenchange", handleFullScreenChange);

  //   // Cleanup on unmount
  //   return () => {
  //     document.removeEventListener("fullscreenchange", handleFullScreenChange);
  //     document.removeEventListener(
  //       "mozfullscreenchange",
  //       handleFullScreenChange
  //     );
  //     document.removeEventListener(
  //       "webkitfullscreenchange",
  //       handleFullScreenChange
  //     );
  //     document.removeEventListener(
  //       "msfullscreenchange",
  //       handleFullScreenChange
  //     );
  //   };
  // }, [videoRef, isFullscreen]);

  // const toggleFullScreen = () => {
  //   const video = videoRef.current;

  //   if (video.requestFullscreen) {
  //     video.requestFullscreen();
  //   } else if (video.mozRequestFullScreen) {
  //     video.mozRequestFullScreen();
  //   } else if (video.webkitRequestFullscreen) {
  //     video.webkitRequestFullscreen();
  //   } else if (video.msRequestFullscreen) {
  //     video.msRequestFullscreen();
  //   } else {
  //     // Fallback for browsers that don't support Fullscreen API
  //     if (isFullscreen) {
  //       // If already in fullscreen mode, exit fullscreen
  //       if (document.exitFullscreen) {
  //         document.exitFullscreen();
  //       } else if (document.mozCancelFullScreen) {
  //         document.mozCancelFullScreen();
  //       } else if (document.webkitExitFullscreen) {
  //         document.webkitExitFullscreen();
  //       } else if (document.msExitFullscreen) {
  //         document.msExitFullscreen();
  //       }
  //     } else {
  //       // If not in fullscreen mode, enter fullscreen
  //       if (video.webkitEnterFullscreen) {
  //         video.webkitEnterFullscreen();
  //       }
  //     }
  //   }
  // };
  // const restartVideo = () => {
  //   const video = videoRef.current;
  //   video.currentTime = 0; // Reset the video to the beginning
  //   video.play();
  // };
  return (
    <>
      <main
        className={`${
          isSidebarOpen && " -z-50"
        } grid  md:grid-cols-2 grid-cols-1 items-center  justify-center md:justify-between gap-14 lg:px-40 md:px-10 px-5 md:py-10 py-4`}
      >
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="font-Manrope text-5xl md:text-5xl lg:text-[75px] font-medium "
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
          <Link
            to={"/solutions"}
            className="hero-btn w-60 mt-6 md:mt-10  text-lg flex  items-center gap-2 group"
          >
            {" "}
            <img
              src={magic_wand}
              className="w-6 h-6 group-hover:scale-125 transition-all ease-in-out duration-150"
            />{" "}
            Explore Solutions{" "}
          </Link>
        </motion.div>

        <motion.figure
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
        </motion.figure>

        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="-z-50 flex flex-col gap-5"
        >
          <p className="text-[22px] md:text-[26px] font-Manrope font-bold flex flex-col">
            <span>AI & IT Transformation, Services, and Management</span>{" "}
            <span>Consulting to:</span>
          </p>
          <ul className="text-[22px] leading-10 font-Manrope list-inside ">
            <li>🚀 Increase Productivity by 10x</li>
            <li>💰 Lower Costs</li>
            <li>🎯 Accelerate Objectives</li>
            <li>💡 Extract Knowledge & Insights</li>
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
          className=" md:flex flex-col  "
        >
          <section
            className="flex justify-center items-center
          "
          >
            <iframe
              src="https://player.vimeo.com/video/876921474?h=d5916c4221&color=ff9933&title=0&byline=0&portrait=0"
              width="700"
              height="320px"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <div className="relative flex   ">
              <video
                ref={videoRef}
                width="700"
                height="700"
                controls={false}
                poster={poster}
                className={`rounded-lg scale-110 transition-all ease-in-out duration-150  aspect-video 
                  
                `}
              >
                <source
                  className="h-[300px] w-fit lg:w-[450px] "
                  src="https://player.vimeo.com/video/876921474"
                  type="video/mp4"
                />
              </video>
              <button
                className="absolute w-full h-full flex  justify-center items-center"
                style={{ zIndex: 1 }}
                onClick={() => {
                  toggleFullScreen();
                }}
              >
                {!isFullscreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-24 h-24 stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-24 h-24 stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                )}
              </button>
            </div> */}
            {/* <div className="hidden md:flex flex-col items-end gap-1 ">
              <Link to={"/services"}>
                <motion.button
                  whileHover={{ width: "300px" }}
                  style={{ boxShadow: "10px 10px  black  " }}
                  className="year-box font-Manrope  bg-[#050757]"
                >
                  AI
                </motion.button>
              </Link>
              <Link to={"/services"}>
                <motion.button
                  whileHover={{ width: "300px" }}
                  style={{ boxShadow: "7px 7px 1px 1px black " }}
                  className="year-box   transform-gpu z-50  shadow-gray-800 bg-[#BF3B41]"
                >
                  IT
                </motion.button>
              </Link>
            </div>{" "} */}
          </section>
        </motion.div>
      </main>
      <section className=" lg:px-40 md:px-10 px-5 md:py-10 py-4 ">
        <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-0 lg:gap-0 md:justify-between">
          <div className="md:w-1/2 flex flex-wrap  gap-2 justify-center md:justify-start">
            <a href={`mailto:info@turbofederal.com`} className="hero-btn">
              Contact Us
            </a>

            {/* <motion.button
              className={`${
                isSidebarOpen && "-z-50 "
              } relative lg:ml-12 group hidden sm:block   w-[150px] h-10 bg-[#050757] text-white rounded-3xl `}
            >
              <span className="w-7 h-7 top-1/2 right-2 group-focus:w-[90%] -translate-y-1/2 absolute rounded-full transition-all duration-150 ease-in-out bg-gray-200">
                <span className="capitalize group-focus:flex items-center justify-center hidden text-black text-xs transition-all duration-150 delay-100 ease-in-out w-full h-full">
                  artificial intelligence
                </span>
              </span>
            </motion.button> */}
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
