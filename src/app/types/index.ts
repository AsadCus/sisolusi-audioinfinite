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

export interface APICategory {
  id: number
  name: string
  description: string
}

export interface APISupplier {
  id: number
  name: string
  desc: string
}

export interface APIGallery {
  id: number
  file_path: string
  file_url: string
  product_id: number
  order: number
  created_at: string
  updated_at: string
}

export interface APIProduct {
  id: number
  name: string
  description: string
  supplier_id: number
  category_id: number
  supplier: APISupplier
  category: APICategory
  galleries: APIGallery[]
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
}