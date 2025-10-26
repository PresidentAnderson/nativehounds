import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Chez Cockette</h3>
            <p className="text-sm">
              Premium pet grooming services and products in Rio de Janeiro.
              Making your pet look fabulous while you explore the cidade maravilhosa!
            </p>
            <p className="text-sm mt-2 text-pink-400">
              📍 Copacabana, Rio de Janeiro
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-pink-400 transition">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services#grooming" className="hover:text-pink-400 transition">
                  Pet Grooming
                </Link>
              </li>
              <li>
                <Link href="/services#spa" className="hover:text-pink-400 transition">
                  Spa Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#daycare" className="hover:text-pink-400 transition">
                  Day Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-pink-400 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=food" className="hover:text-pink-400 transition">
                  Pet Food
                </Link>
              </li>
              <li>
                <Link href="/products?category=toys" className="hover:text-pink-400 transition">
                  Toys
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="hover:text-pink-400 transition">
                  Travel Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-pink-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#hours" className="hover:text-pink-400 transition">
                  Hours & Location
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-pink-400 transition">
                  FAQ for Tourists
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Chez Cockette. Servindo turistas e pets em Rio de Janeiro.</p>
        </div>
      </div>
    </footer>
  );
}
