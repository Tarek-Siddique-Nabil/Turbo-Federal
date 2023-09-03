import React from "react";

import Ticker from "framer-motion-ticker";
const Carousel = () => {
  const datas = [
    {
      title: "Analytics ",
      short_description: "This is the first item.",
    },
    {
      title: "AI",
      short_description: "A short description of the second item.",
    },
    {
      title: "Analytics ",
      short_description: "The third item's description.",
    },
    {
      title: "AI",
      short_description: "Description of the fourth item.",
    },
    {
      title: "Analytics ",
      short_description: "The fifth item's short description.",
    },
    {
      title: "AI",
      short_description: "A brief description for item six.",
    },
    {
      title: "Analytics ",
      short_description: "Short description of item seven.",
    },
    {
      title: "AI",
      short_description: "The eighth item's short description.",
    },
    {
      title: "Analytics ",
      short_description: "This is item nine's description.",
    },
    {
      title: "AI",
      short_description: "A description for item ten.",
    },
    {
      title: "Analytics ",
      short_description: "The eleventh item's short description.",
    },
    {
      title: "Analytics 12",
      short_description: "A concise description for item twelve.",
    },
    {
      title: "Analytics ",
      short_description: "Short description of item thirteen.",
    },
    {
      title: "AI",
      short_description: "The fourteenth item's description.",
    },
    {
      title: "Analytics ",
      short_description: "Description of item fifteen.",
    },
    {
      title: "AI",
      short_description: "The sixteenth item's short description.",
    },
    {
      title: "Analytics ",
      short_description: "A brief description for item seventeen.",
    },
    {
      title: "AI",
      short_description: "Short description of item eighteen.",
    },
    {
      title: "Analytics ",
      short_description: "The nineteenth item's short description.",
    },
    {
      title: "AI",
      short_description: "A description for the twentieth item.",
    },
  ];

  return (
    <section className="lg:px-40 md:px-10 px-5 md:py-10 py-4">
      <div className="h-[420px] bg-black rounded-xl flex gap-5 items-center relative overflow-hidden">
        <div className="">
          <Ticker duration={100}>
            {datas?.map((data, index) => (
              <div
                key={index}
                className={`w-[290px] mx-5 flex flex-col gap-3 rounded-lg  ${
                  index % 2 === 0
                    ? "bg-violet-500 "
                    : "bg-transparent border border-slate-500"
                } p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-8 h-8 ${index % 2 !== 0 && "text-violet-500"}`}
                >
                  {/* SVG path here */}
                </svg>

                <p className="text-3xl text-gray-200 font-Manrope">
                  {data.title}
                </p>
                <p className="font-Manrope text-base text-white ">
                  {data.short_description}
                </p>
              </div>
            ))}
          </Ticker>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
