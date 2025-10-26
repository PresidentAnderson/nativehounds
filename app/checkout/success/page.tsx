import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-6" />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. This is a demo store, so no actual order was
          processed. In a real e-commerce site, you would receive an order
          confirmation email with tracking information.
        </p>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What happens next?
          </h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li>✓ Order confirmation email sent</li>
            <li>✓ Your order is being prepared</li>
            <li>✓ You'll receive tracking information once shipped</li>
            <li>✓ Estimated delivery: 3-5 business days</li>
          </ul>
        </div>

        <div className="space-x-4">
          <Link
            href="/products"
            className="inline-block bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-800 transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
