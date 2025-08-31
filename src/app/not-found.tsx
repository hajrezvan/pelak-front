
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
import type { Metadata } from 'next';
import { cookies,headers } from 'next/headers';
/* ------------------------------------------Data & Type-----------*/
import { PDlayout } from '@/data/layout'
import { PDnotFound } from '@/data/notFound'
/* ------------------------------------------Components------------*/
import { Header, Footer } from '@/components/Layouts'
import { Button } from "@/components/Playout";
/* ------------------------------------------Function--------------*/
export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Page Not Found',
    description: 'The requested page was not found',
  };
}

import { GetLocale } from '@/components/function/GetLocale'
/* ------------------------------------------Run-------------------*/
export default async function NotFound() {
  const headersList = await headers();
  const cookieStore = await cookies();
  const url = headersList.get('x-current-url') || 'unknown';
  const locale = await GetLocale(cookieStore);

  return (
    <html lang={locale}>
      <body>

        <Header data={PDlayout[locale]} aria-label="Global" />

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
                404 | {PDnotFound[locale].title}
              </h1>
            </div>
          </div>

          <div className="py-8 px-PC-3 min-h-[180px] flex flex-col gap-2 items-center justify-center">
            <p className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl text-PC-Text">
              {PDnotFound[locale].beforeTitle}
              <span className="text-PC-Primary">{url}</span>
              {PDnotFound[locale].afterTitle}
            </p>
            <Button href="/" UI="primary">{PDnotFound[locale].button}</Button>
          </div>

        </div>

        <Footer data={PDlayout[locale]} aria-label="Footer" />

      </body>
    </html >
  );
}
