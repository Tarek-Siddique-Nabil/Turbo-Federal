import React from "react";
import Table_Image1 from "../../../assets/table1.jpg";
import Table_Image2 from "../../../assets/table2.jpg";
import { delay, motion } from "framer-motion";

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
          className="flex flex-col items-center md:gap-10 gap-7 lg:px-48 md:px-20 px-5"
        >
          <p className="text-4xl lg:text-6xl text-[#050757] font-Manrope  capitalize">
            Contract Vehicles
          </p>
          <p className="lg:text-[45px] text-3xl">interactive experiences</p>
          <img className="scale-110" src={Table_Image1} />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
        className="flex lg:flex-row flex-col-reverse justify-center gap-10 items-center bg-black px-4 py-5 "
      >
        <div className="">
          <img className="" src={Table_Image2} />
        </div>
        <div className="w-1/2  lg:text-end md:text-end text-center text-white flex flex-col gap-5">
          <p className="text-4xl lg:text-6xl">Better company</p>
          <p className="text-3xl lg:text-5xl text-violet-800">insights</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minimveniam,si.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
