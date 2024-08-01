"use client";
import React from "react";

export default function NavBar() {
  return (
    <main className="bg-black w-full h-52">
      <div className="flex p-5 ">
        <button className=" font-poppins text-black h-[45px] w-[149px] rounded-sm text-2xl font-bold bg-white">
          AReality
        </button>
        <img src="./menu.svg" className="ml-64"/>
      </div>

      <div className="flex justify-end px-4 space-x-4 mt-4">
        <button className="border-2 border-white text-white font-bold font-poppins w-[80px] h-[39px] rounded-md text-lg">
          Sign In
        </button>
        <button className="bg-[#F763FA] text-white font-bold w-[131px] font-poppins h-[39px] rounded-md text-lg">
          Get Started
        </button>
      </div>
    </main>
  );
}
