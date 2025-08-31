
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PDcategories } from '@/data/categories'
import { PDhomePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import { Home } from '@/components/Pages'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  return (
    <>
      <main>
        <Home.Hero data={PDhomePage[locale].hero} />
        <Home.Categories categories={PDcategories[locale]} />
        <Home.About data={PDhomePage[locale].about}/>
        <Home.Articles data={PDhomePage[locale].articles}/>
        <Home.HowItWorksFaq data={PDhomePage[locale].howItWorksFaq}/>
        <Home.Testimonials data={PDhomePage[locale].testimonials}/>
      </main>
    </>
  )
}