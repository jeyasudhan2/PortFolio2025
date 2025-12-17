import React, { useContext } from 'react'
import Aurora from '../Components/Aurora'
import { JeyasudhnaResume } from '../assets'
import { Themecontext } from '../Hook/ThemeContext'

const About = ({ SocialMedia }) => {

  const { theme, setTheme } =useContext(Themecontext)
  const items = [
    { Name: '#web developer' },
    { Name: '#frontend developer' },
    { Name: '#react developer' },
    { Name: '#uiux designer' },
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = JeyasudhnaResume
    link.download = 'JeyaSudhan_Resume.pdf'
    link.click()
  }

  return (
    <>
      <div className="w-11/12 h-screen relative">
        {/* BACKGROUND AURORA */}
        <Aurora
          colorStops={['#C147E9', '#000000', '#C147E9']}
          amplitude={18.2}
          blend={0.5}
          speed={0.8}
        />

        {/* CONTENT */}
        <div className="z-40 absolute top-0 w-full h-screen overflow-hidden flex flex-col ">

          {/* TAGS */}
          <div className=" flex  gap-4 justify-between backdrop-blur-2xl">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] md:text-xl lg:text-2xl p-3 bg-transparent uppercase"
              >
                {item.Name}
              </span>
            ))}
          </div>

          {/* MAIN SECTION */}
          <section className="flex  flex-col   lg:flex-row w-full h-full">

            {/* LEFT SECTION */}
            <div className="  lg:basis-6/12  lg:px-30">
              <h1 className="boldonse-regular text-3xl lg:text-4xl mt-15 text-[#BF40BF] text-pop-up-right">
                About
              </h1>

              <p className="boldonse-regular text-xl lg:text-[28px] mt-6 leading-13 text-pop-up-right-delay2">
                SoftWare Engineer & <br /> MERN Stack Developer
              </p>

              <p className="mt-6 poppins-medium opacity-80 text-[12px] lg:text-[1rem]  text-pop-up-right-delay3">
                I’m{' '}
                <span className="font-extralight  bg-[#BF40BF] ">
                  Jeya Sudhan R
                </span>
                , a MERN-stack Developer and Software Engineer skilled in building
                scalable web applications using React, Node.js, Express.js, and
                MongoDB, along with experience in Python, Django, and Flask. I
                enjoy creating clean UIs with Tailwind CSS, Material UI, and Ant
                Design, and building efficient RESTful APIs.
              </p>

              <button
                onClick={handleDownload}
                className="mt-7 poppins-medium bg-[#BF40BF] text-white py-2 px-4 rounded model-card text-pop-up-right-delay3"
              >
                Download Resume
              </button>
            </div>

            {/* RIGHT SECTION (CLIP1 / THUNDER) */}
            {/* HIDDEN ON SMALL & MEDIUM */}
            <div className="relative basis-6/12 hidden lg:block">
              <h1 className={`absolute top-50 right-50 z-50 text-5xl ${theme == "Dark"? ` text-white `:  ` shadow-2xl bg-white text-yellow-300`} boldonse-regular backdrop-blur-xl p-6 rounded-2xl`}>
                THUNDER
                <span className="flex justify-center gap-4 mt-7">
                  {SocialMedia.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className={`hover:-translate-y-1 text-3xl transition duration-100 ${theme == "Dark"? `  text-white/50 hover:text-[#fffdff] `: ` bg-white text-black/60  hover:text-[#130b19] `} `}
                    >
                      {item.platform}
                    </a>
                  ))}
                </span>
              </h1>

              <div className="w-full h-full Thunder bg-amber-300"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default About
