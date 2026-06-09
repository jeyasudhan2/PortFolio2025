import React, { useContext } from "react";
import { Themecontext } from "../../Hook/ThemeContext";

export const SkillLabel = ({ name, level }) => {
  const { theme } = useContext(Themecontext);

  return (
    <div className="group flex flex-col items-start">
      <span
        className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-light transition-colors duration-300 ${
          theme === "Dark"
            ? "bg-[#bf04cc29] text-white/70 hover:bg-[#562a59c6]"
            : "bg-[#c396dd] text-[#130b19] hover:bg-[#b88ed2]"
        } rounded-t-md`}
      >
        {name}
      </span>

      {/* Skill Level Indicator */}
      <div className="w-full h-1 bg-transparent">
        <div
          className={`h-0.5 rounded-b transition-colors duration-300 ${
            theme === "Dark"
              ? "bg-[#bf04cc] group-hover:bg-[#b300ff]"
              : "bg-[#442646] group-hover:bg-[#0a060c]"
          }`}
          style={{
            width: `${level * 20}%`,
          }}
        />
      </div>
    </div>
  );
};

export const Section = ({ title, items }) => {
  const { theme } = useContext(Themecontext);

  return (
    <div className="mb-10 plus-jakarta text-pop-up-right-delay4 w-full">
      <h2
        className={`ml-0 lg:-ml-15 group text-xl sm:text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 ${
          theme === "Dark" ? "text-white/80" : "text-[#130b19]"
        }`}
      >
        <span
          className={`hidden lg:inline opacity-0 group-hover:opacity-100 font-extralight text-[20px] mr-4 bg-[#e102d63d] px-1.5 rounded transition-all duration-300 ${
            theme === "Dark" ? "text-white/80" : "text-[#130b19]"
          }`}
        >
          #
        </span>

        {title}
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {items.map((item, idx) => (
          <SkillLabel
            key={idx}
            name={item.name}
            level={item.level}
          />
        ))}
      </div>
    </div>
  );
};