import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help! Reach out for bookings, questions, or just to say olá!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">
                    Av. Nossa Senhora de Copacabana, 1234<br />
                    Copacabana, Rio de Janeiro - RJ<br />
                    CEP: 22020-001, Brazil
                  </p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-pink-600 hover:text-pink-700 text-sm mt-1 inline-block"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +55 (21) 3456-7890<br />
                    WhatsApp: +55 (21) 98765-4321
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    English, Spanish, and Portuguese
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:hello@chezcockette.com"
                    className="text-pink-600 hover:text-pink-700"
                  >
                    hello@chezcockette.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    We respond within 2 hours during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" id="hours">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Same-day appointments usually available!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                  <div className="flex gap-3 mt-2">
                    <Link
                      href="https://instagram.com/chezcockette"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      Instagram
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link
                      href="https://facebook.com/chezcockette"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Book?
              </h2>
              <p className="mb-6">
                Schedule your grooming appointment or day care service now!
              </p>
              <Link
                href="/services"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition"
              >
                View Services & Book
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hotel Pickup & Drop-off
              </h3>
              <p className="text-gray-600 mb-4">
                We offer complimentary pickup and drop-off service for grooming appointments
                at major Copacabana and Ipanema hotels.
              </p>
              <p className="text-sm text-gray-500">
                Service areas: Copacabana, Ipanema, Leblon, and Botafogo.
                Call us to arrange pickup!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Emergency Services
              </h3>
              <p className="text-gray-600 mb-4">
                Need urgent grooming or have a pet emergency? We have partnerships with
                local veterinary clinics.
              </p>
              <p className="text-sm text-pink-600 font-semibold">
                Emergency line: +55 (21) 99999-9999
              </p>
            </div>

            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <h3 className="font-bold text-gray-900 mb-2">
                🇧🇷 Speaking Portuguese?
              </h3>
              <p className="text-gray-700 text-sm">
                Nossa equipe fala português fluentemente! Fique à vontade para
                ligar ou enviar mensagem no WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Map integration would go here - Google Maps embed]
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            We're located right on Av. Nossa Senhora de Copacabana, between Rua Santa Clara
            and Rua Siqueira Campos. Easy to find, with street parking available nearby.
          </p>
        </div>
      </div>
    </div>
  );
}
