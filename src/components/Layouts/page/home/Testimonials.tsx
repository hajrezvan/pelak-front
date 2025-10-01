"use client";
/* ------------------------------------------JS--------------------*/
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
/* ------------------------------------------Data & Type-----------*/
import { PIhomePage } from '@/data/pages/home'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function Testimonials({ data, locale }: { data: PIhomePage["testimonials"], locale: string }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <P.Section className="bg-P-BackgroundDark py-P-10">
      <P.Container>
        <P.Container gap='medium' UI='box'>
          <P.H H='h2'>
            {data.title}
          </P.H>
          <p>
            {data.description}
          </p>
        </P.Container>

        <div className="embla">
          <div className="embla__viewport lg:size-full lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(black_70%,transparent),linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" ref={emblaRef}>
            <div className="embla__container items-center py-12 ">
              {data.testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="embla__slide select-none transition-opacity duration-500 flex-[0_0_33.333%] max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                  <div className={`flex basis-1/3 flex-col gap-8 p-10 transition-all duration-500 will-change-transform mx-4 ${index === selectedIndex
                    ? 'scale-105 border border-P-Primary opacity-100'
                    : 'border border-P-PrimaryLight opacity-80'
                    }`}
                    style={{
                      background: 'radial-gradient(141.53% 141.42% at 0% 0%, var(--shadow-P-PrimaryRadial) 0%, var(--shadow-P-PrimaryRadialEnd) 100%)',
                      boxShadow: index === selectedIndex
                        ? '0px 10px 30px 0px var(--shadow-P-PrimaryActive)'
                        : '0px 0px 0px 0px var(--shadow-P-PrimaryRadialEnd)'
                    }}>
                    <div className="flex flex-col gap-4">
                      <h3 className={`font-kode-mono text-[28px]/[36px] uppercase tracking-[-1.68px] transition-colors duration-500 ${index === selectedIndex ? 'text-P-Primary' : ''
                        }`}>
                        {testimonial.name}
                      </h3>
                      <p className="font-light text-P-Text will-change-transform md:text-[16px] md:leading-[26px]">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="relative group/button rounded-full w-fit flex items-center transition-colors border-0 bg-P-Primary text-P-White py-2 px-4">
                        <span className="relative z-10 w-full text-center">
                          <div className="flex items-center gap-3 font-kode-mono">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-[-1px] h-3.5 w-3.5">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.8058 4.82349L8.00002 0L5.19422 4.82349L0 6.42622L3.56588 10.0021L2.36968 16L8.00002 13.4528L13.6303 16L12.4341 10.0021L16 6.42622L10.8058 4.82349Z" fill="white"></path>
                            </svg>
                            <span className="leading-4">{testimonial.rating}</span>
                          </div>
                        </span>
                      </div>
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
                className="group/button relative group/button rounded-full flex transition-colors border-0 bg-P-Primary text-P-TextWhite hover:bg-P-PrimaryLight m-2 aspect-square w-10 items-center justify-center"
              >
                {(locale == 'en' || locale == 'ru' ? (
                  <span className="relative z-10 text-center w-fit">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </span>
                ) : (
                  <span className="relative z-10 text-center w-fit">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </span>
                ))}

              </button>
              <button
                onClick={scrollNext}
                aria-label="Next practice"
                className="group/button relative group/button rounded-full flex transition-colors border-0 bg-P-Primary text-P-TextWhite hover:bg-P-PrimaryLight m-2 aspect-square w-10 items-center justify-center p-0"
              >
                {(locale == 'en' || locale == 'ru' ? (
                  <span className="relative z-10 text-center w-fit">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </span>
                ):(
                  <span className="relative z-10 text-center w-fit">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </span>
                ))}
              </button>
            </div>
          </div>


        </div>


      </P.Container>
    </P.Section>
  )
}
