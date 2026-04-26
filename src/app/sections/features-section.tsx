"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    id: 1,
    number: "01",
    title: "Premium Quality",
    description: "Every product passes a 47-point quality inspection before leaving our facility. Studio-grade components, built to last a decade.",
  },
  {
    id: 2,
    number: "02",
    title: "Trusted Brand",
    description: "Over a decade of excellence in professional audio. Trusted by recording studios, broadcasters, and sound engineers worldwide.",
  },
  {
    id: 3,
    number: "03",
    title: "Fast Delivery",
    description: "Nationwide shipping with real-time tracking. Orders before 2PM ship same day, packaged with military-spec foam protection.",
  },
  {
    id: 4,
    number: "04",
    title: "Expert Support",
    description: "Dedicated audio specialists available 24/7 — real engineers who understand your needs, not generalists reading from a script.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group border-t border-neutral-200 pt-8 pb-10 px-1 hover:bg-neutral-50 transition-colors duration-300 -mx-1 px-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <span
          className="text-4xl font-normal text-neutral-800 leading-none select-none tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {feature.number}
        </span>
        {/* change this into icon features */}
        {/* <div className="w-8 h-8 border border-neutral-200 flex items-center justify-center group-hover:border-neutral-400 transition-colors duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors duration-300" />
        </div> */}
      </div>
      {/* add number increasing animation here */}
      <h3
        className="text-xl font-normal text-neutral-900 tracking-tight mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {feature.title}
      </h3>
      <p className="text-[13px] text-neutral-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="about" className="section-pad bg-neutral-50 border-t border-neutral-200">
      <div className="container-x">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2
              className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for Those Who Demand More.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[15px] text-neutral-600 leading-relaxed max-w-md">
              We combine cutting-edge engineering with exceptional craftsmanship to deliver
              audio solutions that exceed the expectations of the world's most demanding professionals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* divide it into stats */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-neutral-200 border border-neutral-200 bg-white">
          {[
            { value: "10+", label: "Years in Business" },
            { value: "5,000+", label: "Products Delivered" },
            { value: "250+", label: "Studio Partners" },
          ].map((stat) => (
            <div key={stat.label} className="py-10 px-8 text-center">
              <div
                className="text-3xl lg:text-4xl font-normal text-neutral-900 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-neutral-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}