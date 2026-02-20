export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface Product {
  id: string
  name: string
  category?: string
  description: string
  price?: string
  image: string
  features: string[]    
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
}