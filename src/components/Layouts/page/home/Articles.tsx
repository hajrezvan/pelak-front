
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Articles({ data }: { data: PIhomePage["articles"] }) {

  return (
    <>

      <P.Section className='bg-P-Background'>
        <P.Container className='py-P-10'>
          <P.Box>
            <h2>
              {data.title}
            </h2>
            <p>
              {data.description}
            </p>
          </P.Box>
          {data.articles.map((article, index) => (

            <P.Box key={index} gap='medium' className='group my-P-5 px-P-5 border-x-P-2 border-P-BackgroundBorder hover:border-P-Primary'>
              <h3>
                {article.title}
              </h3>
              <p>
                {article.description}
              </p>

              <P.Box Orientation='wrap' className='gap-4'>

                {article.links.map((link) => (
                  <P.Button key={link.text} href={link.href} title={link.title}>
                    {link.text}
                  </P.Button>
                ))}

              </P.Box>

            </P.Box>
          ))}
        </P.Container>
      </P.Section >

    </>
  )
}
