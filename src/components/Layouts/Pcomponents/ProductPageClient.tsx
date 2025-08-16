'use client';

import { useState } from 'react';
import FormPopup from '@/components/Layouts/Pcomponents/FormPopup';
import { useTranslations } from 'next-intl';

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
      <button 
        onClick={handleButtonClick}
        className={`bg-PC-Primary hover:bg-PC-Secondary text-PC-Light text-2lx text-center px-3 py-2 rounded ${className}`}
        title={productGlobal.callToActionTitle}
      >
        {productGlobal.callToActionText}
      </button>

      <FormPopup 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        productTitle={productTitle}
      />
    </>
  );
}