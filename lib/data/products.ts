import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food - Native Breeds Formula',
    description: 'Specially formulated nutrition for native hound breeds. High-protein, grain-free formula with natural ingredients.',
    price: 49.99,
    image: '/products/dog-food-1.jpg',
    category: 'food',
    stock: 50,
    featured: true,
  },
  {
    id: '2',
    name: 'Durable Chew Toy Set',
    description: 'Set of 3 heavy-duty chew toys perfect for active hounds. Made from natural rubber.',
    price: 24.99,
    image: '/products/toy-1.jpg',
    category: 'toys',
    stock: 100,
    featured: true,
  },
  {
    id: '3',
    name: 'Leather Training Collar',
    description: 'Premium leather collar with adjustable sizing. Perfect for training native hounds.',
    price: 34.99,
    image: '/products/collar-1.jpg',
    category: 'training',
    stock: 75,
    featured: false,
  },
  {
    id: '4',
    name: 'Orthopedic Dog Bed - Large',
    description: 'Memory foam dog bed designed for larger hound breeds. Removable, washable cover.',
    price: 89.99,
    image: '/products/bed-1.jpg',
    category: 'bedding',
    stock: 30,
    featured: true,
  },
  {
    id: '5',
    name: 'Joint Health Supplements',
    description: 'Natural joint support formula with glucosamine and chondroitin. 60-day supply.',
    price: 39.99,
    image: '/products/supplements-1.jpg',
    category: 'health',
    stock: 60,
    featured: false,
  },
  {
    id: '6',
    name: 'All-Weather Dog Coat',
    description: 'Waterproof and insulated coat for outdoor adventures. Reflective strips for safety.',
    price: 54.99,
    image: '/products/coat-1.jpg',
    category: 'accessories',
    stock: 45,
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
