
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
/* ------------------------------------------Data & Type-----------*/
interface data {
  [key: string]: {
    title: string;
    beforeTitle: string;
    afterTitle: string;
    button: string;
  };
}

const data: data = {
  "en": {
    title: "not found page",
    beforeTitle: "not found ",
    afterTitle: " page",
    button: "Back to Home"
  },
  "ru": {
    title: "не найденная страница",
    beforeTitle: "не найденная ",
    afterTitle: " страница",
    button: "Назад на главную"
  },
  "ar": {
    title: "الصفحة المطلوبة غير موجودة",
    beforeTitle: "الصفحة ",
    afterTitle: " غير موجودة",
    button: "العودة إلى الرئيسية"
  },
  "fa": {
    title: "صفحه مورد نظر یافت نشد",
    beforeTitle: "صفحه ",
    afterTitle: "یافت نشد",
    button: "بازگشت به صفحه اصلی"
  }
}
/* ------------------------------------------Components------------*/
import { Button } from "@/components/Playout";
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function Page({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-b-xl sm:aspect-[3/1] md:aspect-[4/1]">
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
          <div className="absolute bottom-0 p-6 text-PC-TextWhite md:p-6 w-full">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-center">
              {data[locale].title}
            </h1>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="py-8 px-PC-3 min-h-[400px] flex flex-col gap-3 items-center justify-center">
          <p className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
            {data[locale].beforeTitle}
            <span className="text-PC-Primary">{slug}</span>
            {data[locale].afterTitle}
          </p>
          <Button href="/" UI="primary">{data[locale].button}</Button>
        </div>
      </div>
    </>
  );
}
