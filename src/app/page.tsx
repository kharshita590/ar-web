"use client";
import ThreeDObject from "../components/threedObject";
import NavBar from "@/components/navBar";
import CardSection from "@/components/CardSection";
import HeroSection from "@/components/heroSection";
import VerticalAnim from "@/components/vertical-anim";
import SampleAR from "@/components/Samples";
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-[rgba(105,127,242,0.3)] to-[rgba(247,99,250,0.3)] ">
      <NavBar />
      <HeroSection />
      <CardSection />
      <VerticalAnim/>
      <SampleAR/>
      <ThreeDObject/>
    </main>
  );
}
