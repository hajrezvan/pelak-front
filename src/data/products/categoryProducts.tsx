export type PTcategoryProductsExample = {
  [key: string]: PIcategoryProducts
}

export interface PIcategoryProducts {
  category: {
    id: number
    name: string
    slug: string
    parent: string | null
    stats: {
      productCount: number
    }
  }
  products: {
    id: number
    title: string
    description: string
    slug: string
    price: {
      rial: string
      local: string
    }
    rating: number
    isVerified: boolean
    createdAt: string
    images: {
      main: string
      cover: string
    }
    category: {
      name: string
      slug: string
    }
    author: {
      name: string
      username: string
    }
    stats: {
      commentCount: number
    }
  }[]
  pagination: {
    limit: number
    offset: number
    total: number
    hasMore: boolean
  }
}


export const example = {
  "en": {
    "seoMeta": {
      "title": "Premium Roasted Salted Saffron Pistachios",
      "description": "Premium quality roasted salted saffron pistachios from Iran...",
      "keywords": "pistachios, saffron, iranian, premium",
      "authors": [{
        "name": "John Doe",
        "url": "http://localhost:3000/author/johndoe"
      }],
      "alternates": {
        "canonical": "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
        "languages": {
          "en": "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
          "ru": "http://localhost:3000/ru/premium-roasted-salted-saffron-pistachios",
          "ar": "http://localhost:3000/ar/premium-roasted-salted-saffron-pistachios",
          "fa": "http://localhost:3000/fa/premium-roasted-salted-saffron-pistachios"
        }
      },
      "openGraph": {
        "title": "Premium Roasted Salted Saffron Pistachios",
        "description": "Premium quality roasted salted saffron pistachios from Iran",
        "url": "http://localhost:3000/en/premium-roasted-salted-saffron-pistachios",
        "siteName": "IranExpertal Magazine",
        "images": [{ "url": "/images/main.jpg" }],
        "type": "article"
      }
    },
    "featuredImage": {
      "src": "/images/main.jpg",
      "alt": "Premium Roasted Salted Saffron Pistachios",
      "title": "Premium Roasted Salted Saffron Pistachios",
      "caption": "Premium quality roasted salted saffron pistachios from Iran"
    },
    "productImages": [
      {
        "src": "/images/1.jpg",
        "alt": "alt Image Gallery 1",
        "title": "title Image Gallery 1",
        "caption": "Caption for Image Gallery 1"
      }
    ],
          "productData": {
        "productTitle": "Premium Roasted Salted Saffron Pistachios",
        "productTags": [
          {
            "name": "Agri-Food & Processed Food",
            "href": "/tag/agri-food",
            "description": "Product Description",
            "icon": "xMark"
          }
        ],
        "authors": "John Doe",
        "productDescriptionTitle": "Product Description",
        "productDescription": "Premium quality roasted salted saffron pistachios from Iran...",
        "productCallToActionTitle": "Buy Now",
        "productCallToActionHref": "/buy-now/1",
        "separators": [
          {
            "id": 1,
            "title": "Akbari",
            "description": "Rank A pistachios"
          }
        ]
      },
      "faq": [
        {
          "id": 1,
          "question": "What are the health benefits of saffron pistachios?",
          "answer": "Saffron pistachios are rich in antioxidants, vitamins, and minerals. They contain high levels of vitamin E, B6, and essential fatty acids that promote heart health and boost immunity."
        },
        {
          "id": 2,
          "question": "How should I store these pistachios?",
          "answer": "Store in an airtight container in a cool, dry place. For best freshness, keep them in the refrigerator or freezer. They can last up to 6 months when properly stored."
        },
        {
          "id": 3,
          "question": "Are these pistachios suitable for vegetarians?",
          "answer": "Yes, these pistachios are 100% vegetarian and vegan-friendly. They contain no animal products or by-products."
        }
      ]
  }
}