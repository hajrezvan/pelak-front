export type PTcategories = {
  [key: string]: PIcategories
}

export interface PIcategories {
    name:string
    title: React.ReactNode
    description: React.ReactNode
    categories: {
      name: string
      description: string
      href: string
      slug: string
      image: string
      count: string
      color: string
      icon: string
    }[]
    otherItem: {
      name: string
      href: string
      icon: string
    }[]
}

export const PDcategories: PTcategories = {
  "en": {
    name: "Categories",
    title: (<>
      Browse by Category
    </>),
    description: (<>
      Explore our comprehensive range of Iranian products across various industries.
    </>),
    categories: [
      {
        name: 'Food & Beverages',
        description: 'Fresh produce, processed foods, and quality beverages',
        href: '/products/food-beverages',
        slug: 'food-beverages',
        image: '/image/category/food-beverages.png',
        count: '2,500+',
        color: 'bg-PC-SuccessLightness text-PC-Success',
        icon: 'food'
      }, {
        name: 'Chemicals & Petrochemicals',
        description: 'Industrial chemicals and petroleum derivatives',
        href: '/products/chemicals-petrochemicals',
        slug: 'chemicals-petrochemicals',
        image: '/image/category/chemicals-petrochemicals.png',
        count: '800+',
        color: 'bg-PC-SecondaryLightness text-PC-Secondary',
        icon: 'beaker'
      }, {
        name: 'Building Materials',
        description: 'Construction materials and building supplies',
        href: '/products/building-materials',
        slug: 'building-materials',
        image: '/image/category/building-materials.png',
        count: '1,800+',
        color: 'bg-PC-WarningLightness text-PC-Warning',
        icon: 'building'
      }, {
        name: 'Textiles & Apparel',
        description: 'Fabrics, clothing, and fashion accessories',
        href: '/products/textiles-apparel',
        slug: 'textiles-apparel',
        image: '/image/category/textiles-apparel.png',
        count: '3,200+',
        color: 'bg-PC-ErrorLightness text-PC-Error',
        icon: 'apparel'
      }, {
        name: 'Machinery & Tools',
        description: 'Industrial equipment and professional tools',
        href: '/products/machinery-tools',
        slug: 'machinery-tools',
        image: '/image/category/machinery-tools.png',
        count: '900+',
        color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
        icon: 'tool'
      }, {
        name: 'Medicine, Cosmetics & Personal Care',
        description: 'Healthcare equipment and medical supplies',
        href: '/products/medicine-cosmetics-personal-care',
        slug: 'medicine-cosmetics-personal-care',
        image: '/image/category/medicine-cosmetics-personal-care.png',
        count: '600+',
        color: 'bg-PC-PrimaryLightness text-PC-Primary',
        icon: 'medical'
      }, {
        name: 'Home & Kitchen Products',
        description: 'Household items and kitchen essentials',
        href: '/products/home-kitchen-products',
        slug: 'home-kitchen-products',
        image: '/image/category/home-kitchen-products.png',
        count: '1,500+',
        color: 'bg-PC-WarningLightness text-PC-WarningDark',
        icon: 'home'
      }, {
        name: 'Handicrafts & Art',
        description: 'Traditional crafts and artistic creations',
        href: '/products/handicrafts-art',
        slug: 'handicrafts-art',
        image: '/image/category/handicrafts-art.png',
        count: '1,200+',
        color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
        icon: 'palette'
      }
    ],
    otherItem: [
      {
        name: "See All Product",
        href: "/products/",
        icon: "menu"
      }
    ],
  },
  "ru": {
    name: "категориям",
    title: (<>
      Просмотр по категориям
    </>),
    description: (<>
      Изучите наш широкий ассортимент иранских продуктов в различных отраслях промышленности.
    </>),
    categories: [
      {
        name: 'Продукты питания и напитки',
        description: 'Свежие продукты, переработанные продукты питания и качественные напитки',
        href: '/products/food-beverages',
        slug: 'food-beverages',
        image: '/image/category/food-beverages.png',
        count: '2,500+',
        color: 'bg-PC-SuccessLightness text-PC-Success',
        icon: 'food'
      }, {
        name: 'Химикаты и нефтехимия',
        description: 'Промышленные химикаты и нефтепродукты',
        href: '/products/chemicals-petrochemicals',
        slug: 'chemicals-petrochemicals',
        image: '/image/category/chemicals-petrochemicals.png',
        count: '800+',
        color: 'bg-PC-SecondaryLightness text-PC-Secondary',
        icon: 'beaker'
      }, {
        name: 'Строительные материалы',
        description: 'Строительные материалы и строительные принадлежности',
        href: '/products/building-materials',
        slug: 'building-materials',
        image: '/image/category/building-materials.png',
        count: '1,800+',
        color: 'bg-PC-WarningLightness text-PC-Warning',
        icon: 'building'
      }, {
        name: 'Текстиль и одежда',
        description: 'Ткани, одежда и модные аксессуары',
        href: '/products/textiles-apparel',
        slug: 'textiles-apparel',
        image: '/image/category/textiles-apparel.png',
        count: '3,200+',
        color: 'bg-PC-ErrorLightness text-PC-Error',
        icon: 'apparel'
      }, {
        name: 'Машины и инструменты',
        description: 'Промышленное оборудование и профессиональные инструменты',
        href: '/products/machinery-tools',
        slug: 'machinery-tools',
        image: '/image/category/machinery-tools.png',
        count: '900+',
        color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
        icon: 'tool'
      }, {
        name: 'Медицина, косметика и личная гигиена',
        description: 'Медицинское оборудование и медицинские принадлежности',
        href: '/products/medicine-cosmetics-personal-care',
        slug: 'medicine-cosmetics-personal-care',
        image: '/image/category/medicine-cosmetics-personal-care.png',
        count: '600+',
        color: 'bg-PC-PrimaryLightness text-PC-Primary',
        icon: 'medical'
      }, {
        name: 'Товары для дома и кухни',
        description: 'Предметы домашнего обихода и кухонные принадлежности',
        href: '/products/home-kitchen-products',
        slug: 'home-kitchen-products',
        image: '/image/category/home-kitchen-products.png',
        count: '1,500+',
        color: 'bg-PC-WarningLightness text-PC-WarningDark',
        icon: 'home'
      }, {
        name: 'Ремесла и искусство',
        description: 'Традиционные ремесла и художественные произведения',
        href: '/products/handicrafts-art',
        slug: 'handicrafts-art',
        image: '/image/category/handicrafts-art.png',
        count: '1,200+',
        color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
        icon: 'palette'
      }
    ],
    otherItem: [
      {
        name: "Посмотреть все продукты",
        href: "/products/",
        icon: "menu"
      }
    ],
  },
  "ar": {
    name: "الفئة",
    title: (<>
      تصفح حسب الفئة
    </>),
    description: (<>
      استكشف مجموعتنا الشاملة من المنتجات الإيرانية عبر مختلف الصناعات.
    </>),
    categories: [
      {
        name: 'الأغذية والمشروبات',
        description: 'المنتجات الطازجة والأغذية المصنعة والمشروبات عالية الجودة',
        href: '/products/food-beverages',
        slug: 'food-beverages',
        image: '/image/category/food-beverages.png',
        count: '2,500+',
        color: 'bg-PC-SuccessLightness text-PC-Success',
        icon: 'food'
      }, {
        name: 'المواد الكيميائية والبتروكيماويات',
        description: 'المواد الكيميائية الصناعية ومشتقات البترول',
        href: '/products/chemicals-petrochemicals',
        slug: 'chemicals-petrochemicals',
        image: '/image/category/chemicals-petrochemicals.png',
        count: '800+',
        color: 'bg-PC-SecondaryLightness text-PC-Secondary',
        icon: 'beaker'
      }, {
        name: 'مواد البناء',
        description: 'مواد البناء والإمدادات الإنشائية',
        href: '/products/building-materials',
        slug: 'building-materials',
        image: '/image/category/building-materials.png',
        count: '1,800+',
        color: 'bg-PC-WarningLightness text-PC-Warning',
        icon: 'building'
      }, {
        name: 'المنسوجات والملابس',
        description: 'الأقمشة والملابس والإكسسوارات الأنيقة',
        href: '/products/textiles-apparel',
        slug: 'textiles-apparel',
        image: '/image/category/textiles-apparel.png',
        count: '3,200+',
        color: 'bg-PC-ErrorLightness text-PC-Error',
        icon: 'apparel'
      }, {
        name: 'الآلات والأدوات',
        description: 'المعدات الصناعية والأدوات المهنية',
        href: '/products/machinery-tools',
        slug: 'machinery-tools',
        image: '/image/category/machinery-tools.png',
        count: '900+',
        color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
        icon: 'tool'
      }, {
        name: 'الطب ومستحضرات التجميل والعناية الشخصية',
        description: 'المعدات الطبية والإمدادات الطبية',
        href: '/products/medicine-cosmetics-personal-care',
        slug: 'medicine-cosmetics-personal-care',
        image: '/image/category/medicine-cosmetics-personal-care.png',
        count: '600+',
        color: 'bg-PC-PrimaryLightness text-PC-Primary',
        icon: 'medical'
      }, {
        name: 'منتجات المنزل والمطبخ',
        description: 'الأدوات المنزلية والضروريات المطبخية',
        href: '/products/home-kitchen-products',
        slug: 'home-kitchen-products',
        image: '/image/category/home-kitchen-products.png',
        count: '1,500+',
        color: 'bg-PC-WarningLightness text-PC-WarningDark',
        icon: 'home'
      }, {
        name: 'الحرف اليدوية والفنون',
        description: 'الحرف التقليدية والإبداعات الفنية',
        href: '/products/handicrafts-art',
        slug: 'handicrafts-art',
        image: '/image/category/handicrafts-art.png',
        count: '1,200+',
        color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
        icon: 'palette'
      }
    ],
    otherItem: [
      {
        name: "عرض جميع المنتجات",
        href: "/products/",
        icon: "menu"
      }
    ],
  },
  "fa": {
    name: "دسته‌بندی",
    title: (<>
      مرور بر اساس دسته‌بندی
    </>),
    description: (<>
      مجموعه جامع محصولات ایرانی ما را در صنایع مختلف کاوش کنید.
    </>),
    categories: [
      {
        name: 'مواد غذایی و نوشیدنی',
        description: 'محصولات تازه، غذاهای فرآوری شده و نوشیدنی‌های با کیفیت',
        href: '/products/food-beverages',
        slug: 'food-beverages',
        image: '/image/category/food-beverages.png',
        count: '2,500+',
        color: 'bg-PC-SuccessLightness text-PC-Success',
        icon: 'food'
      }, {
        name: 'مواد شیمیایی و پتروشیمی',
        description: 'مواد شیمیایی صنعتی و مشتقات نفتی',
        href: '/products/chemicals-petrochemicals',
        slug: 'chemicals-petrochemicals',
        image: '/image/category/chemicals-petrochemicals.png',
        count: '800+',
        color: 'bg-PC-SecondaryLightness text-PC-Secondary',
        icon: 'beaker'
      }, {
        name: 'مصالح ساختمانی',
        description: 'مواد ساختمانی و تدارکات ساخت و ساز',
        href: '/products/building-materials',
        slug: 'building-materials',
        image: '/image/category/building-materials.png',
        count: '1,800+',
        color: 'bg-PC-WarningLightness text-PC-Warning',
        icon: 'building'
      }, {
        name: 'منسوجات و پوشاک',
        description: 'پارچه‌ها، لباس و لوازم جانبی مد',
        href: '/products/textiles-apparel',
        slug: 'textiles-apparel',
        image: '/image/category/textiles-apparel.png',
        count: '3,200+',
        color: 'bg-PC-ErrorLightness text-PC-Error',
        icon: 'apparel'
      }, {
        name: 'ماشین‌آلات و ابزار',
        description: 'تجهیزات صنعتی و ابزار حرفه‌ای',
        href: '/products/machinery-tools',
        slug: 'machinery-tools',
        image: '/image/category/machinery-tools.png',
        count: '900+',
        color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
        icon: 'tool'
      }, {
        name: 'پزشکی، آرایشی و بهداشتی',
        description: 'تجهیزات بهداشتی و لوازم پزشکی',
        href: '/products/medicine-cosmetics-personal-care',
        slug: 'medicine-cosmetics-personal-care',
        image: '/image/category/medicine-cosmetics-personal-care.png',
        count: '600+',
        color: 'bg-PC-PrimaryLightness text-PC-Primary',
        icon: 'medical'
      }, {
        name: 'محصولات خانگی و آشپزخانه',
        description: 'لوازم خانگی و ضروریات آشپزخانه',
        href: '/products/home-kitchen-products',
        slug: 'home-kitchen-products',
        image: '/image/category/home-kitchen-products.png',
        count: '1,500+',
        color: 'bg-PC-WarningLightness text-PC-WarningDark',
        icon: 'home'
      }, {
        name: 'صنایع دستی و هنر',
        description: 'صنایع دستی سنتی و آثار هنری',
        href: '/products/handicrafts-art',
        slug: 'handicrafts-art',
        image: '/image/category/handicrafts-art.png',
        count: '1,200+',
        color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
        icon: 'palette'
      }
    ],
    otherItem: [
      {
        name: "مشاهده همه محصولات",
        href: "/products/",
        icon: "menu"
      }
    ],
  }
}