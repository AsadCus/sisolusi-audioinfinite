"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link"; // Ditambahkan untuk navigasi internal

const SLIDES = [
  {
    id: 1,
    eyebrow: "Studio-Grade Audio",
    title: "The Sound\nYou Deserve.",
    description: "Professional audio equipment engineered for clarity, power, and precision — built for studios, perfected for professionals.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80",
    cta: "Explore Collection",
  },
  {
    id: 2,
    eyebrow: "Monitoring Systems",
    title: "Hear Every\nDetail.",
    description: "Premium studio monitors with flat frequency response. When accuracy matters, our speakers deliver nothing but truth.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1600&q=80",
    cta: "View Monitors",
  },
  {
    id: 3,
    eyebrow: "Wireless Excellence",
    title: "Freedom\nMeets Fidelity.",
    description: "Cut the cables without cutting corners. Uncompromising wireless sound at every frequency.",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1600&q=80",
    cta: "Shop Wireless",
  },
  {
    id: 4,
    eyebrow: "Recording Gear",
    title: "Capture\nEvery Nuance.",
    description: "Professional microphones trusted by engineers worldwide. Your voice deserves the very best.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80",
    cta: "View Microphones",
  },
];

const STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "5K+", label: "Products Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

// Named Export sesuai permintaan
export function BannerSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className="relative h-screen min-h-160 max-h-240 overflow-hidden bg-neutral-100">
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            className="object-cover grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-white/20" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center container-x">
        <div className="max-w-lg">
          <div
            key={`eyebrow-${current}`}
            className="eyebrow mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            {slide.eyebrow}
          </div>

          <h1
            key={`title-${current}`}
            className="text-5xl lg:text-7xl xl:text-[80px] font-normal text-neutral-900 leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-up whitespace-pre-line"
            style={{
              fontFamily: "var(--font-display)",
              animationDelay: "70ms",
              animationFillMode: "forwards",
            }}
          >
            {slide.title}
          </h1>

          <p
            key={`desc-${current}`}
            className="text-[15px] text-neutral-500 font-light leading-relaxed mb-10 max-w-sm opacity-0 animate-fade-up"
            style={{ animationDelay: "140ms", animationFillMode: "forwards" }}
          >
            {slide.description}
          </p>

          <div
            key={`cta-${current}`}
            className="flex items-center gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "210ms", animationFillMode: "forwards" }}
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-900 text-white text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-neutral-700 transition-colors duration-300"
            >
              {slide.cta}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            
            <Link
              href="#about"
              className="text-[11px] tracking-[0.14em] uppercase font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 lg:left-8 right-6 lg:right-8 flex items-end justify-between">
          <div className="flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-400 rounded-full ${
                  i === current
                    ? "w-7 h-0.75 bg-neutral-900"
                    : "w-0.75 h-0.75 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-right">
                <div className="text-2xl font-semibold text-neutral-900 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-neutral-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}