import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import NewsSection from "@/components/sections/Updates/NewsSection";
import EventsSection from "@/components/sections/Events/EventsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & Events | Kashmir Cambridge Group of Schools",
  description: "Stay updated with the latest announcements, important news, and upcoming events at Kashmir Cambridge Group of Schools.",
};

export default function UpdatesPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="News & Events" current="Updates" />
      <NewsSection />
      <EventsSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
