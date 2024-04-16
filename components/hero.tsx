"use client";

import { useEffect, useRef } from "react";
import Logo from "./logo";

const smokyEffectUrl = "/videos/smoke-effect.mp4";


const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((error) => {
        console.error("Error playing video", error);
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex justify-center items-center flex-col relative overflow-hidden">
       <video
          loop
          muted
          autoPlay
          className="absolute z-10 max-w-none -top-24 w-screen object-cover f-full"
        >
          <source src={smokyEffectUrl} type="video/mp4" />
        </video>

      <div className="h-full w-full bg-transparent flex flex-col items-center justify-center overflow-hidden z-20">
        <div className="text-center">
          <Logo className="text-yellow-400 fill-current stroke-current w-64 lg:w-80 mx-auto" />

          <p className="mt-4 font-light text-xl lg:text-4xl text-slate-200 max-w-sm lg:max-w-md">
            An AI driven interoperable loyalty product on blockchain
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
