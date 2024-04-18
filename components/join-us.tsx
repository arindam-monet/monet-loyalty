"use client";

import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="relative z-20 text-white bg-black min-h-[700px] py-16" id="community">
      <div className="py-16 w-full relative flex flex-col items-center justify-center antialiased container">
        <BackgroundBeams className="z-0" />
        <div className="md:max-w-2xl mx-auto text-center relative">
          <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b to-neutral-800 from-slate-100 text-center font-sans font-bold">
            Get exclusive access to our launch event
          </h1>
          <p></p>
          <p className="text-neutral-500 text-left md:max-w-xl mx-auto my-8 text-base relative z-10">
           {` Join us for an exclusive unveiling of our revolutionary loyalty
            rewards platform. Experience the future of rewards with
            decentralized $POINTS and cutting-edge blockchain tech. Don't miss
            out – secure your spot today!`}
          </p>
          <Button className="md:text-2xl font-semibold mt-4 md:py-4 md:h-16 rounded-lg bg-[#ffd700] hover:bg-yellow-500 mx-auto text-black absolute z-40 transform -translate-x-1/2 left-1/2">
            Join our exclusive community!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
