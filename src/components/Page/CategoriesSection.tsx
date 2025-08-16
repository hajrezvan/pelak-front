'use client'

import { 
  TruckIcon, 
  BuildingOfficeIcon, 
  BeakerIcon, 
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  CogIcon,
  CubeIcon,
  FireIcon
} from '@heroicons/react/24/outline'  // TODO: Remove this

export default function CategoriesSection() {
  const categories = [
    {
      name: 'Agriculture & Food',
      description: 'Fresh produce, dried fruits, nuts, and agricultural products',
      icon: TruckIcon,
      count: '2,500+',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Automotive',
      description: 'Car parts, accessories, and automotive components',
      icon: BuildingOfficeIcon,
      count: '1,200+',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Chemicals',
      description: 'Industrial chemicals, fertilizers, and chemical products',
      icon: BeakerIcon,
      count: '800+',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Construction',
      description: 'Building materials, tools, and construction equipment',
      icon: WrenchScrewdriverIcon,
      count: '1,800+',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Electronics',
      description: 'Electronic components, devices, and technology products',
      icon: ComputerDesktopIcon,
      count: '1,500+',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      name: 'Fashion & Textiles',
      description: 'Clothing, fabrics, and textile products',
      icon: ShoppingBagIcon,
      count: '3,200+',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Machinery',
      description: 'Industrial machinery, equipment, and tools',
      icon: CogIcon,
      count: '900+',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      name: 'Minerals & Metals',
      description: 'Raw materials, metals, and mineral products',
      icon: CubeIcon,
      count: '600+',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'Petroleum & Gas',
      description: 'Oil, gas, and petroleum products',
      icon: FireIcon,
      count: '400+',
      color: 'bg-red-100 text-red-600'
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of Iranian products across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                Browse Products
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Categories
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
