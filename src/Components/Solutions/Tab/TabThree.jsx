import React from "react";
import { tabThree_imageOne } from "../../../libs/assets/tabContentImage/tab3";

const TabThree = () => {
  return (
    <main className="font-Manrope">
      <div className="flex lg:flex-row flex-col  justify-between lg:items-start items-center">
        <section className="flex flex-col gap-10 ">
          <p className="font-bold text-4xl ">Work Automation</p>
          <p className="text-xl">
            The integration of AI has opened up new avenues for organizations to
            automate complex tasks that were previously manual or
            semi-automated. Enterprises can now enhance decision-making
            capabilities through predictive analytics.
          </p>
          <p className="text-xl">
            In essence, AI works by creating automated workflows based on
            predefined triggers and actions defined by the users. These
            workflows can range from simple tasks such as sending an email
            notification when a file is uploaded to more complex ones involving
            data analysis and report generation.
          </p>
          <p className="text-xl">
            Leveraging AI capabilities provides an unparalleled advantage:
            increased productivity. Imagine if routine jobs are handled
            automatically without fatigue or distraction? Your team members
            could then focus their energies on strategic aspects that require
            human creativity and intuition.
          </p>
          <p className="text-xl">
            This ensures consistency while performing repetitive tasks, besides
            significantly improving accuracy due to machine precision - thereby
            making your organization thrive. The following steps will help you
            integrate AI into your workflows
          </p>
          <div className="text-2xl">
            <p>
              <strong>Step 1:</strong> Identify Your Goals
            </p>
            <p>
              <strong>Step 2:</strong> Analyze Your Current Workflow
            </p>
            <p>
              <strong>Step 3:</strong> Choose an Appropriate AI Solution
            </p>
            <p>
              <strong>Step 4:</strong> Implement the Solution
            </p>
            <p>
              <strong>Step 5:</strong> Monitor Performance
            </p>
          </div>
          <p className="text-xl">
            Turbo has the products and services to provide your organization
            with the proper insights when selecting an AI solution, as there are
            several key points that need to be considered before making a
            decision:
          </p>
          <ul className="text-xl font-bold list-disc list-inside">
            <li>Cost</li>
            <li>Scalability</li>
            <li>Ease of use</li>
            <li>Compatibility With Existing Systems and Technologies</li>
          </ul>
        </section>
        <img
          className="lg:w-[650px] lg:h-[650px] mx-auto"
          src={tabThree_imageOne}
          alt=""
        />
      </div>
    </main>
  );
};

export default TabThree;
