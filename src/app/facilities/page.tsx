import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import FacilitiesHero from "@/components/sections/facilities/FacilitiesHero";
import FacilitiesGrid from "@/components/sections/facilities/FacilitiesGrid";
import FacilitiesCTA from "@/components/sections/facilities/FacilitiesCTA";

import { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Facilities | Kashmir Cambridge Group of Schools",
  description:
    "Explore the modern facilities at Kashmir Cambridge Group of Schools — classrooms, science labs, sports grounds, library, and more.",
  keywords: [
    "facilities",
    "school infrastructure",
    "classrooms",
    "science lab",
    "library",
    "sports ground",
    "kashmir cambridge",
  ],
};

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <FacilitiesHero />
      <FacilitiesGrid />
      <FacilitiesCTA />
      <Footer />
      <MobileMenu />
    </>
  );
}
