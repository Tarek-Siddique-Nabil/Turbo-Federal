import React from "react";
import { motion } from "framer-motion";
import IntersectSVG from "../../../libs/svg/IntersectSVG";
import TechIcon from "../../../libs/Icon/TechIcon";
import AiIcon from "../../../libs/Icon/AiIcon";
import { useSidebar } from "../../Header/zustand";
import { useState } from "react";
import ItServices from "../TabComponents/ItServices";
import AiServices from "../TabComponents/AiServices";
import AiReadiness from "../TabComponents/AiReadiness";
import AiTextRange from "../TabComponents/AiTextRange";

const Services = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const buttonsText = [
    {
      id: 1,
      text: "IT Services",
    },
    {
      id: 2,
      text: "AI Services",
    },
    {
      id: 3,
      text: "AI Readiness Assessment ",
    },
    {
      id: 4,
      text: "AI Test Range ",
    },
  ];
  const { isSidebarOpen } = useSidebar();
  let tabContent;
  switch (selectedButton) {
    case 0:
      tabContent = <ItServices />;
      break;
    case 1:
      tabContent = <AiServices />;
      break;
    case 2:
      tabContent = <AiReadiness />;
      break;
    case 3:
      tabContent = <AiTextRange />;
      break;
    default:
      tabContent = <ItServices />;
      break;
  }

  return (
    <motion.section
      id="services"
      // initial={{ opacity: 0.5, y: "50vh" }}
      // whileInView={{  opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
      className={`${
        isSidebarOpen ? "-z-50 opa" : "z-10"
      } h-full lg:px-40 md:px-10 px-5 md:py-16  py-4 flex flex-col justify-center md:gap-16`}
    >
      <div className={`flex flex-col justify-start gap-5`}>
        {/* <p className="text-blue-800 text-xl">2023-2024</p> */}
        <p className="text-[33px] md:text-4xl lg:text-6xl font-Manrope font-semibold">
          Turbo Federal Offers <span className="text-blue-800">●</span>
        </p>
      </div>
      <motion.header className=" flex flex-row overflow-x-auto gap-3 py-10 ">
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
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            onClick={() => setSelectedButton(index)}
            className={`font-Manrope px-3 py-2.5 rounded-lg border border-[#383A95]  ${
              selectedButton === index
                ? "bg-[#383A95] text-white font-bold"
                : "bg-white font-bold"
            } transition-all duration-150 ease-linear`}
            key={button.id}
          >
            {button.text}
          </motion.button>
        ))}
      </motion.header>
      {tabContent}
    </motion.section>
  );
};

export default Services;
