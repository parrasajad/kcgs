import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────── data ──────────────────────── */

const grades = [
  {
    label: "Pre-Nursery",
    age: "Age 2.5 – 3",
    desc: "Play-based introduction to learning in a safe, nurturing space.",
    icon: "lucide:baby",
    accent: "border-l-pink-400",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    label: "Nursery",
    age: "Age 3 – 4",
    desc: "Early literacy, numeracy, and social skills through creative play.",
    icon: "lucide:smile",
    accent: "border-l-orange-400",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    label: "LKG – UKG",
    age: "Age 4 – 6",
    desc: "Building foundational reading, writing, and arithmetic abilities.",
    icon: "lucide:blocks",
    accent: "border-l-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    label: "Grade 1 – 5",
    age: "Primary",
    desc: "Structured curriculum covering languages, math, EVS, and arts.",
    icon: "lucide:book-open",
    accent: "border-l-emerald-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    label: "Grade 6 – 8",
    age: "Middle School",
    desc: "Deeper subject exploration with science labs and project work.",
    icon: "lucide:flask-conical",
    accent: "border-l-blue-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Grade 9 – 10",
    age: "Secondary",
    desc: "Board exam preparation with focused academics and career guidance.",
    icon: "lucide:graduation-cap",
    accent: "border-l-violet-400",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const subjects = [
  {
    name: "English",
    description:
      "Building strong communication, reading, and writing skills from the very beginning.",
    icon: "lucide:languages",
    color: "bg-primary/10 text-primary-dark",
  },
  {
    name: "Mathematics",
    description:
      "Developing logical thinking and problem-solving through hands-on activities.",
    icon: "lucide:calculator",
    color: "bg-accent/15 text-accent",
  },
  {
    name: "EVS / Science",
    description:
      "Exploring the natural world through experiments, observation, and field trips.",
    icon: "lucide:leaf",
    color: "bg-success/15 text-success",
  },
  {
    name: "Arts & Craft",
    description:
      "Nurturing creativity and self-expression through drawing, painting, and craft work.",
    icon: "lucide:palette",
    color: "bg-info/15 text-info",
  },
];

const methods = [
  {
    title: "Activity-Based Learning",
    description:
      "Children learn best by doing. Our curriculum is packed with interactive projects and real-world tasks.",
    icon: "lucide:puzzle",
  },
  {
    title: "Play-Way Method",
    description:
      "For our youngest learners, education happens through games, songs, storytelling, and creative play.",
    icon: "lucide:gamepad-2",
  },
  {
    title: "Individual Attention",
    description:
      "Small class sizes ensure every student gets personal guidance, mentoring, and care.",
    icon: "lucide:heart-handshake",
  },
  {
    title: "Smart Classrooms",
    description:
      "Digital boards, multimedia content, and tech-enabled lessons make learning vivid and exciting.",
    icon: "lucide:monitor-smartphone",
  },
];

/* ──────────────────────── component ──────────────────────── */

import AcademicsHero from "./AcademicsHero";

export default function AcademicsSection() {
  return (
    <section id="academics" className="overflow-hidden">
      <AcademicsHero />

      {/* ── Classes Offered ── */}
      <div className="py-14 md:py-22 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Classes We Offer
            </h3>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-base leading-relaxed">
              Our school provides a complete academic journey — from early
              childhood education to secondary school board preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grades.map((g) => (
              <div
                key={g.label}
                className="group bg-white rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-lg text-accent flex items-center justify-center mb-6">
                  <Icon icon={g.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {g.label}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed m-0">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Key Subjects ── */}
      <div className="py-20 md:py-28 bg-light-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image collage */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/campus-life/student-life.webp"
                  alt="Students learning at Kashmir Cambridge"
                  width={640}
                  height={440}
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3 max-w-[220px]">
                <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:trophy" className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-heading leading-tight">
                    100% Board Results
                  </p>
                  <p className="text-[11px] text-body leading-snug">
                    Consistent excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Right — subject cards */}
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                What we teach
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-heading mb-3">
                Core Subjects
              </h3>
              <p className="text-body">
                Our curriculum follows the latest JKBOSE guidelines and is
                enriched with co-curricular activities that develop the whole
                child.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {subjects.map((s) => (
                  <div
                    key={s.name}
                    className="group bg-white rounded-xl p-5 border border-line hover:border-primary/25 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${s.color}`}
                    >
                      <Icon icon={s.icon} className="w-5 h-5" />
                    </div>
                    <h5 className="font-semibold text-heading text-[15px] mb-1">
                      {s.name}
                    </h5>
                    <p className="text-body text-[13px] leading-relaxed m-0">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Teaching Methods ── */}
      <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              How we teach
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Teaching Approach
            </h3>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              We combine modern pedagogy with personal warmth so every child
              feels confident, curious, and cared for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((m, i) => (
              <div
                key={m.title}
                className="group relative bg-primary/10 rounded-2xl p-8 border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Step number watermark */}
                <span className="absolute -top-4 -right-2 text-[120px] font-extrabold leading-none text-slate-200/50 select-none pointer-events-none transition-colors group-hover:text-primary-100/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-600 group-hover:bg-primary-600 transition-all duration-300">
                    <Icon icon={m.icon} className="w-7 h-7" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-xl mb-3">
                    {m.title}
                  </h5>
                  <p className="text-slate-500 text-[15px] leading-relaxed m-0">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative py-20 md:py-24 overflow-hidden bg-primary-500">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 border border-white/[0.06] rounded-full pointer-events-none" />

        <div className="container relative z-10 text-center px-4">
          <Icon
            icon="lucide:book-open-check"
            className="w-10 h-10 text-white/60 mx-auto mb-5"
          />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl mx-auto leading-snug">
            Give Your Child the Best Start
          </h3>
          <p className="text-white text-lg mb-9 max-w-md mx-auto">
            Admissions are open for the new academic session. Come visit us and
            see the KCGS difference firsthand.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-700! px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline text-[15px]"
            >
              <Icon icon="lucide:phone" className="w-5 h-5" />
              Contact Us
            </Link>
            <Link
              href="/admission"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 no-underline text-[15px]"
            >
              <Icon icon="lucide:file-text" className="w-5 h-5" />
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
