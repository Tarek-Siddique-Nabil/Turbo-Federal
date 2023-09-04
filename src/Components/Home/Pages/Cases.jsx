import React from "react";
import { motion } from "framer-motion";
import IntersectSVG from "../../../libs/svg/IntersectSVG";

const Cases = () => {
  const cases = [
    {
      title: "IT Services",
      services: [
        {
          title: "IT Consultancy & Advisory",
        },
        {
          title: "Program & Project Mgmt, PMO & Enablement",
        },
        {
          title: "Change Mgmt & IT Governance",
        },
        {
          title: "Digital Transformation & Operations",
        },
        {
          title: "Low-Code App/SW Dev & Mgmt",
        },
        {
          title: "Case Management dev (simple / complex)",
        },
        {
          title: "App Modernization & Portfolio Rationalization",
        },
        {
          title: "Cybersecurity",
        },
        {
          title: "Managed Services & Infrastructure Mgmt",
        },
        {
          title: "Service Desk",
        },
        {
          title: "Training services",
        },
        {
          title: "Long/short-term staffing",
        },
        {
          title: "Business Process & Workflow Automation",
        },
      ],
    },
    {
      title: "AI Services",
      services: [
        { title: "AI Chat (e.g. ChatGPT for enterprise data, apps)" },
        {
          title:
            "AI Search, Discover, Answer Engines (semantic search; AI answers)",
        },
        { title: "AI Knowledge Management" },
        {
          title:
            "Autonomous AI Assistants / Agents / Copilots for Research, Analysis, & complex cognitive tasks",
        },
        { title: "AI custom tools & services for unique use cases" },
        { title: "IoT, Kiosk, Web App, Wearable integration" },
        { title: "Fine-tuning LLMs for specific use cases" },
        { title: "AI Cognitive Architecture Design" },
        { title: "AGI readiness preparation" },
        { title: "AI Strategy" },
        { title: "AI Education & Training" },
        { title: "AI Development Support" },
        { title: "AI Subject Matter Experts On-Demand" },
        { title: "AI R&D Testing & Evaluation" },
        { title: "AI Labs, AI Playgrounds, AI Ranges" },
      ],
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0.5, y: "50vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
      className="h-full lg:px-40 md:px-10 px-5 md:py-16  py-4 flex flex-col justify-center gap-16"
    >
      <div className="flex flex-col justify-start gap-5">
        <p className="text-blue-800 text-xl">2023-2024</p>
        <p className="text-4xl lg:text-6xl font-Manrope font-semibold">
          Turbo Federal Offers <span className="text-blue-800">●</span>
        </p>
      </div>
      <section className="flex flex-wrap justify-center md:justify-between md:gap-y-40">
        {cases?.map((item, indexC) => (
          <div
            key={indexC}
            className="w-full md:w-1/2  p-3  flex  flex-col gap-5 items-start  "
          >
            <p className="lg:text-[50px]   text-xl font-medium font-Manrope capitalize">
              {item.title}
            </p>
            <ul className="list-disc list-inside  text-justify text-base font-normal font-Manrope capitalize">
              {item?.services?.map((i, index) => (
                <li key={index}> {i.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </motion.section>
  );
};

export default Cases;
