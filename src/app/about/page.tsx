import { Navigation } from "../components/navigation";
import { Footer } from "../sections/footer";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}