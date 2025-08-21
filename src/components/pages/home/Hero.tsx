
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Type------------------*/
import { PIhomePage } from '@/data/homePage'
/* ------------------------------------------Data------------------*/
import { homePage } from '@/data/homePage'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Hero({ locale }: { locale: string }) {

  const data = homePage[locale].hero as PIhomePage[keyof PIhomePage]['hero']

  return (
    <>
      <P.Section className='bg-PC-Background'>
        <P.Container className='sm:flex-row-reverse mt-PC-10 py-PC-10'>

          <P.Box className='px-8 justify-center'>
            <P.VideoDialog
              video={data.media.find(media => media.type === 'v') as PIhomePage[keyof PIhomePage]['hero']['media'][number]}
              poster={data.media.find(media => media.type === 'p') as PIhomePage[keyof PIhomePage]['hero']['media'][number]}
            />
          </P.Box>

          <P.Box className='gap-4'>
            <h1>{data.mainTitle}</h1>
            <p>
              {data.mainDescription}
            </p>

            <P.Box className='relative'>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <P.SvgIcon svgName='search' />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 text-lg"
                placeholder={data.searchPlaceholder}
              />
              <button className="absolute inset-y-0 right-0 px-6 bg-PC-Primary text-white rounded-r-lg hover:bg-PC-PrimaryDark transition-colors">
                {data.searchButton}
              </button>
            </P.Box>
            <div className="text-center flex sm:flex-col justify-between">
              <p className="inline-block">Popular searches :   </p>
              <div className="inline-flex lg:flex flex-wrap justify-center gap-2">
                {data.tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm bg-PC-BackgroundPanel text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="h-px w-full max-w-[100px] bg-gray-800 sm:max-w-[250px]" />
              <p className="w-auto whitespace-nowrap font-kode-mono text-xs uppercase text-[#636363]">
                Powered by
              </p>
              <div className="h-px w-full max-w-[100px] bg-gray-800 sm:max-w-[250px]" />
            </div>
            <div className="grid grid-cols-3 gap-8">
              {data.poweredBy.map((poweredBy) => (
                <div key={poweredBy.text} className="text-center">
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
