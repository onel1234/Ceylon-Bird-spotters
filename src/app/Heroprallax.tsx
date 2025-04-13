/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import TypewriterEffect from "./TypeWriterEffect"; // Make sure the casing matches exactly
import ImagesSlider, { SlideImage } from "./ImagesSlider"; // Import with the type

const HeroSection = () => {
  // Images with customized text and button positions
  const images: SlideImage[] = [
    {
      src: "/culture/slide2.webp",
      alt: "wildlife tours in Sri Lanka",
      heading: {
        text: "Discover Sri Lanka's Wildlife",
        position: { x: "10%", y: "30%", align: "left" }
      },
      subheading: {
        text: "Explore the rich biodiversity of our island nation",
        position: { x: "10%", y: "40%", align: "left" }
      },
      button: {
        text: "View Wildlife Tours",
        href: "/tour-packages/wildlife",
        position: { x: "10%", y: "50%", align: "left" }
      }
    },
    {
      src: "/culture/cnslide11.webp",
      alt: "Ceylon Naturalist tour guide showcasing Sri Lankan wildlife",
      heading: {
        text: "Expert Guided Tours",
        position: { x: "50%", y: "35%", align: "center" }
      },
      subheading: {
        text: "Journey with our passionate naturalist guides",
        position: { x: "50%", y: "45%", align: "center" }
      },
      button: {
        text: "Meet Our Guides",
        href: "/about-us",
        position: { x: "50%", y: "55%", align: "center" }
      }
    },
    {
      src: "/culture/cnslide22.webp",
      alt: "Beautiful Sri Lankan landscape with endemic birds",
      heading: {
        text: "Bird Watching Paradise",
        position: { x: "80%", y: "30%", align: "right" }
      },
      subheading: {
        text: "Spot over 400 species of resident and migratory birds",
        position: { x: "80%", y: "40%", align: "right" }
      },
      button: {
        text: "Bird Watching Tours",
        href: "/tour-packages/birding",
        position: { x: "80%", y: "50%", align: "right" }
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
            <Link href="/contact" aria-label="Contact Ceylon Naturalist">
              <button className="w-48 h-12 rounded-xl font-[Poppins] bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors">
                Contact us
              </button>
            </Link>
            <Link href="/tour-packages" aria-label="View our tour packages">
              <button className="w-48 h-12 rounded-xl bg-teal-700 font-[Poppins] text-white text-base hover:bg-teal-700 transition-colors">
                Tour packages
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