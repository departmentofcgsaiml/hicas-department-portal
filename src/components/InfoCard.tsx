import React from 'react';
import Image from 'next/image';

// Define the types for the props this component accepts
type InfoCardProps = {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  title: string;
  description: string;
};

// This is the reusable component for each card in the grid
export default function InfoCard({ mediaType, mediaSrc, title, description }: InfoCardProps) {
  return (
    <div className="space-y-4">
      {/* Media container with a perfect 16:9 aspect ratio */}
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-2xl">
        {mediaType === 'video' ? (
          <iframe
            src={`https://www.youtube.com/embed/${mediaSrc}?controls=0&showinfo=0&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      {/* Text content below the media */}
      <div>
        <span className="w-12 h-1 bg-amber-400 block mb-3"></span>
        <h3 className="text-xl font-bold font-lora text-white">{title}</h3>
        <p className="mt-2 text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
