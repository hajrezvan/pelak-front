
/* ------------------------------------------JS--------------------*/
import { cache } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
/* ------------------------------------------Data & Type-----------*/
import { PIproduct, PDproductsPage} from "@/data/pages/products/productsPage";

const getCachedProduct = cache(async (slug: string, locale: string) => {
  // example // import { example } from "@/data/products/productsPage";
  // const test = "dev"
  // if (test == "dev") {
  //   return example[locale as keyof typeof example];
  // }
  const baseUrl = process.env.API_PUBLIC_BASE_URL ;
  const url = baseUrl + "/products/page/" + locale + "/" + slug.toLowerCase().replace(/%20/g, "-");
  return await GetAPI(url);
});
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
import Container from "@/components/layouts/Pcomponents/product/Container";
import ImageGallery from "@/components/layouts/Pcomponents/product/ImageGallery";
import HeroHeader from "@/components/layouts/Pcomponents/product/HeroHeader";
import TagLabel from "@/components/layouts/Pcomponents/TagLabel";
import ProductPageClient from "@/components/layouts/Pcomponents/ProductPageClient";
import VideoLightbox from "@/components/layouts/Pcomponents/VideoLightbox";
import CommentRating from "@/components/layouts/Pcomponents/CommentRating";
import Faq from "@/components/layouts/Pcomponents/Faq";
/* ------------------------------------------Function--------------*/
import { GetAPI } from "@/components/function/GetAPI";
async function getProductGallery(productMedia: PIproduct["media"]) {
  const mainImage = productMedia.find((item) => item.type === "m");
  const gallery = productMedia.filter((item) => item.type === "g");
  const productImages = mainImage ? [mainImage, ...gallery] : gallery;
  return productImages;
}
/* ------------------------------------------Run-------------------*/
export default async function productPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const PDproduct: PIproduct = await getCachedProduct(slug, locale);

  if (PDproduct === null) {
    redirect("/products");
    // XXX : notFound products and redirect to products page
  } 

  const cover = await PDproduct.media.find((item) => item.type === "c");
  const video = await PDproduct.media.find((item) => item.type === "v");
  const poster = await PDproduct.media.find((item) => item.type === "p");

  const gallery = await getProductGallery(PDproduct.media);

  return (
    <>
      <HeroHeader
        featuredImage={cover}
        className="grid grid-cols-3 grid-rows-4 md:grid-rows-3 gap-5 px-3.5"
      >
        <div className="order-2 row-span-1 col-span-3 md:order-1 md:col-span-2">
          {PDproduct.productData.tags.map((tag) => (
            <TagLabel key={tag.name} tag={tag} />
          ))}
        </div>
        <div className="text-lg text-PC-Text order-1 row-span-1 col-span-3 content-center px-0.5 border-b border-PC-Secondary md:order-2 md:border-b-0 md:col-span-1 md:content-start md:row-span-1 lg:row-span-3 lg:p-1 lg:content-end lg:items-end flex items-center md:items-start md:justify-end">
          <div className="flex items-center h-fit gap-PC-2">
            <p className="text-shadow-sm text-shadow-PC-Background order-2 md:order-1">{PDproduct.seoMeta.author}</p>
            <P.SvgIcon svgName="building" svgSize="medium" svgClassName="order-1 md:order-2" />
          </div>
        </div>
        <h1 className="text-2xl text-PC-Text text-shadow-sm text-shadow-PC-Background order-3 row-span-2 col-span-3 lg:col-span-2 lg:mb-14 content-end">
          {PDproduct.productData.title}
        </h1>
      </HeroHeader>

      <Container className="grid gap-5 grid-cols-1 lg:grid-cols-2 mb-3.5 sm:mt-3.5 lg:-mt-14">
        <ImageGallery className="flex flex-col sm:px-2" item={gallery} />

        <div className="border border-PC-BackgroundBorder p-2 mx-2 sm:ms-0 lg:mt-18 rounded-lg flex flex-col">
          <div className="flex">
            <h2 className="flex-1 border-b border-PC-BackgroundBorder py-2 content-end text-xl">
              {PDproduct.productData.descriptionTitle}
            </h2>
            <div className="flex-none mx-1">
              <P.SvgIcon svgName="bookmark" svgSize="large" svgClassName="bg-PC-BackgroundPanel rounded-full p-PC-2" />
            </div>
          </div>

          <div
            className="flex flex-1 py-3"
            dangerouslySetInnerHTML={{
              __html: PDproduct.productData.productDescription,
            }}
          />

          <div className="py-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 m-0.5">
            {PDproduct.productData.separators.map((separator) => (
              <div
                key={separator.id}
                className="border rounded border-PC-BackgroundBorder hover:bg-PC-BackgroundPanel py-2 m-1 p-2 justify-center text-center"
              >
                <h4>{separator.title}</h4>
                <p>{separator.description}</p>
              </div>
            ))}
          </div>
          <ProductPageClient productTitle={PDproduct.productData.title} callToActionTitle={locale=="fa" ? "ثبت درخواست" : (locale=="ar" ? "إرسال طلبية" : (locale=="ru" ? "Отправить заявку" : "Submit Request"))} />
        </div>
      </Container>

      <Container className="flex px-PC-3 sm:px-PC-2 2xl:px-PC-0 py-PC-3">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="lg:order-2">
            <h3 className="font-bold my-2">{video?.title}</h3>

            {video && poster && (
              <VideoLightbox video={video} poster={poster} />
            )}
          </div>

          <div className="lg:order-1 flex flex-col">
            <h2 className="font-bold my-2">{PDproduct.seoMeta.author}</h2>

            <div
              className="flex-1"
              dangerouslySetInnerHTML={{
                __html: PDproduct.productData.authorDescription,
              }}
            />

            <h3 className="font-bold my-2">
              {PDproductsPage[locale as keyof typeof PDproductsPage].title}
            </h3>

            <div className=" h-34 bg-PC-Background rounded-xl">
              <div className="flex items-center py-2 px-1.5 overflow-x-scroll scroll-smooth">
                <div className="inline-flex gap-2">
                  {PDproduct.otherProducts.length > 0 && PDproduct.otherProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={product.slug}
                      className="w-98 h-34 rounded border border-PC-BackgroundBorder p-2 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-1"
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
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col lg:flex-row-reverse px-2 my-PC-4">
        <div className="flex-1 border-x border-PC-BackgroundBorder px-2">

          <h2 className="font-bold my-2">
            {PDproduct.productData.aboutProductTitle}
          </h2>

          <div
            className="flex-1 text-PC-Text"
            dangerouslySetInnerHTML={{
              __html: PDproduct.productData.aboutProduct,
            }}
          />

          <div className="h-5" />

          <h2 className="font-bold my-2">
            {PDproduct.productData.aboutCompanyTitle}
          </h2>

          <div
            className="flex-1 text-PC-Text"
            dangerouslySetInnerHTML={{
              __html: PDproduct.productData.aboutCompany,
            }}
          />

        </div>
        <div className="flex-none lg:w-sm px-2">
          <div className="sticky top-[72px] border rounded-xl border-PC-BackgroundBorder h-fit w-full flex flex-col p-2">
            <div className="relative aspect-square size-full bg-PC-Bborder-PC-BackgroundBorder rounded-lg">
              <Image
                alt={cover?.alt || ""}
                src={cover?.address || ""}
                title={cover?.title || ""}
                className=" object-cover rounded-lg"
                fill
                sizes="340px"
              />
            </div>
            <p className="text-2xl my-3">{PDproduct.productData.title}</p>

            <div
              className="flex flex-1 text-justify"
              dangerouslySetInnerHTML={{
                __html: PDproduct.productData.productDescription,
              }}
            />

            <div className="grid grid-cols-2 my-3">
              {PDproduct.productData.separators.map((separator) => (
                <div
                  key={separator.title}
                  className="border rounded border-PC-BackgroundBorder hover:bg-PC-BackgroundPanel py-2 m-1 p-2 justify-center text-center"
                >
                  <p className="text-lg">{separator.title}</p>
                  <p>{separator.description}</p>
                </div>
              ))}
            </div>
            <ProductPageClient productTitle={PDproduct.productData.title}  callToActionTitle={locale=="fa" ? "ثبت درخواست" : (locale=="ar" ? "إرسال طلبية" : (locale=="ru" ? "Отправить заявку" : "Submit Request"))} />
          </div>
        </div>
      </Container>

      <div className="flex w-full bg-PC-Bborder-PC-BackgroundBorder">
        <Container>
          <CommentRating comments={PDproduct.comments} locale={locale}/>
        </Container>
      </div>

      <Container>
        <Faq faqs={PDproduct.productData.faq} locale={locale} />
      </Container>
    </>
  );
}
