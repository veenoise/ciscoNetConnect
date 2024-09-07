"use client"

import Hero from "./Hero";
import About from "./About";
import MissionVision from "./MissionVision";
import Department from "./Department";
import FAQs from "./FAQs";
import Contact from "./Contact"
export default function Home() {
  return (
    <main className="mt-[64px]">
      <Hero />
      <About />
      <MissionVision />
      <Department />
      <FAQs />
      <Contact />
    </main>
  );
}
