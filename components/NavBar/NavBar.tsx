import React from "react";

const NavBar = () => {
  return (
    <div className="bg-cyan-800 text-white h-24 flex flex-col justify-center items-center space-y-2 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
        <h1 className="text-xl md:text-3xl font-bold text-white">Sir Fahad</h1>
        <h2 className="text-sm md:text-xl text-slate-300">Assignment 07</h2>
      </div>

      <div className="font-semibold text-sm md:text-2xl text-white text-center">
        <h1>Client-Side Data Fetching & Server-Side Data Fetching</h1>
      </div>
    </div>
  );
};

export default NavBar;
