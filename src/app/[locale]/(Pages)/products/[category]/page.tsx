/* ------------------------------------------JS--------------------*/
import { getTranslations } from "next-intl/server";
import { cache } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------Type------------------*/
import { PIproducts } from "@/type/products";
import { PImedia } from "@/type/media";

/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
import Container from "@/components/Layouts/Pcomponents/product/Container";
import HeroHeader from "@/components/Layouts/Pcomponents/product/HeroHeader";
import ProductCard from "@/components/Layouts/Pcomponents/ProductCard";

/* ------------------------------------------Function--------------*/
import { GetPelaktAPI } from "@/components/function/getPelaktAPI";

// Mock data for category information - replace with actual API call
const getCategoryInfo = (category: string) => {
  const categories = {
    'Food&Beverages': {
      name: 'Food & Beverages',
      description: 'Fresh produce, processed foods, and quality beverages from Iran. Discover authentic Iranian flavors and premium food products.',
      image: '/image/products/Food-&-Beverages.png',
      count: '2,500+'
    },
    'Chemicals&Petrochemicals': {
      name: 'Chemicals & Petrochemicals',
      description: 'Industrial chemicals and petroleum derivatives. High-quality chemical products for various industrial applications.',
      image: '/image/products/Chemicals-&-Petrochemicals.png',
      count: '800+'
    },
    'Building_Materials': {
      name: 'Building Materials',
      description: 'Construction materials and building supplies. Premium building materials for construction projects.',
      image: '/image/products/Building-Materials.png',
      count: '1,800+'
    },
    'Textiles&Apparel': {
      name: 'Textiles & Apparel',
      description: 'Fabrics, clothing, and fashion accessories. Traditional and modern Iranian textile products.',
      image: '/image/products/Textiles-&-Apparel.png',
      count: '3,200+'
    },
    'Machinery&Tools': {
      name: 'Machinery & Tools',
      description: 'Industrial equipment and professional tools. High-quality machinery for various industries.',
      image: '/image/products/Machinery-&-Tools.png',
      count: '900+'
    },
    'Medical&HealthProducts': {
      name: 'Medical & Health Products',
      description: 'Healthcare equipment and medical supplies. Quality medical products for healthcare professionals.',
      image: '/image/products/Medical-&-Health-Products.png',
      count: '600+'
    },
    'Home&KitchenProducts': {
      name: 'Home & Kitchen Products',
      description: 'Household items and kitchen essentials. Beautiful and functional home products from Iran.',
      image: '/image/products/Home-&-Kitchen-Products.png',
      count: '1,500+'
    },
    'Handicrafts&Art': {
      name: 'Handicrafts & Art',
      description: 'Traditional crafts and artistic creations. Unique Iranian handicrafts and artistic products.',
      image: '/image/products/Handicrafts-&-Art.png',
      count: '1,200+'
    }
  };
  
  return categories[category as keyof typeof categories] || {
    name: 'Products',
    description: 'Discover quality products from Iran.',
    image: '/image/Iran-Exportal-Header.jpg',
    count: '1,000+'
  };
};

// Mock data for products - replace with actual API call
const getCategoryProducts = async (category: string): Promise<PIproducts[]> => {
  // This should be replaced with actual API call
  const mockProducts: PIproducts[] = [
    {
      id: 1,
      title: "Premium Saffron",
      description: "High-quality Iranian saffron",
      media: {
        id: 1,
        src: "/image/1.webp",
        alt: "Premium Saffron",
        title: "Premium Saffron",
        type: "m"
      },
      slug: "premium-saffron"
    },
    {
      id: 2,
      title: "Organic Pistachios",
      description: "Fresh organic pistachios",
      media: {
        id: 2,
        src: "/image/1.webp",
        alt: "Organic Pistachios",
        title: "Organic Pistachios",
        type: "m"
      },
      slug: "organic-pistachios"
    },
    {
      id: 3,
      title: "Traditional Persian Rug",
      description: "Hand-woven Persian carpet",
      media: {
        id: 3,
        src: "/image/1.webp",
        alt: "Traditional Persian Rug",
        title: "Traditional Persian Rug",
        type: "m"
      },
      slug: "traditional-persian-rug"
    },
    {
      id: 4,
      title: "Industrial Chemical Compound",
      description: "High-grade industrial chemicals",
      media: {
        id: 4,
        src: "/image/1.webp",
        alt: "Industrial Chemical Compound",
        title: "Industrial Chemical Compound",
        type: "m"
      },
      slug: "industrial-chemical-compound"
    },
    {
      id: 5,
      title: "Construction Steel",
      description: "Premium construction materials",
      media: {
        id: 5,
        src: "/image/1.webp",
        alt: "Construction Steel",
        title: "Construction Steel",
        type: "m"
      },
      slug: "construction-steel"
    },
    {
      id: 6,
      title: "Medical Equipment",
      description: "Professional medical devices",
      media: {
        id: 6,
        src: "/image/1.webp",
        alt: "Medical Equipment",
        title: "Medical Equipment",
        type: "m"
      },
      slug: "medical-equipment"
    },
    {
      id: 7,
      title: "Kitchen Appliances",
      description: "Modern kitchen equipment",
      media: {
        id: 7,
        src: "/image/1.webp",
        alt: "Kitchen Appliances",
        title: "Kitchen Appliances",
        type: "m"
      },
      slug: "kitchen-appliances"
    },
    {
      id: 8,
      title: "Handcrafted Pottery",
      description: "Traditional Iranian pottery",
      media: {
        id: 8,
        src: "/image/1.webp",
        alt: "Handcrafted Pottery",
        title: "Handcrafted Pottery",
        type: "m"
      },
      slug: "handcrafted-pottery"
    }
  ];
  
  return mockProducts;
};

const getCachedCategoryProducts = cache(async (category: string, locale: string) => {
  return await getCategoryProducts(category);
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryInfo = getCategoryInfo(category);

  return {
    title: `${categoryInfo.name} - Iran Exportal`,
    description: categoryInfo.description,
    keywords: `${categoryInfo.name}, Iranian products, ${category}`,
    authors: [{ name: "Iran Exportal", url: "https://iranexportal.com" }],
    alternates: {
      canonical: `https://iranexportal.com/${locale}/products/${category}`,
      languages: {
        en: `https://iranexportal.com/en/products/${category}`,
        ru: `https://iranexportal.com/ru/products/${category}`,
        ar: `https://iranexportal.com/ar/products/${category}`,
        fa: `https://iranexportal.com/fa/products/${category}`,
      },
    },
    openGraph: {
      title: `${categoryInfo.name} - Iran Exportal`,
      description: categoryInfo.description,
      images: [categoryInfo.image],
    },
  };
}

/* ------------------------------------------Run-------------------*/
export default async function CategoryProductsPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const categoryInfo = getCategoryInfo(category);
  const products = await getCachedCategoryProducts(category, locale);

  return (
    <>
              {/* Hero Header */}
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-b-xl md:aspect-[4/1]">
            <Image
              alt={categoryInfo.name}
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              src={categoryInfo.image}
              fill
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-PC-PrimaryDarkness/60 to-PC-Background/80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-PC-TextWhite md:p-8">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {categoryInfo.name}
              </h1>
            </div>
          </div>
          
          {/* Category Description */}
          <div className="py-8 px-PC-3">
            <div className="prose prose-lg max-w-none text-PC-Text">
              <span data-mce-fragment="1">
                {categoryInfo.description}
              </span>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="py-8 px-PC-3">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
              Featured Products
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Show More Button */}
            <div className="mt-8 flex justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-PC-Primary text-PC-TextWhite hover:bg-PC-PrimaryDark h-10 px-4 py-2 w-full md:w-auto">
                Show More Products (8 more)
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
