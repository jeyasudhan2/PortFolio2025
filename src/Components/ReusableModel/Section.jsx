import React, { useContext } from "react";
import { Themecontext } from "../../Hook/ThemeContext";

export const SkillLabel = ({ name, level }) => {

  const { theme, setTheme } = useContext(Themecontext)
  return (
    <div className=" group flex flex-col items-start">
      <span className={`  px-4 py-1 poppins-medium font-light ${theme == "Dark"? `bg-[#bf04cc29] text-white `: `bg-[#c396dd]  text-[#130b19]  `}  hover:bg-[#bf04ccc6]  rounded-t-md`}>
        {name}
      </span>

      {/* Underline Indicator */}
      <div className="  w-full h-1   bg-transparent">
        <div
          className={`h-0.5  ${theme == "Dark"? ` bg-[#bf04cc]  group-hover:bg-[#b300ff]  text-white `: `bg-[#442646]  group-hover:bg-[#0a060c] `} rounded-b   `}
          style={{
            width: `${level * 20}%` // 5 levels → 100%
          }}
        ></div>
      </div>
    </div>
  );
};

export const Section = ({ title, items }) => {
  const { theme, setTheme } = useContext(Themecontext)
  return (
    <div className="mb-10 text-pop-up-right-delay4">

      <h2 className={` -ml-15 group text-2xl font-semibold${theme == "Dark"? ` text-white/80 `: ` text-[#130b19] `} mb-4 poppins-medium `}>

        <span className={`opacity-0 group-hover:opacity-100 italic  mr-7  ${theme == "Dark"? ` text-white/80 `: ` text-[#130b19] `} bg-[#e102d63d] px-1.5 rounded transition`}>

          #
        </span>
        {title}
      </h2>
      
      <div className="flex  flex-wrap  gap-2">
        {items.map((item, idx) => (
          <SkillLabel key={idx} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
};
