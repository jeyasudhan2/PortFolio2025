import React from "react";

const Gradient = ({ children }) => {
  return (
    <div
      className="   px-[9px] rounded "
      style={{
        background: `linear-gradient(
            160deg,
            #1c0c20 0%,
            #1c0c20 25%,
            #2a0f5f 45%,
            #5b21b6 60%,
            #7c3aed 75%,
            #c4b5fd 100%
          )`,
      }}
    >
      {children}
    </div>
  );
};

export default Gradient;
