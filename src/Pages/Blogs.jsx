import React from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { blogs } from "../utils/Blog.data";
import { CodeBlock } from "../Components/ReusableModel/CodeBlock ";

const Blogs = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen plus-jakarta  ">
      <section className="relative  ">
        <h1 className="  text-pop-up-right font-bold  w-full  lg:text-5xl md:text-4xl  text-3xl text-[#BF40BF]  mt-6 -ml-9  lg:mt-15 ">
          Blogs • What I Learn
        </h1>

        <div className="   grid   lg:grid-cols-3   lg:gap-6 mt-10     ">
          <div className=" relative lg:flex items-center justify-center hidden lg:col-start-1">
            <div className="  h-full w-[1.5px]   bg-white/30" />
            <MdOutlineLocationSearching
              size={20}
              className=" backdrop-blur-lg  text-white/70 absolute top-5"
            />
            <MdOutlineLocationSearching
              size={20}
              className=" backdrop-blur-lg text-white/70 absolute top-3/5 "
            />
            <MdOutlineLocationSearching
              size={20}
              className=" backdrop-blur-lg text-white/70 absolute top-4/5 "
            />
            <MdOutlineLocationSearching
              size={20}
              className=" backdrop-blur-lg text-white/70 absolute top-2/7 "
            />
          </div>
          <div className="  lg:col-span-2 grid place-items-start gap-4 ">
            {blogs.map((content, idx) => (
              <div key={idx}>
                <h1 className=" font-bold text-xl sm:text-2xl lg:text-3xl  ">{content.name}</h1>
                <p className="text-[14px] text-balance text-white/50 lowercase py-2  ">
                  {content.description}
                </p>
                <div className="  border-white/30 border-[.5px] jetbrains-mono! has-[div]:[&_span]:text-blue-500 text-white/60 lg:w-xl text-xs md:text-sm lg:text-[14px] flex flex-col justify-evenly rounded-[15px] px-4 py-3">
                  <div className=" flex gap-1 w-full justify-end space-y-3.5">
                    <span className=" w-3 h-3  bg-[#3a343b] rounded-full"></span>
                    <span className=" w-3 h-3  bg-[#312b33] rounded-full"></span>
                    <span className=" w-3 h-3 bg-[#403544] rounded-full"></span>
                  </div>

                  <CodeBlock code={content.codeSnippet} />
                  <div className="w-full h-[0.5px] bg-white/20 mt-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
