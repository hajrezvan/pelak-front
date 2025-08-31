import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PDlayout } from '@/data/layout'
/* ------------------------------------------Components------------*/
import { Header, Footer } from '@/components/Layouts'
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