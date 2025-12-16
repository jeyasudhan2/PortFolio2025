import React, { useContext } from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Themecontext } from '../Hook/ThemeContext';

const Footer = () => {

  const { theme, setTheme } = useContext(Themecontext)

  const navigate = useNavigate()

  const navigateAbout =()=>{
   setTimeout(()=>{

     navigate('/about')
   },1500)
  }
  return (
    <>
   
       <footer className={`w-[90%] poppins-light text-[13px] ${theme == "Dark"? `bg-[#130b19] text-gray-300  `: ` bg-white text-[#130b19]`} px-6 py-12 md:px-16`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 onClick={navigateAbout} className="text-sm opacity-90   cursor-pointer   tracking-wide mb-4">
            About Me
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Jeya Sudhan, a <span className="font-semibold">front–end developer </span> 
            who loves intuitive, clean and modern UI design.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-6 text-xl">
            <FaXTwitter  className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`} />
 
            <FaGithub  className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}/>
            <FiFigma  className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}/>
          </div>
        </div>

        {/* WORK */}
        <div>
          <h3 className="text-sm opacity-80   tracking-wide mb-4">
            Work
          </h3>
          <ul className=" flex flex-col gap-1 text-sm">
            <Link to="/"  className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}>Contact</Link>
            <Link to="/"   className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}>Experience</Link>
          
            <Link to="/skill"   className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}>Skills and Tools</Link>
    
          </ul>
        </div>

        {/* LEARN */}
        <div>
          <h3 className="text-sm opacity-80    tracking-wide mb-4">
            Learn
          </h3>
          <ul className="space-y-2 text-sm">
            
            <Link to="/certificate-blogs"  className={`${theme == "Dark"? `bg-[#130b19] hover:text-white  `: ` bg-white text-black/60 hover:text-[#130b19] `} cursor-pointer`}>Certificate-Blog</Link>
             
          </ul>
        </div>

    
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-800 text-sm">
        <p>© 2025, Jeya Sudhan</p>
        <p className="mt-4 md:mt-0 hover:text-white cursor-pointer">
          see the recent update on GitHub
        </p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer