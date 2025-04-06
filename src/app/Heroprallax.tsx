/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimate, useInView, stagger } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden`,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );
  
  return (
    <div className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-6 md:h-8 lg:h-10 text-teal-700", cursorClassName)}
      />
    </div>
  );
};

const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: Array<{src: string, alt: string}>;
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Remove the unused loading variable
  const [loadedImages, setLoadedImages] = useState<Array<{src: string, alt: string}>>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new globalThis.Image(); 
        img.src = image.src;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as Array<{src: string, alt: string}>);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex].src}
            alt={loadedImages[currentIndex].alt}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

const HeroSection = () => {
  const images = [
    { 
      src: "/culture/slide2.webp", 
      alt: "wildlife tours in Sri Lanka" 
    },
    { 
      src: "/culture/cnslide11.webp", 
      alt: "Ceylon Naturalist tour guide showcasing Sri Lankan wildlife" 
    },
    { 
      src: "/culture/cnslide22.webp", 
      alt: "Beautiful Sri Lankan landscape with endemic birds" 
    },
  ];

  return (
    <section aria-label="Hero section featuring Sri Lankan wildlife" className="flex flex-col gap-16">
      <div className="h-[600px]">
        <ImagesSlider images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.div className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              <h1 className="text-xl md:text-6xl block mb-2">Discover Nature's Wonders</h1>
              <p className="text-base md:text-2xl">Embark on your avian journey with Ceylon Naturalist</p>
            </motion.div>
          </motion.div>
        </ImagesSlider>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col items-center space-y-8">
          <p className="text-neutral-600 dark:text-neutral-200 text-lg">
            The road to freedom starts from here
          </p>
          <TypewriterEffect
            words={[
              { text: "Discover" },
              { text: "Sri" },
              { text: "Lanka" },
              { text: "with" },
              { text: "Ceylon Naturalist", className: "text-teal-700" },
            ]}
          />
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href="/contact" aria-label="Contact Ceylon Naturalist">
              <button className="w-48 h-12 rounded-xl bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors">
                Contact us
              </button>
            </Link>
            <Link href="/tour-packages" aria-label="View our tour packages">
              <button className="w-48 h-12 rounded-xl bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors">
                Tour packages
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;