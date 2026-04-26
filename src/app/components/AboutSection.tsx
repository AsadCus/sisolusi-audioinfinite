"use client";

import { CheckCircle2, AudioWaveform, Users, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Years of Excellence" },
  { value: "500+", label: "Products Curated" },
  { value: "50K+", label: "Happy Professionals" },
  { value: "120+", label: "Global Brands" },
];

const highlights = [
  "Studio-grade equipment for every stage of production",
  "Trusted by broadcasters, musicians, and live engineers",
  "Exclusive partnerships with world-leading manufacturers",
  "End-to-end support from consultation to installation",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <AudioWaveform size={16} className="text-zinc-400" />
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Our Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6 tracking-tight">
              Redefining the Standard
              <br />
              <span className="text-zinc-600">in Professional Audio</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              AudioInfinite was founded on a single belief — that every
              professional deserves access to audio equipment that performs
              without compromise. From intimate recording studios to
              stadium-scale live events, we source and deliver gear that shapes
              the sound of the world.
            </p> 
            <p className="text-zinc-500 text-base leading-relaxed mb-10">
              Based in Shanghai and serving clients across Asia and beyond, our
              catalog brings together the finest monitors, microphones,
              amplifiers, and signal processors — all rigorously vetted by
              our team of audio engineers.
            </p>

            <ul className="space-y-3 mb-12">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-zinc-900 mt-0.5 shrink-0"
                  />
                  <span className="text-zinc-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium">
                <Award size={14} />
                ISO Certified Partner
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium">
                <Users size={14} />
                Expert Sales Team
              </span>
            </div>
          </div>

        {/* nanti dipisah jadi component tersendiri */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80"
                alt="Professional studio monitoring equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/30 to-transparent" />

              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <p className="text-xs text-zinc-500 mb-0.5">Trusted worldwide</p>
                <p className="text-sm font-bold text-zinc-900">
                  Premium Audio Catalog
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border-2 border-zinc-100 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-zinc-50 -z-10" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-8 text-center hover:bg-zinc-50 transition-colors"
            >
              <p className="text-3xl font-bold text-zinc-900 mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}