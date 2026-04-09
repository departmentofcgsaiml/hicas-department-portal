import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// Define the type for a single achievement's data
type Achievement = {
  image: string;
  title: string;
  description: string;
};

// Define the type for the props this component accepts
type AchievementSliderProps = {
  achievements: Achievement[];
};

export default function AchievementSlider({ achievements }: AchievementSliderProps) {
  // CORRECTED: Using the exact same setup as the working HeroSlider
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  // CORRECTED: Using the exact same manual autoplay logic from the HeroSlider
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex-shrink-0 flex-grow-0 w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-bold text-blue-700 dark:text-blue-400">{achievement.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <button 
        onClick={scrollPrev} 
        aria-label="Previous achievement" 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button 
        onClick={scrollNext} 
        aria-label="Next achievement" 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}


// import React, { useEffect, useRef, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const achievements = [
//   { id: 1, title: "Achievement 1", description: "Description 1" },
//   { id: 2, title: "Achievement 2", description: "Description 2" },
//   { id: 3, title: "Achievement 3", description: "Description 3" },
//   { id: 4, title: "Achievement 4", description: "Description 4" },
//   { id: 5, title: "Achievement 5", description: "Description 5" },
//   { id: 6, title: "Achievement 6", description: "Description 6" },
// ];

// export default function AchievementSlider() {
//   const autoplay = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false }, (emblaRoot) => emblaRoot.parentElement)
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [autoplay.current]
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       <div className="relative">
//         {/* Slider viewport */}
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {achievements.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 p-4"
//               >
//                 <div className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col justify-center items-center">
//                   <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={scrollPrev}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         >
//           ◀
//         </button>
//         <button
//           onClick={scrollNext}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         >
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const achievements = [
//   {
//     id: 1,
//     title: "Hindustan Debugging Contest",
//     description: "Saravanakumar B, Dinesh E (AIML) – 2th position in Hindustan colleges.",
//     image: "/images/achievements/contest.jpg",
//   },
//   {
//     id: 2,
//     title: "Photo with AK",
//     description: "Dinesh E give photo his fan AK in Vidamuyarchi",
//     image: "/images/achievements/ak-photo.jpg",
//   },
//   {
//     id: 3,
//     title: "HICAS Debugging Competition",
//     description: "Sujitha A & Someone ? (CGS) – Won First prize.",
//     image: "/images/achievements/hicas-debugging.jpg",
//   },
//   {
//     id: 4,
//     title: "Memes Competition Contest",
//     description: "Vignesh V, Mohammed Fazil H (AIML) – Won First Prize in SirRamaKrishna.",
//     image: "/images/achievements/memes.jpg",
//   },
// ];

// export default function AchievementSlider() {
//   const autoplay = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false }, (emblaRoot) => emblaRoot.parentElement)
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [autoplay.current]
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       <div className="relative">
//         {/* Slider viewport */}
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {achievements.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 p-4"
//               >
//                 <div className="bg-white shadow-md rounded-2xl p-4 h-full flex flex-col justify-start items-center">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-lg w-full h-48 object-cover mb-4"
//                   />
//                   <h3 className="text-md font-bold text-blue-800 mb-2 text-center">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm text-center">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={scrollPrev}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//         >
//           ◀
//         </button>
//         <button
//           onClick={scrollNext}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Know more button */}
//       <div className="text-center mt-6">
//         <a
//           href="/achievements"
//           className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
//         >
//           KNOW MORE →
//         </a>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useCallback } from 'react'; // CORRECTED: Imported useRef
// import Image from 'next/image';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay'; // CORRECTED: Using the official autoplay plugin
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// // Define the type for a single achievement's data
// type Achievement = {
//   image: string;
//   title: string;
//   description: string;
// };

// // Define the type for the props this component accepts
// type AchievementSliderProps = {
//   achievements: Achievement[];
// };

// export default function AchievementSlider({ achievements }: AchievementSliderProps) {
//   // CORRECTED: Using the robust useRef method for the Autoplay plugin, just like your working example
//   const autoplay = useRef(
//     Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [autoplay.current] // Pass the plugin correctly
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);
  
//   return (
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {achievements.map((achievement, index) => (
//             <div key={index} className="flex-shrink-0 flex-grow-0 w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-48 w-full">
//                   <Image
//                     src={achievement.image}
//                     alt={achievement.title}
//                     fill
//                     className="object-contain p-2"
//                   />
//                 </div>
//                 <div className="p-4 text-center flex-grow flex flex-col justify-center">
//                   <h3 className="font-bold text-blue-700 dark:text-blue-400">{achievement.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//        <button 
//         onClick={scrollPrev} 
//         aria-label="Previous achievement" 
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
//         <ChevronLeftIcon className="h-6 w-6" />
//       </button>
//       <button 
//         onClick={scrollNext} 
//         aria-label="Next achievement" 
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10">
//         <ChevronRightIcon className="h-6 w-6" />
//       </button>
//     </div>
//   );
// }

// import React, { useRef, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const achievements = [
//   {
//     id: 1,
//     title: "Hindustan Debugging Contest",
//     description: "Saravanakumar B, Dinesh E (AIML) – 2th position in Hindustan colleges.",
//     image: "https://via.placeholder.com/400x250?text=Achievement+1",
//   },
//   {
//     id: 2,
//     title: "Photo with AK",
//     description: "Dinesh E give photo his fan AK in Vidamuyarchi",
//     image: "https://via.placeholder.com/400x250?text=Achievement+2",
//   },
//   {
//     id: 3,
//     title: "HICAS Debugging Competition",
//     description: "Sujitha A & Someone ? (CGS) – Won First prize.",
//     image: "https://via.placeholder.com/400x250?text=Achievement+3",
//   },
//   {
//     id: 4,
//     title: "Memes Competition Contest",
//     description: "Vignesh V, Mohammed Fazil H (AIML) – Won First Prize in SirRamaKrishna.",
//     image: "https://via.placeholder.com/400x250?text=Achievement+4",
//   },
// ];

// export default function AchievementSlider() {
//   const autoplay = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false })
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [autoplay.current]
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       <div className="relative">
//         {/* Slider viewport */}
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {achievements.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 p-4"
//               >
//                 <div className="bg-white shadow-md rounded-2xl p-4 h-full flex flex-col justify-start items-center">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-lg w-full h-48 object-cover mb-4"
//                   />
//                   <h3 className="text-md font-bold text-blue-800 mb-2 text-center">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm text-center">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={scrollPrev}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
//         >
//           ◀
//         </button>
//         <button
//           onClick={scrollNext}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Know more button */}
//       <div className="text-center mt-6">
//         <a
//           href="/achievements"
//           className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
//         >
//           KNOW MORE →
//         </a>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import useEmblaCarousel from 'embla-carousel-react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// type Achievement = {
//   image: string;
//   title: string;
//   description: string;
// };

// type AchievementSliderProps = {
//   achievements: Achievement[];
// };

// export default function AchievementSlider({ achievements }: AchievementSliderProps) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollPrev = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     emblaApi.on('select', onSelect);
//     onSelect(); // Ensure index updates on init

//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const interval = setInterval(() => {
//       emblaApi.scrollNext();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [emblaApi]);

//   return (
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {achievements.map((achievement, index) => (
//             <div key={index} className="embla__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-48 w-full">
//                   {achievement.image ? (
//                     <Image
//                       src={achievement.image}
//                       alt={achievement.title}
//                       fill
//                       className="object-cover"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
//                       No Image
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-4 text-center flex-grow flex flex-col justify-center">
//                   <h3 className="font-bold text-blue-700 dark:text-blue-400">{achievement.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         aria-label="Previous achievement"
//         className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronLeftIcon className="h-6 w-6" />
//       </button>

//       <button
//         onClick={scrollNext}
//         aria-label="Next achievement"
//         className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronRightIcon className="h-6 w-6" />
//       </button>
//     </div>
//   );
// }

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import useEmblaCarousel from 'embla-carousel-react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// type Achievement = {
//   image?: string;
//   title: string;
//   description: string;
// };

// type AchievementSliderProps = {
//   achievements: Achievement[];
// };

// export default function AchievementSlider({ achievements }: AchievementSliderProps) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollPrev = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     emblaApi.on('select', onSelect);
//     onSelect();

//     return () => {
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const interval = setInterval(() => {
//       emblaApi.scrollNext();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [emblaApi]);

//   return (
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {achievements.map((achievement, index) => (
//             <div key={index} className="embla__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4">
//               <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-48 w-full flex items-center justify-center bg-gray-100 dark:bg-slate-800">
//                   {achievement.image ? (
//                     <Image
//                       src={achievement.image}
//                       alt={achievement.title}
//                       fill
//                       className="object-cover p-2"
//                     />
//                   ) : (
//                     <div className="text-gray-500 text-sm">No Image</div>
//                   )}
//                 </div>
//                 <div className="p-4 text-center flex-grow flex flex-col justify-center">
//                   <h3 className="font-bold text-blue-700 dark:text-blue-400">{achievement.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         aria-label="Previous achievement"
//         className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronLeftIcon className="h-6 w-6" />
//       </button>

//       <button
//         onClick={scrollNext}
//         aria-label="Next achievement"
//         className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronRightIcon className="h-6 w-6" />
//       </button>
//     </div>
//   );
// }


/*
  AchievementSlider - Final Fix
  - Embla Carousel + Autoplay plugin used correctly (plugin instance stored in useRef)
  - Slides use responsive "basis" so Embla receives predictable widths
  - Next.js <Image> used with `fill` and parent `relative` + fixed height
  - Defensive checks and dynamic import recommendation for Next.js (avoid SSR init problems)

  How to use:
  1) Put your images in `/public/images/achievements/` (or use remote URLs). If using remote URLs, add their domain to `next.config.js`.
  2) Install dependencies: `npm i embla-carousel-react embla-carousel-autoplay`
  3) Import the component into a page **with** dynamic import to avoid SSR issues:
     const AchievementSlider = dynamic(() => import('@/components/AchievementSlider'), { ssr: false });

  Troubleshooting checklist is below the component code.
// */
// import React, { useRef, useEffect, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// type Achievement = {
//   image?: string; // Can be a public folder path ("/my.jpg") or remote URL
//   title: string;
//   description?: string;
// };

// type Props = {
//   achievements: Achievement[];
// };

// export default function AchievementSlider({ achievements }: Props) {
//   const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   useEffect(() => {
//     if (emblaApi) emblaApi.reInit();
//   }, [emblaApi]);

//   return (
//     <div className="relative w-full max-w-6xl mx-auto">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {achievements.map((a, i) => (
//             <div key={i} className="flex-none basis-full sm:basis-1/2 lg:basis-1/4 p-4">
//               <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
//                   {a.image ? (
//                     // Use plain <img> instead of next/image for testing
//                     <img
//                       src={a.image}
//                       alt={a.title}
//                       className="object-cover h-full w-full"
//                     />
//                   ) : (
//                     <div className="text-gray-500 text-sm">No Image</div>
//                   )}
//                 </div>
//                 <div className="p-4 text-center flex-grow flex flex-col justify-center">
//                   <h3 className="font-bold text-blue-700 dark:text-blue-400">{a.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{a.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         aria-label="Previous achievement"
//         className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow z-20"
//       >
//         <ChevronLeftIcon className="h-6 w-6 text-slate-800 dark:text-white" />
//       </button>

//       <button
//         onClick={scrollNext}
//         aria-label="Next achievement"
//         className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow z-20"
//       >
//         <ChevronRightIcon className="h-6 w-6 text-slate-800 dark:text-white" />
//       </button>
//     </div>
//   );
// }

// /*
// ✅ Fixes applied:
// - Replaced next/image with <img> (to avoid Next.js optimization errors).
// - Checked that images load directly from /public folder.
// - Embla Autoplay plugin created with useRef to prevent re-creation.
// - Prev/Next arrows have high z-index to remain clickable.

// 👉 Important:
// 1. Put your images inside `/public/images/...` (example: `/public/images/achievements/achievement-1.jpg`).
// 2. Then reference them as `image: "/images/achievements/achievement-1.jpg"`.
// 3. Remove `.next` cache and restart: `rm -rf .next && npm run dev`.
// 4. Open `http://localhost:3000/images/achievements/achievement-1.jpg` in browser to confirm image loads.
// */


// import React, { useEffect, useRef, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const achievements = [
//   {
//     id: 1,
//     title: "Achievement 1",
//     description: "Description for achievement 1",
//     image: "/images/achievements/achievement-1.jpg",
//   },
//   {
//     id: 2,
//     title: "Achievement 2",
//     description: "Description for achievement 2",
//     image: "/images/achievements/achievement-2.jpg",
//   },
//   {
//     id: 3,
//     title: "Achievement 3",
//     description: "Description for achievement 3",
//     image: "/images/achievements/achievement-3.jpg",
//   },
//   {
//     id: 4,
//     title: "Achievement 4",
//     description: "Description for achievement 4",
//     image: "/images/achievements/achievement-4.jpg",
//   },
// ];

// export default function AchievementsCarousel() {
//   const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [autoplay.current]
//   );

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", () => {
//       autoplay.current.reset();
//     });
//   }, [emblaApi]);

//   return (
//     <div className="relative w-full overflow-hidden" ref={emblaRef}>
//       <div className="flex">
//         {achievements.map((achievement) => (
//           <div
//             key={achievement.id}
//             className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] p-4"
//           >
//             <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
//               {achievement.image ? (
//                 <Image
//                   src={achievement.image}
//                   alt={achievement.title}
//                   width={400}
//                   height={300}
//                   className="object-cover w-full h-48"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                   No Image
//                 </div>
//               )}
//               <div className="p-4 flex-1 flex flex-col">
//                 <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
//                 <p className="text-gray-600 text-sm flex-1">{achievement.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Prev Button */}
//       <button
//         onClick={scrollPrev}
//         className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={scrollNext}
//         className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useCallback, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// const achievements = [
//   {
//     image: "/images/achievements/achievement-1.jpg",
//     title: "Achievement 1",
//     description: "Description for achievement 1",
//   },
//   {
//     image: "/images/achievements/achievement-2.jpg",
//     title: "Achievement 2",
//     description: "Description for achievement 2",
//   },
//   {
//     image: "/images/achievements/achievement-3.jpg",
//     title: "Achievement 3",
//     description: "Description for achievement 3",
//   },
//   {
//     image: "/images/achievements/achievement-4.jpg",
//     title: "Achievement 4",
//     description: "Description for achievement 4",
//   },
//    {
//     image: "/images/achievements/achievement-4.jpg",
//     title: "Achievement 4",
//     description: "Description for achievement 4",
//   },
//   {
//     image: "/images/achievements/achievement-1.jpg",
//     title: "Achievement 1",
//     description: "Description for achievement 1",
//   },
// ];

// export default function AchievementSlider() {
//   // Autoplay plugin instance
//   const autoplay = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
//   );

//   // Embla setup
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

//   // Navigation callbacks
//   const scrollPrev = useCallback(() => {
//     autoplay.current.stop(); // optional: stop autoplay on manual click
//     emblaApi?.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     autoplay.current.stop(); // optional: stop autoplay on manual click
//     emblaApi?.scrollNext();
//   }, [emblaApi]);

//   // Debug: log when Embla is ready
//   useEffect(() => {
//     if (emblaApi) {
//       console.log("Embla ready with slides:", emblaApi.slideNodes().length);
//     }
//   }, [emblaApi]);

//   return (
//     <div className="relative w-full">
//       {/* Viewport */}
//       <div className="overflow-hidden" ref={emblaRef}>
//         {/* Container */}
//         <div className="flex">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] p-4"
//             >
//               <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-48 w-full">
//                   <Image
//                     src={achievement.image}
//                     alt={achievement.title}
//                     fill
//                     className="object-cover p-2"
//                   />
//                 </div>
//                 <div className="p-4 text-center flex-grow flex flex-col justify-center">
//                   <h3 className="font-bold text-blue-700 dark:text-blue-400">
//                     {achievement.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//                     {achievement.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Prev Button */}
//       <button
//         onClick={scrollPrev}
//         aria-label="Previous achievement"
//         className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronLeftIcon className="h-6 w-6" />
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={scrollNext}
//         aria-label="Next achievement"
//         className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white p-2 rounded-full shadow-md z-10"
//       >
//         <ChevronRightIcon className="h-6 w-6" />
//       </button>
//     </div>
//   );
// }