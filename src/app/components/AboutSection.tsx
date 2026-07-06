"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

const STATS = [
  { end: 10, suffix: "+", label: "Years in Business" },
  { end: 5000, suffix: "+", label: "Products Delivered" },
  { end: 250, suffix: "+", label: "Studio Partners" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
];

const VALUES = [
  {
    number: "01",
    title: "Uncompromising Accuracy",
    description:
      "We believe audio equipment should tell the truth. Every product we design is tuned to reproduce sound as it was intended — without coloration, without flattery.",
  },
  {
    number: "02",
    title: "Built to Last",
    description:
      "Fast fashion has no place in professional audio. We engineer for longevity — components rated for decades, not product cycles.",
  },
  {
    number: "03",
    title: "Service Beyond the Sale",
    description:
      "Our relationship with clients doesn&apos;t end at delivery. From installation guidance to long-term support, we remain your audio partner.",
  },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-0 bg-white border-b border-neutral-200">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-5">About Us</p>
            <h1
              className="text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sound Without
              <br />
              <span className="italic">Compromise.</span>
            </h1>
            <p className="text-[15px] text-neutral-500 leading-relaxed max-w-xl">
              Audio Infinite was founded on a single conviction — that professionals deserve equipment
              that performs exactly as specified, every session, every stage, every time. We build the
              tools that let sound engineers focus entirely on the work.
            </p>
          </div>

          <div className="relative w-full aspect-21/8 overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80"
              alt="Audio Infinite studio environment"
              fill
              priority
              className="object-cover grayscale"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
          </div>
        </div>
      </section>

    {/* add number increasing animation */}
      <section className="section-pad bg-white border-b border-neutral-200">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200 border border-neutral-200">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-10 px-8 text-center">
                <div
                  className="text-3xl lg:text-4xl font-normal text-neutral-900 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <AnimatedNumber value={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-neutral-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-neutral-50 border-b border-neutral-200">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="eyebrow mb-5">Our Story</p>
              <h2
                className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Decade of
                <br />
                Building Better Sound.
              </h2>
              <div className="space-y-5 text-[15px] text-neutral-500 leading-relaxed">
                <p>
                  Audio Infinite began in 2014 in a small workshop in Jakarta, Indonesia. Our founder,
                  David Harlow, spent years as a touring sound engineer frustrated by the gap between
                  what professional equipment promised and what it actually delivered on stage.
                </p>
                <p>
                  The early years were spent obsessing over frequency response curves, driver
                  materials, and cabinet resonance. Each prototype was tested not in a lab, but in
                  real venues — concert halls, broadcast studios, corporate conference rooms — until
                  the performance was impossible to argue with.
                </p>
                <p>
                  Today, Audio Infinite products are trusted across Southeast Asia and beyond,
                  specified by sound engineers who have stopped searching for something better
                  because they have already found it.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden bg-neutral-200">
                <Image
                  src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80"
                  alt="Audio equipment close-up"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-neutral-200 bg-white p-6 hidden lg:flex flex-col justify-between">
                <span
                  className="text-4xl font-normal text-neutral-900 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  2014
                </span>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Year Audio Infinite was founded in Jakarta, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-b border-neutral-200">
        <div className="container-x">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">
            <div>
              <p className="eyebrow mb-5">What We Stand For</p>
              <h2
                className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Principles That
                <br />
                Guide Every Build.
              </h2>
            </div>

            <div className="divide-y divide-neutral-200">
              {VALUES.map((value) => (
                <div key={value.number} className="py-8 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-8">
                    <span
                      className="text-2xl font-normal text-neutral-600 tracking-tight shrink-0 mt-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {value.number}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-normal text-neutral-900 tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-[14px] text-neutral-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}