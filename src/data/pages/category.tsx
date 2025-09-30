
export type PTcategory = {
  categories: PIcategory[];
}

export interface PIcategory {
  id: number
  slug: string
  lang: string
  title: string
  updated: string
  active: boolean
  category: string
  categorySlug: string
  type: string
  media: {
    id: number
    active: boolean
    type: 'c' | 'm' | 'g' | 'v' | 'p'
    title: string
    address: string
    alt?: string
  }[]
}

export type PTcategoryPage = {
  [key: string]: PIcategoryPage
}

export interface PIcategoryPage {
  title: string
}

export const PDcategoryPage = {
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
