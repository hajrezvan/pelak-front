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