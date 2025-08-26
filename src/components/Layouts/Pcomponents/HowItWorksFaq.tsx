'use client';

import { useState } from 'react';
import * as P from '@/components/Playout';

interface FaqItem {
  id: number;
  title: string;
  content: string;
}

interface HowItWorksFaqProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    faqItems: FaqItem[];
    image: string;
  };
}

export default function HowItWorksFaq({ data }: HowItWorksFaqProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <P.Section className="bg-PC-Background py-16">
      <P.Container UI="box" Orientation="horizontal" gap="large">
        {/* Left side - Image */}
        <P.Box size="1/3" className="hidden md:flex">
          <P.Image
            src={data.image}
            alt="How to Find Reliable Iran Suppliers"
            width={250}
            height={340}
            className="w-full h-auto object-cover rounded-lg"
          />
        </P.Box>

        {/* Right side - Content */}
        <P.Box size="2/3" gap="medium">
          <div className="space-y-6">
            <P.H H="h2" className="text-3xl font-bold text-PC-Text">
              {data.title}
            </P.H>
            
            <p className="text-lg text-PC-TextMiddle leading-relaxed">
              {data.subtitle}
            </p>

            <P.H H="h3" className="text-xl font-semibold text-PC-Text">
              {data.description}
            </P.H>

            {/* Accordion */}
            <div className="space-y-4">
              {data.faqItems.map((item) => (
                <div key={item.id} className="border border-PC-BackgroundBorder rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left bg-PC-BackgroundPanel hover:bg-PC-BackgroundBorder transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium text-PC-Text">
                      {item.title}
                    </span>
                    <span className="ml-4">
                      {openItems.includes(item.id) ? (
                        <P.SvgIcon svgName="minus" svgSize="medium" svgClassName="text-PC-Text" />
                      ) : (
                        <P.SvgIcon svgName="plus" svgSize="medium" svgClassName="text-PC-Text" />
                      )}
                    </span>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 py-4 bg-PC-Background border-t border-PC-BackgroundBorder">
                      <p className="text-PC-TextMiddle leading-relaxed">
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
