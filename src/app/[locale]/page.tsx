
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Type------------------*/

/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
import HeroSection from '@/components/Page/HeroSection'
import SearchSection from '@/components/Page/SearchSection'
import CategoriesSection from '@/components/Page/CategoriesSection'
import FeaturedSuppliers from '@/components/Page/FeaturedSuppliers'
import HowItWorks from '@/components/Page/HowItWorks'
import Testimonials from '@/components/Page/Testimonials'
import Footer from '@/components/Page/Footer'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function HomePage() {
  return (
  <>
      <main>
        <HeroSection />
        <SearchSection />
        <CategoriesSection />
        <FeaturedSuppliers />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
  </>
  )
}
