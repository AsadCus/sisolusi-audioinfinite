"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselSlide {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "1",
    title: "Modern Corporate Audio Systems",
    category: "Company & Office",
    description:
      "Integrated conference audio and background music solutions designed to enhance productivity and the modern workspace atmosphere.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  },
  {
    id: "2",
    title: "Smart Educational Sound Solutions",
    category: "School & University",
    description:
      "Crystal-clear sound systems for classrooms and auditoriums ensuring every educational material is delivered perfectly to students.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80",
  },
  {
    id: "3",
    title: "Public Sector Audio Infrastructure",
    category: "Government",
    description:
      "Public information systems and government meeting room installations with high-security standards and supreme audio clarity.",
    imageUrl:
      "https://images.unsplash.com/photo-1536181783029-1097aaf179de?q=80&w=2344&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "High-Scale Concert Sound Engines",
    category: "Event & Concert",
    description:
      "Audio powerhouses for large stages. Delivering immersive experiences with cutting-edge line-array technology for massive audiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80",
  },
  {
    id: "5",
    title: "Church & Religious Venue Acoustics",
    category: "Religious Space",
    description:
      "Acoustic optimization and sound systems for houses of worship to create a solemn and uniform audio distribution throughout the sanctuary.",
    imageUrl:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2342&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Retail & Mall Ambient Sound",
    category: "Commercial & Retail",
    description:
      "Creating a comfortable shopping experience with centralized audio systems for background music and public announcements in commercial areas.",
    imageUrl:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80",
  },
  {
    id: "7",
    title: "Hospitality & Resort Audio",
    category: "Hotel & Tourism",
    description:
      "World-class audio systems for lobbies, lounges, and outdoor areas to provide premium comfort for hotel and resort guests.",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
  },
  {
    id: "8",
    title: "Broadcasting & Podcast Studio",
    category: "Media & Production",
    description:
      "Professional studio design featuring superior sound isolation and high-end recording equipment for digital content needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80",
  },
  {
    id: "9",
    title: "Gym & Sports Center Audio",
    category: "Fitness & Health",
    description:
      "High-power, durable sound systems to motivate gym members with powerful bass quality and crystal-clear high frequencies.",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
  },
  {
    id: "10",
    title: "Transportation Hub Systems",
    category: "Infrastructure",
    description:
      "Public Address (PA) systems for airports and train stations that guarantee every announcement is heard clearly amidst the noise.",
    imageUrl:
      "https://images.unsplash.com/photo-1620146596504-95527348e0ac?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    title: "Fine Dining Acoustic Ambience",
    category: "Restaurant & Bar",
    description:
      "Elegant audio touches for five-star restaurants, balancing background music with customer conversation privacy.",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
  },
  {
    id: "12",
    title: "Stadium & Outdoor Arena",
    category: "Sports & Arena",
    description:
      "Large-scale audio solutions for sports stadiums with wide sound coverage and extreme weather durability.",
    imageUrl:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1600&q=80",
  },
];

interface CarouselSlideCardProps {
  slide: CarouselSlide;
}

function HeroSlideCard({ slide }: CarouselSlideCardProps) {
  return (
    <Card className="border-0 rounded-3xl overflow-hidden shadow-none bg-transparent">
      <CardContent className="p-0 relative aspect-video">
        <div className="absolute inset-0">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-8">
          <div className="max-w-full space-y-2">
            <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-full border border-white/30">
              {slide.category}
            </span>

            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white leading-tight line-clamp-2">
              {slide.title}
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CarouselSlide() {
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
  });

  return (
    <section id="home" className="pt-10 pb-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Application Areas
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Our versatile audio solutions tailored for various industries and
          settings.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[autoplayPlugin]}
          className="w-full max-w-[95%] mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {CAROUSEL_SLIDES.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <HeroSlideCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-8 lg:-left-10" />
          <CarouselNext className="hidden md:flex -right-8 lg:-right-10" />
        </Carousel>
      </div>
    </section>
  );
}
