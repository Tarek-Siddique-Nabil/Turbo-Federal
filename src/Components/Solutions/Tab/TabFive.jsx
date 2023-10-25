import React from "react";
import tabFive_ImageOne from "../../../libs/assets/tabContentImage/tab5/image1.png";
const TabFive = () => {
  return (
    <main>
      <p className="font-Manrope text-5xl font-bold">Custom AI Apps 🧠🛠️</p>
      <br />
      <br />
      <div className="flex lg:flex-row flex-col items-start text-start">
        <section className="flex flex-col gap-8 text-xl">
          <p>
            🚀 Next-gen LLM applications to power your specific use cases. 💼
          </p>
          <p>
            We can build on top of multi-agent conversations 🗣, with diverse
            conversation patterns for complex human task workflows. 🔄
          </p>
          <p>
            We can customize models to a wide range of applications from various
            domains and complexities. 🌐
          </p>
          <p>
            Abstract and implement conversable agents designed to solve tasks
            through inter-agent conversations. 🤖💬
          </p>
          <p>
            Customizable to integrate LLMs, humans, tools, or a combination of
            them. 🔧👥🔗
          </p>
        </section>
        <img
          src={tabFive_ImageOne}
          alt=""
          className="lg:px-6  lg:h-[500px] lg:w-[500px] mx-auto lg:-mt-20"
        />
      </div>
    </main>
  );
};

export default TabFive;
