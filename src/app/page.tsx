import { BannerSection } from './sections/banner-section'
import { CarouselSlide } from './sections/carousel-section'
import { FeaturesSection } from './sections/features-section'
import { ProductShowcase } from './sections/product-showcase'
import { TestimonialsSection } from './sections/testimonials-section'
import { CTASection } from './sections/cta-section'
import { Footer } from './sections/footer'
import { Navigation } from './components/navigation'
import { MarqueeSection } from './sections/marquee-section'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BannerSection />
      <ProductShowcase />
      <FeaturesSection />
      <Separator className="my-8 bg-border" />
      <CarouselSlide/>
      <TestimonialsSection />
      <MarqueeSection/>
      <CTASection />
      <Footer />
    </main>
  )
}