import React, { useContext, useEffect, useState } from "react";

import Aurora from "../Components/Aurora";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaArrowPointer } from "react-icons/fa6";
import NavBar from "../Components/NavBar";
import ProfileSvg from "../Components/ReusableModel/ProfileSvg";
import { OgImg } from "../assets";
import { Themecontext } from "../Hook/ThemeContext";

const Home = ({ SocialMedia }) => {
  const { theme, setTheme } = useContext(Themecontext)
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 1500);
  }, []);

  return (
    <>
      <div className={`w-[90%] flex gap-3.5 justify-between items-center h-screen ${theme == "Dark"? `bg-[#130b19] text-white `: ` bg-white text-[#130b19]`}`}>
        {/* LEFT CONTENT */}
        <section className="flex flex-col gap-8 items-baseline justify-center text-left min-h-screen px-4">
          <h1 className=" text-3xl lg:text-5xl boldonse-regular text-pop-up-right">
            <span className="text-purple-500">I'm </span>{" "}
            <span className={`px-3  ${theme == "Dark"? `bg-[#130b19] text-white/60 `: ` bg-white text-[#130b19] `}`}>Jeya Sudhan,</span>
          </h1>

          <p className={`text-sm lg:text-md capitalize poppins-medium ${theme == "Dark"? `bg-[#130b19] text-white `: ` bg-white text-[#130b19]`}opacity-90 max-w-xl text-pop-up-right-delay2`}>
            I'm a passionate Full-Stack Developer specializing in the MERN Stack
            and Python. I love building dynamic, responsive web applications and
            solving complex problems with clean, efficient code. Constantly
            learning and exploring new technologies, I strive to create digital
            experiences that are both functional and engaging.
          </p>

          <div className="flex gap-6 text-pop-up-right-delay3">
            <button className="relative bg-[#3b234b] text-white poppins-medium px-7 rounded-2xl">
              Hire Me
              <span className="absolute right-2 top-5 -translate-y-1/4 Blinking">
                <FaArrowPointer />
              </span>
            </button>

            <button className={`bg-transparent border-2 font-bold rounded-2xl py-3 px-7 hover:shadow-[0_0_5px_1px_white] ${theme == "Dark"? `bg-[#130b19] text-white  border-white `: ` bg-white border-[#130b19] border-2  text-[#130b19]`} transition duration-300`}>
              Get in Touch
            </button>
          </div>

          <div className="flex gap-3 items-center justify-center text-pop-up-right-delay4">
            {SocialMedia.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`hover:-translate-y-1 text-3xl transition duration-100 ${theme == "Dark"?` text-white/50 hover:text-[#ffffff] `:` text-black/60 hover:text-[#3b234b]`} `}
              >
                {item.platform}
              </a>
            ))}
          </div>
        </section>

        {/* RIGHT PROFILE SVG (LG ONLY) */}
        <section className="z-10 relative hidden lg:flex items-center justify-center">
          <div className="absolute bg-gradient-to-t from-[#321d43] via-[#35204600] to-transparent overflow-hidden right-20 -top-70 h-[500px] w-[375px] z-20 rounded-full">
            <ProfileSvg />

            <div
              className={`absolute top-28 -left-6 w-[400px] scale-210 z-20 inset-0 transition-opacity duration-700 h-[400px] ${
                done ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={OgImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
