'use client'

import { MagnifyingGlassIcon, ChatBubbleLeftRightIcon, HandRaisedIcon, TruckIcon } from '@heroicons/react/24/outline' // TODO: Remove this

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Search & Discover',
      description: 'Browse through our extensive catalog of verified Iranian products and suppliers. Use advanced filters to find exactly what you need.',
      icon: MagnifyingGlassIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Connect & Communicate',
      description: 'Directly contact suppliers through our secure messaging system. Ask questions, request quotes, and negotiate terms.',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Verify & Negotiate',
      description: 'Review supplier credentials, certifications, and past performance. Negotiate prices, terms, and delivery schedules.',
      icon: HandRaisedIcon,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: 'Order & Ship',
      description: 'Place your order with confidence. We provide logistics support and ensure smooth delivery to your destination.',
      icon: TruckIcon,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with Iran Exportal in just four simple steps. Connect with verified suppliers and start importing from Iran today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {step.id}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 left-full w-full h-0.5 bg-gray-300 transform translate-x-4 z-0"></div>
              )}

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center relative">
                <div className={`inline-flex p-3 rounded-lg ${step.color} mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Suppliers</h3>
            <p className="text-gray-600 text-sm">
              All suppliers are thoroughly vetted and verified for quality and reliability
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
            <p className="text-gray-600 text-sm">
              Your transactions and communications are protected with enterprise-grade security
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Get help anytime with our dedicated customer support team
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Get Started Today
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
