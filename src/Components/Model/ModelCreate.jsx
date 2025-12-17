import React, { useContext } from "react";

import { GiClosedBarbute } from "react-icons/gi";
import { Themecontext } from "../../Hook/ThemeContext";

const   ModelCreate = ({ children, IsOpen, IsClose }) => {
  const { theme, setTheme, setIsOpen } = useContext(Themecontext);
  if (!IsOpen) return null;

  return (
    <>
      <div
        className={` ${
          theme == "Dark"
            ? `bg-[#130b19] text-white `
            : `bg-[#ffffff] text-[#130b19]`
        }   fixed inset-0 bg-[#130b19] flex flex-col py-10  w-full min-h-screen  z-50 `}
      >
        <button className=" absolute right-5 lg:right-10 top-4 text-3xl" onClick={IsClose}>
          <GiClosedBarbute />
        </button>

        {children}
      </div>
    </>
  );
};

export default ModelCreate;
