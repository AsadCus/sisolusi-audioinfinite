'use client'

import { useState } from 'react'
import { Award, Shield, Zap, Users, HeadphonesIcon, TruckIcon, BadgeCheckIcon, PhoneCallIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

const FEATURES_DATA: Feature[] = [
  {
    id: '1',
    title: 'Premium Quality',
    description: 'Studio-grade audio equipment designed for professionals and enthusiasts',
    icon: 'award'
  },
  {
    id: '2',
    title: 'Trusted Brand',
    description: 'Over 10 years of excellence in delivering high-fidelity audio solutions',
    icon: 'shield'
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Quick and secure shipping to your doorstep with tracking support',
    icon: 'zap'
  },
  {
    id: '4',
    title: 'Expert Support',
    description: '24/7 customer service from audio specialists who understand your needs',
    icon: 'users'
  },
  {
    id: '5',
    title: 'Warranty Included',
    description: 'Comprehensive warranty coverage for all our products',
    icon: 'badgecheck'
  },
  {
    id: '6',
    title: 'Free Consultation',
    description: 'Get expert advice on choosing the right equipment for your needs',
    icon: 'phonecall'
  },
  {
    id: '7',
    title: 'Audio Excellence',
    description: 'Industry-leading sound quality in every product we offer',
    icon: 'headphones'
  },
  {
    id: '8',
    title: 'Easy Returns',
    description: '30-day hassle-free return policy on all purchases',
    icon: 'truck'
  },
]

const iconMap = {
  award: Award,
  shield: Shield,
  zap: Zap,
  users: Users,
  headphones: HeadphonesIcon,
  truck: TruckIcon,
  badgecheck: BadgeCheckIcon,
  phonecall: PhoneCallIcon,
}

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon as keyof typeof iconMap] || Award

  return (
    <Card className="border-border hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export function FeaturesSection() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedFeatures = showAll ? FEATURES_DATA : FEATURES_DATA.slice(0, 4)
  const hasMore = FEATURES_DATA.length > 4

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Audio Infinite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional craftsmanship to deliver 
            audio solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
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
                  <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More Features
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}