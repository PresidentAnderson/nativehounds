import { GroomingService } from '@/types';

export const services: GroomingService[] = [
  {
    id: '1',
    name: 'Basic Grooming Package',
    description: 'Bath, brush, nail trim, and ear cleaning. Perfect for tourists with pets needing a quick refresh.',
    price: 150,
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=800&fit=crop',
    category: 'grooming',
    popular: true,
  },
  {
    id: '2',
    name: 'Premium Grooming & Styling',
    description: 'Full grooming with breed-specific styling, conditioning treatment, and pawdicure. Make your pet Instagram-ready!',
    price: 280,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=800&fit=crop',
    category: 'grooming',
    popular: true,
  },
  {
    id: '3',
    name: 'Beach Pet Spa Treatment',
    description: 'Special post-beach treatment: salt water rinse, deep conditioning, paw balm, and sanitary trim.',
    price: 200,
    duration: '1.5 hours',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=800&fit=crop',
    category: 'spa',
    popular: true,
  },
  {
    id: '4',
    name: 'Luxury Spa Day',
    description: 'The ultimate pampering: aromatherapy bath, massage, facial, pawdicure, and blueberry facial.',
    price: 350,
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=800&fit=crop',
    category: 'spa',
    popular: false,
  },
  {
    id: '5',
    name: 'Tourist Day Care',
    description: 'Full day care while you explore Rio! Includes playtime, walks, meals, and supervised socialization.',
    price: 180,
    duration: 'Full day (8 hours)',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop',
    category: 'daycare',
    popular: true,
  },
  {
    id: '6',
    name: 'Half Day Care',
    description: 'Half day care perfect for morning or afternoon adventures. Includes snacks and playtime.',
    price: 100,
    duration: 'Half day (4 hours)',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=800&fit=crop',
    category: 'daycare',
    popular: false,
  },
  {
    id: '7',
    name: 'Cat Grooming Special',
    description: 'Gentle grooming for felines: bath, brush, nail trim. We speak fluent cat!',
    price: 180,
    duration: '1-1.5 hours',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop',
    category: 'grooming',
    popular: false,
  },
  {
    id: '8',
    name: 'Express Grooming',
    description: 'Quick service for tourists on tight schedules. Bath, dry, and brush in under an hour!',
    price: 120,
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=800&fit=crop',
    category: 'grooming',
    popular: false,
  },
];

export function getServices(): GroomingService[] {
  return services;
}

export function getServiceById(id: string): GroomingService | undefined {
  return services.find(s => s.id === id);
}

export function getServicesByCategory(category: string): GroomingService[] {
  return services.filter(s => s.category === category);
}

export function getPopularServices(): GroomingService[] {
  return services.filter(s => s.popular);
}
