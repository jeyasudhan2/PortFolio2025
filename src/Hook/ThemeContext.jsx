import React, { createContext, useEffect, useState } from "react";
import ModelCreate from "../Components/Model/ModelCreate";
import { GiUbisoftSun } from "react-icons/gi";
import { GiSemiClosedEye } from "react-icons/gi";
import { RxKeyboard } from "react-icons/rx";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";
import { IoGlassesSharp } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export const Themecontext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("Dark");
  const [isOpen, setIsOpen] = useState(false);
  const[foucs ,setFocus]=useState(false)

  const shortcuts = [
    {
      id: 1,
      action: "Open Quick Access",
      keys: ["Q"],
    },
    {
      id: 2,
      action: "Close Quick Access",
      keys: ["Esc"],
    },
    {
      id: 3,
      action: "Toggle Dark Mode",
      keys: ["D"],
    },
    {
      id: 4,
      action: "Toggle Light Mode",
      keys: ["L"],
    },
    {
      id: 5,
      action: "Toggle Focus",
      keys: ["F"],
    },
  ];

  useEffect(() => {
    const quickAccessTheme = (e) => {
      const key = e.key.toLowerCase();

      if (key === "d") setTheme("Dark");
      if (key === "l") setTheme("Light");
    };

    const OpenQuickAccess = (e) => {
      let Key_Value = e.key.toLowerCase();
      
      if (Key_Value === "q") setIsOpen(!isOpen);
      if (Key_Value === "escape") setIsOpen(false);
    };

    const Focushandle =(e)=>{
        let Key_Value = e.key.toLowerCase();
      console.log(Key_Value);
      if (Key_Value === "f") {
   toast(
  <div className="flex items-start gap-3 text-white w-full">
    {/* Icon */}
    <div className="mt-1">
      <IoGlassesSharp className="text-2xl text-yellow-300" />
    </div>

    {/* Content */}
    <div className="flex-1">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wide text-gray-400">
          System • Now
        </span>

        <span className="text-[10px] px-2 py-[2px] rounded-full bg-green-600/20 text-green-400">
          ON
        </span>
      </div>

      {/* Title */}
      <h1 className="text-sm font-semibold mt-1">
        Focus Mode Enabled
      </h1>

      {/* Message */}
      <p className="text-xs text-gray-300 leading-snug">
        Notifications are silenced to help you stay focused.
      </p>
    </div>
  </div>,
  {
    position: "bottom-right",
    theme: "light",
    style: {
      background:
        "linear-gradient(90deg, #130b19 0%, #130b19 100%)",
      borderRadius: "8px",
      borderWidth: "1px",
      borderColor: "#808080",
      width: 300,
      padding: "10px",
      color: "white",
    },
    hideProgressBar: true,
    autoClose: 1200,
    closeButton: false,
    draggable: false,
  }
);

        setFocus(prev => (prev == true?false:true))};
      

    }

    window.addEventListener("keydown", quickAccessTheme);
    window.addEventListener("keydown", OpenQuickAccess);
    window.addEventListener("keydown", Focushandle);

    // cleanup
    return () => {
      window.removeEventListener("keydown", quickAccessTheme);
      window.removeEventListener("keydown", OpenQuickAccess);
      window.removeEventListener("keydown", Focushandle);
    };
  }, []);

  return (
    <>
      <Themecontext.Provider value={{ theme, setTheme, setIsOpen }}>
        {children}
         <ModelCreate IsOpen={isOpen}  IsClose={() => setIsOpen(false)}>
       <>
  <div
    className="
      flex flex-col md:flex-col lg:flex-row
      w-[95%] h-auto lg:h-screen
      items-start lg:items-center
      justify-start lg:justify-between
      gap-8 lg:gap-0
      mx-auto
    "
  >

    {/* LEFT PANEL */}
    <div
      className="
        flex flex-col
        w-full md:w-full lg:w-[25%]
        gap-3
        px-2 md:px-4 lg:pl-6
        relative
        top-0 md:top-0 lg:top-40
      "
    >
      <div className="leading-4">
        <h1
          className={`poppins-bold text-lg md:text-xl flex gap-3
          ${theme === "Dark" ? "text-white/85" : "text-[#130b19]"}`}
        >
          <RxKeyboard className="text-2xl md:text-3xl" />
          Tip: Shortcuts
        </h1>

        <p
          className={`text-sm md:text-md
          ${theme === "Dark" ? "text-white/45" : "text-black/45"}`}
        >
          Navigate the site with ease using keyboard shortcuts.
        </p>
      </div>

      <div className="flex flex-col gap-3.5">
        {shortcuts.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between border-b-2 pb-2
            ${theme === "Dark"
              ? "border-b-white/5 opacity-100"
              : "border-b-black/30"}`}
          >
            <span
              className={`text-xs poppins-light
              ${theme === "Dark"
                ? "text-white/85"
                : "text-[#130b19]"}`}
            >
              {item.action}
            </span>

            <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
              {item.keys.map((key, index) => (
                <span
                  key={index}
                  className="
                    w-fit px-2 h-6
                    flex items-center justify-center
                    border border-b-3 font-mono rounded
                    bg-white/5 font-semibold text-xs
                  "
                >
                  {key}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-4 md:gap-6 lg:gap-2.5 w-full lg:w-auto">

    
       <h1 className={` text-2xl poppins-medium ${theme === "Dark"
            ? " text-white"
            : " text-[#3b234b] "}`}>Action Center</h1>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <button
          onClick={() =>  setTheme(prev => (prev === "Dark" ? "Light" : "Dark"))}
          className={`w-full md:flex-1 lg:w-3xs
          text-sm p-4 rounded-2xl
          flex flex-col gap-3 items-baseline
          poppins-light outline-0
          ${theme === "Dark"
            ? "bg-[#3b234b] text-white"
            : "bg-[#ffffff] text-[#3b234b] shadow-xl/20"}`}
        >
          {theme === "Dark"
            ? <BsFillMoonStarsFill className="text-lg" />
            : <GiUbisoftSun className="text-lg" />}
          DarkMode: {theme === "Dark" ? "On" : "Off"}
        </button>

        <button
        onClick={()=>{
        toast(
  <div className="flex items-start gap-3 text-white w-full">
    {/* Icon */}
    <div className="mt-1">
      <IoGlassesSharp className="text-2xl text-yellow-300" />
    </div>

    {/* Content */}
    <div className="flex-1">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wide text-gray-400">
          System • Now
        </span>

        <span className="text-[10px] px-2 py-[2px] rounded-full bg-green-600/20 text-green-400">
          ON
        </span>
      </div>

      {/* Title */}
      <h1 className="text-sm font-semibold mt-1">
        Focus Mode Enabled
      </h1>

      {/* Message */}
      <p className="text-xs text-gray-300 leading-snug">
        Notifications are silenced to help you stay focused.
      </p>
    </div>
  </div>,
  {
    position: "bottom-right",
    theme: "light",
    style: {
      background:
        "linear-gradient(90deg, #130b19 0%, #130b19 100%)",
      borderRadius: "8px",
      borderWidth: "1px",
      borderColor: "#808080",
      width: 300,
      padding: "10px",
      color: "white",
    },
    hideProgressBar: true,
    autoClose: 1200,
    closeButton: false,
    draggable: false,
  }
);

          setFocus((prev)=>prev == true?false:true)
        
        }}
          className={`w-full md:flex-1 lg:w-auto
            ${foucs === true ?`opacity-100`:`opacity-40`}
          text-sm p-4 rounded-2xl
          flex flex-col gap-3 items-baseline
          poppins-light outline-0
          ${theme === "Dark"
            ? "bg-[#3b234b] text-white"
            : "bg-[#ffffff] text-[#3b234b] shadow-xl/20"}`}
        >
         { foucs === true ? <RiEyeCloseFill  className="text-lg" />: <GiSemiClosedEye className="text-lg" />}
          Focus:{ foucs === true ?"On":"off"}
        </button>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="poppins-medium">
        <h1>Recent Achivements</h1>
        {/* <div
          className={`w-full border rounded-2xl h-24
          ${theme === "Dark"
            ? "border-white/40 text-white"
            : "border-black text-black"}`}
        ></div> */}
      </div>
    </div>

  </div>
</>

     <ToastContainer/>
      </ModelCreate>
      
      </Themecontext.Provider>

    </>
  );
};

export default ThemeContext;
