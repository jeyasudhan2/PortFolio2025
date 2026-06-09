import React, { useContext, useState } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "../Hook/ThemeContext";
import { CiLock } from "react-icons/ci";

const Footer = () => {
  const { theme } = useContext(Themecontext);
    const [active,setActive] =useState(false)
  

  const navigate = useNavigate();

  const navigateAbout = () => {
    setTimeout(() => {
      navigate("/about");
    }, 1500);
  };
  return (
    <footer
      className={`w-[90%]  plus-jakarta text-[12px] ${theme == "Dark" ? `bg-[#130b19] text-gray-300  ` : ` bg-white text-[#130b19]`} px-6 py-12 md:px-16`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-xs ">
        {/* ABOUT */}
        <div className=" col-span-2">
          <h3
            onClick={navigateAbout}
            className="text-sm opacity-90   cursor-pointer   tracking-wide mb-4"
          >
            About Me
          </h3>
          <p className="text-xs text-balance leading-relaxed max-w-xs">
            Jeyas udhan, a{" "}
            <i className="font-semibold italic">front–end developer </i> who
            loves intuitive, clean and modern UI design.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-6 text-sm">
            <FaGithub
              size={18}
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            />
            <FiFigma
              size={18}
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            />
            <LiaReact
              size={18}
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            />
            <SiFramer
              size={18}
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            />
            <SiNextdotjs
              size={18}
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            />
          </div>
        </div>

        {/* WORK */}
        <div>
          <h3 className="text-sm opacity-80   tracking-wide mb-4">Work</h3>
          <ul className=" flex flex-col gap-1 ">
            <Link
              to="/about/#contact"
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            >
              Contact
            </Link>
            <Link
              to="/"
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            >
              Experience
            </Link>

            <Link
              to="/skill#professionalToolKit"
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            >
              Skills and Tools
            </Link>
          </ul>
        </div>

        {/* LEARN */}
        <div>
          <h3 className="  text-sm opacity-80    tracking-wide mb-4">Learn</h3>
          <ul className="space-y-2 flex flex-col ">
            <Link
              to="/blogs"
              className={`${theme == "Dark" ? `bg-[#130b19] hover:text-white  ` : ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}
            >
              Blog • W.I.L
            </Link>
            <Link className={` ${active?" not-hover:opacity-80":"opacity-35 cursor-not-allowed "} flex items-center gap-1 `} disabled={true} to={`${active?"/services":"/"}`}>
              Services <span> <CiLock/></span>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-800 text-xs">
        <p>© 2025, Jeyasudhan</p>
        <p className="mt-4 md:mt-0 hover:text-white cursor-pointer">
          see the recent update on GitHub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
