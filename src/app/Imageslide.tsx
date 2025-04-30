import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type TextAlignment = "left" | "center" | "right";

export interface TextPosition {
  x: string; // CSS value (e.g., "10%", "center", "200px")
  y: string; // CSS value (e.g., "10%", "center", "200px")
  align?: TextAlignment;
}


export interface ButtonConfig {
  text: string;
  href: string;
  position: TextPosition;
  className?: string;
}

export interface ImageSlideProps {
  image: {
    src: string;
    alt: string;
  };
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
  button?: ButtonConfig;
  isActive: boolean; // Controls zoom animation
}

const ImageSlide: React.FC<ImageSlideProps> = ({
  image,
  heading,
  subheading,
  button,
  isActive,
}) => {
  // State to control zoom effect
  const [zoom, setZoom] = useState(1.2); // Start zoomed in
  
  // Effect to animate zoom when slide is active
  useEffect(() => {
    if (isActive) {
      // Give time for the slide to appear before starting zoom animation
      const zoomTimeout = setTimeout(() => {
        setZoom(1); // Zoom out to normal size gradually
      }, 300);
      
      return () => clearTimeout(zoomTimeout);
    } else {
      // Reset zoom for inactive slides
      setZoom(1.2);
    }
  }, [isActive]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: zoom }}
        transition={{ duration: 10, ease: "easeOut" }} // Slow zoom out over 10 seconds
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 60vw"
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>
     
      {heading && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "absolute text-white font-[Poppins] font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg",
            heading.className
          )}
          style={{
            left: heading.position.x,
            top: heading.position.y,
            textAlign: heading.position.align || "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {heading.text}
        </motion.h2>
      )}
     
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "absolute text-white font-poppins font-medium text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl",
            subheading.className
          )}
          style={{
            left: subheading.position.x,
            top: subheading.position.y,
            textAlign: subheading.position.align || "left",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {subheading.text}
        </motion.p>
      )}
     
      {button && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute"
          style={{
            left: button.position.x,
            top: button.position.y,
            transform: button.position.align === "center" ? "translateX(-50%)" : "none",
          }}
        >
          <Link href={button.href}>
            <button
              className={cn(
                "px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 text-xs xs:text-sm sm:text-base rounded-xl bg-teal-700 text-white font-[Poppins] font-medium hover:bg-teal-800 transition-colors",
                button.className
              )}
            >
              {button.text}
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ImageSlide;