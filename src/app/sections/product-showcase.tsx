"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Ditambahkan untuk navigasi internal

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphone Pro",
    category: "Headphones",
    description: "High-fidelity wireless headphones with active noise cancellation and 30 hours of battery life for uninterrupted listening.",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
    specs: ["20Hz–20kHz", "8\" Woofer", "Active XO", "XLR/TRS"],
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Wireless Headset Elite",
    category: "Headphones",
    description: "Premium wireless headphones with active noise cancellation and immersive spatial audio for any environment.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    specs: ["40mm Drivers", "ANC", "30hr Battery", "BT 5.3"],
    badge: "New",
  },
  {
    id: 3,
    name: "Condenser Mic X1",
    category: "Microphones",
    description: "Large-diaphragm condenser microphone engineered for vocals and acoustic instruments in professional studios.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    specs: ["Cardioid", "Low Noise", "Shock Mount", "Gold XLR"],
  },
  {
    id: 4,
    name: "Portable Amplifier Gen 2",
    category: "Amplifiers",
    description: "Compact yet powerful amplifier delivering crystal-clear audio for both stage and studio environments.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    specs: ["100W Output", "Bluetooth", "USB-C", "Compact"],
  },
  {
    id: 5,
    name: "Reference Headphones R7",
    category: "Headphones",
    description: "Open-back reference headphones designed for critical listening and mastering sessions requiring total accuracy.",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
    specs: ["Open-Back", "250Ω", "Velour Pads", "3m Cable"],
    badge: "Pro Pick",
  },
  {
    id: 6,
    name: "Interface Pro 4×4",
    category: "Interfaces",
    description: "Professional 4-in/4-out audio interface with ultra-low latency preamps for recording and production.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    specs: ["4-In/4-Out", "192kHz", "MIDI I/O", "USB-C"],
  },
];

const CATEGORIES = ["All", "Headphones", "Microphones", "Amplifiers", "Interfaces"];

// Menggunakan Named Export
export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-400 mb-4">Our Collection</p>
            <h2 className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight max-w-xs" style={{ fontFamily: "var(--font-display)" }}>
              Main Products
            </h2>
            <p className="mt-4 text-[13px] text-neutral-400 max-w-xs leading-relaxed">
              Curated professional audio equipment for every stage of your workflow.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.14em] uppercase font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "border-neutral-900 text-white bg-neutral-900"
                    : "border-neutral-200 text-neutral-400 hover:border-neutral-400 hover:text-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group relative bg-white cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.16em] uppercase font-medium bg-neutral-900 text-white">
                    {product.badge}
                  </span>
                )}

                {/* <div className="absolute top-4 right-4">
                  <span className="text-[9px] tracking-[0.14em] uppercase text-white/80 font-medium">
                    {product.category}
                  </span>
                </div> */}
              </div>

              <div className="p-6 lg:p-7 border-t border-neutral-200">
                <h3 className="text-lg font-normal text-neutral-900 leading-snug tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {product.name}
                </h3>
                <p className="mt-2 text-[13px] text-neutral-400 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredId === product.id ? "max-h-16 mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[9px] tracking-widest uppercase px-2.5 py-1 border border-neutral-200 text-neutral-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                  <span className="text-[10px] tracking-[0.16em] uppercase font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                    View Details
                  </span>
                  <svg
                    width="15" height="15" viewBox="0 0 15 15" fill="none"
                    className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path d="M2 7.5h11M8.5 3l4.5 4.5L8.5 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-200 text-[10px] tracking-[0.18em] uppercase font-medium text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
          >
            View All Products
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}