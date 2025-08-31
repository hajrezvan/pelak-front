'use client';

import { useState } from 'react';
import FormPopup from '@/components/layouts/Pcomponents/FormPopup';
import * as P from '@/components/Playout'

export default function ProductPageClient({
  productTitle,
  callToActionTitle,
  className
}: {
  productTitle: string,callToActionTitle: string,className?: string
}) {


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <P.Button onClick={handleButtonClick} className={className} title={callToActionTitle} >
        {callToActionTitle}
      </P.Button>

      <FormPopup isOpen={isDialogOpen} onClose={handleCloseDialog} productTitle={productTitle} />
    </>
  );
}