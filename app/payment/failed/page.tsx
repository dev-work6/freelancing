'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function PaymentFailed() {
  return (
    <Suspense>
      <PaymentFailedContent />
    </Suspense>
  );
}

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error') || 'Payment could not be processed';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-8">
            {error}
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
            <div>
              <Link
                href="/contact"
                className="text-primary hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}