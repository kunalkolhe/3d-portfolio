"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import TagScroll from "@/components/TagScroll";
import AboutMeSplit from "@/components/AboutMeSplit";
import SkillsGrid from "@/components/SkillsGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Hero section with sticky canvas and overlay */}
      <div ref={heroRef} style={{ position: 'relative', height: '500vh' }}>
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      {/* Sections below hero */}
      <TagScroll />
      <AboutMeSplit />
      <Projects />
      <JourneyTimeline />
      <SkillsGrid />
      <Achievements />
      <Footer />
    </main>
  );
}
