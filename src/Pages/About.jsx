import React, { useContext, useEffect, useState } from "react";
import Aurora from "../Components/Aurora";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { JeyasudhnaResume } from "../assets";
import { Themecontext } from "../Hook/ThemeContext";
import TableOfContents from "../Components/ReusableModel/TableOfContents";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const [active, setActive] = useState("Contact");
  const { theme } = useContext(Themecontext);

  const location = useLocation();
  console.log(location.hash);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location]);
  const contactData = [
    { label: "Country", value: "India" },
    { label: "Cell", value: "+91 - 6379029822" },
    {
      label: "E-mail",
      value: "jeyacoder265@gmail.com",
      isEmail: true,
    },
  ];
  const socialData = [
    { label: "LinkedIn", value: "https://linkedin.com/in/jeyasudhanr" },
    { label: "WhatsApp", value: "+91 - 6379029822" },
    {
      label: "Instagram",
      value: "https://instagram.com/sudhannnn",
    },
  ];

  const items = [
    { Name: "#web developer" },
    { Name: "#frontend developer" },
    { Name: "#react developer" },
    { Name: "#uiux designer" },
  ];

  const T_items = ["Contact", "Socialmedia"];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = JeyasudhnaResume;
    link.download = "JeyaSudhan_Resume.pdf";
    link.click();
  };

  return (
    <div className="relative w-11/12 mx-auto plus-jakarta min-h-screen">
      <div className="absolute inset-0 z-10">
        <Aurora
          colorStops={["#C147E9", "#000000", "#C147E9"]}
          amplitude={18.2}
          blend={0.5}
          speed={0.8}
        />
      </div>

      <div className="relative z-10">
        <div className="flex flex  gap-3 justify-between backdrop-blur-2xl py-3">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="text-[10px] md:text-xl lg:text-2xl p-3 uppercase"
            >
              {item.Name}
            </span>
          ))}
        </div>

        <section className="flex flex-col lg:flex-row gap-20 py-20">
          <div className="lg:w-8/12 lg:px-10">
            <h1 className="plus-jakarta font-bold text-2xl lg:text-3xl mt-10 text-[#BF40BF] mb-5">
              About
            </h1>

            <p className="plus-jakarta font-semibold text-4xl lg:text-5xl leading-tight">
              Software Engineer
            </p>

            <p className="mt-6 max-w-xl opacity-80 text-[13px] lg:text-[14px] text-white/60 lowercase">
              I’m{" "}
              <span className="capitalize text-white font-semibold px-2 text-[15px]">
                Jeya Sudhan R
              </span>
              , a software Engineer skilled in building scalable web
              applications using React, Node.js, Express.js, and MongoDB, along
              with experience in Python, Django, and Flask. I enjoy creating
              clean UIs with Tailwind CSS, Material UI, and Ant Design, and
              building efficient RESTful APIs.
            </p>

            <button
              onClick={handleDownload}
              className="mt-7 plus-jakarta text-[12px] bg-[#BF40BF] text-white py-2 px-4 flex items-center gap-2 rounded"
            >
              <IoDocumentTextOutline size={15} />
              Resume
            </button>
          </div>

          <div className="hidden lg:block lg:w-4/12">
            <div className=" fixed top-24">
              <TableOfContents>
                <div className="py-2 text-xs">
                  {T_items.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActive(item)}
                      className={`w-full text-left px-5 py-2 capitalize transition ${
                        active === item
                          ? "text-purple-400 bg-white/5"
                          : "text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <Link to={`#${item.toLowerCase().trim(" ")}`}>
                        {item}
                      </Link>
                    </button>
                  ))}
                </div>
              </TableOfContents>
            </div>
          </div>
        </section>

        <section className="lg:px-10 plus-jakarta space-y-10 pb-20">
          <h1 id="contact" className="text-3xl lg:text-4xl  font-semibold mb-6">
            Contact
          </h1>

          <div className="text-[#afa4af] space-y-4">
            <p className="text-xl max-w-2xl">
              Get in touch with me anytime, through social media, e-mail, or
              phone number.
            </p>

            <div className="text-sm  border-l border-l-white/10  px-10 max-w-2xl flex flex-col gap-5">
              <article className=" ">
                Just a friendly reminder that the information provided here is
                for
                <span className=" font-semibold text-sm text-white">
                  business purposes only
                </span>
                . If you have any questions, feel free to chat with me directly
                on my social media.
              </article>
              <p>I appreciate your understanding in using this responsibly.</p>
              <div className=" w-9/12 h-[1.5px] bg-white/10" />
              <div className="max-w-3xl  mt-10">
                <div className="bg-[#130b19] border plus-jakarta border-white/10 rounded-md overflow-hidden">
                  <div className="grid grid-cols-2 px-4 py-2 border-b text-[12px] border-white/10 text-white/70 ">
                    <span>Contact</span>
                    <span>Details</span>
                  </div>

                  {/* ROWS */}
                  {contactData.map((item, index) => (
                    <div
                      key={`${index}`}
                      className="grid grid-cols-2 text-[12px] px-4 py-2 "
                    >
                      {/* LEFT */}
                      <span className="text-white/60">{item.label}</span>

                      {/* RIGHT */}
                      <span className="text-white flex items-center gap-2">
                        {item.isEmail ? (
                          <>
                            <IoMailOutline />
                            <a
                              href={`mailto:${item.value}`}
                              className="text-blue-400 hover:underline"
                            >
                              {item.value}
                            </a>
                          </>
                        ) : (
                          item.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" mt-10 w-9/12 h-[1.5px] bg-white/10"></div>
            </div>
          </div>
        </section>
        <section className=" lg:px-10  space-y-10 pb-20">
          <h1 id="socialmedia" className=" text-3xl lg:text-4xl font-semibold ">
            SocialMedia
          </h1>
          <div className="text-sm  border-l text-[#afa4af] border-l-white/10  px-10 max-w-2xl flex flex-col gap-5">
            <p>
              If you want to find me on social media, just search for That's my
              username on almost all platforms, so it should be easy to find me.
            </p>
            <p>
              But if you're short on time, I've included some links to the
              social media platforms I use most frequently below.
            </p>
          </div>
          <div className="max-w-3xl px-10 mt-10">
            <div className="bg-[#130b19] border plus-jakarta border-white/10 rounded-md overflow-hidden">
              <div className="grid grid-cols-2 px-4 py-2 border-b text-[12px] border-white/10 text-white/70 ">
                <span>Social Media</span>
                <span>Profile URL</span>
              </div>

              {socialData.map((item, index) => (
                <div
                  key={`${index}`}
                  className="grid grid-cols-2 text-[11px] px-4 py-2 "
                >
                  <span className="text-white/60">{item.label}</span>

                  <span className="text-white flex items-center gap-2">
                    <a
                      href={`${item.value}`}
                      className="text-blue-400 hover:underline"
                    >
                      {item.value}
                    </a>
                  </span>
                </div>
              ))}
            </div>
            <div className=" mt-10 w-9/12 h-[1.5px] bg-white/10"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
