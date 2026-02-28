import React from "react";


import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Expertise from "@/components/sections/Expertise";

export default function Home() {
  return (
      <div className="flex flex-col gap-16 md:gap-32 w-full max-w-[1400px] mx-auto pb-24">
        <Hero />
        <Expertise />
        <Portfolio />
        <Contact />
      </div>
    );
}
