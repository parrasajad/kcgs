"use client";

import { Icon } from "@iconify/react";

const facilities = [
  {
    icon: "lucide:school",
    title: "Modern Classrooms",
    description:
      "Spacious and well-ventilated classrooms equipped with whiteboards and modern teaching aids to create an engaging learning experience.",
    color: "#4150B6",
  },
  {
    icon: "lucide:flask-conical",
    title: "Science Laboratory",
    description:
      "A fully equipped science lab where students conduct hands-on experiments in Physics, Chemistry, and Biology under expert supervision.",
    color: "#2563eb",
  },
  {
    icon: "lucide:laptop",
    title: "Computer Lab",
    description:
      "A modern computer lab with up-to-date systems, providing students with essential digital literacy and programming skills.",
    color: "#059669",
  },
  {
    icon: "lucide:library",
    title: "Library & Reading Room",
    description:
      "A well-stocked library housing a rich collection of textbooks, reference materials, novels, and periodicals for students of all grades.",
    color: "#d97706",
  },
  {
    icon: "lucide:dumbbell",
    title: "Sports Ground",
    description:
      "A dedicated sports field for cricket, football, athletics, and other outdoor activities that promote physical fitness and teamwork.",
    color: "#7c3aed",
  },
  {
    icon: "lucide:swords",
    title: "SQAY Training Area",
    description:
      "A specialized training area for SQAY martial arts, the traditional Kashmiri martial art, coached by experienced instructors.",
    color: "#dc2626",
  },
  {
    icon: "lucide:bus",
    title: "Transport Facility",
    description:
      "Safe and reliable school transport service covering key routes across the Shopian district, ensuring hassle-free commute for students.",
    color: "#0891b2",
  },
  {
    icon: "lucide:trees",
    title: "Green Campus",
    description:
      "A beautifully maintained campus surrounded by natural greenery that provides a peaceful and inspiring atmosphere for learning.",
    color: "#16a34a",
  },
  {
    icon: "lucide:megaphone",
    title: "Assembly & Event Hall",
    description:
      "A spacious hall for morning assemblies, cultural events, annual functions, and inter-school competitions.",
    color: "#e11d48",
  },
  {
    icon: "lucide:heart-pulse",
    title: "First Aid & Medical Room",
    description:
      "An on-campus medical room with first aid facilities to handle any health emergencies and ensure student well-being.",
    color: "#f43f5e",
  },
  {
    icon: "lucide:utensils",
    title: "Clean Drinking Water & Canteen",
    description:
      "Purified drinking water stations and a hygienic canteen offering nutritious snacks and meals throughout the school day.",
    color: "#8b5cf6",
  },
  {
    icon: "lucide:cctv",
    title: "CCTV Surveillance",
    description:
      "Comprehensive CCTV coverage across the campus for enhanced security and safety of all students and staff.",
    color: "#475569",
  },
];

export default function FacilitiesGrid() {
  return (
    <div className="rts-section-padding bg-[#f9f9f9]">
      <div className="container">
        <div className="row">
          <div className="rts-section rt-center mb--45">
            <h3 className="rts-section-title">What We Offer</h3>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto text-center">
              Our campus is designed to provide everything students need for a
              complete and enriching educational experience.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {facilities.map((facility, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="bg-white rounded-xl p-7 h-full border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    backgroundColor: `${facility.color}15`,
                  }}
                >
                  <Icon
                    icon={facility.icon}
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: facility.color }}
                  />
                </div>
                <h5 className="text-lg font-semibold text-[#1a1a2e] mb-3">
                  {facility.title}
                </h5>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
