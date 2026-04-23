import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/Hero/HeroSection";
import AboutSection from "@/components/sections/About/AboutSection";
import CampusLifeSection from "@/components/sections/CampusLife/CampusLifeSection";
import EventsSection from "@/components/sections/Events/EventsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Kashmir Cambridge",
  description: "Welcome to Kashmir Cambridge",
  keywords: ["education", "university", "kashmir cambridge"],
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CampusLifeSection />
      <EventsSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
