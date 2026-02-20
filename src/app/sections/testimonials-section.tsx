'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { Testimonial } from '@/app/types'

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Max Verstappen',
    role: 'F1 Driver',
    company: 'Soundwave Studios',
    content: 'Anjay kacik bgt der.',
    rating: 5
  },
  {
    id: '2',
    name: 'A$AP Rocky',
    role: 'Music Producer',
    company: 'Rhythm Productions',
    content: 'Dzahabad dhomau wab talatil uuruqu watsabatal ajru insyaa Allah.',
    rating: 5
  },
  {
    id: '3',
    name: 'Central Cee',
    role: 'Podcast Host',
    company: 'The Daily Voice',
    content: "Keren bgt MasyaaAllah. Allahuma inni as'aluka ilman naa fian wa rizqon thoyyiban wa amalan mutaqobbalan.",
    rating: 5
  },
]

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-chart-4 text-chart-4" />
          ))}
        </div>

        <p className="text-muted-foreground mb-6 italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-muted">
            <AvatarFallback className="text-foreground font-semibold">
              {getInitials(testimonial.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from professionals who trust Audio Infinite.
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="mb-6">
            <TestimonialCard testimonial={TESTIMONIALS_DATA[currentIndex]} />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-foreground' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}