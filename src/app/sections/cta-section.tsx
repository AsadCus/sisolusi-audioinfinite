'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
          Ready to Elevate Your Audio Experience?
        </h2>
        <p className="text-lg text-zinc-800 mb-8">
        Allahumma baarik lanaa fiima razaqtana waqina  adzaa bannar.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-zinc-800 text-white hover:bg-zinc-900 font-medium"
          >
            Shop Now
          </Button>
          <Button 
            size="lg" 
            className="bg-zinc-800 text-white hover:bg-zinc-900 font-medium"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}