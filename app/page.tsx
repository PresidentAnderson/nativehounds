import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/lib/data/products';
import { getPopularServices } from '@/lib/data/services';
import { ProductCard } from '@/components/products/ProductCard';
import { formatPrice } from '@/lib/utils/format';
import { Scissors, ShoppingBag, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const popularServices = getPopularServices();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              Chez Cockette
            </h1>
            <p className="text-3xl mb-4 text-pink-100">
              Pet Grooming & Shop in Rio de Janeiro
            </p>
            <p className="text-xl mb-8 text-pink-100">
              Visiting Rio with your pet? We offer premium grooming services and travel products
              for tourists exploring the Cidade Maravilhosa! Located in Copacabana.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition"
              >
                <Scissors className="w-5 h-5" />
                Book Grooming
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-800 transition border-2 border-white"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Grooming Services
          </h2>
          <p className="text-gray-600 text-lg">
            Professional pet care while you explore Rio de Janeiro
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {popularServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
            >
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{service.duration}</span>
                  <span className="text-lg font-bold text-pink-600">
                    R$ {formatPrice(service.price).replace('$', '')}
                  </span>
                </div>
                <Link
                  href="/services"
                  className="block w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block text-pink-600 hover:text-pink-800 font-semibold text-lg"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* Travel Products */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Travel Products for Your Pet
            </h2>
            <p className="text-gray-600 text-lg">
              Everything your pet needs for the perfect Rio vacation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-block text-pink-600 hover:text-pink-800 font-semibold text-lg"
            >
              Shop All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Info */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Us in Copacabana
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Av. Nossa Senhora de Copacabana, 1234</p>
                      <p className="text-gray-600">Copacabana, Rio de Janeiro - RJ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Tourists Love Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">Multilingual staff (English, Spanish, Portuguese)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">Same-day appointments available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">Hotel pickup & drop-off service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">Beach-specific treatments & products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">Day care while you explore the city</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
