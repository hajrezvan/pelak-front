'use client'

import { StarIcon, MapPinIcon, BuildingOfficeIcon, CheckBadgeIcon } from '@heroicons/react/24/solid' // TODO: Remove this

export default function FeaturedSuppliers() {
  const suppliers = [
    {
      id: 1,
      name: 'Iran Saffron Co.',
      location: 'Mashhad, Iran',
      category: 'Agriculture & Food',
      rating: 4.8,
      reviews: 156,
      verified: true,
      products: 45,
      description: 'Premium quality saffron and dried fruits exporter with 15+ years of experience.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Persian Carpet Industries',
      location: 'Tabriz, Iran',
      category: 'Fashion & Textiles',
      rating: 4.9,
      reviews: 203,
      verified: true,
      products: 120,
      description: 'Handcrafted Persian carpets and rugs with traditional designs and modern quality.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Tehran Steel Works',
      location: 'Tehran, Iran',
      category: 'Minerals & Metals',
      rating: 4.7,
      reviews: 89,
      verified: true,
      products: 67,
      description: 'High-quality steel products and metal fabrication for industrial applications.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Isfahan Ceramics Ltd.',
      location: 'Isfahan, Iran',
      category: 'Construction',
      rating: 4.6,
      reviews: 134,
      verified: true,
      products: 89,
      description: 'Traditional and modern ceramic tiles, pottery, and decorative items.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Shiraz Pistachio Export',
      location: 'Shiraz, Iran',
      category: 'Agriculture & Food',
      rating: 4.8,
      reviews: 178,
      verified: true,
      products: 23,
      description: 'Premium pistachios and nuts with international quality standards.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Kerman Petrochemical',
      location: 'Kerman, Iran',
      category: 'Petroleum & Gas',
      rating: 4.5,
      reviews: 67,
      verified: true,
      products: 34,
      description: 'Petrochemical products and industrial chemicals for global markets.',
      image: '/api/placeholder/80/80'
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Suppliers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with verified Iranian suppliers who have been thoroughly vetted for quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <BuildingOfficeIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                      {supplier.verified && (
                        <CheckBadgeIcon className="h-5 w-5 text-blue-600 ml-2" />
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {supplier.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {supplier.category}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {supplier.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(supplier.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {supplier.rating} ({supplier.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {supplier.products} products
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Suppliers
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
