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
              <button className="w-48 h-12 rounded-xl font-[Poppins] bg-teal-700 text-white text-base hover:bg-teal-700 transition-colors">
                Contact us
              </button>
            </Link>
            <Link href="/tour-packages" aria-label="View our tour packages">
              <button className="w-48 h-12 rounded-xl bg-teal-700 font-[Poppins]  text-white text-base hover:bg-teal-700 transition-colors">
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