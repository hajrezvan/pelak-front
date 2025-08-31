/* ------------------------------------------JS--------------------*/
import Image from "next/image";
import { cache } from "react";
import { redirect } from "next/navigation";
/* ------------------------------------------Data & Type-----------*/
import { PIcategoryProducts } from "@/data/pages/products/categoryProducts";
import { GetAPI } from "@/components/function/GetAPI";

const getCachedCategoryProducts = cache(async (slug: string, locale: string) => {
  // example // import { example } from "@/data/products/categoryProducts.tsx";
  // const test = "dev"
  // if (test == "dev") {
  //   return example[locale as keyof typeof example];
  // }
  const baseUrl = process.env.API_PUBLIC_BASE_URL ;
  const url = baseUrl + "/products/category/" + slug.toLowerCase().replace(/%20/g, "-") + "?language=" + locale;
  return await GetAPI(url);
});
/* ------------------------------------------Components------------*/
import ProductCard from "@/components/layouts/Pcomponents/ProductCard";
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function CategoryProductsPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {

  const { locale, slug } = await params;

  const PDcategoryProducts: PIcategoryProducts = await getCachedCategoryProducts(slug, locale);

  if (PDcategoryProducts === null) {
    redirect("/products");
    // XXX : notFound category ans redirect to products page
  }
  
  const categoryImageSrc = "/image/category/" + PDcategoryProducts.category.slug + ".png"

  return (
    <>

      <div className="mx-auto max-w-7xl">

        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-b-xl md:aspect-[4/1]">
          <Image
            alt={PDcategoryProducts.category.name}
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            src={categoryImageSrc}
            fill
            style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-PC-PrimaryDarkness/60 to-PC-Background/80"></div>
          <div className="absolute bottom-0 left-0 p-6 text-PC-TextWhite md:p-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {PDcategoryProducts.category.name}
            </h1>
          </div>
        </div>

        <div className="py-8 px-PC-3">
          <div className="prose prose-lg max-w-none text-PC-Text">
            <span data-mce-fragment="1">
              ({PDcategoryProducts.category.stats.productCount}){PDcategoryProducts.category.name} 
            </span>
          </div>
        </div>

        <div className="py-8 px-PC-3">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {PDcategoryProducts?.pagination?.total > 0 ?
              PDcategoryProducts.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              )) :
              "No Products Found"
            }
          </div>

          {/* <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-PC-Primary text-PC-TextWhite hover:bg-PC-PrimaryDark h-10 px-4 py-2 w-full md:w-auto">
              Show More Products (8 more)
            </button>
          </div> */}
        </div>

      </div>

    </>
  );
}
