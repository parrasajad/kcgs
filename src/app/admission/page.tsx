import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdmissionRequirements from "@/components/sections/admission/AdmissionRequirements";
import ApplicationForm from "@/components/sections/admission/ApplicationForm";
import ProgramSidebar from "@/components/sections/admission/ProgramSidebar";
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
      <Breadcrumb
        title="Apply to Kashmir Cambridge Group of Schools"
        current="Apply Admission"
      />

      {/* admission page content */}
      <div className="rts-page-content rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AdmissionRequirements />
            </div>
          </div>
          <div className="row sticky-coloum-wrap g-5 mt--45">
            <div className="col-lg-8">
              <ApplicationForm />
            </div>
            <div className="col-lg-4 sticky-coloum-item">
              <ProgramSidebar />
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
