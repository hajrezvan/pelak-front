'use client';

import { useState } from 'react';
import FormPopup from '@/components/Layouts/Pcomponents/FormPopup';
import { useTranslations } from 'next-intl';
import * as P from '@/components/Playout'

export default function ProductPageClient({productTitle,className}: {productTitle: string,className?: string}) {

const productGlobal = useTranslations().raw('product');

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <P.Button onClick={handleButtonClick} className={className} title={productGlobal.callToActionTitle} >
        {productGlobal.callToActionText}
      </P.Button>

      <FormPopup isOpen={isDialogOpen} onClose={handleCloseDialog} productTitle={productTitle} />
    </>
  );
}