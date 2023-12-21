import React from "react";
import { aiReadinessData } from "../TabData";
import AiIcon from "../../../libs/Icon/AiIcon";
import { Link } from "react-router-dom";

const AiReadiness = () => {
  return (
    <div>
      <div className="w-full    flex  flex-col gap-5 items-center md:items-start ">
        <div className="flex flex-col  gap-3 items-start">
          <p className="font-Manrope text-5xl font-bold text-center md:text-left">
            {aiReadinessData.title}
          </p>
          <p className="font-Manrope  text-xl font-light text-center md:text-left">
            {aiReadinessData.subTitile}
          </p>
        </div>
        <Link
          to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
          target="_blank"
          className="bg-black hover:bg-violet-700 text-white font-Manrope text-center p-3 rounded-2xl my-6  lg:my-3  text-lg   transition-all ease-in-out duration-150"
        >
          {" "}
          Assess my AI Readiness 📋
        </Link>
        <div className="flex flex-wrap justify-between  gap-5 md:gap-0">
          {aiReadinessData?.services?.map((i, index) => (
            <div
              className="flex flex-col  gap-3 lg:w-1/2 w-full px-2 py-4 "
              key={index}
            >
              <p className="tab-content-header text-center md:text-left ">
                {index + 1}&#46; {i.title}
              </p>
              <p className="text-xl font-Manrope ">{i.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiReadiness;
