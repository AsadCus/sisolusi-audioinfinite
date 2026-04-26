import Link from "next/link";

const FOOTER_LINKS = {
  Products: [
    { label: "Speakers", href: "#" },
    { label: "Headphones", href: "#" },
    { label: "Microphones", href: "#" },
    { label: "Amplifiers", href: "#" },
    { label: "Interfaces", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Warranty", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 py-16 lg:py-20">

          <div>
            <Link href="/" className="flex items-center gap-2.5 group mb-6">

              <span
                className="text-[18px] font-semibold text-neutral-900 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Audio<span className="font-normal">Infinite</span>
              </span>
            </Link>
            <p className="text-[13px] text-neutral-400 leading-relaxed max-w-xs">
              Premium audio solutions for professionals and enthusiasts. Engineered for those who demand the very best.
            </p>

          {/* logo */}
            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                },
                {
                  label: "YouTube",
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 8s-.3-2-1.2-2.8C19.7 4 18.4 4 17.8 3.9 15.6 3.8 12 3.8 12 3.8s-3.6 0-5.8.1C5.6 4 4.3 4 3.2 5.2 2.3 6 2 8 2 8S1.8 10.3 1.8 12.5v2.1c0 2.2.2 4.4.2 4.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C8.5 23.1 12 23.1 12 23.1s3.6 0 5.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.4v-2.1C22.2 10.3 22 8 22 8z"/><polygon points="10,9 10,15 16,12" fill="currentColor" stroke="none"/></svg>,
                },
                {
                  label: "LinkedIn",
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-[10px] tracking-[0.18em] uppercase font-medium text-neutral-900 mb-5 font-body">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-400 tracking-wide">
            © {new Date().getFullYear()} Audio Infinite. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}