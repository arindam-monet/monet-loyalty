import About from "@/components/about";
import Hero from "@/components/hero";
import JoinUs from "@/components/join-us";
import MonetToken from "@/components/monet-token";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <MonetToken />

      <JoinUs />
    </main>
  );
}
