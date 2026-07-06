"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

<<<<<<< HEAD
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
  ]
=======
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
>>>>>>> 8cfb6d3eb4dbdedacb6443f233e24c494820eb60

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-16 lg:h-18">

          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="text-[15px] font-semibold text-neutral-900 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Audio<span className="font-normal">Infinite</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.14em] uppercase font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="text-[11px] tracking-[0.14em] uppercase font-medium px-5 py-2.5 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.25 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"  
          >
            <span className={`block w-5 h-px bg-neutral-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.25" : ""}`} />
            <span className={`block w-5 h-px bg-neutral-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-neutral-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 pb-6">
          <nav className="flex flex-col gap-5 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] tracking-[0.14em] uppercase font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-[11px] tracking-[0.14em] uppercase font-medium px-5 py-3 border border-neutral-900 text-neutral-900 text-center"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}