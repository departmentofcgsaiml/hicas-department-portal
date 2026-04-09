import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// Define the array of images for your slider.
// INSTRUCTIONS: To change these images, update the paths below and make sure
// your images are in the `public/images` folder.
const slideImages = [
  '/images/student-achivement/homeslide.jpeg',
  '/images/department-main.jpg',
  '/images/student-achivement/onam1.jpeg',
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slideImages.map((src, index) => (
          <div className="flex-shrink-0 flex-grow-0 w-full relative h-80 md:h-[500px]" key={index}>
            <Image
              src={src}
              alt={`Department slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0} // Prioritize the first image for faster loading
            />
          </div>
        ))}
      </div>

      {/* Improved Text Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold font-lora tracking-tight text-white text-center p-4"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
          Department of AIMl & CGS
        </h1>
      </div>
      
      {/* Manual Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
        title="Previous Slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
        title="Next Slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            title={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}