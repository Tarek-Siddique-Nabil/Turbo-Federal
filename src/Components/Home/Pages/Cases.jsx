import React from "react";
import { motion } from "framer-motion";
import IntersectSVG from "../../../libs/svg/IntersectSVG";

const Cases = () => {
  const cases = [
    {
      title: "It Sevrvices",
      description:
        "IT Consultancy & Advisory Program & Project Mgmt, PMO & Enablement Change Mgmt & IT Governance Digital Transformation & Operations Low-Code App/SW Dev & MgmtCase Management dev (simple / complex)App Modernization & Portfolio Rationalization Cybersecurity Managed Services & Infrastructure Mgmt.Service Desk Training services Long/short-term staffing Business Process & Workflow Automation",
    },
    {
      title: "Flip.co",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0.5, y: "50vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
      className="h-full lg:px-40 md:px-10 px-5 md:py-32  py-4 flex flex-col justify-center gap-40"
    >
      <div className="flex flex-col justify-start gap-5">
        <p className="text-blue-800 text-xl">2021-2021</p>
        <p className="text-4xl lg:text-6xl font-Manrope font-semibold">
          Turbo Federal Offers
        </p>
      </div>
      <section className="flex flex-wrap justify-center md:justify-between gap-y-40">
        {cases?.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2   flex  flex-col gap-5 items-start  "
          >
            <p className="lg:text-[50px]   text-xl font-medium font-Manrope capitalize">
              <span className="text-blue-800">●</span> {item.title}
            </p>
            <p className="text-justify text-base font-normal font-Manrope capitalize">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </motion.section>
  );
};

export default Cases;
