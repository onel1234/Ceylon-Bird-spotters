/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageDetails } from '../types';
import { useMediaQuery } from 'react-responsive';

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
  const [selectedImage, setSelectedImage] = useState<ImageDetails | null>(null);

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

  const handleShowFullImage = (image: ImageDetails) => {
    setSelectedImage(image);
  };

  const handleCloseFullImage = () => {
    setSelectedImage(null);
  };

  const ImageCard = ({ image }: { image: ImageDetails }) => (
    <div 
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      onClick={() => handleShowFullImage(image)}
    >
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
    <div className="relative">
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

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseFullImage}
          >
            <motion.div 
              className="relative w-full max-w-6xl max-h-screen p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
                onClick={handleCloseFullImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-screen max-h-[70vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="p-6 bg-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  <p className="text-lg italic mb-4 text-gray-600">{selectedImage.scientificName}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p>{selectedImage.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Photographer</h3>
                      <p>{selectedImage.photographer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};