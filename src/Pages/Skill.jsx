import React from "react";
import { Section } from "../Components/ReusableModel/Section";
import { Cssimg, Djangoimg,  Htmlimg, JavaScriptImg, MaterialUIimg, MongoDBimg, NodeJsImg, Pythonimg, Reactimg, Tailwindimg } from "../assets";



const Skill = () => {
  const tools = [
    { src: Reactimg, name: "React" },
    {
      src: Tailwindimg,
      name: "Tailwind",
    },
    {
      src:JavaScriptImg ,
      name: "JavaScript",
    },
    {
      src:NodeJsImg,
      name: "Node.js",
    },
    {
      src: Pythonimg,
      name: "Python",
    },
    { src: MongoDBimg, name: "Mongodb" },
    {
      src: Htmlimg,
      name: "Html",
    },
    {
      src:Cssimg,
      name: "CSS",
    },
    
    { src: MaterialUIimg, name: "Material Ui" },
    { src: Djangoimg, name: "Django" },

    // Add more...
  ];
  return (
    <div className="w-[90%] min-h-screen overflow-hidden ">
      <h1 className="boldonse-regular text-4xl mt-15 ml-30  text-[#BF40BF] text-pop-up-right">
        Professional Toolkit
      </h1>
      <section className="flex flex-col items-center justify-evenly  gap-20 ">
        <div className=' inline-flex gap-5 mt-20 py-7  px-7  animate-scroll backdrop-blur-2xl  '>
          {tools.concat(tools).map((tool, index) => (
            <div key={index} className="flex  w-15 h-15   brightness-130   ">
              <img
                src={tool.src}
                alt={tool.name}
                className=" bg-transparent   object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
        <div className=" flex flex-col  items-baseline ">
          <div className="mb-4 flex flex-col gap-3" >


                  <h1 className="text-4xl  poppins-bold text-pop-up-right-delay2">Detail and Summary</h1>
        <p className=" w-[70%] font-light text-pop-up-right-delay3">I represent all data in labels to make it easier to read. The underline indicator shows how often I used the related item, e.g.:</p>
          </div>

         <Section
        title="Programming Languages"
        items={[
          { name: "TypeScript", level: 3 },
          { name: "JavaScript", level: 5 },
          { name: "HTML", level: 4 },
          { name: "CSS", level: 4 },
   
          { name: "SQL", level: 2 }
        ]}
      />

      <Section
        title="Technologies"
        items={[
          { name: "Tailwind CSS", level: 4},
          { name: "Material UI", level: 3 },
    
          { name: "Bootstrap", level: 3 },

          { name: "React", level: 4 },
          { name: "Redux", level: 4 },
          
          { name: "Express", level: 3 },
        
          { name: "MongoDB", level: 3 }
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
        </div>
      </section>
    </div>
  );
};

export default Skill;
