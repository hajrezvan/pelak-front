
/* ------------------------------------------JS--------------------*/
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
/* ------------------------------------------Data & Type-----------*/
import { PDlayout } from '@/data/layout'
/* ------------------------------------------Components------------*/
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
/* ------------------------------------------Function--------------*/

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

          <Header data={PDlayout[locale]} aria-label="Global" />

          {children}

          <Footer data={PDlayout[locale]} aria-label="Footer" />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}