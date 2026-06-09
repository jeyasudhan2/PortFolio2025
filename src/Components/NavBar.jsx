import React, { useState, useEffect, useContext } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { LiaKeyboardSolid } from "react-icons/lia";
import { SiSlashdot } from "react-icons/si";
import { RiArrowRightSFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Themecontext } from "../Hook/ThemeContext";

const NavBar = () => {
  const { theme, setIsOpen } = useContext(Themecontext);
  const [scrolled, setScrolled] = useState(false);
  const [active,setActive] =useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? ` opacity-0  transition-opacity duration-75`
          : `bg-[#130b19] `
      } w-full px-5 sticky top-0 z-50  ${
        theme == "Dark" ? ` text-white  ` : ` bg-white text-[#130b19]  `
      } h-15 flex justify-center plus-jakarta items-center mb-2`}
    >
      <nav className="flex justify-between items-center w-full h-full mt-2">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3.5 text-[10px] ">
          <div className="bg-[#cc00ff] p-2 rounded">
            <Link to="/">
              <SiSlashdot />
            </Link>
          </div>

          {/* LINKS → HIDDEN ON SM & MD */}
          <div className="hidden text-[11.5px]  lg:flex items-center gap-3.5">
            <Link className="not-hover:opacity-80" to="/">
              Projects
            </Link>
            <Link
              className="bg-[#cc00ff74] py-1  flex  items-center px-2.5  rounded-full not-hover:opacity-80"
              to="/blogs"
            >
              <span>
                <RiArrowRightSFill className=" text-white/90" size={15} />
              </span>
              Blogs
            </Link>
            <Link className="not-hover:opacity-80" to="/about">
              About
            </Link>
            <Link className="not-hover:opacity-80" to="/skill">
              Skill & Tools
            </Link>
            <Link className="not-hover:opacity-80" to="/experience">
              Experience
            </Link>
            <Link className={` ${active?" not-hover:opacity-80":"opacity-35 cursor-not-allowed "} flex items-center gap-1 `} disabled={true} to={`${active?"/services":"/"}`}>
              Services <span> <CiLock/></span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (ALWAYS VISIBLE) */}
        <div className="flex text-xl gap-4 items-center justify-between">
          <a href="https://github.com/jeyasudhan2">
            {" "}
            <FaGithubAlt />
          </a>
          <span className="h-6 w-0.5 bg-white/30"></span>
          <LiaKeyboardSolid />

          {/* QUICK ACCESS */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-[10px] gap-3 flex items-center poppins-medium bg-[#801da17a] px-5 py-1 rounded-xl"
          >
            Quick access
            <span
              className={`w-[15px] h-6 flex items-center justify-center
              border-1  border-b-3 font-mono rounded
              bg-white/5  font-semibold text-sm
               ${
                 theme == "Dark"
                   ? ` border-white text-white `
                   : `border-black text-black `
               }
              `}
            >
              Q
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
