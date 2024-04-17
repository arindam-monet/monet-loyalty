"use client";

import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="relative z-20 text-white" id="community">
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams className="z-0" />
        <div className="max-w-2xl mx-auto p-4 text-center">
          <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b to-neutral-800 from-slate-100 text-center font-sans font-bold">
            Get exclusive access to our launch event
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-xl mx-auto my-2 text-base text-center relative z-10">
           {` Join us for an exclusive unveiling of our revolutionary loyalty
            rewards platform. Experience the future of rewards with
            decentralized $POINTS and cutting-edge blockchain tech. Don't miss
            out – secure your spot today!`}
          </p>
          <Button className="text-2xl font-semibold mt-4 py-4 h-16 rounded-lg bg-[#ffd700] hover:bg-yellow-800 mx-auto z-50 text-black">
            Join our exclusive community!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
