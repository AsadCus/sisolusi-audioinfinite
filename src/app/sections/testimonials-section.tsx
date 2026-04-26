"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The Studio Monitor Pro redefined our mixing workflow entirely. The flat response is genuinely flat — no marketing fluff. Every mix we&apos;ve done since translates perfectly to every playback system.",
    author: "James Hartwell",
    role: "Chief Sound Engineer",
    company: "Soundwave Studios",
    initials: "JH",
  },
  {
    id: 2,
    quote: "We outfitted our entire broadcast facility with Audio Infinite equipment. The reliability under 18-hour live broadcast days is unmatched. Support team is exceptional — they know their products intimately.",
    author: "Priya Mehta",
    role: "Broadcast Director",
    company: "Rhythm Productions",
    initials: "PM",
  },
  {
    id: 3,
    quote: "I have been podcasting for six years and nothing has elevated my show quality like the Condenser Mic X1. The warmth and clarity make post-production almost unnecessary.",
    author: "Marcus Allen",
    role: "Podcast Host",
    company: "The Daily Voice",
    initials: "MA",
  },
  {
    id: 4,
    quote: "For our concert venue, we needed a system that could handle both intimate acoustic sets and high-energy performances. Audio Infinite delivered a tailored solution that exceeded every brief we set.",
    author: "Yuki Tanaka",
    role: "Venue Operations Manager",
    company: "Apex Live Events",
    initials: "YT",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-white border-t border-neutral-200">
      <div className="container-x">

        <div className="grid lg:grid-cols-[2fr_5fr] gap-16 lg:gap-24">
          <div>
            <p className="eyebrow mb-4">Testimonials</p>
            <h2
              className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Clients Say.
            </h2>
            <p className="mt-5 text-[13px] text-neutral-400 leading-relaxed">
              Professionals across the industry trust Audio Infinite to deliver when it matters most.
            </p>

            <div className="mt-12 flex flex-col gap-3">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3.5 text-left group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-medium transition-all duration-300 shrink-0 ${
                    active === i
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200 group-hover:text-neutral-700"
                  }`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className={`text-[12px] font-medium transition-colors duration-200 ${active === i ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"}`}>
                      {t.author}
                    </div>
                    <div className="text-[10px] text-neutral-300">{t.company}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -top-6 -left-4 select-none pointer-events-none text-[180px] lg:text-[220px] leading-none text-neutral-200 font-normal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &rdquo;
            </div>

            <div className="relative z-10 pt-10">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.id}
                  className={`transition-all duration-500 ${
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 absolute top-10 left-0 right-0 pointer-events-none"
                  }`}
                >
                  <blockquote
                    className="text-xl lg:text-2xl xl:text-[28px] font-normal text-neutral-900 leading-[1.45] tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.quote}
                  </blockquote>

                  <div className="mt-10 flex items-center gap-4 pt-8 border-t border-neutral-100">
                    <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-[11px] font-medium text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-900">{t.author}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="invisible" aria-hidden>
                <blockquote className="text-xl lg:text-2xl xl:text-[28px] font-normal leading-[1.45]">
                  {TESTIMONIALS[0].quote}
                </blockquote>
                <div className="mt-10 pt-8 h-9" />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-0.75 bg-neutral-900" : "w-0.75 h-0.75 bg-neutral-200 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}