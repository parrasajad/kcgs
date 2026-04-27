import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdmissionRequirements from "@/components/sections/admission/AdmissionRequirements";
import ApplicationForm from "@/components/sections/admission/ApplicationForm";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission | Kashmir Cambridge",
  description:
    "Learn about the admission process, requirements, and applying to Kashmir Cambridge.",
  keywords: ["admission", "apply", "requirements", "university"],
};

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <div className="pt-20 md:py-28 bg-primary-50/50">
        <div className="container  px-4 text-center">
          <div className="max-w-[720px] mt-20 flex flex-col items-center justify-center mx-auto">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Join our vibrant community
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Admissions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Begin your child&apos;s journey at Kashmir Cambridge. We offer a
              seamless admission process designed to help you discover the
              perfect environment for your child&apos;s growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* admission page content */}
      <div className="rts-page-content rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AdmissionRequirements />
            </div>
          </div>
          <div className="row sticky-coloum-wrap g-5 mt--45">
            <div className="col-lg-12">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </div>
      {/* admission page content end */}

      <Footer />
      <MobileMenu />
    </>
  );
}
