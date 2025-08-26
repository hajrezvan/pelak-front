import Image from "next/image";
import Link from "next/link";
import * as P from '@/components/Playout'

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
    <Link
      href={category.href}
      className="group bg-PC-BackgroundPanel rounded-lg shadow-sm border border-PC-BackgroundBorder p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative w-[72%] mx-auto overflow-hidden rounded-lg mb-4">
        <Image
          alt={category.name}
          src={category.image}
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${category.color}`}>
          <span className="text-sm font-medium"><P.SvgIcon svgName={category.icon as P.SvgIconProps['svgName']} svgSize="medium" /></span>
        </div>
        <span className="text-sm font-medium text-PC-TextMiddle bg-PC-BackgroundBorder px-2 py-1 rounded-full">
          {category.count}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-PC-Text mb-2 group-hover:text-PC-Primary transition-colors">
        {category.name}
      </h3>
      
      <p className="text-PC-TextMiddle text-sm">
        {category.description}
      </p>
    </Link>
  );
}
