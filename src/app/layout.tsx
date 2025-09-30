
/* ------------------------------------------JS--------------------*/
import type { Metadata } from "next";
import "@/app/globals.css";
/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/

/* ------------------------------------------Function--------------*/
export const metadata: Metadata = {
  verification: { google: "1234567890", yandex: "1234567890", "me": "1234567890" }, //TODO:what is this?
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
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      {children}
    </>
  );
}