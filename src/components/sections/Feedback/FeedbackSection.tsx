"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const feedbacks = [
  {
    name: "Emma Elizabeth",
    role: "Assistant Teacher",
    rating: 4,
    text: "Kashmir Cambridge has been a wonderful place for learning and growth. The supportive environment and dedicated faculty make it an ideal institution for students seeking academic excellence.",
    avatar: "/assets/images/about/kc-building.webp",
  },
  {
    name: "Aisha Farooq",
    role: "Parent",
    rating: 4,
    text: "I'm extremely satisfied with the quality of education my child receives. The school's commitment to holistic development and strong academic foundation is truly commendable.",
    avatar: "/assets/images/about/kc-building.webp",
  },
  {
    name: "Mohammad Rashid",
    role: "Alumni",
    rating: 5,
    text: "My years at Kashmir Cambridge shaped my career and character. The values instilled here continue to guide me. I'm proud to be an alumnus of this prestigious institution.",
    avatar: "/assets/images/about/kc-building.webp",
  },
  {
    name: "Sara Khan",
    role: "Student",
    rating: 4,
    text: "The campus life here is vibrant and engaging. From academics to extracurriculars, every aspect is designed to bring out the best in students. I truly enjoy being part of this community.",
    avatar: "/assets/images/about/kc-building.webp",
  },
];

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = feedbacks.length - 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleFeedbacks = feedbacks.slice(currentIndex, currentIndex + 2);

  return (
    <section className="bg-[#9B1B30] py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-white font-display text-4xl md:text-5xl lg:text-[56px] uppercase leading-[1.1] mb-6 tracking-wide">
              Student Feedback
            </h2>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-10 max-w-[420px]">
              Your opinion matters, and by providing feedback, you contribute to
              the continuous enhancement of our academic programs, support
              services, and campus life
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                aria-label="Previous feedback"
              >
                <Icon icon="lucide:arrow-left" className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                aria-label="Next feedback"
              >
                <Icon icon="lucide:arrow-right" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-7/12 flex flex-col sm:flex-row gap-6">
            {visibleFeedbacks.map((feedback, index) => (
              <div
                key={currentIndex + index}
                className="flex-1 bg-white rounded-sm p-7 flex flex-col justify-between min-h-[280px] transition-all duration-500"
              >
                {/* Stars */}
                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        icon={
                          star <= feedback.rating
                            ? "lucide:star"
                            : "lucide:star"
                        }
                        className={`w-4 h-4 ${
                          star <= feedback.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300"
                        }`}
                        style={
                          star <= feedback.rating
                            ? { fill: "currentColor" }
                            : {}
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed italic">
                    {feedback.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mt-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={feedback.avatar}
                        alt={feedback.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-gray-900 font-semibold text-sm">
                        {feedback.name}
                      </h6>
                      <p className="text-gray-500 text-xs">{feedback.role}</p>
                    </div>
                  </div>
                  <Icon
                    icon="ri:double-quotes-r"
                    className="w-10 h-10 text-[#9B1B30]/20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
