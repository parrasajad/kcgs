"use client";

import { Icon } from "@iconify/react";

const reasons = [
  {
    icon: "lucide:book-open-check",
    title: "Comprehensive Curriculum",
    description:
      "A well-structured syllabus that covers academics, sports, arts, and moral education for holistic student development.",
  },
  {
    icon: "lucide:users-round",
    title: "Experienced Faculty",
    description:
      "A team of 20+ qualified and dedicated educators who bring passion and expertise to every classroom.",
  },
  {
    icon: "lucide:shield-check",
    title: "Safe & Nurturing Campus",
    description:
      "A secure environment in the heart of Tukroo, Shopian where every student feels safe, valued, and inspired.",
  },
  {
    icon: "lucide:dumbbell",
    title: "Sports & Extracurriculars",
    description:
      "From SQAY martial arts to cricket, athletics, and eco-club activities — we develop well-rounded individuals.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="rts-section-padding">
      <div className="container">
        <div className="row">
          <div className="rts-section rt-center mb--45">
            <h3 className="rts-section-title">Why Choose Kashmir Cambridge?</h3>
          </div>
        </div>
        <div className="row g-5">
          {reasons.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon
                    icon={item.icon}
                    className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h5 className="text-lg font-semibold text-[#1a1a2e] mb-3">
                  {item.title}
                </h5>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
