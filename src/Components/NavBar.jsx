import React, { useState, useEffect, useContext } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { LiaKeyboardSolid } from "react-icons/lia";
import { SiSlashdot } from "react-icons/si";
import { Link } from "react-router-dom";
import { Themecontext } from "../Hook/ThemeContext";


const NavBar = () => {
  const { theme, setTheme ,setIsOpen } = useContext(Themecontext);
  const [scrolled, setScrolled] = useState(false);
  

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
    <>
      <div
        className={`${
          scrolled
            ? `bg-[#261631] backdrop-blur-xl`
            : `bg-[#130b19] border-none`
        } w-full px-5 sticky top-0 z-50 border-b-2 border-b-[#ffffff4d] ${
          theme == "Dark"
            ? ` text-white  `
            : ` bg-white text-[#130b19]  `
        } h-15 flex justify-center items-center mb-2`}
      >
        <nav className="flex justify-between items-center w-full h-full mt-2">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3.5 text-[12px] poppins-medium">
            <div className="bg-[#cc00ff] p-2 rounded">
              <Link to="/">
                <SiSlashdot />
              </Link>
            </div>

            {/* LINKS → HIDDEN ON SM & MD */}
            <div className="hidden lg:flex items-center gap-3.5">
              <Link className="not-hover:opacity-80" to="/">
                Projects
              </Link>
              <Link
                className="bg-[#cc00ff74] py-2 px-3 rounded-2xl not-hover:opacity-80"
                to="/certificate-blogs"
              >
                Certificate-Blogs
              </Link>
              <Link className="not-hover:opacity-80" to="/about">
                About
              </Link>
              <Link className="not-hover:opacity-80" to="/skill">
                Skill & Tools
              </Link>
              <Link className="not-hover:opacity-80" to="/">
                Experience
              </Link>
              <Link className="not-hover:opacity-80" to="/">
                Contact
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (ALWAYS VISIBLE) */}
          <div className="flex text-xl gap-4 items-center justify-between">
            <FaGithubAlt />
            <span className="h-6 w-0.5 bg-white/30"></span>
            <LiaKeyboardSolid />

            {/* QUICK ACCESS */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-[12px] gap-3 flex items-center poppins-medium bg-[#801da17a] px-5 py-1 rounded-xl"
            >
              Quick access
              <span
                className={`w-[17px] h-6 flex items-center justify-center
              border-1 p-2 border-b-3 font-mono rounded
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

    
    </>
  );
};

export default NavBar;
