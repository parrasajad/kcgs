import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[700px]  flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="/assets/images/campus-life/campus-life-vid.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 z-1" />

        {/* Content */}
        <div className="container h-full relative z-10 mx-auto pt-110 max-w-[1400px] text-center">
          <h6 className="text-white flex items-center justify-center gap-2 mb-4 font-sans tracking-wide text-lg">
            <Icon icon="lucide:graduation-cap" className="w-7 h-7" />
            Knowledge Meets Innovation
          </h6>

          <h1 className="text-white font-display text-h2 md:text-[72px] lg:text-[100px] leading-[1.1] uppercase font-normal mb-8 whitespace-nowrap">
            Kashmir Cambridge
            <span className="block">Group Of</span>
            <span className="block">Schools</span>
          </h1>

          <p className="text-white max-w-[600px] mx-auto text-lg lg:text-xl leading-relaxed">
            Nurturing young minds with excellence in academics, character, and
            values since 2009 — Tukroo, Shopian.
          </p>
        </div>
      </section>
    </>
  );
}
