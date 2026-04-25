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

export default function UpdatesPage() {
  return (
    <>
      <Header />
      <div className="rts-campus-life rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="campus-life">
              <div className="campus-life__content">
                <h1 className="section-title">News &amp; Events</h1>
                <p className="description w-680">
                  Stay updated with the latest announcements, important news,
                  and upcoming events at Kashmir Cambridge Group of Schools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsSection />
      <Footer />
      <MobileMenu />
    </>
  );
}
