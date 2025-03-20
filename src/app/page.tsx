"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import FellowshipSection from "@/components/FellowshipSection";
import SpaceSection from "@/components/SpaceSection";
import FaqsSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Enable scroll snapping when the component mounts
  useEffect(() => {
    // Add the snap scroll class to html element
    document.documentElement.classList.add('snap-scroll');

    // Clean up on unmount
    return () => {
      document.documentElement.classList.remove('snap-scroll');
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <FellowshipSection />
      <SpaceSection />
      <FaqsSection />
      <Footer />
    </main>
  );
}
