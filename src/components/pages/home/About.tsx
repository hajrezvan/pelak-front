
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function About({ data }: { data: PIhomePage["about"] }) {

  return (
    <>
      <P.Section className='bg-PC-Text'>
        <P.Container className='py-PC-10'>
          <P.Box className='gap-4'>
            <h2 className='text-PC-Background'>{data.title}</h2>
            <p className='text-PC-BackgroundDark'>{data.description}</p>
            <div className="mt-PC-7 grid gap-PC-3 md:grid-cols-2">
              {data.cards.map((card, index) => (
                <div key={index} className="group content-center hover:scale-x-101 hover:scale-y-105 transition-all duration-300 cursor-default rounded-PC-4 border border-PC-BackgroundDarkness hover:bg-PC-TextDark p-PC-7 inset-shadow-PC-Primary/40 shadow-PC-Primary/18 hover:inset-shadow-in hover:shadow-out ">
                  <h3 className='text-PC-Background group-hover:scale-x-99 group-hover:scale-y-95 transition-all duration-300'>
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
