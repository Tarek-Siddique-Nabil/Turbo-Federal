import React from "react";
import { motion } from "framer-motion";
import Kerry_image from "../../assets/KerryGray.jpg";
import Simon_image from "../../assets/SimonFlom.jpg";
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
  const persons = [
    {
      name: "Kerry Gray",
      role: "President & CEO",
      image: `${Kerry_image}`,
      email: "kerry@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/kerry-p-gray-b689261/",

      bio: "I am a Results driven executive with a passion for leveraging technology solutions to meet the mission of clients and I have 30+ years of experience working in executive and leadership roles for Fortune 500 companies, including Accenture, Booz Allen, and most recently, NTT DATA. Possess strong general management, sales/business development and delivery experience with a proven track record of delivering growth, establishing governance and delivery oversight, building executive client relationships and inspiring people. Strong, passionate, values-based leader that understands the importance of Client Relationships, Innovation and Teamwork as the foundation for success.I hold Bachelor of Science degrees in Aerospace Engineering and Economics from Northwestern University along with an MBA from the University of Michigan.We look to continue providing great consulting and business services to our clients along with strong leadership and development services for their projects and programs. At Turbo, we provide you “big consulting” expertise without the “big consulting” rates.Throughout my career, I have set myself apart by consistently solving difficult business problems and successfully turning around struggling programs from which most others shy away. By combining versatility and creative problem-solving and displaying comfort in ambiguous situations with no clear solution parameters, I have successfully helped clients identify the root causes of issues and align program goals with organizational strategy and/or business missions to create, clarify and communicate a clear program vision.",
    },
    {
      name: "Simon flom",
      role: "VP & COO",
      image: `${Simon_image}`,
      email: "sflom@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/simon-flom-4a38038/",
    },
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
            Turbo Federal is a Top-SAccelerating ecret cleared trusted provider
            of digital transformation, application modernization, cybersecurity,
            training, and program management/PMO services to federal government
            customers. Leveraging Agile and DevSecOps best practices
            specifically tailored for the Federal government, we are adept at
            increasing efficiencies, accelerating delivery, and improving
            quality – so you can meet your mission objectives.
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
      <div className="flex flex-col items-center gap-5 md:my-16">
        <p className="underline text-4xl md:text-4xl lg:text-7xl font-medium">
          About Team
        </p>
        <div className="md:w-[65%]  flex flex-col md:gap-5 gap-8">
          {persons.map((person, index) => (
            <div className="flex flex-col md:gap-5 gap-6" key={index}>
              <div className="flex items-center md:gap-4 gap-5">
                <img
                  className="w-60 h-60 rounded-lg"
                  src={person.image}
                  alt={person.name}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-Manrope text-3xl capitalize  ">
                    {person.name}
                  </p>
                  <p className="font-Manrope text-xl capitalize">
                    {person.role}
                  </p>
                  <div className="flex justify-start items-start gap-3">
                    <a href={`mailto:${person.email}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6 text-red-500"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                      </svg>
                    </a>
                    <a href={person.linkedin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-600"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <p>{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
