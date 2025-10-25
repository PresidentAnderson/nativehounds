'use client';

import { useSearchParams } from 'next/navigation';
import { getProducts, getProductsByCategory } from '@/lib/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Suspense } from 'react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const products = category
    ? getProductsByCategory(category)
    : getProducts();

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Products';

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryTitle}
          </h1>
          <p className="text-gray-600">
            {products.length} {products.length === 1 ? 'product' : 'products'} available
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
