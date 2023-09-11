import React from "react";
import Kerry_image from "../../assets/KerryGray.jpg";
import Simon_image from "../../assets/SimonFlom.jpg";
const AboutTeam = () => {
  const persons = [
    {
      name: "Kerry Gray",
      role: "President & CEO",
      image: `${Kerry_image}`,
      email: "info@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/kerry-p-gray-b689261/",

      bio: `
          I am a Results-driven executive with a passion for leveraging technology solutions to meet the mission of clients and I have 30+ years of experience working in executive and leadership roles for Fortune 500 companies, including Accenture, Booz Allen, and most recently, NTT DATA. Possess strong general management, sales/business development and delivery experience with a proven track record of delivering growth, establishing governance and delivery oversight, building executive client relationships and inspiring people. Strong, passionate, values-based leader that understands the importance of Client Relationships, Innovation and Teamwork as the foundation for success.
          
          I hold Bachelor of Science degrees in Aerospace Engineering and Economics from Northwestern University along with an MBA from the University of Michigan.
          
          We look to continue providing great consulting and business services to our clients along with strong leadership and development services for their projects and programs. At Turbo, we provide you “big consulting” expertise without the “big consulting” rates.
          
          Throughout my career, I have set myself apart by consistently solving difficult business problems and successfully turning around struggling programs from which most others shy away. By combining versatility and creative problem-solving and displaying comfort in ambiguous situations with no clear solution parameters, I have successfully helped clients identify the root causes of issues and align program goals with organizational strategy and/or business missions to create, clarify and communicate a clear program vision
          `,
    },
    {
      name: "Simon flom",
      role: "VP & COO",
      image: `${Simon_image}`,
      email: "info@turbofederal.com",
      linkedin: "https://www.linkedin.com/in/simon-flom-4a38038/",
      bio: `Simon Flom has been supporting federal customers in a variety of capacities for over 15 years. He has led numerous large-scale cyber projects from inception to successful completion. He formed Turbo Federal to solve complex mission challenges unique to Federal agencies and accelerate desired objectives using customized agile cyber solutions.
    
          Turbo Federal's dedicated engineering and support staff is the foundation of our business. Each individual is carefully selected based on strict technical qualifications, work ethic, spirit, and commitment to meeting our clients' goals. They all share our core company philosophy to:\n\n- Build a Positive Team Spirit.\n- Build Honest and Open Relationships with Communication.\n- Do More with Less.\n- Be Passionate and Determined.\n- Pursue Growth and Learning.\n- Embrace Creative Thought.
    
          We look forward to accelerating your mission, regardless of size or complexity. To learn how Turbo can accelerate your mission, visit us http://www.turbofederal.com/.`,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-5 p-4">
        <p className=" text-4xl md:text-4xl lg:text-7xl font-medium">
          About Team
        </p>
        <div className="md:w-[65%]  flex flex-col md:gap-12 lg:gap-20  gap-8">
          {persons.map((person, index) => (
            <div className="flex flex-col md:gap-5 gap-6" key={index}>
              <div className="flex items-center md:gap-4 gap-5">
                <img
                  className="md:w-[208px] w-[116px] md:h-[255px] h-[140px] object-cover rounded-3xl md:rounded-[50px] shadow-lg shadow-gray-500"
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
                    <a href="/#contact-us">
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
              <p className="whitespace-pre-line">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
