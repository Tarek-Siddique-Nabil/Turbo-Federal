import React, { useState } from "react";
import Table_Image1 from "../../../assets/table1.jpg";
import Table_Image2 from "../../../assets/table2.jpg";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <section className="lg:px-40 md:px-10 px-5 md:py-32 py-4">
        <hr className="border rounded-lg border-[#050757] my-5" />
        <motion.div
          initial={{ opacity: 0.75, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="flex flex-col items-center md:gap-20 gap-7 lg:px-48 md:px-20 px-5"
        >
          <p className="text-4xl lg:text-6xl text-[#050757] font-Manrope  capitalize">
            <span className="font-bold">Turbo Federal</span> Contract Vehicles
          </p>
          {/* <p className="lg:text-[45px] text-3xl">interactive experiences</p> */}
          <img className="scale-110  -z-50" src={Table_Image1} />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className="flex lg:flex-row flex-col-reverse justify-center gap-10 items-center bg-black py-5 lg:px-40 md:px-10 px-5 md:py-10 "
      >
        <div className=" relative">
          <img className="lg:h-[450px] w-fit   -z-50 " src={Table_Image2} />
        </div>
        <div className="w-[90%] md:w-fit px-1 md:px-0 lg:text-end md:text-end text-center text-white flex flex-col gap-5">
          <div className="text-xl lg:text-4xl flex flex-col gap-1">
            <p>AI and Digital Transformation Services to empower</p>{" "}
            <span className="font-bold font-Manrope text-[#BF3B41] text-3xl lg:text-5xl">
              organizations, centered around
            </span>
            <span className="font-bold font-Manrope text-[#BF3B41] text-3xl lg:text-5xl ">
              {" "}
              human guidance and control.
            </span>
          </div>

          <div className="md:whitespace-nowrap md:text-lg font-thin md:font-normal flex flex-col gap-1">
            <span>
              We adhere to responsible AI (RAI) principles set forth in our
              approach to design, development, deployment,
            </span>{" "}
            <span className="">
              and AI use that ensures the safety of our systems and their
              ethical employment.
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
