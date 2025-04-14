import React, { useEffect, useState, useRef } from "react";
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
  displayTime?: number; // Time in milliseconds for each slide
}

const ImagesSlider: React.FC<ImagesSliderProps> = ({
  images,
  children,
  className,
  autoplay = true,
  displayTime = 12000 // Default to 12 seconds per slide
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  // Reset autoplay timer
  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, displayTime);
    }
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
        resetAutoplayTimer();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
        resetAutoplayTimer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Initial autoplay setup
    resetAutoplayTimer();
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, isTransitioning, displayTime]);

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Slightly longer than the animation duration
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch handling for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsTouching(true);
    
    // Pause autoplay during touch
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    if (isTouching) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };
  
  const onTouchEnd = () => {
    setIsTouching(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && !isTransitioning) {
      handleNext();
    }
    
    if (isRightSwipe && !isTransitioning) {
      handlePrevious();
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
    
    // Restart autoplay
    resetAutoplayTimer();
  };

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
      ref={sliderRef}
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
              isActive={true} // Pass isActive prop to trigger zoom effect
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Navigation buttons - hidden on mobile, visible on larger screens */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                resetAutoplayTimer();
              }
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next buttons - hidden on small mobile, visible from sm breakpoint */}
      <button
        onClick={() => {
          handlePrevious();
          resetAutoplayTimer();
        }}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 z-20 bg-black bg-opacity-30 text-white p-1 sm:p-2 rounded-full hidden sm:block"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={() => {
          handleNext();
          resetAutoplayTimer();
        }}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 z-20 bg-black bg-opacity-30 text-white p-1 sm:p-2 rounded-full hidden sm:block"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Touch indicator - briefly shown when user touches the slider */}
      {isTouching && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-40 px-4 py-2 rounded-full text-sm z-30">
          Swipe to navigate
        </div>
      )}

      {/* Progress bar to visualize remaining time */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 bg-opacity-30">
        <motion.div 
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={currentIndex} // Reset animation when slide changes
          transition={{ 
            duration: displayTime / 1000, // Convert ms to seconds
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default ImagesSlider;