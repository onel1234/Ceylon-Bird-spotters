"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  image: string;
  
};

const testimonials: Testimonial[] = [
  {
    quote: "I really enjoyed my first taste of Sri Lanka and it is definitely a country I would come back to see different places",
    name: "Lucy",
    designation: "Leeds, Uk",
    image: "/wildlife/Elephant (1).jpg"  
  },
  {
    quote: "Thank you for a thoroughly enjoyable and rewarding fortnight. ",
    name: "Paul Southerland",
    designation: "Melbourne, Austraila",
    image: "/wildlife/mirissa4.jpg"  
  },
  {
    quote: "Thank so much, for such an informative and relaxing trip for such a hectic schedule",
    name: "Andy",
    designation: "Yorkshire, England",
    image: "/wildlife/vic1.jpg" 
   
  },
  {
    quote: "This is our second trip to Sri Lanka an I was anxious it might not be as good as our first",
    name: "Roberts",
    designation: "Lincoinshire, England",
    image: "/wildlife/Leopard (11).jpg" 
   
  }
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (index: number) => {
    setImageError(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="relative h-[500px] w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.name}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      {imageError[index] ? (
                        <div className="h-full w-full rounded-3xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-gray-500 dark:text-gray-400">
                            {testimonial.name[0]}
                          </span>
                        </div>
                      ) : (
                        <div className="relative h-full w-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-3xl object-cover object-center"
                            priority={isActive(index)}
                            onError={() => handleImageError(index)}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-between flex-col py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {testimonials[active].designation}
                </p>
                <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;