
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

/* ------------------------------------------Data & Type-----------*/
import { layout } from '@/data/layout'
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
import { Header, Footer } from '@/components/Layouts'
import { Button } from "@/components/Playout";
/* ------------------------------------------Function--------------*/
async function getLocale(): Promise<string> {
  try {
    // Get locale from cookies
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
    if (localeCookie && ['en', 'ru', 'ar', 'fa'].includes(localeCookie)) {
      return localeCookie;
    }

    // Get locale from environment variable
    const envLocale = process.env.NEXT_LOCALE;
    if (envLocale && ['en', 'ru', 'ar', 'fa'].includes(envLocale)) {
      return envLocale;
    }

    // Fallback to default locale
    return "en";
  } catch (error) {
    // If cookies() fails, fallback to environment variable or default
    const envLocale = process.env.NEXT_LOCALE;
    if (envLocale && ['en', 'ru', 'ar', 'fa'].includes(envLocale)) {
      return envLocale;
    }
    return "en";
  }
}

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Page Not Found',
    description: 'The requested page was not found',
  };
}
/* ------------------------------------------Run-------------------*/
export default async function NotFound() {
  const headersList = await headers();
  const url = headersList.get('x-current-url') || 'unknown';
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>

        <Header data={layout[locale]} aria-label="Global" />

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
                404 | {data[locale].title}
              </h1>
            </div>
          </div>

          <div className="py-8 px-PC-3 min-h-[180px] flex flex-col gap-2 items-center justify-center">
            <p className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
              {data[locale].beforeTitle}
              <span className="text-PC-Primary">{url}</span>
              {data[locale].afterTitle}
            </p>
            <Button href="/" UI="primary">{data[locale].button}</Button>
          </div>

        </div>

        <Footer data={layout[locale]} aria-label="Footer" />

      </body>
    </html >
  );
}
