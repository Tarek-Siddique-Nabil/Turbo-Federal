import React from "react";
import { motion } from "framer-motion";
import AiImage from "../../assets/aiImage2.jpg";
const AboutUs = () => {
  const values = [
    "Integrity: Making ethical, transparent, and well-intentioned decisions.",
    "Dedication: Agreeing to perform our best to help the company flourish.",
    "Accountability: Each of us is responsible for our words, our actions, and our results.",
    "Teamwork: We achieve more when we collaborate and all work together.",
    " Be Passionate and Determined: Expressing excitement for the work being done and shared objectives.",
    " Constantly Learn and Innovate: We encourage thoughtful, creative, and inspirational ideas.",
    " Embrace Creative Thought: Finding new ways of thinking, learning, and doing.",
    " Encourage Fairness and Inclusiveness: Treating all employees, clients/customers, and stakeholders well.",
    "Be Honest: Act with uncompromising honesty and integrity in everything we do.",
  ];

  return (
    <section className="flex flex-col lg:px-40 md:px-10 px-5 md:py-10 py-4">
      <div className=" flex  flex-col items-center  md:gap-4">
        <motion.div
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className="md:w-[65%] flex flex-col gap-2 font-Manrope text-center   -z-50"
        >
          <div>
            <p className="text-2xl md:text-4xl lg:text-7xl font-medium">
              Introducing{" "}
              <span className="text-[#050757] animate-spin">&#10040;</span>{" "}
            </p>
            <p className="font-bold text-3xl md:text-5xl lg:text-8xl">
              Turbo Federal
            </p>
          </div>

          <p className="my-6 text-lg md:text-2xl ">
            Turbo Federal is a Top-Secret cleared trusted provider of AI
            transformation, application modernization, cybersecurity, training,
            and program management/PMO services to federal government customers.
            Leveraging Agile and DevSecOps best practices specifically tailored
            for the Federal government, we are adept at increasing efficiencies,
            accelerating delivery, and improving quality – so you can meet your
            mission objectives.
          </p>
        </motion.div>
        <motion.figure
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 0.2,
          }}
          className=" h-[250px] lg:h-[450px] md:h-[230px] w-full   -z-50 md:my-16 my-4"
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={AiImage}
            alt=""
          />
        </motion.figure>
      </div>
      <motion.div
        initial={{ opacity: 0.5, y: "10vh", z: -30 }}
        whileInView={{ opacity: 1, y: 0, z: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
          ease: "linear",
          delay: 0.2,
        }}
        className="flex flex-col  items-center gap-4 md:my-16 my-8"
      >
        <div className="md:w-[65%]  flex flex-col gap-2 font-Manrope text-center   -z-50">
          <div>
            <p className="text-lg md:text-2xl lg:text-4xl font-medium">
              Mission Statement{" "}
              <span className="text-[#050757] animate-spin">&#10040;</span>{" "}
            </p>
            <p className="font-bold text-xl md:text-4xl lg:text-5xl">
              Excellence without Excuses.
            </p>
          </div>

          <p className="my-6 text-lg md:text-2xl ">
            At Turbo, we provide Nimble and Impactful business solutions.
            Through our Agility, we challenge the status quo with open minds,
            focus, and speed. We focus on the individual customer to accelerate
            their mission success. We believe data is the currency of the future
            and we help our customers own it.
          </p>
        </div>
        <div className="text-center md:w-[65%] flex flex-col gap-3 md:gap-6">
          <p className="font-bold text-lg md:text-3xl lg:text-4xl font-Manrope ">
            Ethos
          </p>
          <ul className="md:text-xl text-base font-Manrope list-disc list-inside">
            {values.slice(0, 3).map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.12,
                  ease: "linear",
                  delay: 0.25 * (index + 1),
                }}
                className="mb-2"
              >
                {value}
              </motion.li>
            ))}
          </ul>
          <p className="my-6 text-lg md:text-2xl  font-Manrope font-semibold">
            For each solution we have well qualified and acclaimed experts
            committed to your organization’s mission and success. They share in
            our core company values to:
          </p>
          <ul className="md:text-xl text-base font-Manrope list-disc list-inside">
            {values.slice(4, 7).map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.12,
                  ease: "linear",
                  delay: 0.3 * (index + 1),
                }}
                className="mb-2"
              >
                {value}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
