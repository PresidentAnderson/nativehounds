// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: ProductCategory;
  breed?: string;
  stock: number;
  featured?: boolean;
}

export type ProductCategory =
  | 'food'
  | 'toys'
  | 'accessories'
  | 'health'
  | 'training'
  | 'bedding';

// Service types
export interface GroomingService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: ServiceCategory;
  popular?: boolean;
}

export type ServiceCategory =
  | 'grooming'
  | 'spa'
  | 'daycare'
  | 'training';

// Cart types
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Booking types
export interface ServiceBooking {
  id: string;
  service: GroomingService;
  date: Date;
  time: string;
  petName: string;
  petType: 'dog' | 'cat';
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  hotelName?: string;
}

// Order types
export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shippingAddress: ShippingAddress;
  createdAt: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}
