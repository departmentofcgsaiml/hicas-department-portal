import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Testimonial = {
  image: string;
  quote: string;
  name: string;
  credentials: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 flex-grow-0 w-full min-w-0 p-4">
              <div className="bg-amber-50 dark:bg-slate-800 rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40 rounded-full border-4 border-amber-400 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg italic text-slate-700 dark:text-slate-300">
                    "{testimonial.quote}"
                  </p>
                  <p className="mt-4 font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <button onClick={scrollPrev} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button onClick={scrollNext} aria-label="Next testimonial" className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}