/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, Mountain, Bird, Camera } from 'lucide-react';
import Image from 'next/image';
import Footer from "../Footer";
import Navbar from "../NavbarFn";
import DestinationsSection from '../destinations/page';

const SriLankaShowcase = () => {
  return (
    <>
      <Navbar />

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-72 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dfxolekjs/image/upload/v1740240119/sunrise-4823732_pvnjpd.jpg"
            alt="Sri Lanka Landscape"
            width={1400}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <h1 className="absolute text-6xl font-bold text-white">Sri Lanka</h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <h2 className="text-3xl font-semibold text-black mb-8">A Biodiversity Haven</h2>
          <p className="text-black leading-relaxed mb-8 text-lg">
            Sri Lanka, an enchanting tropical gem in the heart of the Indian Ocean, stands as a testament to the splendors of biodiversity. Recognized among the 36 biodiversity hotspots on our planet, alongside India's Western Ghats, this island nation spans a mere 65,610 km² of land yet cradles an astonishing number of bird species, constituting approximately 5% of the world's avian diversity.
          </p>
          
          <h3 className="text-2xl font-semibold text-black mb-6">Migratory Gateway</h3>
          <p className="text-black leading-relaxed mb-8 text-lg">
            Nestled at the base of the Central Asian Flyway, Sri Lanka serves as the final destination for about 250 migratory bird species originating from the breeding grounds expanding from Northeast Europe to the Russian Far East, coursing through the vast Central Asian plains and navigating the formidable Himalayan barrier.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-6">Rich Natural Heritage</h3>
          <p className="text-black leading-relaxed mb-12 text-lg">
            Sri Lanka has earned the title of the most species-concentrated country in the whole of the Asian region. As illustrated by Sri Lanka's National Red List (2012), it reveals the presence of 748 evaluated vertebrates, including 125 mammals, 211 reptiles, and 95 freshwater fish species, as well as 1,492 invertebrates.
          </p>
        </motion.div>

        {/* Image Grid - Smaller and More Subtle */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-48 overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1740240115/srilanka_ke3vob.jpg"
              alt="Sri Lanka Wildlife"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-48 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1740240115/srilanka2_ks1l4j.jpg"
              alt="Sri Lanka Beaches"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-48 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1740240114/srilnaka3_g0jpvk.jpg"
              alt="Sri Lanka Culture"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Additional Text Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <h3 className="text-2xl font-semibold text-black mb-6">Cultural Legacy</h3>
          <p className="text-black leading-relaxed mb-8 text-lg">
            Sri Lanka proudly boasts a documented history that spans an impressive 3,000 years. The rich tapestry of the country's history, culture, and civilization is intricately woven around Buddhism, which arrived on the island in the 3rd century BCE. The ancient kingdoms with monumental structures like towering Dagobas, and expansive reservoirs and tanks, showcasing advanced irrigation technologies, stand as silent testaments to the island's unparalleled heritage.
          </p>
          
          <h3 className="text-2xl font-semibold text-black mb-6">Natural Paradise</h3>
          <p className="text-black leading-relaxed mb-8 text-lg">
            Sri Lanka is a breathtaking mosaic, a coalescence of golden beaches, verdant forests, majestic mountains, and sprawling plateaus. Among these diverse landscapes, the iconic tea gardens hold a special place. Introduced to the country by British planters in the 1800s, Ceylon tea has rightfully earned its reputation as the finest in the world.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Bird className="w-8 h-8 text-gray-700 mb-2" />
            <p className="text-2xl font-bold text-black">522</p>
            <p className="text-sm text-gray-600">Bird Species</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Mountain className="w-8 h-8 text-gray-700 mb-2" />
            <p className="text-2xl font-bold text-black">2500m</p>
            <p className="text-sm text-gray-600">Max Elevation</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Palmtree className="w-8 h-8 text-gray-700 mb-2" />
            <p className="text-2xl font-bold text-black">3,154</p>
            <p className="text-sm text-gray-600">Flowering Plants</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Camera className="w-8 h-8 text-gray-700 mb-2" />
            <p className="text-2xl font-bold text-black">3000+</p>
            <p className="text-sm text-gray-600">Years of History</p>
          </div>
        </motion.div>
      </div>
      <div>
      <DestinationsSection />
      </div>

      {/* Footer */}
      <Footer />
      
      </div>
      </>
  );
};

export default SriLankaShowcase;