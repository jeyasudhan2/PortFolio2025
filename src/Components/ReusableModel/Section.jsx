import React from "react";

export const SkillLabel = ({ name, level }) => {
  return (
    <div className=" group flex flex-col items-start">
      <span className="  px-4 py-1 poppins-medium font-light bg-[#bf04cc29] hover:bg-[#bf04ccc6]  text-gray-200 rounded-t-md">
        {name}
      </span>

      {/* Underline Indicator */}
      <div className="  w-full h-1   bg-transparent">
        <div
          className={`h-[2px] bg-[#bf04cc] rounded-b  group-hover:bg-[#b300ff]  `}
          style={{
            width: `${level * 20}%` // 5 levels → 100%
          }}
        ></div>
      </div>
    </div>
  );
};

export const Section = ({ title, items }) => {
  return (
    <div className="mb-10 text-pop-up-right-delay4">

      <h2 className=" -ml-15 group text-2xl font-semibold text-white mb-4 poppins-medium ">

        <span className="opacity-0 group-hover:opacity-100 italic  mr-7  text-[#ffffff] bg-[#e102d63d] px-1.5 rounded transition">

          #
        </span>
        {title}
      </h2>
      
      <div className="flex flex-wrap gap-6">
        {items.map((item, idx) => (
          <SkillLabel key={idx} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
};