"use client";

import Globe from "./ui/globe";


const About = () => {
  return (
    <section className="bg-black relative z-20 text-white py-16" id="about">
      <div className="container py-16">
        <h3 className="text-4xl lg:text-6xl font-semibold">About</h3>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="mt-8">
              {`Welcome to the future of loyalty programs. 
                At Monet, we're pioneering a new era of rewards using blockchain technology. 
                Our innovative solution empowers businesses and delights customers with decentralized $POINTS – the currency of interoperable rewards.`}
            </p>
            <p className="mt-4">
              {`By seamlessly integrating with major retail players, we bring
          unparalleled benefits to both businesses and consumers. Our AI-driven
          recommendations ensure that every reward is optimized for maximum
          utility, tailored to meet the unique needs of each user.`}
            </p>
          </div>
          <div className="h-[400px] w-full md:w-1/2 relative">
            {/* <Canvas camera={{ position: [0, 4, 15], zoom: 0.75 }}>
              <NeuralNetwork />
              <OrbitControls />
            </Canvas> */}
            <Globe className="absolute left-0 md:left-auto md:-top-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
