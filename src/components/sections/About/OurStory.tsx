import { Icon } from "@iconify/react";

export default function OurStory() {
  return (
    <div className="rts-section-padding bg-[#f9f9f9]">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="/assets/images/about/kc-building-2.webp"
                alt="Kashmir Cambridge Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pl-0 lg:pl-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  icon="lucide:book-open"
                  className="w-6 h-6 text-primary"
                />
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                A Legacy of Excellence in Education
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Established with a vision to provide world-class education in
                the heart of Kashmir, Kashmir Cambridge Group of Schools has
                grown from a humble beginning into one of the most respected
                educational institutions in the Shopian district.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our school is committed to delivering a comprehensive curriculum
                that balances academic rigor with extracurricular enrichment. We
                believe every child deserves the opportunity to discover their
                potential and develop the skills needed for a successful future.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the scenic village of Tukroo, our campus provides a
                safe, nurturing, and inspiring environment where students from
                across the region come to learn, grow, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
