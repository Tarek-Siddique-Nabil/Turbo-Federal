import React from "react";
import Kerry_image from "../../../assets/KerryGray.jpg";
import Simon_image from "../../../assets/SimonFlom.jpg";
import { motion } from "framer-motion";
const Team = () => {
  const person = [
    {
      name: "Kerry Gray",
      role: "President & CEO",
      image: `${Kerry_image}`,
      bio: "I am a Results driven executive with a passion for leveraging technology solutions to meet the mission of clients and I have 30+ years of experience working in executive and leadership roles for Fortune 500 companies, including Accenture, Booz Allen, and most recently, NTT DATA. Possess strong general management, sales/business development and delivery experience with a proven track record of delivering growth, establishing governance and delivery oversight, building executive client relationships and inspiring people. Strong, passionate, values-based leader that understands the importance of Client Relationships, Innovation and Teamwork as the foundation for success.I hold Bachelor of Science degrees in Aerospace Engineering and Economics from Northwestern University along with an MBA from the University of Michigan.We look to continue providing great consulting and business services to our clients along with strong leadership and development services for their projects and programs. At Turbo, we provide you “big consulting” expertise without the “big consulting” rates.Throughout my career, I have set myself apart by consistently solving difficult business problems and successfully turning around struggling programs from which most others shy away. By combining versatility and creative problem-solving and displaying comfort in ambiguous situations with no clear solution parameters, I have successfully helped clients identify the root causes of issues and align program goals with organizational strategy and/or business missions to create, clarify and communicate a clear program vision.",
    },
    {
      name: "Simon flom",
      role: "VP & COO",
      image: `${Simon_image}`,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0.75, y: "30vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
      className="lg:px-40 md:px-10 px-5 md:py-10 py-4"
    >
      <p className="text-4xl lg:text-6xl ">
        Our Team<span className="text-[#050757]">✸</span>
      </p>
      <section className="flex flex-wrap md:justify-start justify-center  gap-10 py-10">
        {person.map((i, index) => (
          <div key={index} className="flex flex-col items-start gap-3">
            <img
              // style={{ borderRadius: "50px" }}
              className="md:w-[208px] w-[116px]  md:h-[255px] h-[140px] object-cover rounded-3xl md:rounded-[50px] "
              src={i.image}
              alt={i.name}
            />
            <p className="font-Manrope text-3xl capitalize">{i.name}</p>
            <p className="font-Manrope text-xl capitalize">{i.role}</p>
            <div className="flex justify-start items-start gap-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Team;
