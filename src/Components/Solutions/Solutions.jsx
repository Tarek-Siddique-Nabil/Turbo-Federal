import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ai_image, poster } from "../../assets/image";
import { useEffect } from "react";
import { useRef } from "react";
import TabComponents from "./TabComponents";
import { tabOneContent } from "../../libs/data/tabOneContent";
import { useSidebar } from "../Header/zustand";
import TabTwo from "./Tab/TabTwo";
import TabThree from "./Tab/TabThree";
import TabFour from "./Tab/TabFour";
import TabFive from "./Tab/TabFive";
const Solutions = () => {
  const [selectedButton, setSelecetedButton] = useState(0);
  console.log(
    "🚀 ~ file: Solutions.jsx:12 ~ Solutions ~ selectedButton:",
    selectedButton
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isSidebarOpen } = useSidebar();
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (isFullscreen === true) {
      if (video.ended) {
        restartVideo();
      }
      video.play();
    } else if (isFullscreen === false) {
      video.pause();
    }
    // Function to handle full-screen change
    const handleFullScreenChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        )
      );
    };

    // Add event listeners for full-screen change
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, [videoRef, isFullscreen]);

  const toggleFullScreen = () => {
    const video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else {
      // Fallback for browsers that don't support Fullscreen API
      if (isFullscreen) {
        // If already in fullscreen mode, exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // If not in fullscreen mode, enter fullscreen
        if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      }
    }
  };
  const restartVideo = () => {
    const video = videoRef.current;
    video.currentTime = 0; // Reset the video to the beginning
    video.play();
  };
  const buttonsText = [
    {
      id: 1,
      text: "AI Knowledge Management",
    },
    {
      id: 2,
      text: "AI Work Assistants",
    },
    {
      id: 3,
      text: "Work Automation ",
    },
    {
      id: 4,
      text: "Case Management",
    },
    {
      id: 5,
      text: "Custom AI Apps",
    },
  ];

  return (
    <main className="lg:px-40 md:px-10 px-4">
      {/* tab buttons */}
      <div className="flex flex-row overflow-x-auto gap-3 py-10 ">
        {buttonsText.map((button, index) => (
          <motion.button
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.3, // Adjust the delay to control the stagger effect
              type: "spring",
              damping: 20,
              mass: 1,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            onClick={() => setSelecetedButton(index)}
            className={`font-Manrope px-3 py-2.5 rounded-lg border border-[#383A95]  ${
              selectedButton === index ? "bg-[#383A95] text-white" : "bg-white"
            } transition-all duration-150 ease-linear`}
            key={button.id}
          >
            {button.text}
          </motion.button>
        ))}
      </div>

      {/* tab content */}
      {/* tab 1 */}
      <section className="flex flex-col  py-6">
        {selectedButton === 0 && (
          <>
            {" "}
            <div className="flex lg:items-start lg:justify-between md:flex-row flex-col">
              <div className="flex flex-col gap-7">
                <p className="font-Manrope text-5xl font-bold">
                  AI Knowledge Management
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      type: "tween",
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                  className="font-Manrope flex flex-col text-xl font-light"
                >
                  <span>
                    {" "}
                    Our enterprise-ready solution for AI Knowledge Management
                    solution utilizes Glean
                  </span>{" "}
                  <span>
                    to deliver cutting-edge search, discovery and workplace AI
                    assistance to help you:
                  </span>
                </motion.p>
                <div className="relative flex  h-[300px] w-fit lg:w-[450px]  lg:left-6 ">
                  <video
                    ref={videoRef}
                    width="700"
                    height="700"
                    controls={false}
                    poster={poster}
                    className={`rounded-lg scale-110 transition-all ease-in-out duration-150  aspect-video `}
                  >
                    <source
                      className="h-[300px] w-fit lg:w-[450px] "
                      src="/video/aiVideo.mp4"
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
                </div>
              </div>
              <motion.img
                initial={{ y: 100, opacity: 0.3 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  damping: 20,
                  mass: 1,
                }}
                className="lg:w-[500px] lg:h-[500px] w-full h-[370px] -z-50 "
                src={ai_image}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 ">
              {tabOneContent.map((content, index) => (
                <TabComponents key={index} {...content} />
              ))}
            </div>
          </>
        )}
        {selectedButton === 1 && (
          <div>
            <TabTwo />
          </div>
        )}
        {selectedButton === 2 && <TabThree />}
        {selectedButton === 3 && <TabFour />}
        {selectedButton === 4 && <TabFive />}
      </section>
    </main>
  );
};

export default Solutions;
