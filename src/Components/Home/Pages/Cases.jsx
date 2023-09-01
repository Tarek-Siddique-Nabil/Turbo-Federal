import React from "react";
import Intersect from "../../../libs/svg/intersect";

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
    <section className="lg:px-16 md:px-10 px-5 md:py-10 py-4 flex flex-col gap-14">
      <div>
        <p className="text-blue-800">2021-2021</p>
        <p className="text-4xl font-Manrope">
          Use cases <span className="text-blue-800">●</span>
        </p>
      </div>
      <section className="flex flex-wrap justify-center md:justify-between gap-y-40">
        {cases?.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2   flex lg:flex-row flex-col items-center justify-around "
          >
            <Intersect />
            <p className="text-xl font-medium font-Manrope capitalize">
              {item.title}
            </p>
            <p className="text-center text-base font-normal font-Manrope capitalize">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Cases;
