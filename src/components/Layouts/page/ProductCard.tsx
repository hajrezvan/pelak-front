import * as P from '@/components/layouts/Playout'
import { PIcategory } from '@/data/pages/category';

import { getMedia } from "@/components/function/page/GetMedia";

export default function ProductCard({ category, locale }: { category: PIcategory, locale: string }) {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
    ((locale === 'fa' && 'fa-IR') || (locale === 'ar' && 'ar-IR') || (locale === 'ru' && 'ru-RU') || 'en-US'),{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  const cover = getMedia(category.media, "c");

  return (
    <P.Tag
      UI='middle'
      className='group hover:shadow-md transition-shadow flex-col justify-between p-P-Z! rounded-P-4! hover:bg-P-BackgroundLight! bg-P-BackgroundDark!'
      href={category.categorySlug+'/'+category.slug}
    >

      <P.Image src={cover.address} alt={category.title} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} className='mx-auto mb-P-3' />
      

      <h3 className="group-hover:text-P-Primary flex-1" style={{ lineHeight: '120%' }}>
        {category.title}
      </h3>

      <p className="text-PC-TextMiddle text-sm border-t-P-2 border-P-BackgroundBorder pt-P-2" style={{ lineHeight: '120%' }}>
      {formatDate(category.updated)}
      </p>
    </P.Tag>
  );
}
