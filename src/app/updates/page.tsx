import Header from "@/components/layout/Header";

import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import NewsSection from "@/components/sections/Updates/NewsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & Events | Kashmir Cambridge Group of Schools",
  description:
    "Stay updated with the latest announcements, important news, and upcoming events at Kashmir Cambridge Group of Schools.",
};

import EventsSection from "@/components/sections/Updates/EventsSection";

import UpdatesHero from "@/components/sections/Updates/UpdatesHero";

export default function UpdatesPage() {
  return (
    <>
      <Header />
      <UpdatesHero />
      <NewsSection />
      <EventsSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
