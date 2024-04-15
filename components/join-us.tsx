'use client';

import { motion } from "framer-motion";
import LampContainer from "./ui/lamp-container";
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="relative z-20 text-white">
      <div className="">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 max-w-2xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Get exclusive access to our launch event
          </motion.h1>

          <Button className="text-2xl font-semibold mt-4 py-4 h-16 rounded-lg bg-yellow-600 hover:bg-yellow-800 transition duration-100">Join our exclusive community!</Button>
        </LampContainer>
      </div>
    </section>
  );
};

export default JoinUs;
