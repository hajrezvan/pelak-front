export type PTproductExample = {
  [key: string]: PIproduct
}

export interface PIproduct {
  seoMeta: {
    title: string
    description: string
    keywords: string
    author: string
    alternates: {
      canonical: string
      languages: string[]
    }
    openGraph: {
      title: string
      description: string
      url: string
      siteName: string
      images: {
        url: string
      }[]
      type: string
    }
  }
  media: {
    id: number
    src: string
    alt: string
    title: string
    type: string
  }[]
  productData: {
    title: string
    isVerified: boolean
    tags: {
      name: string
      href: string
      description: string
      icon: string
    }[]
    descriptionTitle: string
    productDescription: string
    separators: {
      id: number
      title: string
      description: string
    }[]
    authorDescription: string
    aboutProductTitle: string
    aboutProduct: string
    aboutCompanyTitle: string
    aboutCompany: string
    faq: {
      id: number
      question: string
      answer: string
    }[]
  }
  otherProducts: {
    id: number
    title: string
    description: string
    media: {
      id: number
      src: string
      alt: string
      title: string
      type: string
    }
    slug: string
  }[]
  comments: {
    items: {
      id: number
      message: string
      rate: number
      created_at: string
      user_name: string
      user_username: string
    }[]
    average_rate: number
    total_comments: number
  }
}

// export const example: PIproductExample = {
//   "en": {
//     seoMeta: {
//       title: "Premium Roasted Salted Saffron Pistachios",
//       description: "Premium quality roasted salted saffron pistachios from Iran...",
//       keywords: "pistachios, saffron, iranian, premium",
//       authors: [{
//         name: "John Doe",
//         url: "http://localhost:3000/author/johndoe"
//       }],
//       alternates: {
//         canonical: "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
//         languages: {
//           "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
//           "http://localhost:3000/ru/premium-roasted-salted-saffron-pistachios",
//           "http://localhost:3000/ar/premium-roasted-salted-saffron-pistachios",
//           "http://localhost:3000/fa/premium-roasted-salted-saffron-pistachios"
//         }
//       },
//       openGraph: {
//         title: "Premium Roasted Salted Saffron Pistachios",
//         description: "Premium quality roasted salted saffron pistachios from Iran",
//         url: "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
//         siteName: "IranExpertal Magazine",
//         images: [{ url: "/images/main.jpg" }],
//         type: "article"
//       }
//     },
//     featuredImage: {
//       src: "/images/main.jpg",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       caption: "Premium quality roasted salted saffron pistachios from Iran"
//     },
//     productImages: [
//       {
//         src: "/images/1.jpg",
//         alt: "alt Image Gallery 1",
//         title: "title Image Gallery 1",
//         caption: "Caption for Image Gallery 1"
//       }
//     ],
//     productData: {
//       title: "Premium Roasted Salted Saffron Pistachios",
//       tags: [
//           {
//             name: "Agri-Food & Processed Food",
//             href: "/tag/agri-food",
//             description: "Product Description",
//             icon: "xMark"
//           }
//         ],
//         descriptionTitle: "Product Description",
//         isVerified: true,
//         separators: [
//           {
//             id: 1,
//             title: "Akbari",
//             description: "Rank A pistachios"
//           }
//         ],
//         authorDescription: "John Doe",
//         aboutProductTitle: "About Product",
//         aboutProduct: "Premium quality roasted salted saffron pistachios from Iran...",
//         aboutCompanyTitle: "About Company",
//         aboutCompany: "Premium quality roasted salted saffron pistachios from Iran..."
//       },
//       faq: [
//         {
//           id: 1,
//           question: "What are the health benefits of saffron pistachios?",
//           answer: "Saffron pistachios are rich in antioxidants, vitamins, and minerals. They contain high levels of vitamin E, B6, and essential fatty acids that promote heart health and boost immunity."
//         },
//         {
//           id: 2,
//           question: "How should I store these pistachios?",
//           answer: "Store in an airtight container in a cool, dry place. For best freshness, keep them in the refrigerator or freezer. They can last up to 6 months when properly stored."
//         },
//         {
//           id: 3,
//           question: "Are these pistachios suitable for vegetarians?",
//           answer: "Yes, these pistachios are 100% vegetarian and vegan-friendly. They contain no animal products or by-products."
//         }
//       ]
//   }
// }