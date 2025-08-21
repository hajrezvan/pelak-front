
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Type------------------*/
import { PIhomePage } from '@/data/homePage'
/* ------------------------------------------Data------------------*/
import { homePage } from '@/data/homePage'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function About({ locale }: { locale: string }) {

  const data = homePage[locale].about as PIhomePage[keyof PIhomePage]['about']

  return (
    <>
      <P.Section className='bg-PC-Text'>
        <P.Container className='py-PC-10'>
          <P.Box className='gap-4'>
            <h2 className='text-PC-Background'>{data.title}</h2>
            <p className='text-PC-BackgroundDark'>{data.description}</p>
            <div className="mt-PC-7 grid gap-PC-3 md:grid-cols-2">
              {data.cards.map((card) => (
                <div key={card.title} className="group content-center hover:scale-x-101 hover:scale-y-105 transition-all duration-300 cursor-default rounded-PC-4 border border-PC-BackgroundDarkness hover:bg-PC-TextDark p-PC-7 inset-shadow-PC-Primary/40 shadow-PC-Primary/18 hover:inset-shadow-in hover:shadow-out ">
                  <h3 className='text-PC-Background hover:scale-x-99 hover:scale-y-95 transition-all duration-300'>
                    {card.title}
                    <br />
                    {card.description}
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
