import React from "react";
import Kerry_image from "../../../assets/KerryGray.jpg";
import Simon_image from "../../../assets/SimonFlom.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HandShake from "../../../libs/Icon/HandShake";
const Team = () => {
  const person = [
    {
      hash: "kerry",
      name: "Kerry Gray",
      role: "President & CEO",
      image: `${Kerry_image}`,
      email: "info@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/kerry-p-gray-b689261/",

      bio: "I am a Results driven executive with a passion for leveraging technology solutions to meet the mission of clients and I have 30+ years of experience working in executive and leadership roles for Fortune 500 companies, including Accenture, Booz Allen, and most recently, NTT DATA. Possess strong general management, sales/business development and delivery experience with a proven track record of delivering growth, establishing governance and delivery oversight, building executive client relationships and inspiring people. Strong, passionate, values-based leader that understands the importance of Client Relationships, Innovation and Teamwork as the foundation for success.I hold Bachelor of Science degrees in Aerospace Engineering and Economics from Northwestern University along with an MBA from the University of Michigan.We look to continue providing great consulting and business services to our clients along with strong leadership and development services for their projects and programs. At Turbo, we provide you “big consulting” expertise without the “big consulting” rates.Throughout my career, I have set myself apart by consistently solving difficult business problems and successfully turning around struggling programs from which most others shy away. By combining versatility and creative problem-solving and displaying comfort in ambiguous situations with no clear solution parameters, I have successfully helped clients identify the root causes of issues and align program goals with organizational strategy and/or business missions to create, clarify and communicate a clear program vision.",
    },
    {
      hash: "simon",
      name: "Simon flom",
      role: "VP & COO",
      image: `${Simon_image}`,
      email: "info@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/simon-flom-4a38038/",
    },
  ];
  return (
    <motion.div
      id="team"
      initial={{ opacity: 0.75, y: "30vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "linear", delay: 0.2 }}
      className="lg:px-40 md:px-10 px-5 md:py-10 py-4"
    >
      <p className="text-4xl flex items-center justify-center lg:text-6xl ">
        Our Team
        <HandShake />
      </p>
      <section className="flex flex-wrap md:justify-start justify-center  gap-10 py-10">
        {person.map((i, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-3 group hover:cursor-pointer "
          >
            <div className="relative">
              <img
                className="md:w-[208px] w-[116px] md:h-[255px] h-[140px] object-cover rounded-3xl md:rounded-[50px] group-hover:shadow-lg group-hover:shadow-[#050757] transition-all duration-150 ease-linear md:group-hover:blur-[2px]"
                src={i.image}
                alt={i.name}
              />
              <div className="hidden absolute inset-0 md:flex items-center justify-center lg:translate-y-[50%] opacity-0 lg:group-hover:translate-y-20 group-hover:opacity-100 transition-all duration-150 ease-linear">
                <Link
                  to={`/team#${i.hash}`}
                  className="text-white bg-[#050757] px-4 py-2 rounded-md"
                >
                  View Bio
                </Link>
              </div>
            </div>

            <p className="font-Manrope text-3xl capitalize group-hover:italic transition-all duration-150 ease-in-out">
              {i.name}
            </p>
            <p className="font-Manrope text-xl capitalize">{i.role}</p>
            <div className="flex justify-start items-start gap-2">
              {/* <a href={`mailto:${i.email}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                </svg>
              </a> */}
              <a href={i.linkedin}>
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
            <Link
              to={`/team#${i.hash}`}
              className="md:hidden border p-2.5 rounded-lg  border-[#050757] hover:bg-slate-600 hover:text-white"
            >
              View Bio
            </Link>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Team;
