import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Carousel = () => {
  const datas = [
    {
      title: "Analytics ",
      short_description: "This is the first item.",
    },
    {
      title: "AI",
      short_description: "A short description of the second item.",
    },
    {
      title: "Analytics ",
      short_description: "The third item's description.",
    },
    {
      title: "AI",
      short_description: "Description of the fourth item.",
    },
    {
      title: "Analytics ",
      short_description: "The fifth item's short description.",
    },
    {
      title: "AI",
      short_description: "A brief description for item six.",
    },
    {
      title: "Analytics ",
      short_description: "Short description of item seven.",
    },
    {
      title: "AI",
      short_description: "The eighth item's short description.",
    },
    {
      title: "Analytics ",
      short_description: "This is item nine's description.",
    },
    {
      title: "AI",
      short_description: "A description for item ten.",
    },
    {
      title: "Analytics ",
      short_description: "The eleventh item's short description.",
    },
    {
      title: "Analytics 12",
      short_description: "A concise description for item twelve.",
    },
    {
      title: "Analytics ",
      short_description: "Short description of item thirteen.",
    },
    {
      title: "AI",
      short_description: "The fourteenth item's description.",
    },
    {
      title: "Analytics ",
      short_description: "Description of item fifteen.",
    },
    {
      title: "AI",
      short_description: "The sixteenth item's short description.",
    },
    {
      title: "Analytics ",
      short_description: "A brief description for item seventeen.",
    },
    {
      title: "AI",
      short_description: "Short description of item eighteen.",
    },
    {
      title: "Analytics ",
      short_description: "The nineteenth item's short description.",
    },
    {
      title: "AI",
      short_description: "A description for the twentieth item.",
    },
  ];
  const [currentIndexOdd, setCurrentIndexOdd] = useState(0);
  const [currentIndexEven, setCurrentIndexEven] = useState(1); // Start from an even index for alternating slides

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-slide every 5 seconds
      setCurrentIndexOdd((prevIndex) => (prevIndex + 2) % datas.length); // Odd index
      setCurrentIndexEven((prevIndex) => (prevIndex + 2) % datas.length); // Even index
    }, 2000);

    return () => clearInterval(interval);
  }, [datas.length]);

  const rotateDegree = window.innerWidth >= 1024 ? "rotate-45" : "";
  return (
    <section
      className={`lg:px-40 md:px-10 px-5 md:py-10 py-4 relative overflow-hidden `}
    >
      <div
        className={`h-[420px] bg-black rounded-xl flex items-center relative gap-3 border overflow-hidden `}
      >
        <AnimatePresence initial={false} custom={currentIndexOdd}>
          <motion.div
            key={currentIndexOdd}
            custom={currentIndexOdd}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`${rotateDegree} w-[290px] ${
              currentIndexOdd % 2 === 0
                ? "bg-transparent border border-slate-500"
                : "bg-violet-500"
            } p-4 rounded-lg transform rotate-45`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-8 h-8 ${
                currentIndexOdd % 2 === 0 && "text-violet-500"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-3xl text-gray-200 font-Manrope">
              {datas[currentIndexOdd].title}
            </p>
            <p className="font-Manrope text-base text-white">
              {datas[currentIndexOdd].short_description}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false} custom={currentIndexEven}>
          <motion.div
            key={currentIndexEven}
            custom={currentIndexEven}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`w-[290px] ${
              currentIndexEven % 2 === 0
                ? "bg-violet-500"
                : "bg-transparent border border-slate-500"
            } p-4 rounded-lg transform -rotate-45`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-8 h-8 ${
                currentIndexEven % 2 !== 0 && "text-violet-500"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-3xl text-gray-200 font-Manrope">
              {datas[currentIndexEven].title}
            </p>
            <p className="font-Manrope text-base text-white">
              {datas[currentIndexEven].short_description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Carousel;
