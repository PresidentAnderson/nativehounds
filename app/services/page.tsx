import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/data/services';
import { formatPrice } from '@/lib/utils/format';
import { Clock, MapPin } from 'lucide-react';

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Pet Grooming Services in Rio
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Professional grooming while you explore the Cidade Maravilhosa!
              Located in Copacabana, we cater specifically to tourists and their furry companions.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Copacabana, Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Mon-Sat: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
            >
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {service.popular && (
                  <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mb-3">
                  {service.category.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-pink-600">
                    R$ {formatPrice(service.price).replace('$', '')}
                  </span>
                </div>
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Chez Cockette?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="font-bold text-gray-900 mb-2">Tourist-Friendly</h3>
              <p className="text-gray-600 text-sm">
                We speak English, Spanish, and Portuguese. We understand traveling with pets!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">
                Book same-day appointments. Drop-off and pickup at your hotel available.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="font-bold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600 text-sm">
                Steps from Copacabana beach. Easy access from major hotels in the area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
