
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
import * as P from '@/components/Layouts/Playout'
import CommentRating from "@/components/Layouts/page/CommentRating";
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

            <div className="flex flex-col w-full max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{
                __html: PDproduct.description,
              }}
            />

      </P.Container>

        <P.Container>
          <CommentRating comments={PDproduct.comments} locale={locale}/>
        </P.Container>




    </>
  )
}