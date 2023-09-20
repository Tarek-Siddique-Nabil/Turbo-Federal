import React from "react";
import {
  Seal_of_the_Federal_Bureau_of_Investigation_Image,
  Seal_of_the_United_States_Department_of_Defense,
  Seal_of_the_United_States_Department_of_Justice_Image,
  Seal_of_the_United_States_Drug_Enforcement_Administration,
} from "../../../assets/image";
import Marquee from "react-fast-marquee";

const Carousel = () => {
  const datas = [
    {
      title: "AI Assistants ",
      short_description: " Outsource research, analysis & other tasks to AI",
    },
    {
      title: "AI Knowledge Management",
      short_description:
        " Gain insights, answers from all your apps & data stores",
    },
    {
      title: "Custom AI Tools/Services ",
      short_description: "Mission-specific AI for human-guided task completion",
    },
    {
      title: "AI Forecasting & Prediction",
      short_description: "Predicting outcomes based on complex datasets",
    },
    {
      image: Seal_of_the_United_States_Department_of_Justice_Image,
    },
    {
      image: Seal_of_the_Federal_Bureau_of_Investigation_Image,
    },
    {
      image: Seal_of_the_United_States_Department_of_Defense,
    },
    {
      image: Seal_of_the_United_States_Drug_Enforcement_Administration,
    },
  ];

  return (
    <section className="lg:px-40 md:px-10 px-5 md:py-3 py-4">
      <div className="h-[550px] lg:min-h-[580px]  bg-black rounded-xl flex  flex-col gap-10 justify-center relative overflow-hidden py-4">
        {/* marque1 */}
        <Marquee speed={30} autoFill={true}>
          <div className="flex  items-center">
            <p className="text-white font-Manrope text-2xl text-center mx-10 uppercase">
              Clients
            </p>
            {datas?.map(
              (data, index) =>
                data?.image && (
                  <div
                    key={index}
                    className={`w-[290px]    rounded-lg 
                     
                      
                         bg-transparent 
                    `}
                  >
                    <img
                      className="lg:w-[75%] lg:h-[75%] w-[70%] h-[70%]  object-cover"
                      src={data?.image}
                      alt={data?.title}
                      loading="lazy"
                    />
                  </div>
                )
            )}
          </div>
        </Marquee>
        {/* marquee 2 */}
        <Marquee speed={25} direction="right" autoFill={true}>
          <div className=" flex">
            {datas?.map(
              (data, index) =>
                !data.image && (
                  <div
                    key={index}
                    className={`w-[290px]  h-[220px] mx-5 flex flex-col gap-3 rounded-lg  ${
                      index % 2 === 0
                        ? "bg-[#141564] "
                        : "bg-transparent border border-slate-500"
                    } p-4`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-8 h-8 ${
                        index % 2 !== 0 ? "text-[#141564]" : "text-[#BF3B41]"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-3xl text-gray-200 font-Manrope">
                      {data.title}
                    </p>
                    <p className="font-Manrope text-base text-white ">
                      {data.short_description}
                    </p>
                  </div>
                )
            )}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Carousel;
