
/* ------------------------------------------JS--------------------*/

/* ------------------------------------------Type------------------*/
import { PIcategories } from '@/data/categories'
/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Categories({ categories }: { categories: PIcategories[keyof PIcategories] }) {

  return (
    <P.Section className="bg-PC-BackgroundPanel py-PC-10">
      <P.Container>
        <P.Box className="text-center mb-PC-7">
          <h2>
            Browse by Category
          </h2>
          <p>
            Explore our comprehensive range of Iranian products across various industries
          </p>
        </P.Box>

        <P.Box className="grid grid-cols-2 lg:grid-cols-4 gap-PC-2">
          {categories.map((category) => (
            <P.Button
              key={category.name}
              UI='lightOutlineGlow'
              className='group hover:shadow-md transition-shadow flex-col'
              href={`/products/${category.href}`}
            >

              <div className="flex w-full items-start justify-between">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <P.SvgIcon svgName={category.icon as P.SvgIconProps['svgName']} svgSize='medium' />
                </div>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>

              <P.Image src={category.image} alt={category.name} style={{ width: '72%', height: 'auto' }} className='mx-auto mb-PC-3' />

              <h3 className="group-hover:text-PC-Primary">
                {category.name}
              </h3>

            </P.Button>
          ))}
        </P.Box>
      </P.Container>
    </P.Section>
  )
}
