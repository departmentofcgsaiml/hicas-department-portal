import React from 'react';

// Define the types for the props. 'children' will be the text inside the heading.
type SectionHeadingProps = {
  children: React.ReactNode;
};

// This is the reusable component for your modern section headings.
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold font-lora text-amber-600 dark:text-amber-400 inline-block relative pb-2">
      {children}
      <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-amber-500 rounded-full"></span>
    </h2>
  );
}
