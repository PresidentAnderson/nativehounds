import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Travel Pet Food Container Set',
    description: 'Portable food and water container set perfect for tourists. Leak-proof, collapsible design for easy packing.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&h=800&fit=crop',
    category: 'food',
    stock: 50,
    featured: true,
  },
  {
    id: '2',
    name: 'Beach Pet Toys Bundle',
    description: 'Water-resistant toys perfect for Copacabana and Ipanema beach days. Floats and easy to clean!',
    price: 85,
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=800&h=800&fit=crop',
    category: 'toys',
    stock: 100,
    featured: true,
  },
  {
    id: '3',
    name: 'Rio Travel Leash & Collar Set',
    description: 'Stylish Brazilian-themed collar and leash set. Lightweight and comfortable for city exploration.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop',
    category: 'accessories',
    stock: 75,
    featured: false,
  },
  {
    id: '4',
    name: 'Portable Pet Bed - Travel Size',
    description: 'Foldable, lightweight pet bed perfect for hotel stays. Machine washable and packs into carry bag.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1591856419595-032f8ac9a4cf?w=800&h=800&fit=crop',
    category: 'bedding',
    stock: 30,
    featured: true,
  },
  {
    id: '5',
    name: 'Tropical Paw Protection Balm',
    description: 'Protects paws from hot Rio pavements and beach sand. All-natural Brazilian ingredients.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1583604310111-9c17f409c9d1?w=800&h=800&fit=crop',
    category: 'health',
    stock: 60,
    featured: false,
  },
  {
    id: '6',
    name: 'Cooling Vest for Tropical Climate',
    description: 'Keeps your pet cool in Rio heat. Lightweight, breathable, and easy to pack.',
    price: 110,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=800&fit=crop',
    category: 'accessories',
    stock: 45,
    featured: false,
  },
  {
    id: '7',
    name: 'Pet Travel Documents Holder',
    description: 'Waterproof holder for pet passports, vaccination records, and travel documents.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=800&fit=crop',
    category: 'accessories',
    stock: 80,
    featured: true,
  },
  {
    id: '8',
    name: 'Brazilian Pet Treats Sampler',
    description: 'Locally-made natural treats featuring Brazilian flavors. Your pet\'s taste of Rio!',
    price: 70,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=800&fit=crop',
    category: 'food',
    stock: 90,
    featured: false,
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}
