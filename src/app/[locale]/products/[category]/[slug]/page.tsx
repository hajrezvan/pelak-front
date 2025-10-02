
/* ------------------------------------------JS--------------------*/
import { cache } from "react";
import { redirect } from "next/navigation";
/* ------------------------------------------Data & Type-----------*/
import { GetData } from "@/components/function/page/GetData";
import { PIproduct } from "@/data/pages/product";

const getCachedProduct = cache(async (locale: string, category: string, slug: string) => {

  const baseUrl = process.env.API_BASE_URL;
  const url = baseUrl + "/products_slug_v0101?type=eq.p&active=eq.true&lang=eq." + locale + "&categorySlug=eq." + category + "&slug=eq." + slug.toLowerCase().replace(/%20/g, "-");
  const data = await GetData(url);
  if (!data[0] || data === null) {
    redirect("/products");
  }
  return data[0];
});
/* ------------------------------------------Components------------*/
import * as P from '@/components/Layouts/Playout'
import ImageGallery from "@/components/Layouts/page/ImageGallery";
import ProductPageClient from "@/components/Layouts/page/ProductPageClient";
import CommentRating from "@/components/Layouts/page/CommentRating";
/* ------------------------------------------Function--------------*/
import { getMedia, getGallery } from "@/components/function/page/GetMedia";
/* ------------------------------------------Run-------------------*/
export default async function ProductPage({
  params
}: {
  params: Promise<{ locale: string; category: string; slug: string; }>;
}) {

  const { locale, category, slug } = await params;

  const PDproduct: PIproduct = await getCachedProduct(locale,category,slug);

  const cover = getMedia(PDproduct.media, "c");

  const gallery = getGallery(PDproduct.media.filter((item: { active: boolean; }) => item.active));

  return (
    <>
      <main>

        <div className='relative h-[432px] bg-P-Primary overflow-hidden py-1'>
          <div className="absolute inset-0 bg-cover bg-center opacity-72" style={{ backgroundImage: 'url(' + cover.address + ')' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-P-Background/72 to-P-Primary/72" />
          <div className="relative flex pt-[100px] h-full bg-P-Background/40 justify-center items-center">
            <h1 className='text-P-PrimaryDark text-center p-P-2 text-shadow-P-Background text-shadow-sm'>{PDproduct.title}</h1>
          </div>
        </div>

        <P.Container className="grid gap-5 grid-cols-1 lg:grid-cols-2 mb-3.5 sm:mt-3.5 lg:-mt-14">
          <ImageGallery className="flex flex-col sm:px-2" item={gallery as PIproduct["media"]} />

          <div className="border border-P-BackgroundBorder p-2 mx-2 sm:ms-0 lg:mt-18 rounded-lg flex flex-col">

            <div
              className="py-3"
              dangerouslySetInnerHTML={{
                __html: PDproduct.summary,
              }}
            />


            <ProductPageClient productTitle={PDproduct.title} callToActionTitle={locale == "fa" ? "ثبت درخواست" : (locale == "ar" ? "إرسال طلبية" : (locale == "ru" ? "Отправить заявку" : "Submit Request"))} />
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