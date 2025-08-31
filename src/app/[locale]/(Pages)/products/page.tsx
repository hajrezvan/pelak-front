
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
/* ------------------------------------------Data & Type-----------*/
import { PDcategories } from "@/data/categories";
/* ------------------------------------------Components------------*/
import CategoryCard from "@/components/layouts/Pcomponents/CategoryCard";
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
              {PDcategories[locale].title}
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="py-8 px-PC-3">
          <div className="prose prose-lg max-w-none text-PC-Text">
            <span data-mce-fragment="1">
              {PDcategories[locale].description}
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="py-8 px-PC-3">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PDcategories[locale].categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
