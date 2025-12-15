import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DataScienceCertificate, FigmaCertificate1, Reactcertificate } from "../assets";

const Certification = () => {
  const certifications = [
    {
      name: "React",
      provider: "HackerRank",
      description:
        "This React.js certification from HackerRank demonstrates proficiency in building dynamic, component-based user interfaces. It covers key concepts such as JSX, props, state management, React Hooks, event handling, and lifecycle methods. The certification reflects practical experience .",

    Certificate_Link:Reactcertificate
      },
    {
      name: "Data Science",
      provider: "HP",
      description:
        "The Data Science certification from HP validates expertise in data analysis, statistical modeling, and machine learning. It includes hands-on experience with Python/R, data visualization, exploratory data analysis, and predictive modeling. This certification demonstrates the ability to solve real-world business problems through data-driven decision making.",
    
    Certificate_Link:DataScienceCertificate
      },
    {
      name: "Figma",
      provider: "Coursera",
      description:
        "This Figma certification from Coursera showcases skills in UI/UX design, wireframing, and prototyping. It includes creating interactive prototypes, collaborating on design systems, and applying user-centered design principles. The certification demonstrates proficiency in designing visually appealing and intuitive interfaces for web and mobile applications.",
    
       Certificate_Link:FigmaCertificate1
      },
  ];

  return (
    <div className=" w-[90%] min-h-screen   ">
      <section className="relative  ">
        <h1 className="  text-pop-up-right boldonse-regular text-3xl text-[#BF40BF]  mt-6 -ml-10  lg:mt-15 lg:ml-30">
          Certification
        </h1>

        <h1 className=" absolute hidden  sm:hidden lg:block boldonse-regular 3xl md:5xl lg:text-9xl top-50 left-20  text-outline opacity-55 z-0 ">
          CERTIFICATON
        </h1>
        <div
        
          className="   flex flex-col    lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center items-center gap-6 mt-10 z-40 lg:border-l-2   lg:border-l-[purple]  "
        >
          {certifications.map((certificate, idx) => (
            <div
           
              className="bg-transparent  text-xs md:text-sm lg:text-[16px] overflow-hidden hover:shadow-[0_0_5px_1px_#fc29fc,0_0_7px_2px_#fc29fc] backdrop-blur-xl  hover:scale-105 transition duration-150  border-2 border-[#550655] sm:w-110 sm:h-40   lg:w-[25%] lg:h-100 md:w-110  md:h-50 flex flex-col justify-evenly  rounded-[15px]   px-4 py-5  z-50    "
              key={idx}
            >
              <h1 className="boldonse-regular">About:<span className=" text-[#fc29fc]">{certificate.name}</span></h1>
              <p className="poppins-medium ">
                Description:{certificate.provider} :{"       "}
                <span className="text-[#bb20bb]   font-light">
                  {certificate.description}
                </span>
              </p>
              <a className="bg-[#c766da] w-10 h-10 rounded-full grid place-content-center " href={certificate.Certificate_Link}>
                <FaExternalLinkAlt  />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certification;
