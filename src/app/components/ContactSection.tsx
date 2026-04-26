"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    label: "General Enquiries",
    value: "hello@audioinfinite.com",
    href: "mailto:hello@audioinfinite.com",
  },
  {
    label: "Phone",
    value: "+886 789 1234",
    href: "tel:+886 789 1234",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-pad bg-white border-t border-neutral-200">
      <div className="container-x">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">
          
          <div>
            <p className="eyebrow mb-5">Contact Us</p>
            <h2
              className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Talk
              <br />
              About Sound.
            </h2>
            <p className="text-[15px] text-neutral-400 leading-relaxed mb-12 max-w-sm">
              Whether you have a question about a product, need a custom solution, or simply want
              to discuss your next audio project — we&apos;re here.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-5 border-b border-neutral-100 pb-6 last:border-b-0 last:pb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 shrink-0" />
                  <div>
                    <div className="text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-1">
                      {info.label}
                    </div>
                    <a 
                      href={info.href}
                      className="text-[14px] text-neutral-900 hover:text-neutral-500 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-3">
                Office
              </div>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                Insert address here
                <br />
                Taiwan
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            {submitted ? (
              <div className="h-full border border-neutral-200 flex flex-col items-center justify-center text-center p-12 min-h-100">
                <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center mb-6">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 8.5l3.5 3.5 7-7" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-normal text-neutral-900 tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Received
                </h3>
                <p className="text-[14px] text-neutral-400 leading-relaxed max-w-xs">
                  Thank you for reaching out. We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 text-[11px] tracking-[0.14em] uppercase font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="James Hartwell"
                      className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-[14px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="james@studio.com"
                      className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-[14px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-[14px] text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="product">Product Enquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                       <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 3l4 4 4-4" stroke="#A3A3A3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.16em] uppercase text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or enquiry..."
                    className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-[14px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-400 transition-colors duration-200 resize-none leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-[12px] text-neutral-300 max-w-xs leading-relaxed">
                    We typically respond within one business day.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-900 text-white text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-neutral-800 transition-colors duration-200 shrink-0"
                  >
                    Send Message
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}