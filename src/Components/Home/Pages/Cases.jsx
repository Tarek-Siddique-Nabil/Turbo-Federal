import React from "react";
import { motion } from "framer-motion";
import IntersectSVG from "../../../libs/svg/IntersectSVG";

const Cases = () => {
  const cases = [
    {
      title: "DATASAN",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Flip.co",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Mare",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Fisga",
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0.5, y: "50vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "linear", delay: 0.5 }}
      className="h-full lg:px-40 md:px-10 px-5 md:py-32  py-4 flex flex-col justify-center gap-40"
    >
      <div className="flex flex-col justify-start gap-5">
        <p className="text-blue-800 text-xl">2021-2021</p>
        <p className="text-4xl lg:text-6xl font-Manrope">
          Use cases <span className="text-blue-800">●</span>
        </p>
      </div>
      <section className="flex flex-wrap justify-center md:justify-between gap-y-40">
        {cases?.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2   flex lg:flex-row flex-col items-center justify-around "
          >
            <IntersectSVG />
            <p className="lg:text-[50px] text-xl font-medium font-Manrope capitalize">
              {item.title}
            </p>
            <p className="text-center text-base font-normal font-Manrope capitalize">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </motion.section>
  );
};

export default Cases;
