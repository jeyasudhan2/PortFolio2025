import React, { useState } from "react";
import { Section } from "../Components/ReusableModel/Section";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TableOfContents from "../Components/ReusableModel/TableOfContents";
import { techStack } from "../utils/techStack.data";

const Skill = () => {
  const [active, setActive] = useState("false");
  const location = useLocation();
  console.log(location.hash);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <div className="w-[90%] min-h-screen overflow-hidden relative space-y-15 plus-jakarta   lg:z-40">
      <div className="font-bold text-2xl lg:text-5xl mt-15    text-pop-up-right-delay2">
        <h1 className="font-bold text-2xl lg:text-3xl mt-15   text-[#BF40BF] ">
          Skills
        </h1>
        <h1
          id="professionalToolKit"
          className=" font-bold text-2xl lg:text-5xl "
        >
          Professional Toolkit
        </h1>
      </div>

      <section className="flex relative flex-col items-center  justify-center gap-20">
        <div className="hidden lg:block lg:w-4/12">
          <div className="absolute z-10 top-24">
            <TableOfContents>
              <p className=" text-[12px] text-[#bfadc7]   pt-2 px-3">
                Front-End Developer
              </p>
              <div className="py-2   text-[11.3px]">
                {techStack.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`w-full text-left px-7 py-1 transition ${
                      active == item
                        ? "text-purple-400 bg-white/5"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </TableOfContents>
          </div>
        </div>

        <div className="flex flex-col items-start   justify-baseline border-l space-y-10  border-l-amber-50/10 px-20 ml-35  ">
          <div className="   flex flex-col  gap-3">
            <h1 className="   -translate-x-10 lg:-translate-x-20 text-xl sm:text-2xl lg:text-4xl font-bold plus-jakarta text-pop-up-right-delay3">
              Detail and Summary
            </h1>
            <p className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] -translate-x-10 lg:-translate-x-20 text-white/60 font-light text-pop-up-right-delay4">
              I represent all data in labels to make it easier to read. The
              underline indicator shows how often I used the related item, e.g.:
            </p>
            <div className="w-10/12  h-px bg-white/5 mt-5" />
          </div>

          <Section
            title="Programming Languages"
            items={[
              { name: "TypeScript", level: 3 },
              { name: "JavaScript", level: 5 },
              { name: "HTML", level: 4 },
              { name: "CSS", level: 4 },
              { name: "SQL", level: 2 },
            ]}
          />

          <Section
            title="Technologies"
            items={[
              { name: "Tailwind CSS", level: 4 },
              { name: "Material UI", level: 3 },
              { name: "Bootstrap", level: 3 },
              { name: "React", level: 4 },
              { name: "Redux", level: 4 },
              { name: "Express", level: 3 },
              { name: "MongoDB", level: 3 },
            ]}
          />

          <Section
            title="Softwares and Tools"
            items={[
              { name: "VS Code", level: 5 },
              { name: "Node.js", level: 4 },
              { name: "Git", level: 4 },
            ]}
          />
          <div className="w-10/12 h-px bg-white/5 mt-5" />
        </div>
      </section>
    </div>
  );
};

export default Skill;
