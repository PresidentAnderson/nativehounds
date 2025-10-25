import Link from 'next/link';
import { getFeaturedProducts, getProducts } from '@/lib/data/products';
import { ProductCard } from '@/components/products/ProductCard';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getProducts();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Premium Products for Native Hounds
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Quality nutrition, toys, and accessories designed specifically for
              native hound breeds. Give your dog the care they deserve.
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
            <Link
              href="/products"
              className="text-amber-700 hover:text-amber-900 font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Food', href: '/products?category=food' },
            { name: 'Toys', href: '/products?category=toys' },
            { name: 'Accessories', href: '/products?category=accessories' },
            { name: 'Health', href: '/products?category=health' },
            { name: 'Training', href: '/products?category=training' },
            { name: 'Bedding', href: '/products?category=bedding' },
          ].map(category => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200"
            >
              <div className="text-lg font-semibold text-gray-900">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
