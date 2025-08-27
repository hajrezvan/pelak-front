
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/homePage'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Hero({ data }: { data: PIhomePage["hero"] }) {

  return (
    <>
      <P.Section className='bg-PC-Background'>
        <P.Container className=' mt-PC-10 py-PC-10 sm:flex-row-reverse'>{/* sm:flex-row-reverse */}

          <P.Box size='2/5' className='p-4 justify-center'>
            <P.VideoDialog
              video={data.media.find(media => media.type === 'v') as PIhomePage["hero"]["media"][number]}
              poster={data.media.find(media => media.type === 'p') as PIhomePage["hero"]["media"][number]}
            />
          </P.Box>

          <P.Box size='3/5' gap='medium'>
            <P.H>{data.mainTitle}</P.H>
            <p>
              {data.mainDescription}
            </p>

            <P.InputSearch placeholder={data.searchPlaceholder} buttonText={data.searchButton} />

            <P.Box gap='medium' Orientation='horizontal' className="justify-between items-center">
              <p className='text-PC-TextMiddle'>{data.PopularSearchesTitle}</p>
              <div className="flex justify-center gap-2">
                {data.tags.map((tag, index) => (
                  <P.Tag
                    href={"/search?q=" + tag} // TODO : add search page
                    key={index}
                    UI='light'
                  >
                    {tag}
                  </P.Tag>
                ))}
              </div>
            </P.Box>

            <div className="flex items-center justify-center gap-8">
              <div className="h-px w-full max-w-[100px] bg-PC-TextMiddle sm:max-w-[250px]" />
              <p className="w-auto whitespace-nowrap font-kode-mono text-xs uppercase text-[#636363]">
                {data.poweredByTitle}
              </p>
              <div className="h-px w-full max-w-[100px] bg-PC-TextMiddle sm:max-w-[250px]" />
            </div>
            <div className="grid grid-cols-3 gap-8">
              {data.poweredBy.map((poweredBy, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    <P.SvgIcon svgName={poweredBy.icon as P.SvgIconProps['svgName']} svgSize='medium' svgClassName='mx-auto' />
                  </div>
                  <p>{poweredBy.number}</p>
                  <p>{poweredBy.text}</p>
                </div>
              ))}
            </div>
          </P.Box>

        </P.Container>
      </P.Section>
    </>
  )
}
