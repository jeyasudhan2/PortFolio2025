import React, { ReactNode } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

interface OutletProps {
  children: ReactNode;
}
const Outlet = ({ children }: OutletProps) => {
  return (
    <div className=" w-full min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Outlet;
