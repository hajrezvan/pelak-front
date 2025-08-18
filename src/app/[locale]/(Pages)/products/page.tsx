
/* ------------------------------------------JS--------------------*/
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Metadata } from "next";

/* ------------------------------------------Type------------------*/

/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
import CategoryCard from "@/components/Layouts/Pcomponents/CategoryCard";

/* ------------------------------------------Function--------------*/

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "All Products - Iran Exportal",
    description: "Discover quality Iranian products across all categories. From food and beverages to machinery and handicrafts.",
    keywords: "Iranian products, Iran export, all categories, quality products",
    authors: [{ name: "Iran Exportal", url: "https://iranexportal.com" }],
    alternates: {
      canonical: `https://iranexportal.com/${locale}/products`,
      languages: {
        en: `https://iranexportal.com/en/products`,
        ru: `https://iranexportal.com/ru/products`,
        ar: `https://iranexportal.com/ar/products`,
        fa: `https://iranexportal.com/fa/products`,
      },
    },
    openGraph: {
      title: "All Products - Iran Exportal",
      description: "Discover quality Iranian products across all categories.",
      images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop"],
    },
  };
}

/* ------------------------------------------Run-------------------*/
export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const categories = [
    {
      name: 'Food & Beverages',
      description: 'Fresh produce, processed foods, and quality beverages',
      href: 'Food&Beverages',
      image: '/image/products/Food-&-Beverages.png',
      count: '2,500+',
      color: 'bg-PC-SuccessLightness text-PC-Success',
      icon: 'food'
    },
    {
      name: 'Chemicals & Petrochemicals',
      description: 'Industrial chemicals and petroleum derivatives',
      href: 'Chemicals&Petrochemicals',
      image: '/image/products/Chemicals-&-Petrochemicals.png',
      count: '800+',
      color: 'bg-PC-SecondaryLightness text-PC-Secondary',
      icon: 'beaker'
    },
    {
      name: 'Building Materials',
      description: 'Construction materials and building supplies',
      href: 'Building_Materials',
      image: '/image/products/Building-Materials.png',
      count: '1,800+',
      color: 'bg-PC-WarningLightness text-PC-Warning',
      icon: 'building'
    },
    {
      name: 'Textiles & Apparel',
      description: 'Fabrics, clothing, and fashion accessories',
      href: 'Textiles&Apparel',
      image: '/image/products/Textiles-&-Apparel.png',
      count: '3,200+',
      color: 'bg-PC-ErrorLightness text-PC-Error',
      icon: 'apparel'
    },
    {
      name: 'Machinery & Tools',
      description: 'Industrial equipment and professional tools',
      href: 'Machinery&Tools',
      image: '/image/products/Machinery-&-Tools.png',
      count: '900+',
      color: 'bg-PC-BackgroundDark text-PC-TextMiddle',
      icon: 'tool'
    },
    {
      name: 'Medical & Health Products',
      description: 'Healthcare equipment and medical supplies',
      href: 'Medical&HealthProducts',
      image: '/image/products/Medical-&-Health-Products.png',
      count: '600+',
      color: 'bg-PC-PrimaryLightness text-PC-Primary',
      icon: 'medical'
    },
    {
      name: 'Home & Kitchen Products',
      description: 'Household items and kitchen essentials',
      href: 'Home&KitchenProducts',
      image: '/image/products/Home-&-Kitchen-Products.png',
      count: '1,500+',
      color: 'bg-PC-WarningLightness text-PC-WarningDark',
      icon: 'home'
    },
    {
      name: 'Handicrafts & Art',
      description: 'Traditional crafts and artistic creations',
      href: 'Handicrafts&Art',
      image: '/image/products/Handicrafts-&-Art.png',
      count: '1,200+',
      color: 'bg-PC-ErrorLightness text-PC-ErrorDark',
      icon: 'palette'
    }
  ];

  return (
    <>
              {/* Hero Section */}
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-b-xl md:aspect-[4/1]">
            <Image
              alt="All Products"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              src="/image/Iran-Exportal-Header.jpg"
              fill
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-PC-PrimaryDarkness/60 to-PC-Background/80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-PC-TextWhite md:p-8">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                All Products
              </h1>
            </div>
          </div>
          
          {/* Description */}
          <div className="py-8 px-PC-3">
            <div className="prose prose-lg max-w-none text-PC-Text">
              <span data-mce-fragment="1">
                Discover quality Iranian products across all categories. From traditional handicrafts to modern industrial equipment, explore our comprehensive range of products that showcase the best of Iranian craftsmanship and innovation.
              </span>
            </div>
          </div>
          
          {/* Categories Grid */}
          <div className="py-8 px-PC-3">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>
          </div>
        </div>
    </>
  );
}
