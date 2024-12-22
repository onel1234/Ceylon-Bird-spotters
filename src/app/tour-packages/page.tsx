"use client";
import React from "react";
import { Tabs } from "../Ui/Tabs";
import Image from "next/image";
import Navbar from "../NavbarFn";

// Define interfaces for the component props
interface TourPackageProps {
  title: string;
  price: string;
  duration: string;
  highlights: string[];
  description: string;
  imageUrl: string;
}

const TourPackage: React.FC<TourPackageProps> = ({ 
  title, 
  price, 
  duration, 
  highlights, 
  description, 
  imageUrl 
}) => (
  <div className="flex flex-col md:flex-row gap-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <div className="w-full md:w-1/2">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg object-cover w-full h-[400px]"
      />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">{price}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-600 dark:text-gray-300">Duration:</span>
        <span className="font-medium text-gray-800 dark:text-white">{duration}</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Highlights</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          {highlights.map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        Book Now
      </button>
    </div>
  </div>
);

interface TabData {
  title: string;
  value: string;
  content: React.ReactNode;
}

const TourPackages: React.FC = () => {
  const tabData: TabData[] = [
    {
      title: "Mountain Explorer",
      value: "mountain",
      content: (
        <TourPackage
          title="Mountain Explorer Package"
          price="$2,499"
          duration="7 Days / 6 Nights"
          imageUrl="/images/cbs1.jpg"
          highlights={[
            "Guided hiking through pristine alpine trails",
            "Luxury mountain lodge accommodation",
            "Professional photography sessions",
            "Local cuisine experiences",
          ]}
          description="Embark on an unforgettable journey through majestic mountain landscapes with our Mountain Explorer Package. This carefully crafted adventure combines thrilling outdoor activities with comfortable accommodations and authentic cultural experiences. Trek through ancient forests, witness breathtaking sunrises over snow-capped peaks, and immerse yourself in local mountain communities. Our experienced guides ensure your safety while sharing their deep knowledge of the region's flora, fauna, and geology. Each evening, retire to our carefully selected mountain lodges where you can relax in comfort while enjoying gourmet local cuisine. This package is perfect for both experienced hikers and newcomers to mountain adventures, with customizable trail options to suit your skill level."
        />
      ),
    },
    {
      title: "Coastal Paradise",
      value: "coastal",
      content: (
        <TourPackage
          title="Coastal Paradise Package"
          price="$3,299"
          duration="10 Days / 9 Nights"
          imageUrl="/images/cb2.jpg" // Changed from mahinda.jpg
          highlights={[
            "Private beach access",
            "Sunset sailing adventures",
            "Snorkeling with marine life",
            "Beachfront villa accommodation",
          ]}
          description="Discover the ultimate beach getaway with our Coastal Paradise Package. Experience the perfect blend of relaxation and adventure along pristine coastlines. Wake up to the sound of gentle waves in your luxury beachfront villa, spend your days exploring vibrant coral reefs, and unwind with sunset sailing cruises. Our package includes guided snorkeling tours where you'll encounter diverse marine life in their natural habitat. Expert local guides share their knowledge of coastal ecosystems while ensuring your comfort and safety. Evenings feature fresh seafood dining experiences and cultural performances under the stars. This package is ideal for those seeking both tranquility and marine adventures, with activities suitable for all experience levels."
        />
      ),
    },
    {
      title: "Cultural Heritage",
      value: "cultural",
      content: (
        <TourPackage
          title="Cultural Heritage Package"
          price="$2,799"
          duration="8 Days / 7 Nights"
          imageUrl="/images/sajith.jpg"
          highlights={[
            "Traditional craft workshops",
            "Historical site visits",
            "Local home cooking classes",
            "Festival celebrations",
          ]}
          description="Immerse yourself in rich cultural traditions with our Cultural Heritage Package. This thoughtfully designed tour takes you through the heart of local communities, where ancient traditions meet modern life. Participate in authentic craft workshops led by master artisans, explore UNESCO World Heritage sites with expert historians, and learn traditional cooking methods from local families. Stay in carefully selected boutique hotels that reflect the region's architectural heritage while providing modern comforts. Experience traditional festivals, music, and dance performances that bring history to life. This package offers a perfect balance of guided experiences and free time to explore, ensuring a deep connection with local culture and traditions."
        />
      ),
    },
    {
      title: "Adventure Safari",
      value: "safari",
      content: (
        <TourPackage
          title="Adventure Safari Package"
          price="$3,999"
          duration="12 Days / 11 Nights"
          imageUrl="/images/cb3.jpg"
          highlights={[
            "Wildlife photography tours",
            "Luxury tented camps",
            "Expert naturalist guides",
            "Bush breakfast experiences",
          ]}
          description="Experience the thrill of the wild with our Adventure Safari Package. Journey through diverse ecosystems where you'll encounter magnificent wildlife in their natural habitat. Stay in exclusive tented camps that combine authentic safari atmosphere with modern luxury. Our expert naturalist guides lead daily game drives, sharing their extensive knowledge of local wildlife, tracking techniques, and conservation efforts. Enjoy unique experiences like bush breakfasts with panoramic savanna views and evening storytelling around the campfire. This package includes specialized photography sessions during optimal wildlife viewing hours, comfortable transportation in custom safari vehicles, and all-inclusive luxury accommodation. Perfect for nature enthusiasts and adventure seekers looking for an immersive wildlife experience."
        />
      ),
    },
  
    // ... rest of the tabData remains the same
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Discover Our Tour Packages
        </h1>
        <Tabs
          tabs={tabData}
          containerClassName="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
          activeTabClassName="bg-blue-600 text-white"
          tabClassName="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          contentClassName="mt-8"
        />
      </div>
    </>
  );
};

export default TourPackages;