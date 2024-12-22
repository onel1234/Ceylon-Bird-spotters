"use client";
import React from "react";
import Navbar from "./NavbarFn";
import HeroParallax from "./Heroprallax";
import DestinationsSection from "./destinations";
import TestimonialsSection from "./testimonials-animated";
import Footer from "./Footer";
import InstagramSection from "./instagramSection";
export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroParallax />
      <DestinationsSection />
      <TestimonialsSection />
      <InstagramSection/>
      <Footer />
    </div>
  );
}