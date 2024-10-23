import AboutSection from "@/components/home/about";
import HeroSection from "@/components/home/hero";
import NavBar from "@/components/reusable/navbar";
import React from "react";

function MainPage() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col w-screen h-screen  max-w-screen-3xl mx-auto snap-y overflow-y-scroll snap-mandatory">
        <HeroSection />
        <AboutSection />
      </section>
    </>
  );
}

export default MainPage;
