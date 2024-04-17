import ParticleEffect from "./ui/particle-effect";

const items = [
  {
    title: "Decentralized $Points",
    description: `Say goodbye to limited rewards. 
          $POINTS are the digital currency of choice, designed for seamless use across a diverse range of businesses and platforms. 
          Whether you're shopping, dining, or exploring, your rewards travel with you, unlocking endless possibilities.`,
  },
  {
    title: "L2 Roll-Up Chain",
    description: `
    Our platform operates on an L2 roll-up chain, ensuring lightning-fast transactions and scalable rewards distribution. With our cutting-edge technology, you can enjoy the benefits of blockchain without the wait, making every interaction smooth and effortless.
    `,
  },
  {
    title: "Oracles and Smart Contracts",
    description: `
    Connecting the worlds of traditional retail and web3, our Oracles make it easy for businesses to join the decentralized revolution. Smart contracts ensure secure transactions, while Oracles bridge the gap, bringing the power of blockchain rewards to your favorite stores. `,
  },
  {
    title: "AI-Based Recommendations",
    description: `
    Personalized rewards, just for you. Our AI algorithms analyze your preferences and behavior to recommend the perfect rewards. Whether it's a discount on your favorite product or an exclusive offer, our platform ensures you get the most value from your rewards.
    `,
  },
];

const MonetToken = () => {
  return (
    <section className="bg-black relative z-20 text-white">
      <div className="container py-16">
        <h3 className="text-2xl lg:text-6xl font-semibold">
          What are we building?
        </h3>

        <div className="md:flex my-16 gap-16 items-center">
          <div className="md:w-1/2 md:h-[500px] overflow-hidden rounded-full">
            <ParticleEffect />
          </div>
          <div className="md:w-1/2 text-xl">
            {items.map((item, index) => (
              <div key={index} className="mt-8">
                <h4 className="text-2xl lg:text-4xl font-semibold text-[#ffd700]">
                  {item.title}
                </h4>
                <p className="mt-4 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetToken;
