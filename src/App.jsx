import React, { useContext } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Certification from "./Pages/Certification";
import Skill from "./Pages/Skill";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Aurora from "./Components/Aurora";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaArrowPointer } from "react-icons/fa6";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContext from "./Hook/ThemeContext";
import { Themecontext } from "./Hook/ThemeContext";

const App = () => {

  const { theme, setTheme }=useContext(Themecontext)
  console.log(theme)
  const socialMediaLinks = [
    {
      platform: <FaLinkedin />,
      link: "http://linkedin.com/in/jeya-sudhan-r-808a442ba",
    },
    {
      platform: <FaGithub />,
      link: "https://github.com/jeyasudhan2",
    },
    {
      platform: <IoLogoWhatsapp />,
      link: "https://wa.me/6379029822",
    },
    {
      platform: <SiLeetcode />,
      link: "https://leetcode.com/u/Jeyasudhan/",
    },
    {
      platform: <FaSquareInstagram />,
      link: "https://www.instagram.com/sudhannnnn__?igsh=MThycWRsZzdyZWc0eQ==",
    },
  ];
  return (
    <>
      <div className={`w-full  min-h-screen lg:flex flex-col lg:justify-center lg:items-center scroll-smooth ${theme == "Dark"? `bg-[#130b19] text-white `: `bg-[#ffffff] text-[#130b19]`} `}>
    
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<Home SocialMedia={socialMediaLinks} />}
              />
              <Route
                path="/about"
                element={<About SocialMedia={socialMediaLinks} />}
              />
              <Route path="/skill" element={<Skill />} />
              <Route path="/certificate-blogs" element={<Certification />} />
            </Routes>

            <Footer />
          </BrowserRouter>
   
      </div>
    </>
  );
};

export default App;
