'use client'

import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid' // TODO: Remove this

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      company: 'Global Trading Co.',
      location: 'Dubai, UAE',
      rating: 5,
      content: 'Iran Exportal has been instrumental in helping us source high-quality saffron and pistachios. The platform is user-friendly and the suppliers are reliable. We\'ve been working with them for over 2 years now.',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'European Imports Ltd.',
      location: 'London, UK',
      rating: 5,
      content: 'Excellent service and quality products. The verification process gives us confidence in dealing with Iranian suppliers. Highly recommended for anyone looking to import from Iran.',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Mohammed Al-Rashid',
      company: 'Middle East Trading',
      location: 'Riyadh, Saudi Arabia',
      rating: 4,
      content: 'Great platform for finding Iranian products. The communication tools are excellent and the support team is very helpful. We\'ve successfully imported carpets and ceramics.',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Elena Petrova',
      company: 'Eastern European Imports',
      location: 'Moscow, Russia',
      rating: 5,
      content: 'Iran Exportal has opened up new opportunities for us in the Iranian market. The quality of products and professionalism of suppliers exceeded our expectations.',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'David Chen',
      company: 'Asia Pacific Trading',
      location: 'Singapore',
      rating: 4,
      content: 'Reliable platform with verified suppliers. The logistics support is excellent and the payment process is secure. We\'ve been importing steel and machinery successfully.',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Fatima Zahra',
      company: 'North African Exports',
      location: 'Casablanca, Morocco',
      rating: 5,
      content: 'Outstanding experience with Iran Exportal. The platform makes it easy to find and connect with quality suppliers. The customer service is exceptional.',
      avatar: '/api/placeholder/60/60'
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what international buyers say about their experience with Iran Exportal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <ChatBubbleLeftRightIcon className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Successful Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Read More Reviews
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
