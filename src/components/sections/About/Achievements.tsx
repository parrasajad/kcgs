"use client";

import { Icon } from "@iconify/react";

const achievements = [
  {
    icon: "lucide:trophy",
    title: "Academic Excellence",
    description:
      "Consistently producing top board exam results with students securing positions in district and state merit lists.",
    gradient: "from-amber-500 to-orange-500",
    shadow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: "lucide:medal",
    title: "SQAY Martial Arts Champions",
    description:
      "Our students have excelled in SQAY, the traditional Kashmiri martial art, winning medals at state-level competitions.",
    gradient: "from-blue-500 to-indigo-500",
    shadow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: "lucide:award",
    title: "Inter-School Competition Winners",
    description:
      "Regular winners in debates, essay writing, science exhibitions, and sports events across the Shopian district.",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: "lucide:users",
    title: "20+ Years of Service",
    description:
      "Proudly serving the community of Tukroo, Shopian for over two decades with an unwavering commitment to quality education.",
    gradient: "from-purple-500 to-pink-500",
    shadow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: "lucide:graduation-cap",
    title: "Successful Alumni Network",
    description:
      "Our graduates have gone on to pursue higher education at prestigious universities and build successful careers across the country.",
    gradient: "from-rose-500 to-red-500",
    shadow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: "lucide:heart-handshake",
    title: "Community Impact",
    description:
      "Active participation in social causes including drug awareness campaigns, environmental initiatives, and community service programs.",
    gradient: "from-cyan-500 to-blue-500",
    shadow: "group-hover:shadow-cyan-500/20",
  },
];

export default function Achievements() {
  return (
    <div
      className="rts-section-padding bg-primary-400
     relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="row">
          <div className="rts-section rt-center mb--45">
            <h3 className="rts-section-title !text-white">Our Achievements</h3>
            <p className="text-white text-lg mt-4 max-w-2xl mx-auto text-center">
              A proud legacy of accomplishments that reflect the dedication of
              our students, faculty, and the Kashmir Cambridge community.
            </p>
          </div>
        </div>
        <div className="row g-4 mt-8">
          {achievements.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className={`bg-white border border-gray-100 rounded-2xl p-8 h-full hover:-translate-y-2 transition-all duration-500 group hover:shadow-2xl ${item.shadow} relative overflow-hidden flex flex-col`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}
                ></div>

                <div
                  className={`w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative z-10 overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <Icon
                    icon={item.icon}
                    className={`w-8 h-8 text-black group-hover:text-white relative z-10 drop-shadow-sm`}
                  />
                </div>

                <h5 className="text-xl font-semibold text-black mb-4 transition-all duration-300 relative z-10">
                  {item.title}
                </h5>

                <p className="text-black/80 leading-relaxed text-base relative z-10 flex-grow transition-colors duration-300">
                  {item.description}
                </p>

                {/* Decorative bottom line */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-100`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
