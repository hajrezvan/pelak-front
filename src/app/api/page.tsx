
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default async function HomePage() {

  return (
    <>
      <main>
        <P.Section className='bg-PC-BackgroundPanel min-h-screen'>
          <P.Container className='bg-PC-Background min-h-screen justify-start'>
            <P.Box gap='medium' className='my-PC-5'>
              <P.H H='h1'>API</P.H>
              <p>text</p>
              <P.H H='h2'>H2</P.H>
              <p>text</p>
              <P.H H='h2'>H2</P.H>
              <p>text</p>
              <P.H H='h2'>H2</P.H>
              <p>text</p>
              <P.H H='h2'>H2</P.H>
              <p>text</p>
            </P.Box>
          </P.Container>
        </P.Section>
      </main>
    </>
  )
}