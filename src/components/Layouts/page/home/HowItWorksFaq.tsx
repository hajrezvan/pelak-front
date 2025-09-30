'use client';
/* ------------------------------------------JS--------------------*/
import { useState } from 'react';
/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/pages/home';
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout';
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function HowItWorksFaq({ data }: { data: PIhomePage["howItWorksFaq"] }) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <P.Section className="bg-P-Background py-16">
      <P.Container UI="box" Orientation="horizontal" gap="large">
        {/* Left side - Image */}
        <P.Box size="1/3" className="hidden md:flex">
          <P.Image
            src={data.image}
            alt="How to Find Reliable Iran Suppliers"
            width={500}
            height={680}
            className="w-full h-auto object-cover rounded-lg"
          />
        </P.Box>

        {/* Right side - Content */}
        <P.Box size="2/3" gap="medium">
          <div className="space-y-6">
            <P.H H="h2" className="text-3xl font-bold text-P-Text">
              {data.title}
            </P.H>
            
            <p className="text-lg text-P-TextMiddle leading-relaxed">
              {data.subtitle}
            </p>

            <P.H H="h3" className="text-xl font-semibold text-P-Text">
              {data.description}
            </P.H>

            {/* Accordion */}
            <div className="space-y-4">
              {data.faqItems.map((item) => (
                <div key={item.id} className="border border-P-BackgroundBorder rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left bg-P-BackgroundDark hover:bg-P-BackgroundBorder transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium text-P-Text">
                      {item.title}
                    </span>
                    <span className="ml-4">
                      {openItems.includes(item.id) ? (
                        <P.SvgIcon svgName="minus" svgSize="medium" svgClassName="text-P-Text" />
                      ) : (
                        <P.SvgIcon svgName="plus" svgSize="medium" svgClassName="text-P-Text" />
                      )}
                    </span>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 py-4 bg-P-Background border-t border-P-BackgroundBorder">
                      <p className="text-P-TextMiddle leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </P.Box>
      </P.Container>
    </P.Section>
  );
}
