"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import TypewriterEffect from "./TypeWriterEffect"; // Make sure the casing matches exactly
import ImagesSlider, { SlideImage } from "./ImagesSlider"; // Import with the type

const HeroSection = () => {
  // Images with customized text and button positions
  const images: SlideImage[] = [
    {
      src: "/hero/cnslide22.webp",
      alt: "wildlife tours in Sri Lanka",
      heading: {
        text: "Explore Sri Lanka’s Wild Heart with CeylonNaturalist",
        position: { x: "10%", y: "55%", align: "left" }
      },
      subheading: {
        text: "Personalized journeys through Nature, Culture & Adventure with Passionate Local Guides.",
        position: { x: "10%", y: "78%", align: "left" }
      },
      button: {
        text: "About Us",
        href: "/about",
        position: { x: "10%", y: "87%", align: "left" }
      }
    },
    {
      src: "/hero/2.webp",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Morning Light meats golden eyes – The wild doesn’t need to roar to be felt",
        position: { x: "10%", y: "50%", align: "center" }
      },
      
      button: {
        text: "View Tour Package 2",
        href: "/tour-packages?tab=coastal",
        position: { x: "40%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/3-1.jpg",
      alt: "Beautiful Sri Lankan landscape with endemic birds",
      heading: {
        text: "A splash of emerald and elegance – The Green Bee-eater in full display during our photo tour",
        position: { x: "5%", y: "30%", align: "center" }
      },
     
      button: {
        text: "View Tour Package 3",
        href: "/tour-packages?tab=photography",
        position: { x: "45%", y: "70%", align: "right" }
      }
    },
    {
      src: "/hero/4.webp",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Chasing endemics in the heart of Sinharaja – A perfect day for birders on the trail",
        position: { x: "10%", y: "50%", align: "center" }
      },
      
      button: {
        text: "View Tour Package 1",
        href: "/tour-packages?tab=mountain",
        position: { x: "40%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/5.jpg",
      alt: "Morning Light meats golden eyes The wild doesnt need to roar to be felt",
      heading: {
        text: "Echoes of a timeless past, carved in stone & spirit",
        position: { x: "10%", y: "50%", align: "center" }
      },
      
      button: {
        text: "View Tour Package 4",
        href: "/tour-packages?tab=tailor",
        position: { x: "40%", y: "85%", align: "center" }
      }
    },
    {
      src: "/hero/6.jpg",
      alt: "Where giants roam and wild journeys begins… ",
      heading: {
        text: "Where giants roam and wild journeys begins… ",
        position: { x: "10%", y: "50%", align: "center" }
      },
      
      button: {
        text: "Sri Lanka",
        href: "/sri-lanka",
        position: { x: "40%", y: "85%", align: "center" }
      }
    },
  ];

  return (
    <section aria-label="Hero section featuring Sri Lankan wildlife" className="flex flex-col gap-16">
      <div className="h-[600px]">
        <ImagesSlider images={images} />
      </div>
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col items-center space-y-8">
          <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-lg">
            Welcome to the Wild Heart of Sri Lanka
          </p>
          
          <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-lg max-w-4xl text-center">
            At CeylonNaturalist, we gently guide you into the wonders of Sri Lanka's wildlife, landscapes, and cultural treasures. With years of field experience and a deep love for nature, we create moments that are both enriching and personal—designed with care, led with heart.
            Whether you're a keen birder, a wildlife enthusiast, or simply curious about the island's hidden gems, we're here to help you connect with the wild, one unforgettable journey at a time.
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
            <Link href="/contact" >
              <button 
                className="w-48 h-12 rounded-xl font-[Poppins] bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors"
                aria-label="Explore Endemic & Big Game tours"
              >
                Contact us
              </button>
            </Link>
            <Link href="/tour-packages">
              <button 
                className="w-48 h-12 rounded-xl bg-teal-700 font-[Poppins] text-white text-base hover:bg-teal-700 transition-colors"
                aria-label="Explore Northern Wildlife tours"
              >
                Tour Packages 
              </button>
            </Link>
            
          </div>
          
          <div className="flex flex-col items-center space-y-6 mt-8">
            <h2 className="text-neutral-800 dark:text-neutral-100 font-[Poppins] text-2xl font-semibold">
              What Makes Our Journeys Special?
            </h2>
            
            <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-lg max-w-3xl text-center">
              Personalized & Flexible - Every tour is thoughtfully crafted to match your interests—no rush, no pressure, just the joy of discovery.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-lg max-w-3xl text-center">
              Expert-Led Adventures - From the rainforest canopy to ancient ruins, our experienced naturalists know the land like an old friend.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-200 font-[Poppins] text-lg max-w-3xl text-center">
              Gentle, Responsible Travel - We travel with kindness—to wildlife, to people, and to the environment we all share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;