import { Icon } from "@iconify/react";
import Link from "next/link";

export default function FacilitiesCTA() {
  return (
    <div className="rts-section-padding bg-primary-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon
                icon="lucide:graduation-cap"
                className="w-8 h-8 text-white/80"
              />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to See Our Campus in Person?
            </h3>
            <p className="text-white text-lg mb-8 max-w-xl mx-auto">
              Schedule a visit to Kashmir Cambridge Group of Schools, Tukroo
              Shopian, and experience our facilities firsthand. We would love to
              welcome you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-darker! px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
              >
                <Icon icon="lucide:phone" className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 no-underline"
              >
                <Icon icon="lucide:file-text" className="w-5 h-5" />
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
