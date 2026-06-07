import React, { useContext, useEffect, useState } from "react";
import ProfileSvg from "../Components/ReusableModel/ProfileSvg";
import { OgImg } from "../assets";
import { Themecontext } from "../Hook/ThemeContext";
import { Italic } from "lucide-react";

const Home = ({ SocialMedia }) => {
  const { theme } = useContext(Themecontext);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 800);
  }, []);

  return (
    <div
      className={`w-[95%] flex  justify-between items-center h-screen ${theme == "Dark" ? ` text-white ` : ` bg-white text-[#130b19]`}`}
    >
      {/* LEFT CONTENT */}
      <section className="flex text-balance   gap-25 flex-col  items-baseline justify-center text-left min-h-screen px-4">
        <div className="flex text-balance    flex-col gap-7 items-baseline justify-center text-left  px-4">
          <h1 className=" text-6xl lg:text-6xl plus-jakarta font-bold text-pop-up-right">
            <span className=" font-light text-3xl  text-[#574f57]">
              Hiii <span className="wiggle">🤟</span>
            </span>
            <br />
            <span className="text-purple-500">I'm </span>{" "}
            <span
              className={`px-3  ${theme == "Dark" ? ` text-white/80 ` : ` text-[#130b19] `}`}
            >
              Jeya Sudhan,
            </span>
          </h1>

          <p
            className={` lg:text-[15px]  text-balance  text-[17px] ${theme == "Dark" ? `  text-white/60 ` : ` bg-white text-[#130b19]`} opacity-90 max-w-md text-pop-up-right-delay2`}
          >
            a{" "}
            <span className=" italic text-white  text-[15px] lowercase font-bold">
              Full-Stack Developer
            </span>{" "}
            Specializing in the Python. I love building dynamic, Responsive web
            applications and solving complex problems with clean, efficient
            code...
          </p>

          <div className="flex text-[13px] gap-6 text-pop-up-right-delay3">
            <button className="relative bg-[#3b234b] text-white  px-7 rounded-xl">
              Hire Me
            </button>

            <button
              className={`bg-transparent border rounded-xl py-2 px-5 hover:shadow-[0_0_4px_0.2px_white] ${theme == "Dark" ? `bg-[#130b19] text-white  border-white ` : ` bg-white border-[#130b19] border-2  text-[#130b19]`} transition duration-300`}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="flex  flex-col gap-3  text-pop-up-right-delay3">
          <p className=" text-[13px] text-white/70 pl-6">
            current favorite tech stack/tools:
          </p>
          <div className="flex  gap-3 text-pop-up-right-delay4">
            {SocialMedia.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`hover:-translate-y-1 text-2xl transition duration-100 ${theme == "Dark" ? ` text-white/50 hover:text-[#ffffff] ` : ` text-black/60 hover:text-[#3b234b]`} `}
              >
                {item.platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT PROFILE SVG (LG ONLY) */}
      <section className="z-10 relative hidden lg:flex items-center justify-center">
        <div className="absolute bg-gradient-to-t from-[#321d43] via-[#35204600] to-transparent overflow-hidden right-20 -top-70 h-[450px] w-[355px] z-20 rounded-full">
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
  );
};

export default Home;
