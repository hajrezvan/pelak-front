
/* ------------------------------------------JS--------------------*/
import "@/app/globals.css";
import Image from "next/image";
import type { Metadata } from 'next';
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
    title: "Page Not Found",
    beforeTitle: "The page ",
    afterTitle: " was not found",
    button: "Back to Home"
  },
  "ru": {
    title: "Страница не найдена",
    beforeTitle: "Страница ",
    afterTitle: " не найдена",
    button: "Назад на главную"
  },
  "ar": {
    title: "الصفحة غير موجودة",
    beforeTitle: "الصفحة ",
    afterTitle: " غير موجودة",
    button: "العودة إلى الرئيسية"
  },
  "fa": {
    title: "صفحه یافت نشد",
    beforeTitle: "صفحه ",
    afterTitle: "یافت نشد",
    button: "بازگشت به صفحه اصلی"
  }
}
/* ------------------------------------------Components------------*/
import { Button } from "@/components/Playout";
/* ------------------------------------------Function--------------*/
export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Page Not Found',
    description: 'The requested page was not found',
  };
}
/* ------------------------------------------Run-------------------*/
export default async function NotFound() {
  const locale = "en";

  return (
    <html lang={locale}>
      <body>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[1/1] w-full overflow-hidden rounded-b-xl sm:aspect-[3/2] md:aspect-[2/1] lg:aspect-[3/1]">
            <Image
              alt="Page Not Found"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              src="/image/Iran-Exportal-Header.jpg"
              fill
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-PC-PrimaryDarkness/60 to-PC-Background/80"></div>
            <div className="absolute bottom-0 p-6 text-PC-PrimaryWhite md:p-6 w-full">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-center text-PC-Background ">
                {data[locale].title}
              </h1>
            </div>
          </div>

          {/* Message */}
          <div className="py-8 px-PC-3 min-h-[110px] flex flex-col gap-3 items-center justify-center">
            <Button href="/" UI="primary">{data[locale].button}</Button>
          </div>
        </div>
      </body>
    </html>
  );
}
