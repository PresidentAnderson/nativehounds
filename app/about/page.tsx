import { Heart, Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Chez Cockette
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Welcome to Chez Cockette, Rio de Janeiro's premier pet grooming salon
              dedicated to serving tourists and their beloved companions!
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Chez Cockette was born from a simple observation: tourists
              visiting Rio de Janeiro with their pets needed a reliable, professional grooming
              service that understood their unique needs. We saw travelers struggling to find
              English-speaking groomers, dealing with complicated scheduling, and worrying
              about leaving their pets in unfamiliar places.
            </p>
            <p className="text-gray-700 mb-4">
              Located in the heart of Copacabana, just steps from the famous beach, we've
              become the go-to destination for pet parents exploring the Cidade Maravilhosa.
              Our multilingual staff speaks English, Spanish, and Portuguese fluently, making
              communication seamless for international visitors.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-900">Tourist-Focused</h3>
                </div>
                <p className="text-gray-700">
                  We specialize in serving international visitors with flexible scheduling,
                  hotel pickup/drop-off, and staff who understand travel challenges.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Pet-Centered Care</h3>
                </div>
                <p className="text-gray-700">
                  Your pet's comfort and safety are our top priorities. We use gentle,
                  stress-free techniques and premium, pet-safe products.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                </div>
                <p className="text-gray-700">
                  Our certified groomers have years of experience and receive ongoing
                  training in the latest pet care techniques.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Community Trusted</h3>
                </div>
                <p className="text-gray-700">
                  Rated 5 stars by hundreds of tourists, we're recommended by hotels
                  and tour guides throughout Rio.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Our Services
            </h2>
            <p className="text-gray-700 mb-4">
              From basic baths to luxury spa treatments, we offer everything your pet needs
              to look and feel their best. Our specialized beach treatments help remove sand
              and salt water, while our day care services let you explore Rio worry-free,
              knowing your pet is in loving, professional hands.
            </p>

            <p className="text-gray-700 mb-4">
              We also stock a carefully curated selection of travel-friendly pet products,
              from portable water bowls to paw protection balm perfect for Rio's hot sidewalks.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Visit Us
            </h2>
            <p className="text-gray-700 mb-4">
              We're located at Av. Nossa Senhora de Copacabana, 1234, right in the heart of
              Copacabana. Easy to find, easy to reach, and ready to pamper your pet!
            </p>

            <p className="text-gray-700">
              Open Monday through Saturday, 8 AM to 8 PM, and Sundays 9 AM to 5 PM.
              Walk-ins welcome, but appointments recommended for optimal scheduling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
