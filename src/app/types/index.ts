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