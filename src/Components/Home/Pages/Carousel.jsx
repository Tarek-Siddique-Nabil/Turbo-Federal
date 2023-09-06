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
    <section className="lg:px-40 md:px-10 px-5 md:py-3 py-4">
      <div className="h-[215px] lg:h-[420px] md:h-[208px] bg-black rounded-xl flex gap-5 items-center relative overflow-hidden">
        {/* marque1 */}
        <div className="marquee1 z-10">
          <div className="marquee__group">
            {datas?.map((data, index) => (
              <div
                key={index}
                className={`w-[290px] mx-5 flex flex-col gap-3 rounded-lg  ${
                  index % 2 === 0
                    ? "bg-[#BF3B41] "
                    : "bg-[#050757] border border-slate-500"
                } p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-8 h-8 ${index % 2 !== 0 && "text-violet-500"}`}
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
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {datas?.map((data, index) => (
              <div
                key={index}
                className={`w-[290px] mx-5 flex flex-col gap-3 rounded-lg  ${
                  index % 2 === 0
                    ? "bg-[#BF3B41] "
                    : "bg-[#050757] border border-slate-500"
                } p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-8 h-8 ${index % 2 !== 0 && "text-violet-500"}`}
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
            ))}
          </div>
        </div>
        {/* marquee 2 */}
        <div className="marquee2 hidden lg:flex z-10">
          <div className="marquee__group2">
            {datas?.map((data, index) => (
              <div
                key={index}
                className={`w-[290px] mx-5 flex flex-col gap-3 rounded-lg  ${
                  index % 2 === 0
                    ? "bg-[#BF3B41] "
                    : "bg-[#050757] border border-slate-500"
                } p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-8 h-8 ${index % 2 !== 0 && "text-violet-500"}`}
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
            ))}
          </div>
          <div className="marquee__group2" aria-hidden="true">
            {datas?.map((data, index) => (
              <div
                key={index}
                className={`w-[290px] mx-5 flex flex-col gap-3 rounded-lg  ${
                  index % 2 === 0
                    ? "bg-[#BF3B41] "
                    : "bg-[#050757] border border-slate-500"
                } p-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-8 h-8 ${index % 2 !== 0 && "text-violet-500"}`}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
