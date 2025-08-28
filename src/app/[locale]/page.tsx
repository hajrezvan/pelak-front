
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { categories } from '@/data/categories'
import { homePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import Hero from '@/components/pages/home/Hero'
import Categories from '@/components/pages/home/Categories'
import About from '@/components/pages/home/About'
import Articles from '@/components/pages/home/Articles'
import HowItWorksFaq from '@/components/pages/home/HowItWorksFaq'
import Testimonials from '@/components/pages/home/Testimonials'
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
        <Hero data={homePage[locale].hero} />
        <Categories categories={categories[locale]} />
        <About data={homePage[locale].about}/>
        <Articles data={homePage[locale].articles}/>
        <HowItWorksFaq data={homePage[locale].howItWorksFaq}/>
        <Testimonials data={homePage[locale].testimonials}/>
      </main>
    </>
  )
}