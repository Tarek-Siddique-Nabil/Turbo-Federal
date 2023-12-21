import React from "react";
import TechIcon from "../../../libs/Icon/TechIcon";
import { itServicesData } from "../TabData";

const ItServices = () => {
  return (
    <section className="flex flex-wrap justify-center md:justify-between">
      <div className="w-full md:w-1/2    flex  flex-col  items-start  ">
        <div className="flex  items-center gap-3">
          <p className="font-Manrope text-5xl font-bold text-center md:text-left">
            {itServicesData.title}
          </p>
          <TechIcon />
        </div>
        <ul className="list-disc list-inside  text-justify text-base font-normal font-Manrope capitalize">
          {itServicesData?.services?.map((i, index) => (
            <li key={index} className="md:text-xl text-base">
              {" "}
              {i.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ItServices;
