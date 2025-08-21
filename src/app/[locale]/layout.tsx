import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
/* ------------------------------------------JS--------------------*/
import type { Metadata } from "next";
import "@/app/globals.css";
/* ------------------------------------------Type------------------*/

/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import { Header } from '@/components/Layouts'
import Footer from '@/components/Page/Footer'
/* ------------------------------------------Function--------------*/
export const metadata: Metadata = {
  verification: { google: "1234567890", yandex: "1234567890", "me": "1234567890" },
  robots: {
    index: true,
    follow: true
  },
  icons: [
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/favicon-128x128.png', sizes: '128x128' },
    { rel: 'apple-touch-icon', url: '/favicon-192x192.png', sizes: '192x192' }
  ]
}
/* ------------------------------------------Run-------------------*/
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>

          <Header aria-label="Global" />

          <div>
            {children}
          </div>

          <Footer />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}




// outline-style: solid;
// outline-width: 2px;
// outline-offset: 5px;
// outline-color: var(--color-PC-Warning);
// border-radius: 3px;