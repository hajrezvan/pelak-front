export interface PIcategories {
  [key: string]: {
    name: string;
    description: string;
    href: string;
    image: string;
    count: string;
    color: string;
    icon: string;
  }[];
}

export const categories: PIcategories = {
  "en": [
    {
      name: 'Food & Beverages',
      description: 'Fresh produce, processed foods, and quality beverages',
      href: 'Food&Beverages',
      image: '/image/products/Food-&-Beverages.png',
      count: '2,500+',
      color: 'bg-PC-SuccessLightness text-PC-Success',
      icon: 'food'
    }, {
      name: 'Chemicals & Petrochemicals',
      description: 'Industrial chemicals and petroleum derivatives',
      href: 'Chemicals&Petrochemicals',
      image: '/image/products/Chemicals-&-Petrochemicals.png',
      count: '800+',
      color: 'bg-PC-SecondaryLightness text-PC-Secondary',
      icon: 'beaker'
    }, {
      name: 'Building Materials',
      description: 'Construction materials and building supplies',
      href: 'Building_Materials',
      image: '/image/products/Building-Materials.png',
      count: '1,800+',
      color: 'bg-PC-WarningLightness text-PC-Warning',
      icon: 'building'
    }, {
      name: 'Textiles & Apparel',
      description: 'Fabrics, clothing, and fashion accessories',
      href: 'Textiles&Apparel',
      image: '/image/products/Textiles-&-Apparel.png',
      count: '3,200+',
      color: 'bg-PC-ErrorLightness text-PC-Error',
      icon: 'apparel'
    }, {
      name: 'Machinery & Tools',
      description: 'Industrial equipment and professional tools',
      href: 'Machinery&Tools',
      image: '/image/products/Machinery-&-Tools.png',
      count: '900+',
      color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
      icon: 'tool'
    }, {
      name: 'Medical & Health Products',
      description: 'Healthcare equipment and medical supplies',
      href: 'Medical&HealthProducts',
      image: '/image/products/Medical-&-Health-Products.png',
      count: '600+',
      color: 'bg-PC-PrimaryLightness text-PC-Primary',
      icon: 'medical'
    }, {
      name: 'Home & Kitchen Products',
      description: 'Household items and kitchen essentials',
      href: 'Home&KitchenProducts',
      image: '/image/products/Home-&-Kitchen-Products.png',
      count: '1,500+',
      color: 'bg-PC-WarningLightness text-PC-WarningDark',
      icon: 'home'
    }, {
      name: 'Handicrafts & Art',
      description: 'Traditional crafts and artistic creations',
      href: 'Handicrafts&Art',
      image: '/image/products/Handicrafts-&-Art.png',
      count: '1,200+',
      color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
      icon: 'palette'
    }
  ]
}