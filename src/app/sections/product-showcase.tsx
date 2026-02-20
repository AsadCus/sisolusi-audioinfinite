'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Product } from '@/app/types'

const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    name: 'Studio Monitor Pro',
    category: 'Speakers',
    description: 'Professional studio monitors with exceptional clarity and accurate frequency response',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
    features: [
      'Frequency Response: 20Hz-20kHz',
      '8-inch woofer',
      'Active crossover',
      'XLR/TRS inputs'
    ]
  },
  {
    id: '2',
    name: 'Wireless Headset Elite',
    category: 'Headphones',
    description: 'Premium wireless headphones with active noise cancellation and immersive sound',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    features: [
      '40mm drivers',
      'ANC technology',
      '30-hour battery',
      'Bluetooth 5.3'
    ]
  },
  {
    id: '3',
    name: 'Condenser Mic X1',
    category: 'Microphones',
    description: 'Large-diaphragm condenser microphone perfect for vocals and instruments',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
    features: [
      'Cardioid pattern',
      'Low noise',
      'Shock mount included',
      'Gold-plated XLR'
    ]
  },
  {
    id: '4',
    name: 'Portable Amplifier Gen 2',
    category: 'Amplifiers',
    description: 'Compact yet powerful amplifier delivering crystal-clear audio on the go',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      '100W output',
      'Bluetooth enabled',
      'USB-C charging',
      'Compact design'
    ]
  },
  {
    id: '5',
    name: 'Analog Mixing Console',
    category: 'Mixers',
    description: '12-channel professional mixer with high-headroom preamps',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    features: [
      '12 discrete channels',
      'Built-in FX processor',
      'USB Audio Interface',
      '3-band British EQ'
    ]
  },
  {
    id: '6',
    name: 'Professional Turntable',
    category: 'DJ Gear',
    description: 'Direct-drive turntable system for professional DJs and audiophiles',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80',
    features: [
      'High-torque motor',
      'Pitch control ±8/16%',
      'S-shaped tone arm',
      'Vibration damping'
    ]
  },
  {
    id: '7',
    name: 'Open-Back Headphones',
    category: 'Headphones',
    description: 'Reference-grade open-back headphones for critical listening and mastering',
    price: '$749',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Audio_mixer_close_up.jpg/640px-Audio_mixer_close_up.jpg',
    features: [
      'Velour ear pads',
      'Natural soundstage',
      'Detachable cable',
      'Impedance: 300 ohms'
    ]
  },
  {
    id: '8',
    name: 'Audio Interface 4x4',
    category: 'Recording',
    description: 'High-speed USB-C audio interface with four pristine preamps',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80',
    features: [
      '24-bit/192kHz resolution',
      'Phantom power 48V',
      'Zero-latency monitoring',
      'MIDI I/O'
    ]
  }
];

interface ProductCardProps {
  product: Product
}


function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-64 bg-neutral-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div> */}
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-neutral-900">{product.name}</CardTitle>
        </div>
        <CardDescription className="text-neutral-600">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
              <Check className="w-4 h-4 text-neutral-900 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProductShowcase() {
  const [showAll, setShowAll] = useState(false)
  
  // show 4 items, then show all when button clicked
  const displayedProducts = showAll ? PRODUCTS_DATA : PRODUCTS_DATA.slice(0, 4)
  const hasMore = PRODUCTS_DATA.length > 4

  return (
    <section id="products" className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Main Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of premium audio equipment.
          </p>
        </div>

        {/* 2 columns, 2 rows = 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="default"
              onClick={() => setShowAll(!showAll)}
              className="group border-border hover:bg-accent"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More Products
                  <ChevronDown className="ml-2 w-3 h-3 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}