"use client";

import Link from "next/link";

const SERVICES = [
  {
    type: "OEM",
    title: "Your Brand, Our Factory",
    description: "We manufacture to your exact specs — logo, packaging, and materials. Built for brands that want to sell under their own identity.",
    features: ["Logo Branding", "Custom Packaging", "Color Options", "Custom Materials"],
  },
  {
    type: "ODM",
    title: "Design to Delivery",
    description: "From concept to production, we handle everything. Share your requirements and we&apos;ll engineer a solution tailored to your market.",
    features: ["Concept Design", "Spec Confirmation", "Full Customization", "Direct Delivery"],
  },
  {
    type: "Support",
    title: "End-to-End Care",
    description: "Our team of audio engineers provides ongoing technical support, warranty service, and product training for your team.",
    features: ["24/7 Support", "On-site Training", "Warranty Service", "Replacement Parts"],
  },
];

export function CTASection() {
  return (
    <section id="services" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-400 mb-4">Ready to Begin</p>
            <h2
              className="text-4xl lg:text-6xl font-normal text-neutral-900 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elevate Your Audio Experience.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8">
            <p className="text-[15px] text-neutral-600 leading-relaxed max-w-md">
              Whether you&apos;re building a professional studio, upgrading your live rig, or sourcing
              equipment for a large-scale venue — our specialists are ready to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-neutral-800 text-white text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-neutral-700 transition-colors duration-300"
              >
                Shop Now
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-neutral-200 text-[11px] font-medium tracking-[0.14em] uppercase text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 border border-neutral-200">
          {SERVICES.map((service) => (
            <div
              key={service.type}
              className="group p-8 lg:p-10 hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="text-[9px] tracking-[0.18em] uppercase font-medium text-neutral-400 mb-4">
                {service.type}
              </div>
              <h3
                className="text-xl font-normal text-neutral-900 tracking-tight mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-[13px] text-neutral-400 leading-relaxed mb-7">
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-[12px] text-neutral-400">
                    <span className="w-3 h-px bg-neutral-300" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-[10px] tracking-[0.16em] uppercase font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300 flex items-center gap-2">
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M6.5 1.5l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}