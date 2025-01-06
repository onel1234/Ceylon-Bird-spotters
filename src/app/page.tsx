"use client";
import React from "react";
import Navbar from "./NavbarFn";
import HeroParallax from "./Heroprallax";
import DestinationsSection from "./destinations/page";
import TestimonialsSection from "./testimonials-animated";
import Footer from "./Footer";
import InstagramSection from "./instagramSection";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+94722062989"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroParallax />
      <WhatsAppButton />
      <DestinationsSection />
      <TestimonialsSection />
      <InstagramSection/>
      <Footer />
    </div>
  );
}