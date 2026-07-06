export interface NavItem {
  label: string;
  href: string;
}

export interface Slide {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
  badge?: string;
}

export interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
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
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface Application {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceCard {
  type: string;
  title: string;
  description: string;
  features: string[];
}

export interface FooterGroup {
  label: string;
  links: { label: string; href: string }[];
}