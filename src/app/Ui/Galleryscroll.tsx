/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageDetails } from '../types';
import { useMediaQuery } from 'react-responsive'; // Add this import

interface ParallaxScrollSecondProps {
  images: ImageDetails[];
  className?: string;
}

export const ParallaxScrollSecond: React.FC<ParallaxScrollSecondProps> = ({
  images,
  className,
}) => {
  const gridRef = useRef<any>(null);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Only apply transforms on large screens
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, isLargeScreen ? -200 : 0]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, isLargeScreen ? 200 : 0]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, isLargeScreen ? -200 : 0]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const ImageCard = ({ image }: { image: ImageDetails }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        src={image.src}
        className="h-80 w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
        height={400}
        width={400}
        alt={image.title}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-all duration-300">
        <div className="absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
            <p className="text-sm italic mb-3 text-gray-200">{image.scientificName}</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>{image.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Photographer:</span>
                <span>{image.photographer}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Adjusted height classes for better mobile experience
  const containerHeight = isLargeScreen ? "h-[40rem]" : "h-auto";

  return (
    <div
      className={cn(containerHeight, "items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 lg:py-40 px-4 lg:px-10"
      >
        <div className="grid gap-10">
          {firstPart.map((image, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={`grid-1-${image.id}-${idx}`}
            >
              <ImageCard image={image} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((image, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={`grid-2-${image.id}-${idx}`}
            >
              <ImageCard image={image} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((image, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={`grid-3-${image.id}-${idx}`}
            >
              <ImageCard image={image} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};