export type PTproduct = {
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
      languages: {
        [key: string]: string
      }
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
    address: string
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
      address: string
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

export type PTproductsPage = {
  [key: string]: PIproductsPage
}

export interface PIproductsPage {
  title: string
}

export const PDproductsPage = {
  "en": {
    title: "Other Company Products",
  },
  "ru": {
    title: "Продукция других компаний",
  },
  "ar": {
    title: "منتجات شركات أخرى",
  },
  "fa": {
    title: "محصولات دیگر شرکت‌",
  }
}

// export const PDproduct: PTproduct = {
//   "en": {
//     seoMeta: {
//       title: "Premium Roasted Salted Saffron Pistachios",
//       description: "Premium quality roasted salted saffron pistachios from Iran...",
//       keywords: "pistachios, saffron, iranian, premium",
//       author: "John Doe",
//       alternates: {
//         canonical: "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
//         languages: {
//           en: "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
//           ru: "http://localhost:3000/ru/premium-roasted-salted-saffron-pistachios",
//           ar: "http://localhost:3000/ar/premium-roasted-salted-saffron-pistachios",
//           fa: "http://localhost:3000/fa/premium-roasted-salted-saffron-pistachios"
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
//     media: [{
//       id: 1,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "c"
//     },{
//       id: 2,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "p"
//     },{
//       id: 3,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "v"
//     },{
//       id: 4,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "m"
//     },{
//       id: 5,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "g"
//     },{
//       id: 6,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "g"
//     },{
//       id: 7,
//       src: "/images/IranExportalVideo.png",
//       alt: "Premium Roasted Salted Saffron Pistachios",
//       title: "Premium Roasted Salted Saffron Pistachios",
//       type: "g"
//     }],
    
//   }
// }