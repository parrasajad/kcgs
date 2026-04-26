"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { Icon } from "@iconify/react";

export default function TestimonialsSection() {
  const { sliderRef } = useCarousel({
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".rts__next",
      prevEl: ".rts__prev",
    },
    autoplay: {
      delay: 7000,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      575: { slidesPerView: 1.5, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      991: { slidesPerView: 2, spaceBetween: 30 },
      1201: { slidesPerView: 2, spaceBetween: 30 },
    },
  });

  return (
    <section className="py-16 md:py-24 bg-primary-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Student Feedback
              </h2>
              <p className="text-white text-[15px] leading-relaxed mb-10">
                Your opinion matters, and by providing feedback, you contribute
                to the continuous enhancement of our academic programs, support
                services, and campus life.
              </p>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4">
                <div className="rts__prev w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-secondary hover:bg-primary-400 hover:text-white hover:border-primary-400 transition-all duration-300 cursor-pointer shadow-sm">
                  <i className="fa-light fa-arrow-left"></i>
                </div>
                <div className="rts__next w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-secondary hover:bg-primary-400 hover:text-white hover:border-primary-400 transition-all duration-300 cursor-pointer shadow-sm">
                  <i className="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Slider */}
          <div className="lg:col-span-7 overflow-hidden">
            <div
              ref={sliderRef}
              className="swiper swiper-data !overflow-visible"
            >
              <div className="swiper-wrapper">
                {/* Testimonial 1 */}
                <div className="swiper-slide h-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transition-shadow duration-300 hover:shadow-md">
                    <div className="flex gap-1 text-primary-400 text-sm mb-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed italic mb-8 flex-grow">
                      "Kashmir Cambridge has truly shaped my academic journey.
                      The teachers here go above and beyond to ensure every
                      student reaches their full potential. I'm grateful for the
                      strong foundation it gave me."
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                          <Icon
                            icon="lucide:user"
                            className="w-6 h-6 text-primary-400"
                          />
                        </div>
                        <div>
                          <h5 className="font-bold text-secondary text-base mb-1">
                            Aabid Rashid
                          </h5>
                          <span className="text-sm text-slate-500">
                            Class 12 Student
                          </span>
                        </div>
                      </div>
                      <Icon
                        icon="ri:double-quotes-r"
                        className="w-10 h-10 text-primary-400/20 shrink-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="swiper-slide h-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transition-shadow duration-300 hover:shadow-md">
                    <div className="flex gap-1 text-primary-400 text-sm mb-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-light fa-star"></i>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed italic mb-8 flex-grow">
                      "As a parent, I couldn't be happier with my decision to
                      enroll my children here. The discipline, values, and
                      quality education they receive at Kashmir Cambridge is
                      unmatched in the region. The faculty is incredibly
                      supportive."
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                          <Icon
                            icon="lucide:user"
                            className="w-6 h-6 text-primary-400"
                          />
                        </div>
                        <div>
                          <h5 className="font-bold text-secondary text-base mb-1">
                            Mehreen Akhtar
                          </h5>
                          <span className="text-sm text-slate-500">Parent</span>
                        </div>
                      </div>
                      <Icon
                        icon="ri:double-quotes-r"
                        className="w-10 h-10 text-primary-400/20 shrink-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="swiper-slide h-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transition-shadow duration-300 hover:shadow-md">
                    <div className="flex gap-1 text-primary-400 text-sm mb-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed italic mb-8 flex-grow">
                      "My years at Kashmir Cambridge were the most formative of
                      my life. The campus environment, dedicated faculty, and
                      emphasis on both academics and character building prepared
                      me brilliantly for university."
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                          <Icon
                            icon="lucide:user"
                            className="w-6 h-6 text-primary-400"
                          />
                        </div>
                        <div>
                          <h5 className="font-bold text-secondary text-base mb-1">
                            Syed Faizan Shah
                          </h5>
                          <span className="text-sm text-slate-500">
                            Alumni — Batch of 2019
                          </span>
                        </div>
                      </div>
                      <Icon
                        icon="ri:double-quotes-r"
                        className="w-10 h-10 text-primary-400/20 shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
