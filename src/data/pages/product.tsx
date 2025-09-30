import { ReactNode } from "react"

export type PTproduct = {
  [key: string]: PIproduct
}

export interface PIproduct {
  id: number
  slug: string
  category: string
  categorySlug: string
  lang: 'en' | 'ru' | 'ar' | 'fa'
  type: 'p' | 'a'
  product: number
  active: boolean
  created: string
  updated: string
  title: string
  summary: string
  description: string
  seo: {
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
    graph: {
      title: string
      description: string
      url: string
      name: string
      images: {
        url: string
      }[]
      type: string
    }
  }
  media: {
    id: number
    active: boolean
    type: 'c' | 'm' | 'g' | 'v' | 'p'
    title: string
    address: string
    alt?: string
  }[]
  comments: {
    name: ReactNode
    id: number
    approved: boolean
    parent: number
    user: string
    text: string
    created: string
    updated: string
  }[]
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
