import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/sections/Contact/ContactForm";
import MapSection from "@/components/sections/Contact/MapSection";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kashmir Cambridge Group of Schools",
  description:
    "Get in touch with Kashmir Cambridge Group of Schools. Find our location, phone number, and email. We're happy to help.",
  keywords: ["contact", "location", "Kashmir Cambridge", "KCGS", "Sopore"],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactForm />
      <MapSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
