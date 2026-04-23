"use client";

import { useCarousel } from "@/hooks/useCarousel";

export default function TestimonialsSection() {
    const { sliderRef } = useCarousel({
        slidesPerView: 2,
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
            320: { slidesPerView: 1 },
            575: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 2 },
            1201: { slidesPerView: 2 },
        },
    });

    return (
        <>
            {/* student feedback */}
            <section className="rts__section rts-section-padding rts__primary__bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="rts__section--wrapper v__4">
                                <h2 className="rts__section--title">Student Feedback</h2>
                                <p className="rts__section--description">Your opinion matters, and by providing feedback, you
                                    contribute to the continuous enhancement of our academic programs, support services, and
                                    campus life</p>
                                <div className="rts__slider--arrow">
                                    <div className="rts__prev slider__btn"><i className="fa-light fa-arrow-left"></i></div>
                                    <div className="rts__next slider__btn"><i className="fa-light fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                        {/* student feedback testimonial */}
                        <div className="col-lg-7">
                            <div ref={sliderRef} className="rts__testimonial--active swiper swiper-data">
                                <div className="swiper-wrapper">
                                    {/* single slide */}
                                    <div className="swiper-slide">
                                        <div className="rts__single--testimonial">
                                            <div className="rts__rating--star">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-light fa-star"></i>
                                            </div>
                                            <p className="rts__single--testimonial--text">
                                                I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in
                                                nights, or whenever you&apos;re in the mood for a culinary.
                                            </p>
                                            <div className="rts__single--testimonial--author">
                                                <div className="rts__single--testimonial--author--meta">
                                                    <div className="rts__author--img">
                                                        <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                                    </div>
                                                    <div className="rts__author--info">
                                                        <h5 className="mb-0">Emma Elizabeth</h5>
                                                        <span className="designation">Assistant Teacher</span>
                                                    </div>
                                                </div>
                                                <div className="rts__single--testimonial--quote">
                                                    <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single slide end */}
                                    {/* single slide */}
                                    <div className="swiper-slide">
                                        <div className="rts__single--testimonial">
                                            <div className="rts__rating--star">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-light fa-star"></i>
                                            </div>
                                            <p className="rts__single--testimonial--text">
                                                I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in
                                                nights, or whenever you&apos;re in the mood for a culinary.
                                            </p>
                                            <div className="rts__single--testimonial--author">
                                                <div className="rts__single--testimonial--author--meta">
                                                    <div className="rts__author--img">
                                                        <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                                    </div>
                                                    <div className="rts__author--info">
                                                        <h5 className="mb-0">Emma Elizabeth</h5>
                                                        <span className="designation">Assistant Teacher</span>
                                                    </div>
                                                </div>
                                                <div className="rts__single--testimonial--quote">
                                                    <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single slide end */}
                                    {/* single slide */}
                                    <div className="swiper-slide">
                                        <div className="rts__single--testimonial">
                                            <div className="rts__rating--star">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-light fa-star"></i>
                                            </div>
                                            <p className="rts__single--testimonial--text">
                                                I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in
                                                nights, or whenever you&apos;re in the mood for a culinary.
                                            </p>
                                            <div className="rts__single--testimonial--author">
                                                <div className="rts__single--testimonial--author--meta">
                                                    <div className="rts__author--img">
                                                        <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                                    </div>
                                                    <div className="rts__author--info">
                                                        <h5 className="mb-0">Emma Elizabeth</h5>
                                                        <span className="designation">Assistant Teacher</span>
                                                    </div>
                                                </div>
                                                <div className="rts__single--testimonial--quote">
                                                    <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single slide end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* student feedback end */}
        </>
    );
}
