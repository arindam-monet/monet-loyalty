"use client";

import { useEffect, useRef } from "react";
import Logo from "./logo";
import SparklesCore from "./sparkles";
import HoverBorderGradient from "./ui/moving-border-gradient";

const smokyEffectUrl = "/videos/smoky-effect.mp4";

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
    <section className="h-[80vh] flex justify-center items-center flex-col relative overflow-hidden">
     

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
