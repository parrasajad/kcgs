import Image from "next/image";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative w-full  flex items-center justify-center overflow-hidden bg-primary-dark py-20 lg:py-30"
      >
        {/* Background Pattern Overlay */}
        <div className="absolute  inset-0 z-0 bg-[url('/assets/images/banner/shape__h1.svg')] bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-10 mx-auto px-4 max-w-[1400px] pt-[70px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[80px]">
            {/* Left Image */}
            <div className="w-full  overflow-hidden flex justify-center lg:justify-end lg:mt-[65px]">
              <Image
                src="/assets/images/home/hero-banner.webp"
                alt="Kashmir Cambridge Group of Schools"
                width={1240}
                height={956}
                className="max-w-full h-auto object-cover  "
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 flex flex-col items-center justify-center text-center">
              <h6 className="text-white flex items-center justify-center gap-2 mb-4 font-sans tracking-wide text-lg">
                <Icon icon="lucide:graduation-cap" className="w-7 h-7" />
                knowledge meets innovation
              </h6>

              <h1 className="text-white font-display text-[60px] md:text-[80px] lg:text-[100px] leading-[1.1] uppercase font-normal mb-8 text-center whitespace-nowrap">
                Kashmir Cambridge
                <span className="block">Group Of</span>
                <span className="block">Schools</span>
              </h1>

              <p className="text-white max-w-[600px] mb-10 text-lg lg:text-xl leading-relaxed text-center relative">
                Remember to tailor the section names to fit the specific needs
                and structure of your school website.
              </p>

              <a
                href="/program-single"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-medium px-8 py-4 hover:bg-gray-100 transition-colors duration-300 group text-lg"
              >
                View Our Program
                <i className="fa-regular fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
