import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ImageSlide, { TextPosition } from "./Imageslide";

export interface SlideImage {
  src: string;
  alt: string;
  heading?: {
    text: string;
    position: TextPosition;
    className?: string;
  };
  subheading?: {
    text: string;
    position: TextPosition;
    className?: string;
  };
  button?: {
    text: string;
    href: string;
    position: TextPosition;
    className?: string;
  };
}

interface ImagesSliderProps {
  images: SlideImage[];
  children?: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}

const ImagesSlider: React.FC<ImagesSliderProps> = ({
  images,
  children,
  className,
  autoplay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Preload all images and set loaded state
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const prefetchImage = document.createElement("img");
    prefetchImage.src = images[nextIndex].src;
  }, [currentIndex, images]);

  // Handle keyboard navigation and autoplay
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, isTransitioning]);

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Slightly longer than the animation duration
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Generate the next index for preparing the upcoming slide

  // Animation variants for the tape-like effect
  const slideVariants = {
    // Current slide starts in view
    enter: {
      y: "100%",
      opacity: 1,
    },
    // Current slide animates to center
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    // Exit animation (slide up)
    exit: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Create a placeholder for the navbar element that persists during transitions
  const NavbarPlaceholder = () => {
    return (
      <div className="absolute top-0 left-0 right-0 h-16 bg-transparent z-10">
        {/* This empty div serves as a placeholder for the navbar text highlight area */}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
    >
      {/* Always show navbar placeholder area */}
      <NavbarPlaceholder />
      
      {imagesLoaded && children}

      {imagesLoaded && (
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            className="h-full w-full absolute inset-0"
            onAnimationComplete={() => {
              // Animation has completed
              setIsTransitioning(false);
            }}
          >
            <ImageSlide
              image={images[currentIndex]}
              heading={images[currentIndex].heading}
              subheading={images[currentIndex].subheading}
              button={images[currentIndex].button}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next buttons */}
      <button
        onClick={handlePrevious}
        disabled={isTransitioning}
        className="absolute left-4 z-20 bg-black bg-opacity-30 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-4 z-20 bg-black bg-opacity-30 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
};

export default ImagesSlider;