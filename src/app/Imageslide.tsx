import React from "react";
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
}

const ImageSlide: React.FC<ImageSlideProps> = ({
  image,
  heading,
  subheading,
  button,
}) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      
      {heading && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "absolute text-white font-[Poppins] font-bold text-4xl md:text-5xl lg:text-6xl",
            heading.className
          )}
          style={{
            left: heading.position.x,
            top: heading.position.y,
            textAlign: heading.position.align || "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
            "absolute text-white font-poppins font-medium text-lg md:text-xl lg:text-2xl",
            subheading.className
          )}
          style={{
            left: subheading.position.x,
            top: subheading.position.y,
            textAlign: subheading.position.align || "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
                "px-6 py-3 rounded-xl bg-teal-700 text-white font-[Poppins] font-medium hover:bg-teal-800 transition-colors",
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