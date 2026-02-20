'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface BannerSlide {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: '1',
    title: 'Premium Audio Solutions for Professionals',
    category: 'Featured Collection',
    description: 'Discover studio-grade audio equipment designed to elevate your sound experience. From monitors to microphones, we deliver excellence in every product.',
    imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1600&q=80',
  },
  {
    id: '2',
    title: 'Studio-Grade Monitoring Systems',
    category: 'Professional Audio',
    description: 'Experience crystal-clear sound with our premium studio monitors. Engineered for accuracy, designed for perfection.',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80',
  },
  {
    id: '3',
    title: 'Wireless Audio Excellence',
    category: 'Innovation',
    description: 'Freedom meets fidelity. Our wireless audio solutions deliver uncompromising sound quality without the cables.',
    imageUrl: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=1600&q=80',
  },
  {
    id: '4',
    title: 'Professional Recording Equipment',
    category: 'Studio Essentials',
    description: 'Capture every detail with precision microphones and recording gear trusted by industry professionals worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80',
  },
]

interface BannerSlideCardProps {
  slide: BannerSlide
}

function BannerSlideCard({ slide }: BannerSlideCardProps) {
  return (
    <Card className="border-0 rounded-none overflow-hidden shadow-none bg-transparent h-full">
      <CardContent className="p-0 relative h-full w-full">

        <div className="absolute inset-0">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

        {/* desktop */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-end p-12 lg:p-16 xl:p-24">
          <div className="max-w-4xl space-y-5">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {slide.title}
            </h1>
            <p className="text-md lg:text-lg xl:text-xl text-white/85 leading-relaxed max-w-2xl">
              {slide.description}
            </p>
            <button className="mt-3 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/40 transition-all duration-200 shadow-lg">
              Explore Collection
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-end p-6">
          <div className="space-y-2 space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-white leading-tight">
              {slide.title}
            </h2>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
              {slide.description}
            </p>
            <button className="mt-3 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/40 transition-all duration-200 shadow-lg">
              Explore Collection
            </button>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}

export function BannerSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  )

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="home" className="h-screen bg-background">

      {/* mobile carousel */}
      <div className="md:hidden relative h-full">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen bottom-10">
            {BANNER_SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="basis-full h-screen">
                <BannerSlideCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* mobile pagination dots */}
        <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-2 z-10">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? 'bg-white w-6'
                  : 'bg-white/40 w-1.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* desktop carousel */}
      <div className="hidden md:block relative h-full">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'center',
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {BANNER_SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="basis-full h-screen">
                <BannerSlideCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white transition-all" />
          <CarouselNext className="right-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white transition-all" />
        </Carousel>

        {/* desktop pagination dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? 'bg-white w-10'
                  : 'bg-white/40 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}