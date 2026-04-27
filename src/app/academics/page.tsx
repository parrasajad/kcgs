import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import AcademicsSection from "@/components/sections/Academics/AcademicsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Kashmir Cambridge Group of Schools",
  description:
    "Explore our curriculum from Pre-Nursery to Grade 10. Learn about subjects, teaching methods, and academic excellence at KCGS.",
  keywords: ["academics", "curriculum", "KCGS", "Kashmir Cambridge", "school"],
};

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <AcademicsSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
