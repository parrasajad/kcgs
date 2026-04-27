import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import AboutHero from "@/components/sections/About/AboutHero";
import OurStory from "@/components/sections/About/OurStory";
import MissionVision from "@/components/sections/About/MissionVision";
import Achievements from "@/components/sections/About/Achievements";
import WhyChooseUs from "@/components/sections/About/WhyChooseUs";

import { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Kashmir Cambridge Group of Schools",
  description:
    "Learn about the history, mission, vision, and achievements of Kashmir Cambridge Group of Schools, Tukroo Shopian.",
  keywords: [
    "about us",
    "kashmir cambridge",
    "school history",
    "mission",
    "vision",
    "achievements",
    "shopian",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Achievements />
      <Footer />

      <MobileMenu />
    </>
  );
}
