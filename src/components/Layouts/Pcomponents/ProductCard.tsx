import Image from "next/image";
import Link from "next/link";
import { PIcategoryProducts } from "@/data/products/categoryProducts";

// products: {
//   id: number
//   title: string
//   description: string
//   slug: string
//   price: {
//     rial: string
//     local: string
//   }
//   rating: number
//   isVerified: boolean
//   createdAt: string
//   images: {
//     main: string
//     cover: string
//   }
//   category: {
//     name: string
//     slug: string
//   }
//   author: {
//     name: string
//     username: string
//   }
//   stats: {
//     commentCount: number
//   }
// }

export default function ProductCard({ product }: {product: PIcategoryProducts["products"][number]}) {
  return (
    <Link
      className="group flex w-full flex-col overflow-hidden rounded-lg h-full"
      aria-label={`Visit product: ${product.title}`}
      href={`/product/${product.slug}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt={product.description}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="100vw"
          src={product.images.main}
          fill
          style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
        />
      </div>
      <div className="bg-size-200 bg-pos-0 hover:bg-pos-100 flex shrink-0 grow flex-col text-pretty bg-gradient-to-b from-transparent to-PC-PrimaryLightness/5 p-4 transition-all duration-200">
        <h3 className="line-clamp-2 text-lg font-semibold transition-colors data-[featured]:text-2xl text-PC-Text">
          {product.title}
        </h3>
        <div className="flex flex-col pt-1">
          <p className="text-sm text-PC-TextMiddle">Iran Exportal</p>
          <div className="flex flex-wrap items-center gap-1"></div>
        </div>
        <div className="mt-auto flex flex-col pt-10">
          <p className="text-sm text-PC-TextMiddle">6 variants</p>
          <div className="flex w-full items-baseline justify-between text-sm">
            <span className="text-PC-PrimaryLightness/50">From</span>
            <span className="text-base font-semibold md:text-lg text-PC-Text">$120.00</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
