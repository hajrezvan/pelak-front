
/* ------------------------------------------JS--------------------*/
import { cache } from "react";
import { redirect } from "next/navigation";
/* ------------------------------------------Data & Type-----------*/
import { GetData } from "@/components/function/page/GetData";
import { PIproduct } from "@/data/pages/product";

const getCachedProduct = cache(async (locale: string, articles: string, slug: string) => {

  const baseUrl = process.env.API_BASE_URL;
  const url = baseUrl + "/products_slug_v0101?type=eq.a&active=eq.true&lang=eq." + locale + "&categorySlug=eq." + articles + "&slug=eq." + slug.toLowerCase().replace(/%20/g, "-");
  const data = await GetData(url);
  if (!data[0] || data === null) {
    redirect("/");
  }
  return data[0];
});
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
import CommentRating from "@/components/layouts/page/CommentRating";
/* ------------------------------------------Function--------------*/
import { getMedia } from "@/components/function/page/GetMedia";
/* ------------------------------------------Run-------------------*/
export default async function ArticlePage({
  params
}: {
  params: Promise<{ locale: string; articles: string; slug: string; }>;
}) {

  const { locale, articles, slug } = await params;

  const PDproduct: PIproduct = await getCachedProduct(locale,articles,slug);

  const cover = getMedia(PDproduct.media, "c");

  return (
    <>
      <main>

        <div className='relative h-[432px] bg-P-Primary overflow-hidden'>
          <div className="absolute inset-0 bg-cover bg-center opacity-72" style={{ backgroundImage: 'url(' + cover.address + ')' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-P-Background/72 to-P-Primary/72" />
          <div className="relative flex pt-[100px] h-full bg-P-Background/40 justify-center items-center">
            <h1 className='text-P-PrimaryDark text-center p-P-2 text-shadow-P-Background text-shadow-sm'>{PDproduct.title}</h1>
          </div>
        </div>

        <P.Container className="grid gap-5 grid-cols-1 my-P-4">

          <div className="border border-P-BackgroundBorder p-P-2 mx-P- sm:ms-0 rounded-lg flex flex-col">

            <div
              className="py-3"
              dangerouslySetInnerHTML={{
                __html: PDproduct.summary,
              }}
            />

          </div>
        </P.Container>

      </main>

      <P.Container className="flex px-P-3 sm:px-P-2 2xl:px-P-0 py-P-3">
        <div className="flex flex-row gap-5">
          {/* <div className="lg:order-2 flex flex-col flex-full">
            <h3 className="font-bold my-2">{video?.title}</h3>

            {video && poster && (
              <VideoLightbox video={video} poster={poster} />
            )}
          </div> */}

          <div className="lg:order-1 flex flex-col w-full">
            {/* <h2 className="font-bold my-2">{PDproduct.seo.author}</h2> */}

            <div
              dangerouslySetInnerHTML={{
                __html: PDproduct.description,
              }}
            />

            {/* <h3 className="font-bold my-2">
              {PDproductsPage[locale as keyof typeof PDproductsPage].title}
            </h3>

            <div className=" h-34 bg-P-Background rounded-xl">
              <div className="flex items-center py-2 px-1.5 overflow-x-scroll scroll-smooth">
                <div className="inline-flex gap-2">
                  {PDproduct.otherProducts.length > 0 && PDproduct.otherProducts.map((product: { id: Key | null | undefined; slug: string | UrlObject; media: { title: any; address: any; }; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string; }) => (
                    <Link
                      key={product.id}
                      href={product.slug}
                      className="w-98 h-34 rounded border border-P-BackgroundBorder p-2 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-1"
                    >
                      <div className="relative w-30 h-30 row-span-3">
                        <Image
                          alt={product.media?.title || ""}
                          src={product.media?.address || ""} //todo {product.media.src}
                          className="object-cover rounded"
                          fill
                        />
                      </div>
                      <h4 className="col-span-2 content-end overflow-y-hidden leading-5">
                        {product.title}
                      </h4>
                      <p className="col-span-2 row-span-2 overflow-y-hidden leading-4 text-justify"
                        dangerouslySetInnerHTML={{
                          __html: (() => {
                            const match = (product.description as string).match(/<[^>]+>(.*?)<\/[^>]+>/);
                            return match ? match[1] : '';
                          })().slice(0, 72)
                        }}
                      >
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </P.Container>

      {/* <P.Container className="flex flex-col lg:flex-row-reverse px-2 my-P-4">
        <div className="flex-1 border-x border-P-BackgroundBorder px-2">

          <div
            className="text-P-Text"
            dangerouslySetInnerHTML={{
              __html: PDproduct.data.additional,
            }}
          />
          
        </div>
        <div className="flex-none lg:w-sm px-2">
          <div className="sticky top-[72px] border rounded-xl border-P-BackgroundBorder h-fit w-full flex flex-col p-2">
            <div className="relative aspect-square size-full bg-P-Bborder-P-BackgroundBorder rounded-lg">
              <Image
                alt={cover?.alt || ""}
                src={cover?.address || ""}
                title={cover?.title || ""}
                className=" object-cover rounded-lg"
                fill
                sizes="340px"
              />
            </div>
            <p className="text-2xl my-3">{PDproduct.data.title}</p>

            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: PDproduct.data.description,
              }}
            />

            <div className="grid grid-cols-2 my-3">
              {PDproduct.separators.map((separator: PIproduct["separators"][number]) => (
                <div
                  key={separator.title}
                  className="border rounded border-P-BackgroundBorder hover:bg-P-BackgroundPanel py-2 m-1 p-2 justify-center text-center"
                >
                  <p className="text-lg">{separator.title}</p>
                  <p>{separator.description}</p>
                </div>
              ))}
            </div>
            <ProductPageClient productTitle={PDproduct.data.title} callToActionTitle={locale == "fa" ? "ثبت درخواست" : (locale == "ar" ? "إرسال طلبية" : (locale == "ru" ? "Отправить заявку" : "Submit Request"))} />
          </div>
        </div>
      </P.Container> */}

        <P.Container>
          <CommentRating comments={PDproduct.comments} locale={locale}/>
        </P.Container>




    </>
  )
}