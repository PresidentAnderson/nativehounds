'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/context/CartContext';

export function Header() {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-pink-600">
              Chez Cockette
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Grooming Services
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
