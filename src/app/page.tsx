import { Navigation } from "./components/navigation";
import { BannerSection } from "./sections/banner-section";
import { MarqueeSection } from "./sections/marquee-section";
import { ProductShowcase } from "./sections/product-showcase";
import { FeaturesSection } from "./sections/features-section";
import { CTASection } from "./sections/cta-section";
import { CarouselSection } from "./sections/carousel-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <BannerSection />
      <MarqueeSection />
      <ProductShowcase />
      <FeaturesSection />
      <CTASection />
      <CarouselSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
