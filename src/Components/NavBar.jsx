import React from 'react'
import { useState,useEffect } from 'react';
import { FaGithubAlt } from "react-icons/fa";
import { LiaKeyboardSolid } from "react-icons/lia";
import { SiSlashdot } from "react-icons/si";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={` ${scrolled ? " bg-[#801da17a] backdrop-blur-xl " : "bg-[#130b19] border-none "}  w-full px-5 sticky top-0   z-50 border-b-2 border-b-[#ffffff4d] h-15 flex justify-center items-center mb-2 `}>
      <nav className='flex justify-between items-center  w-full h-full  mt-2 '>
        <div className='flex items-center gap-3.5 text-[12px]  poppins-medium  '>
          <div className='bg-[#cc00ff] p-2 rounded'><Link to="/">
           <SiSlashdot  /> 
          </Link>
          </div>
          
          <Link className="not-hover:opacity-80" to="/">Projects</Link>
          <Link className='bg-[#cc00ff74] py-2 px-3 rounded-md not-hover:opacity-80' to="/certificate-blogs">Certificate-Blogs</Link>
          <Link className="not-hover:opacity-80" to="/about">About</Link>
          <Link className="not-hover:opacity-80" to="/skill">Skill && Tools</Link>
          <Link className="not-hover:opacity-80" to="/">Experience</Link>
          <Link className="not-hover:opacity-80" to="/">Contact</Link>
          
        </div>
        <div className='flex text-xl gap-4 items-center justify-between'>
          <FaGithubAlt /> 
          <span className='h-6 w-0.5 bg-white/30'></span>
          <LiaKeyboardSolid />
            <div className='text-[12px] gap-3 flex items-center poppins-medium bg-[#801da17a] px-3 py-1 rounded'> Quick access<span class="w-[17px] h-6 flex items-center justify-center 
                      border border-b-3 border-white font-mono rounded
                      bg-white/5 text-white font-semibold text-sm">
            Q
          </span>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default NavBar