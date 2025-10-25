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

// Cart types
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
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
