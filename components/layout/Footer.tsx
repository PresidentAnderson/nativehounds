import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Native Hounds</h3>
            <p className="text-sm">
              Premium products for native hound breeds. Quality you can trust,
              care your dog deserves.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-amber-500 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=food"
                  className="hover:text-amber-500 transition"
                >
                  Food & Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=toys"
                  className="hover:text-amber-500 transition"
                >
                  Toys & Play
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="hover:text-amber-500 transition"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-amber-500 transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-amber-500 transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-500 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-500 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/breeds" className="hover:text-amber-500 transition">
                  Native Breeds
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-500 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Native Hounds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
