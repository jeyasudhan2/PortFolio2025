import React from "react";

export default function TableOfContents({ children }) {
  return (
    <div className="w-[230px] fixed top-40 plus-jakarta  z-50 right-30 rounded-lg bg-[#29152e] border border-white/10 shadow-lg overflow-hidden">
      <div className="px-5 py-2 flex justify-between items-center border-b border-white/10">
        <h2 className="text-white text-xs">Table of Contents</h2>
        <div className=" flex gap-1 justify-end ">
          <span className=" w-2.5 h-2.5  bg-[#3a343b] rounded-full"></span>
          <span className=" w-2.5 h-2.5  bg-[#312b33] rounded-full"></span>
          <span className=" w-2.5 h-2.5 bg-[#403544] rounded-full"></span>
        </div>
      </div>

      {children}
    </div>
  );
}
