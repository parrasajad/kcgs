"use client";

import { useEffect, useRef } from "react";

interface CarouselOptions {
    slidesPerView?: number;
    spaceBetween?: number;
    loop?: boolean;
    speed?: number;
    navigation?: {
        nextEl?: string;
        prevEl?: string;
    };
    autoplay?: {
        delay?: number;
    };
    breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
}

export function useCarousel(options: CarouselOptions) {
    const sliderRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperInstanceRef = useRef<any>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        const initSwiper = async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof window !== "undefined" && (window as any).Swiper) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                swiperInstanceRef.current = new (window as any).Swiper(sliderRef.current, options);
            }
        };

        initSwiper();

        return () => {
            if (swiperInstanceRef.current && swiperInstanceRef.current.destroy) {
                swiperInstanceRef.current.destroy(true, true);
            }
        };
    }, [options]);

    return {
        sliderRef,
        swiperInstance: swiperInstanceRef,
    };
}
