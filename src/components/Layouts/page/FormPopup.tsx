'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import FormStep1 from '@/components/Layouts/page/FormStep1';
import FormStep2 from '@/components/Layouts/page/FormStep2';
import * as P from '@/components/Layouts/Playout'

interface IFormProduct {
  name: string;
  email: string;
  phone: string;
  contactMethods: ("t" | "w")[];
  description: string; // در مرحله اول خالی، در مرحله دوم پر
}

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

      // استفاده از endpoint محلی
      const response = await fetch('/api/formProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setCurrentStep(2);
      } else {
        // Check if response has content before parsing JSON
        const contentType = response.headers.get('content-type');
        let errorData = null;
        
        if (contentType && contentType.includes('application/json')) {
          try {
            errorData = await response.json();
          } catch (parseError) {
            console.error('Failed to parse error response:', parseError);
            errorData = { message: 'Unknown error occurred' };
          }
        } else {
          // Handle non-JSON responses
          const textResponse = await response.text();
          errorData = { message: textResponse || 'Request failed' };
        }
        
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
        // Check if response has content before parsing JSON
        const contentType = response.headers.get('content-type');
        let errorData = null;
        
        if (contentType && contentType.includes('application/json')) {
          try {
            errorData = await response.json();
          } catch (parseError) {
            console.error('Failed to parse error response:', parseError);
            errorData = { message: 'Unknown error occurred' };
          }
        } else {
          // Handle non-JSON responses
          const textResponse = await response.text();
          errorData = { message: textResponse || 'Request failed' };
        }
        
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
      <DialogBackdrop className="fixed inset-0 bg-P-Black/80 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-P-Background rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <DialogTitle className="font-bold">
              Request
              <p className='font-medium'>
                {productTitle}
              </p>
            </DialogTitle>
            <button
              onClick={onClose}
              className="top-3 right-3 p-1 bg-P-BackgroundPanel hover:bg-P-Background border border-P-BackgroundBorder rounded-full pointer-events-auto"
            >
              <P.SvgIcon svgName="xMark" svgSize="large" />
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