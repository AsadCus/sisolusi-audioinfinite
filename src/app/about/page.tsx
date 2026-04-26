import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Footer } from '../sections/footer'

export const metadata = {
  title: "About Us & Contact | AudioInfinite",
  description:
    "Learn about AudioInfinite's mission to deliver premium professional audio solutions worldwide. Get in touch with our team in Shanghai.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="bg-zinc-900 text-white text-center py-2 px-4 text-xs tracking-wide">
        Your Best Premium Audio Solutions
      </div>

      <header className="bg-white border-b border-zinc-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-zinc-700 uppercase tracking-widest mb-3">
            AudioInfinite
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 tracking-tighter leading-none mb-5">
            Who We Are
          </h1>
          <p className="text-zinc-800 text-lg leading-relaxed max-w-xl mx-auto">
            A platform dedicated to the world&apos;s finest professional audio
            equipment — curated for creators, engineers, and sound professionals
            who demand more.
          </p>
        </div>
      </header>

      <AboutSection />
      <ContactSection />
    <Footer />
    </main>
  );
}