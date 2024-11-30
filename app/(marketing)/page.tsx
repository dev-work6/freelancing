import React from 'react';

export default function MarketingPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Your Brand
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Transform your business with our innovative solutions. We help you achieve more with less.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/signup"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Get started
          </a>
          <a href="/about" className="text-lg font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">Feature 1</h3>
            <p className="mt-2 text-gray-600">
              Description of your amazing feature that helps users succeed.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">Feature 2</h3>
            <p className="mt-2 text-gray-600">
              Another great feature that makes your product stand out.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">Feature 3</h3>
            <p className="mt-2 text-gray-600">
              One more fantastic feature that users will love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
