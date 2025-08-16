'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IFormProduct } from '@/type/formProduct';
import FormStep1 from '@/components/Layouts/Pcomponents/FormStep1';
import FormStep2 from '@/components/Layouts/Pcomponents/FormStep2';
import SvgIcon from '@/components/Layouts/Pcomponents/SvgIcon';

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

export default function FormPopup({ isOpen, onClose, productTitle }: FormPopupProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IFormProduct>({
    name: '',
    email: '',
    phone: '',
    contactMethods: [],
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleStep1Complete = async (step1Data: Omit<IFormProduct, 'description'>) => {
    setIsLoading(true);
    try {
      const dataToSend: IFormProduct = {
        ...step1Data,
        description: ''
      };
      
      setFormData(dataToSend);

      // Corrected URL to formProduct
      const response = await fetch('/api/formProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });
      
      if (response.ok) {
        setCurrentStep(2);
      } else {
        const errorData = await response.json();
        console.error('Error in sending:', errorData);
        alert('Error sending information. Please try again.');
      }
    } catch (error) {
      console.error('Error sending step 1 information:', error);
      alert('Error sending information. Please check your internet connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep2Complete = async (description: string) => {
    setIsLoading(true);
    try {
      const completeData: IFormProduct = {
        ...formData,
        description: description
      };
      
      // Corrected URL to formProduct
      const response = await fetch('/api/formProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completeData)
      });
      
      if (response.ok) {
        onClose();
        alert('Your information has been sent successfully!');
        setCurrentStep(1);
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethods: [],
          description: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Error in final submission:', errorData);
        alert('Error in final submission. Please try again.');
      }
    } catch (error) {
      console.error('Error in final submission:', error);
      alert('Error sending information. Please check your internet connection.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[99993]">
      <DialogBackdrop className="fixed inset-0 bg-PC-Black/90 backdrop-blur-sm" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <DialogTitle className="font-bold">
              Request 
              <p className='font-medium'>
                {productTitle}
              </p>
            </DialogTitle>
            <button
                onClick={onClose}
                className="p-1 bg-PC-Gray/40 hover:bg-PC-Accent/40 rounded-full pointer-events-auto"
            >
                <SvgIcon svgName="xMark" className="size-8 flex-none" />
            </button>
          </div>

          {currentStep === 1 && (
            <FormStep1 
              onSubmit={handleStep1Complete} 
              isLoading={isLoading}
            />
          )}

          {currentStep === 2 && (
            <FormStep2 
              onSubmit={handleStep2Complete} 
              isLoading={isLoading}
            />
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}