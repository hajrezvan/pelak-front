'use client'

import { MagnifyingGlassIcon, BuildingOfficeIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline' // TODO: Remove this

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Iran Exportal : Надёжные иранские : ایران اکسًپُورتال
          </h1>
          <p className='text-4xl font-bold tracking-tight text-white'>
            Iran Exportal : Надёжные иранские : ایران اکسًپُورتال
          </p>
          <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
            Connect with verified Iranian suppliers and discover high-quality products for your business.
            Find everything you need from Iran&apos;s leading manufacturers and exporters.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline-offset-2 focus-visible:outline-white">
              Start Searching
            </button>
            <button className="text-sm font-semibold leading-6 text-white border border-white px-3.5 py-2.5 rounded-md hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex justify-center">
              <BuildingOfficeIcon className="h-8 w-8 text-blue-200" />
            </div>
            <div className="mt-2 text-3xl font-bold text-white">500+</div>
            <div className="text-blue-200">Verified Suppliers</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <GlobeAltIcon className="h-8 w-8 text-blue-200" />
            </div>
            <div className="mt-2 text-3xl font-bold text-white">50+</div>
            <div className="text-blue-200">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <UserGroupIcon className="h-8 w-8 text-blue-200" />
            </div>
            <div className="mt-2 text-3xl font-bold text-white">10K+</div>
            <div className="text-blue-200">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <MagnifyingGlassIcon className="h-8 w-8 text-blue-200" />
            </div>
            <div className="mt-2 text-3xl font-bold text-white">50K+</div>
            <div className="text-blue-200">Products Listed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
