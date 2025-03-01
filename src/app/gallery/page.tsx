"use client";
import React, { useState } from 'react';
import { ParallaxScrollSecond } from "../Ui/Galleryscroll";
import GalleryFilter from '../components/galleryfilter';
import Navbar from "../NavbarFn";
import Footer from "../Footer";
import { CategoryType, ImageDetails } from '../types';
import { amphibianImages } from '../data/amphibians';
import { mammalImages } from '../data/mammals';
import { butterflyImages } from '../data/butterflies';
import { birdImages } from '../data/birds';
import { endemicBirdImages } from '../data/endemicbirds';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const getAllImages = (): ImageDetails[] => {
    return [
      ...amphibianImages,
      ...mammalImages,
      ...butterflyImages,
      ...birdImages,
      ...endemicBirdImages
    ];
  };

  const getFilteredImages = (): ImageDetails[] => {
    switch (activeCategory) {
      case 'amphibians':
        return amphibianImages;
      case 'mammals':
        return mammalImages;
      case 'butterfly':
        return butterflyImages;
      case 'birds':
        return birdImages;
      case 'endemic-birds':
        return endemicBirdImages;
      default:
        return getAllImages();
    }
  };

  const getCategoryTitle = (): string => {
    switch (activeCategory) {
      case 'amphibians':
        return 'Amphibian Collection';
      case 'mammals':
        return 'Mammal Collection';
      case 'butterfly':
        return 'Butterfly Collection';
      case 'birds':
        return 'Bird Collection';
      case 'endemic-birds':
        return 'Endemic Bird Collection';
      default:
        return 'Complete Wildlife Collection';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-32 bg-gray-50">
        <div className="max-w-full px-4 mx-auto">
          <div className="text-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-4xl font-bold mb-4"
              >
                {getCategoryTitle()}
              </motion.h1>
            </AnimatePresence>
            <motion.div
              className="h-1 w-24 bg-blue-600 mx-auto mb-6"
              layoutId="underline"
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Click</span>
              <Filter className="inline-block w-5 h-5" />
              <span>to filter images</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <GalleryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="pt-7 w-full overflow-hidden">
            <div className="max-w-[95vw] mx-auto">
              <ParallaxScrollSecond
                images={getFilteredImages()}
                className="gallery-grid"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;