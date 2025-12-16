import React, { createContext, useEffect, useState } from "react";

export const Themecontext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("Dark");

  useEffect(() => {
    const quickAccessTheme = (e) => {
      const key = e.key.toLowerCase();

      if (key === "d") setTheme("Dark");
      if (key === "l") setTheme("Light");
    };

    window.addEventListener("keydown", quickAccessTheme);

    // cleanup
    return () => {
      window.removeEventListener("keydown", quickAccessTheme);
    };
  }, []);

  return (
    <Themecontext.Provider value={{ theme, setTheme }}>
      {children}
    </Themecontext.Provider>
  );
};

export default ThemeContext;
