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

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Add padding-top to account for fixed navbar height */}
      <div className="pt-20"> {/* Adjust this value based on your navbar height */}
        <GalleryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="pt-7"> {/* Space between filter and gallery */}
          <ParallaxScrollSecond
            images={getFilteredImages()}
            className="gallery-grid"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
