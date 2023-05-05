import React from "react";

const NavIconWrapper = ({ children }: any) => {
  return (
    <div className="w-[30px] border-1 border-white rounder-md mycenter p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90% cursor-pointer">
      {children}
    </div>
  );
};

export default NavIconWrapper;
