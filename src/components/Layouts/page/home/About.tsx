
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function About({ data }: { data: PIhomePage["about"] }) {

  return (
    <>
      <P.Section className='bg-P-Text'>
        <P.Container className='py-P-10'>
          <P.Box className='gap-4'>
            <h2 className='text-P-Background'>{data.title}</h2>
            <p className='text-P-BackgroundDark'>{data.description}</p>
            <div className="mt-P-7 grid gap-P-3 md:grid-cols-2">
              {data.cards.map((card, index) => (
                <div key={index} className="group content-center hover:scale-x-101 hover:scale-y-105 transition-all duration-300 cursor-default rounded-P-4 border border-P-BackgroundLow hover:bg-P-TextDark p-P-7 inset-shadow-P-Primary/40 shadow-P-Primary/18 hover:inset-shadow-in hover:shadow-out ">
                  <h3 className='text-P-Background group-hover:scale-x-99 group-hover:scale-y-95 transition-all duration-300'>
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </P.Box>
        </P.Container>
      </P.Section>

    </>
  )
}
