import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Define the types for the props this component accepts
type AnimatedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// This component wraps the Next.js Image component with scroll-triggered animations
export default function AnimatedImage({ src, alt, width, height }: AnimatedImageProps) {
  const ref = useRef(null);
  // useInView detects when the component is visible in the viewport
  // `once: true` ensures the animation only runs once
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Define the animation variants: one for when it's hidden, one for when it's visible
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden" // Start in the hidden state
      animate={isInView ? "visible" : "hidden"} // Animate to the visible state when in view
      variants={imageVariants}
      transition={{ duration: 0.8, ease: "easeOut" }} // Define the animation's speed and style
      // NEW: Add a hover effect that slightly enlarges the image
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg shadow-xl object-cover"
      />
    </motion.div>
  );
}