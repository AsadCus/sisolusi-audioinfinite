"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Instagram,
  Youtube,
  Linkedin,
  ExternalLink,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Mail,
    label: "Business Email",
    value: "sales@audioinfinite.com",
    href: "mailto:sales@audioinfinite.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 821-0000-0000",
    href: "https://wa.me/6282100000000",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Pudong New Area, Shanghai, China 200120",
    href: "https://maps.google.com/?q=Shanghai,China",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/audioinfinite",
    handle: "@audioinfinite",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/audioinfinite",
    handle: "AudioInfinite",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/audioinfinite",
    handle: "AudioInfinite Co.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="bg-zinc-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare size={16} className="text-zinc-400" />
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Get In Touch
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Contact Our Team
          </h2>
          {/* ini kenapa mirip ya.. */}
          <p className="text-zinc-500 max-w-xs text-sm">
            Our team of specialists is ready to help you find the right solution
            for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-80 text-center">
                <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
                  <Send size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-zinc-500 text-sm max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within
                  1–2 business days.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 text-sm text-zinc-400 hover:text-zinc-700 underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition-all bg-zinc-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition-all bg-zinc-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 transition-all bg-zinc-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="32"
                          strokeDashoffset="12"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-900 mb-5 uppercase tracking-wider">
                Contact Details
              </h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-900 transition-colors">
                      <Icon
                        size={15}
                        className="text-zinc-500 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors leading-snug">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-white">
              <h3 className="text-sm font-bold mb-1 uppercase tracking-wider">
                Follow Us
              </h3>
              <p className="text-zinc-400 text-xs mb-5">
                Stay updated with our latest products and stories.
              </p>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group py-2 border-b border-zinc-800 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} className="text-zinc-400" />
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {label}
                        </p>
                        <p className="text-xs text-zinc-500">{handle}</p>
                      </div>
                    </div>
                    <ExternalLink
                      size={13}
                      className="text-zinc-600 group-hover:text-zinc-300 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-100 relative h-36 bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=60"
                alt="Shanghai skyline"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
                  <MapPin size={14} className="text-zinc-700" />
                  <span className="text-xs font-semibold text-zinc-800">
                    Shanghai, China
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}