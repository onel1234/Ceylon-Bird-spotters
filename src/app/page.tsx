"use client";
import React, { lazy, Suspense, useEffect } from "react";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Head from "next/head";

const Navbar = lazy(() => import("./NavbarFn"));
const HeroParallax = lazy(() => import(/* webpackPrefetch: true */ "./Heroprallax"));
const DestinationsSection = lazy(() => import("./destinations/page"));
const TestimonialsSection = lazy(() => import("./testimonials-animated"));
const InstagramSection = lazy(() => import("./instagramSection"));
const Footer = lazy(() => import("./Footer"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+94722062989"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
       <IconBrandWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
};

// Images to preload
const heroImages = [
  "/culture/slide2.webp",
  "/culture/cnslide11.webp",
  "/culture/cnslide22.webp",
];

export default function Page() {
  // Preload hero images
  useEffect(() => {
    heroImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  return (
    <div>
      <Head>
        {/* Preload critical images */}
        {heroImages.map((imageSrc) => (
          <link
            key={imageSrc}
            rel="preload"
            href={imageSrc}
            as="image"
            type="image/webp"
          />
        ))}
      </Head>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroParallax />
      </Suspense>
      <WhatsAppButton />
      <Suspense fallback={<LoadingSpinner />}>
        <DestinationsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <InstagramSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}