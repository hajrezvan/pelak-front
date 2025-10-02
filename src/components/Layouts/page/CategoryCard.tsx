import * as P from '@/components/Layouts/Playout'

interface CategoryCardProps {
  category: {
    name: string;
    description: string;
    href: string;
    image: string;
    count: string;
    color: string;
    icon: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <P.Tag
      UI='middle'
      className='group hover:shadow-md transition-shadow flex-col justify-start p-P-Z! rounded-P-4! hover:bg-P-BackgroundLight! bg-P-BackgroundDark!'
      href={category.href}
    >

      <div className="flex w-full items-start justify-between">
        <div className={"p-3 rounded-lg " + category.color}>
          <P.SvgIcon svgName={category.icon as P.SvgIconProps['svgName']} svgSize='medium' />
        </div>
        {/* <span className="bg-gray-100 px-2 py-1 rounded-full">
        {category.count}
      </span> */}
      </div>

      <P.Image src={category.image} alt={category.name} style={{ width: '72%', height: 'auto' }} className='mx-auto mb-P-3' />

      <h3 className="group-hover:text-P-Primary h-P-9" style={{ lineHeight: '120%' }}>
        {category.name}
      </h3>

      <p className="text-PC-TextMiddle text-sm border-t-P-2 border-P-BackgroundBorder pt-P-2 mt-P-2" style={{ lineHeight: '120%' }}>
        {category.description}
      </p>
    </P.Tag>
  );
}
