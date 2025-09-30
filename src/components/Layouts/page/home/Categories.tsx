
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Data & Type-----------*/
import { PIcategories } from '@/data/categories'
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Categories({ categories }: { categories: PIcategories }) {

  return (
    <P.Section className="bg-P-BackgroundDark py-P-10">
      <P.Container>
        <P.Box className="text-center mb-P-7">
          <h2>
            {categories.title}
          </h2>
          <p>
            {categories.description}
          </p>
        </P.Box>

        <P.Box className="grid grid-cols-2 lg:grid-cols-4 gap-P-2">
          {categories.categories.map((category, index) => (
            <P.Tag
              key={index}
              UI='middle'
              className='group hover:shadow-md transition-shadow flex-col justify-start rounded-P-4! hover:bg-P-BackgroundLight! bg-P-Background!'
              href={category.href}
            >

              <div className="flex w-full items-start justify-between">
                <div className={"p-3 rounded-lg "+category.color}>
                  <P.SvgIcon svgName={category.icon as P.SvgIconProps['svgName']} svgSize='medium' />
                </div>
                {/* <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span> */}
              </div>

              <P.Image src={category.image} alt={category.name} style={{ width: '72%', height: 'auto' }} className='mx-auto mb-P-3' />

              <h4 className="group-hover:text-P-Primary" style={{ lineHeight: '120%' }}>
                {category.name}
              </h4>

            </P.Tag>
          ))}
        </P.Box>
      </P.Container>
    </P.Section>
  )
}
