"use client";
import React from "react";
import { useEffect,useRef } from "react";
export default function HeroSection() {
       
  return (
    <main className="mt-[-2rem]">
      <div className="relative h-screen w-full overflow-hidden ">
        <video
          className="absolute w-full h-screen bg-cover bg-center"
          src="https://dl.dropbox.com/scl/fi/ggo4vq18yhjjsic09sns0/Untitled-design.mp4?rlkey=2ol8s2u31jy6vdqg5e4gdo6lh&st=a7mm7hp3&dl=0"
          autoPlay
          loop
          muted
        ></video>
        <div className="text-center flex flex-col items-center z-10 justify-center h-full relative">
          <p className="font-poppins text-[28px] text-white font-bold">
            All-in-One Augmented
          </p>
          <p className="font-poppins text-[28px] text-white font-bold">
            Reality Platform
          </p>
          <p className="text-gradient font-poppins text-[28px] font-bold">
            for business|
          </p>
          <div className="mt-8 space-y-4">
            <button className="w-[248px] h-[39px] bg-gradient-to-r from-[rgba(105,127,242,1)] to-[rgba(247,99,250,1)] text-white font-bold rounded-md">
              Create a Free Account
            </button>
            <button className="w-[248px] h-[39px] border border-[rgba(247,99,250,1)] text-white rounded-md font-bold">
              Explore the features
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
