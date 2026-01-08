import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Work } from "@/components/home/Work";
import { Creative } from "@/components/home/Creative";
import { Socials } from "@/components/home/Socials";
import { Creator } from "@/components/home/Creator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-navy-900 text-white selection:bg-neon-cyan/30">
      <Hero />
      <About />
      <Work />
      <Creator />
      <Creative />
      <Socials />
    </main>
  );
}
