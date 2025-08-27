"use client";
/* ------------------------------------------JS--------------------*/
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/
import useEmblaCarousel from 'embla-carousel-react';
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/

const OpenSource: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const tradePractices = [
    {
      name: 'Transparent Pricing',
      description: 'Clear and competitive pricing for all Iranian products with no hidden fees. We provide detailed cost breakdowns including production, shipping, and customs costs',
      rating: '9.8/10',
      learnMoreUrl: '/trade-practices/transparent-pricing'
    },
    {
      name: 'Quality Assurance',
      description: 'Rigorous quality control processes including factory audits, product testing, and certification verification to ensure international standards compliance',
      rating: '9.9/10',
      learnMoreUrl: '/trade-practices/quality-assurance'
    },
    {
      name: 'Supplier Verification',
      description: 'Comprehensive verification of Iranian suppliers including business licenses, production capacity, and export history for reliable partnerships',
      rating: '9.7/10',
      learnMoreUrl: '/trade-practices/supplier-verification'
    },
    {
      name: 'Export Documentation',
      description: 'Complete export documentation support including certificates of origin, commercial invoices, and customs declarations for smooth international trade',
      rating: '9.6/10',
      learnMoreUrl: '/trade-practices/export-documentation'
    },
    {
      name: 'Logistics Support',
      description: 'End-to-end logistics coordination including shipping arrangements, customs clearance, and delivery tracking for seamless export operations',
      rating: '9.5/10',
      learnMoreUrl: '/trade-practices/logistics-support'
    }
  ]

  return (
    <section className="bg-PC-BackgroundPanel">
      <div className="w-full py-[32px] md:py-[120px]">
        <div className="max-w-4xl mx-auto mb-16 flex flex-col gap-8">
          <h2 className="text-center text-[32px] font-normal leading-none tracking-[-0.02em] md:text-[48px] md:leading-[56px]">
            <p><span className="text-PC-Primary">Open&nbsp;Trade</span> Practices</p>
          </h2>
          <p className="mx-auto max-w-[720px] text-center font-light text-PC-TextMiddle md:text-[18px] md:leading-[28px]">
            We maintain the highest standards of transparency and quality in Iranian exports, ensuring reliable partnerships and successful international trade relationships
          </p>
        </div>
        
        {/* Carousel Section */}
        <section className="embla">
          <div className="embla__viewport lg:size-full lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(black_70%,transparent),linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" ref={emblaRef}>
            <div className="embla__container items-center py-12 ">
              {tradePractices.map((practice, index) => (
                <div key={practice.name} className="embla__slide select-none transition-opacity duration-500 flex-[0_0_33.333%] max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                  <div className={`flex basis-1/3 flex-col gap-8 p-10 transition-all duration-500 will-change-transform mx-4 ${
                    index === selectedIndex 
                      ? 'scale-105 border border-PC-Primary opacity-100' 
                      : 'border border-PC-PrimaryLightness opacity-80'
                  }`} 
                  style={{
                    background: 'radial-gradient(141.53% 141.42% at 0% 0%, var(--shadow-PC-PrimaryRadial) 0%, var(--shadow-PC-PrimaryRadialEnd) 100%)',
                    boxShadow: index === selectedIndex 
                      ? '0px 10px 30px 0px var(--shadow-PC-PrimaryActive)' 
                                              : '0px 0px 0px 0px var(--shadow-PC-PrimaryRadialEnd)'
                  }}>
                    <div className="flex flex-col gap-4">
                      <h3 className={`font-kode-mono text-[28px]/[36px] uppercase tracking-[-1.68px] transition-colors duration-500 ${
                        index === selectedIndex ? 'text-PC-Primary' : ''
                      }`}>
                        {practice.name}
                      </h3>
                      <p className="font-light text-PC-Text will-change-transform md:text-[16px] md:leading-[26px]">
                        {practice.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="relative group/button rounded-full w-fit flex items-center transition-colors border-0 bg-PC-Primary text-PC-TextWhite py-2 px-4">
                        <span className="relative z-10 w-full text-center">
                          <div className="flex items-center gap-3 font-kode-mono">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-[-1px] h-3.5 w-3.5">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.8058 4.82349L8.00002 0L5.19422 4.82349L0 6.42622L3.56588 10.0021L2.36968 16L8.00002 13.4528L13.6303 16L12.4341 10.0021L16 6.42622L10.8058 4.82349Z" fill="white"></path>
                            </svg>
                            <span className="leading-4">{practice.rating}</span>
                          </div>
                        </span>
                      </div>
                      <a className={`relative group/button border rounded-full w-fit flex items-center text-PC-Primary border-PC-Primary px-4 py-1.5 text-sm transition-opacity ${
                        index === selectedIndex ? 'opacity-100' : 'opacity-0'
                      }`} 
                         aria-label="" href={practice.learnMoreUrl}>
                        <span className="relative z-10 w-full text-center">Learn more</span>
                        <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity group-hover/button:opacity-100 drop-shadow-[0px_4px_2px_var(--shadow-PC-PrimaryHover)] bg-gradient-to-r from-PC-PrimaryLight to-transparent bg-PC-White"></div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="embla__controls !mt-[-24px]">
            <div className="embla__buttons">
              <button 
                onClick={scrollPrev}
                aria-label="Previous practice" 
                className="group/button relative group/button rounded-full flex transition-colors border-0 bg-PC-Primary text-PC-TextWhite hover:bg-PC-PrimaryLight m-2 aspect-square w-10 items-center justify-center p-0"
              >
                <span className="relative z-10 text-center w-fit">
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity group-hover/button:opacity-100 drop-shadow-[0px_4px_2px_var(--shadow-PC-PrimaryHover)] bg-PC-White"></div>
              </button>
              <button 
                onClick={scrollNext}
                aria-label="Next practice" 
                className="group/button relative group/button rounded-full flex transition-colors border-0 bg-PC-Primary text-PC-TextWhite hover:bg-PC-PrimaryLight m-2 aspect-square w-10 items-center justify-center p-0"
              >
                <span className="relative z-10 text-center w-fit">
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity group-hover/button:opacity-100 drop-shadow-[0px_4px_2px_var(--shadow-PC-PrimaryHover)] bg-PC-White"></div>
              </button>
            </div>
          </div>
        </section>
        
        {/* CTA Link */}
        <div className="mt-8 flex justify-center">
          <Link className="relative group/button border rounded-full w-fit flex items-center transition-colors border-PC-Primary px-6 py-2 text-PC-TextBlack" 
             aria-label="" href="/trade-practices">
            <span className="relative z-10 w-full text-center">View All Trade Practices</span>
            <div className="absolute inset-0 z-0 rounded-full opacity-0 transition-opacity group-hover/button:opacity-100 drop-shadow-[0px_4px_2px_var(--shadow-PC-PrimaryHover)] bg-gradient-to-r from-PC-PrimaryLight to-transparent bg-PC-White"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
