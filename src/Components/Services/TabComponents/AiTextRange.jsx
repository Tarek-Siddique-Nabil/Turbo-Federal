import React from "react";
import { aiTextRangeData } from "../TabData";
import { Link } from "react-router-dom";

const AiTextRange = () => {
  return (
    <div>
      <div>
        <div className="w-full   p-3  flex  flex-col gap-5 items-center md:items-start ">
          <div className="flex flex-col  gap-3 items-start">
            <p className="font-Manrope text-5xl font-bold md:text-left text-center">
              {aiTextRangeData.pageTitle}
            </p>
            <p className="font-Manrope  text-xl font-light text-justify md:text-left">
              {aiTextRangeData.pageContent}
            </p>
          </div>
          <Link
            to="https://forms.gle/rcDn4QnfQ8ap5ErX9"
            target="_blank"
            className="bg-black hover:bg-violet-700 text-center text-white font-Manrope  p-3 rounded-2xl mt-6 md:mt-10  text-lg   transition-all ease-in-out duration-150"
          >
            {" "}
            Test my AI ideas 💡
          </Link>
          <div className="flex flex-wrap justify-between  gap-5 md:gap-0">
            {aiTextRangeData?.packageDetails?.map((i, index) => (
              <div
                className="flex flex-col  gap-3 lg:w-1/2 w-full px-2 py-4 "
                key={index}
              >
                <p className="tab-content-header text-center md:text-left ">
                  {index + 1}&#46; {i.title}
                </p>
                <p className="text-xl font-Manrope ">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTextRange;
