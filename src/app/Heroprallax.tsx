"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TypewriterEffect from "./TypeWriterEffect";
import ImagesSlider, { SlideImage } from "./ImagesSlider"; 

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images: SlideImage[] = [
    {
      src: "/hero/cnslide22.webp",
      alt: "wildlife tours in Sri Lanka",
      heading: {
        text: "Explore Sri Lanka's Wild Heart with Ceylon Naturalist",
        position: isMobile ? { x: "5%", y: "45%", align: "left" } : { x: "10%", y: "45%", align: "left" }
      },
      subheading: {
        text: "Personalized journeys through Nature, Culture & Adventure with Passionate Local Guides.",
        position: isMobile ? { x: "5%", y: "80%", align: "left" } : { x: "10%", y: "66%" , align: "left" }  
      
      },
      button: {
        text: "About Us",
        href: "/about",
        position: isMobile ? { x: "5%", y: "87%", align: "left" } : { x: "10%", y: "80%", align: "left" }
      }
    },
    {
      src: "/hero/2.webp",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Morning Light meets golden eyes – The wild doesn’t need to roar to be felt",
        position: isMobile ? { x: "5%", y: "48%", align: "left" } : { x: "53%", y: "60%", align: "right" }
      },
      
      button: {
        text: "Big Game Tours",
        href: "/tour-packages?tab=coastal",
        position: isMobile ? { x: "5%", y: "87%", align: "left" } : { x: "79%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/3-1.jpg",
      alt: "Beautiful Sri Lankan landscape with endemic birds",
      heading: {
        text: "A splash of emerald and elegance– The Green Bee-eater in full display during our photo tour",
        position: isMobile ? { x: "5%", y: "40%", align: "left" } : { x: "5%", y: "55%", align: "left" }
      },
      
      button: {
        text: "Photography Tour",
        href: "/tour-packages?tab=photography",
        position: isMobile ? { x: "5%", y: "78%", align: "left" } : { x: "5%", y: "87%", align: "right" }
      }
    },
    {
      src: "/hero/Land4.jpg",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Chasing endemics in the heart of Sinharaja – A perfect day for birders on the trail",
        position: isMobile ? { x: "5%", y: "40%", align: "left" } : { x: "50%", y: "55%", align: "right" }
      },
      
      button: {
        text: "Endemic Species Tours",
        href: "/tour-packages?tab=mountain",
        position: isMobile ? { x: "5%", y: "80%", align: "left" } : { x: "72%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/5.jpg",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Echoes of a timeless past, carved in stone & spirit",
        position: isMobile ? { x: "5%", y: "55%", align: "left" } : { x: "31%", y: "70%", align: "center" }
      },
      
      button: {
        text: "Tailor-made Holidays",
        href: "/tour-packages?tab=tailor",
        position: isMobile ? { x: "5%", y: "80%", align: "left" } : { x: "41%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/6.jpg",
      alt: "Where giants roam and wild journeys begins… ",
      heading: {
        text: "Where giants roam and wild journeys begins… ",
        position: isMobile ? { x: "5%", y: "57%", align: "left" } : { x: "53%", y: "66%", align: "right" }
      },
      
      button: {
        text: "Sri Lanka",
        href: "/sri-lanka",
        position: isMobile ? { x: "5%", y: "80%", align: "left" } : { x: "84%", y: "85%", align: "center" }
      }
    },
  ];

  return (
    <section aria-label="Hero section featuring Sri Lankan wildlife" className="flex flex-col gap-6 md:gap-16">
      <div className="h-[400px] md:h-[600px]">
        <ImagesSlider images={images} />
      </div>
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col space-y-6 md:space-y-8 items-center text-center">
          <p className="text-neutral-800 dark:text-neutral-100 font-[Poppins] font-semibold text-base md:text-lg">
            Welcome to the Wild Heart of Sri Lanka
          </p>
          
          <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-base md:text-lg max-w-4xl">
            At CeylonNaturalist, we gently guide you into the wonders of Sri Lanka's wildlife, landscapes, and cultural treasures. With years of field experience and a deep love for nature, we create moments that are both enriching and personal—designed with care, led with heart.
          </p>
          <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] font-bold text-base md:text-lg max-w-4xl">
          Whether you're a keen birder, a wildlife enthusiast, or simply curious about the island's hidden gems, we’re here to help you connect with the wild, one unforgettable journey at a time.
          </p>
          
          <div>
            <TypewriterEffect
              words={[
                { text: "Discover" },
                { text: "Sri" },
                { text: "Lanka" },
                { text: "with" },
                { text: "Ceylon Naturalist", className: "text-teal-700" },
              ]}
            />
          </div>
          
          <div className="flex flex-col w-full md:flex-row gap-4 mt-2 md:mt-4 items-center justify-center">
            <Link href="/contact" className="w-full md:w-auto">
              <button 
                className="w-full md:w-48 h-12 rounded-xl font-[Poppins] bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors"
                aria-label="Contact us for more information"
              >
                Contact us
              </button>
            </Link>
            <Link href="/tour-packages" className="w-full md:w-auto">
              <button 
                className="w-full md:w-48 h-12 rounded-xl bg-teal-700 font-[Poppins] text-white text-base hover:bg-teal-700 transition-colors"
                aria-label="Explore our tour packages"
              >
                Tour Packages 
              </button>
            </Link>
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-6 mt-6 md:mt-8 items-center">
            <h2 className="text-neutral-800 dark:text-neutral-100 font-[Poppins] text-xl md:text-2xl font-semibold">
              What Makes Our Journeys Special?
            </h2>
            
            <div className="space-y-4 flex flex-col items-center">
              <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-base md:text-lg max-w-3xl">
                <strong>Personalized & Flexible</strong> - Every tour is thoughtfully crafted to match your interests—no rush, no pressure, just the joy of discovery.
              </p>
              
              <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-base md:text-lg max-w-3xl">
                <strong>Expert-Led Adventures</strong> - From the rainforest canopy to ancient ruins, our experienced naturalists know the land like an old friend.
              </p>
              
              <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-base md:text-lg max-w-3xl">
                <strong>Gentle, Responsible Travel</strong> - We travel with kindness—to wildlife, to people, and to the environment we all share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;