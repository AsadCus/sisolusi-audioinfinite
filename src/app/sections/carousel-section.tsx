"use client";

import { useState } from "react";
import Image from "next/image";

const APPLICATIONS = [
  { id: 1, category: "Company & Office", title: "Modern Corporate Audio Systems", description: "Seamless communication across boardrooms, lobbies, and open-plan offices.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" },
  { id: 2, category: "School & University", title: "Smart Educational Sound Solutions", description: "Crystal-clear audio for lecture halls, classrooms, and campus-wide PA systems.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80" },
  { id: 3, category: "Government", title: "Public Sector Audio Infrastructure", description: "Reliable, secure audio systems built for command centers and public institutions.", image: "https://images.unsplash.com/photo-1536181783029-1097aaf179de?w=1600&q=80" },
  { id: 4, category: "Event & Concert", title: "High-Scale Concert Sound Engines", description: "Powerful PA systems and stage monitors engineered for large-scale live events.", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80" },
  { id: 5, category: "Religious Space", title: "Church & Venue Acoustics", description: "Warm, intelligible sound reinforcement for worship and community spaces.", image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1600&q=80" },
  { id: 6, category: "Commercial & Retail", title: "Retail & Mall Ambient Sound", description: "Background music and announcement systems that elevate the shopping experience.", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80" },
  { id: 7, category: "Hotel & Tourism", title: "Hospitality & Resort Audio", description: "Elegant in-room and lobby audio that elevates every guest's experience.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" },
  { id: 8, category: "Media & Production", title: "Broadcasting & Podcast Studio", description: "Professional-grade audio chains for on-air broadcasting and content creation.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80" },
  { id: 9, category: "Fitness & Health", title: "Gym & Sports Center Audio", description: "High-impact sound systems that maintain energy levels across every zone.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" },
  { id: 10, category: "Restaurant & Bar", title: "Fine Dining Acoustic Ambience", description: "Carefully tuned ambient audio that complements cuisine and atmosphere.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" },
];

export function CarouselSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="applications" className="section-pad bg-neutral-50 border-t border-neutral-200">
      <div className="container-x">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow mb-4">Where We Work</p>
            <h2
              className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight max-w-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Application Areas
            </h2>
          </div>
          <p className="text-[13px] text-neutral-600 max-w-xs leading-relaxed">
            Our versatile solutions are deployed across industries — from intimate spaces to massive venues.
          </p>
        </div>

        <div className="grid lg:grid-cols-[5fr_8fr] border border-neutral-200 bg-white">
          <div className="overflow-y-auto border-r border-neutral-200" style={{ maxHeight: "520px" }}>
            {APPLICATIONS.map((app, i) => (
              <button
                key={app.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 border-b border-neutral-100 transition-all duration-200 group last:border-b-0 ${
                  active === i ? "bg-neutral-50" : "hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className={`text-[9px] tracking-[0.16em] uppercase font-medium mb-1 transition-colors duration-200 ${
                      active === i ? "text-neutral-900" : "text-neutral-300 group-hover:text-neutral-500"
                    }`}>
                      {app.category}
                    </div>
                    <div className={`text-[13px] font-medium leading-snug transition-colors duration-200 ${
                      active === i ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}>
                      {app.title}
                    </div>
                  </div>
                  <div className={`w-5 h-5 border shrink-0 flex items-center justify-center transition-all duration-200 ${
                    active === i ? "border-neutral-900" : "border-neutral-200"
                  }`}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4h6M4 1l3 3-3 3" stroke={active === i ? "#0a0a0a" : "#d4d4d4"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative aspect-16/10 lg:aspect-auto overflow-hidden bg-neutral-100">
            {APPLICATIONS.map((app, i) => (
              <div
                key={app.id}
                className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-[9px] tracking-[0.16em] uppercase font-medium text-white/60 mb-2">
                    {app.category}
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-normal text-white tracking-tight leading-tight mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {app.title}
                  </h3>
                  <p className="text-[13px] text-white/60 max-w-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
                <div className="absolute top-5 right-5 text-[10px] tracking-[0.14em] text-white/40">
                  {String(i + 1).padStart(2, "0")} / {String(APPLICATIONS.length).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-px flex lg:hidden border border-t-0 border-neutral-200 divide-x divide-neutral-200 bg-white">
          <button onClick={() => setActive((p) => Math.max(p - 1, 0))} disabled={active === 0} className="flex-1 py-4 flex items-center justify-center text-neutral-400 hover:text-neutral-900 disabled:opacity-30 transition-colors duration-200">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={() => setActive((p) => Math.min(p + 1, APPLICATIONS.length - 1))} disabled={active === APPLICATIONS.length - 1} className="flex-1 py-4 flex items-center justify-center text-neutral-400 hover:text-neutral-900 disabled:opacity-30 transition-colors duration-200">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}