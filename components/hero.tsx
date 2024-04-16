"use client";

import { useEffect, useRef } from "react";
import Logo from "./logo";

const smokeyEffectUrl = "/videos/smokey-effect.mp4";
const smokeyEffectThumbUrl = "/images/smokey-effect-thumbnail.jpg";


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
    <section className="min-h-screen bg-black flex justify-center items-center flex-col relative overflow-hidden">
       <video
          loop
          muted
          autoPlay
          className="absolute z-10 max-w-none w-screen object-cover h-full"
          poster={smokeyEffectThumbUrl}
        >
          <source src={smokeyEffectUrl} type="video/mp4" />
        </video>
        <div className="w-full absolute z-20 top-0 h-full bg-gradient-to-t from-black to-slate-800 opacity-50"></div>

      <div className="h-full w-full bg-transparent flex flex-col items-center justify-center overflow-hidden z-20">
        <div className="text-center">
          <Logo className="text-yellow-400 fill-current stroke-current w-64 lg:w-80 mx-auto" />

          <p className="mt-4 font-light text-xl lg:text-4xl text-slate-200 max-w-xs lg:max-w-md">
            An AI driven interoperable loyalty product on blockchain
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
