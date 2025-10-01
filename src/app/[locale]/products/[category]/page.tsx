
/* ------------------------------------------JS--------------------*/
import { cache } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
/* ------------------------------------------Data & Type-----------*/
import { GetData } from "@/components/function/page/GetData";
import { PIcategory } from "@/data/pages/category";

const getCachedProduct = cache(async (locale: string, category: string) => {

  const baseUrl = process.env.API_BASE_URL;
  const url = baseUrl + "/categories_slug_v0101?type=eq.p&lang=eq."+locale+"&active=eq.true&categorySlug=eq."+category.toLowerCase().replace(/%20/g, "-");
  const data = await GetData(url);
  if (!data[0] || data === null) {

    redirect("/products");
  }
  return data;
});
/* ------------------------------------------Components------------*/
import ProductCard from "@/components/Layouts/page/ProductCard";
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function ProductsPage({
  params
}: {
  params: Promise<{ locale: string, category: string }>;
}) {

  const { locale, category } = await params;

  const PDcategory: PIcategory[] = await getCachedProduct(locale,category);

  return (
    <>
       <div className="mx-auto max-w-7xl min-h-[980px]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-P-Background/72 to-P-Primary/72"></div>
          <div className="absolute bottom-0 px-P-4 text-P-TextWhite md:px-P-5 w-full text-center">
            <h1 className="text-P-PrimaryDark text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-shadow-P-Background text-shadow-sm">
              {PDcategory[0].category || category}
            </h1>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="py-P-5 px-P-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PDcategory.map((category) => (
              <ProductCard key={category.id} category={category} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}