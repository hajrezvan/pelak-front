
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Type------------------*/
import { PIcategories } from '@/data/categories'
/* ------------------------------------------Data------------------*/
import { categories } from '@/data/categories'
/* ------------------------------------------Components------------*/
import Hero from '@/components/pages/home/Hero'
import Categories from '@/components/pages/home/Categories'
import About from '@/components/pages/home/About'
import FeaturedSuppliers from '@/components/Page/FeaturedSuppliers'
import HowItWorks from '@/components/Page/HowItWorks'
import Testimonials from '@/components/Page/Testimonials'
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
        <Hero locale={locale} />
        <Categories categories={categories[locale]} />
        <About locale={locale}/>
        {/* <FeaturedSuppliers locale={locale}/>
        <HowItWorks locale={locale}/>
        <Testimonials locale={locale}/> */}
      </main>
    </>
  )
}