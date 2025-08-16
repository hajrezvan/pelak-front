'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline' // TODO: Remove this
import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SearchSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')

  const categories = [
    'All Categories',
    'Agriculture & Food',
    'Automotive',
    'Chemicals',
    'Construction',
    'Electronics',
    'Fashion & Textiles',
    'Machinery',
    'Minerals & Metals',
    'Petroleum & Gas',
  ]

  const locations = [
    'All Locations',
    'Tehran',
    'Isfahan',
    'Mashhad',
    'Shiraz',
    'Tabriz',
    'Kerman',
    'Yazd',
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Products & Suppliers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search through thousands of verified Iranian products and connect with reliable suppliers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Search for products, suppliers, or keywords..."
            />
            <button className="absolute inset-y-0 right-0 px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Category Filter */}
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <span className="block truncate">{selectedCategory}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {categories.map((category) => (
                      <Listbox.Option
                        key={category}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                        value={category}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {category}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            {/* Location Filter */}
            <Listbox value={selectedLocation} onChange={setSelectedLocation}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <span className="block truncate">{selectedLocation}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {locations.map((location) => (
                      <Listbox.Option
                        key={location}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                        value={location}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {location}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            {/* Advanced Filters Button */}
            <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <FunnelIcon className="h-5 w-5 mr-2" />
              Advanced Filters
            </button>
          </div>

          {/* Popular Searches */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Saffron', 'Pistachios', 'Carpets', 'Petroleum', 'Steel', 'Ceramics'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
