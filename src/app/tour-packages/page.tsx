"use client";
import React from "react";
import { Tabs } from "../Ui/Tabs";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../NavbarFn";

interface ItineraryDay {
  day: number;
  location: string;
  pageRoute: string;
}

interface TourPackageProps {
  title: string;
  description: string;
  imageUrl: string;
  itinerary?: ItineraryDay[];
}

const TourPackage: React.FC<TourPackageProps> = ({ 
  title, 
  description, 
  imageUrl,
  itinerary = []
}) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
    {/* Cover Image Container */}
    <div className="relative w-full h-[300px]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
        <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
          {title}
        </h2>
      </div>
    </div>

    {/* Content Container */}
    <div className="flex flex-col p-6 gap-8">
      {/* Description and Book Now */}
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <Link 
          href="/booking"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Book Now
        </Link>
      </div>

      {/* Main Tour Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Main Tour
        </h3>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {/* Grid Section */}
          <div className="w-full md:w-[35%] grid grid-cols-2 sm:grid-cols-3 gap-4">
            {itinerary.map((day) => (
              <Link
                key={day.day}
                href={day.pageRoute}
                className="block p-4 bg-blue-100 hover:bg-blue-200 text-center text-blue-800 rounded-lg transition-colors"
              >
                <div className="text-lg font-semibold">Day {day.day}</div>
                <div className="text-sm">{day.location}</div>
              </Link>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[65%] h-[1200px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src="/culture/tour1.jpg" // Replace with the actual image URL
              alt="Tour Highlights"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TOUR_DATA = {
  mountain: {
    title: "Big Games of Sri Lanka and migratory watch in the North",
    imageUrl: "/wildlife/tour1.jpg",
    description: "This tour is mainly designed for trying the Sri Lankan Leopard and the Sloth Bear in the largest and the oldest national park – “Wilpattu” in the North West of Sri Lanka and, to witness the fascinating wintering bird life in Mannar Island in the north of Sri Lanka. Additionally, the dry zone bird species and the Sigiriya ancient rock fortress – the world-famous archaeological site also been put together to add a further dimension to the itinerary. This is an exciting bird and mammal-watching tour and contains a big opportunity for Sri Lankan Leopard and Northern wintering birds. If you are interested in the wider natural history of Sri Lanka Let’s Discover Nature’s Wonders Together.",
    itinerary: [
      { day: 1, location: "Kandy", pageRoute: "/destinations/kandy" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
      { day: 2, location: "Nuwara Eliya", pageRoute: "/destinations/nuwara-eliya" },
    ]
  },
  coastal: {
    title: "Coastal Paradise Package",
    imageUrl: "/images/cb2.jpg",
    description: "Discover the ultimate beach getaway along Sri Lanka's pristine coastlines. Experience the perfect blend of relaxation and adventure with pristine beaches and vibrant marine life.",
    itinerary: [
      { day: 1, location: "Galle", pageRoute: "/destinations/galle" },
      { day: 2, location: "Mirissa", pageRoute: "/destinations/mirissa" },
    ]
  },
  cultural: {
    title: "Cultural Heritage Package",
    imageUrl: "/images/sajith.jpg",
    description: "Immerse yourself in Sri Lanka's rich cultural heritage. Explore ancient temples, traditional villages, and historical sites while experiencing authentic local customs and traditions.",
    itinerary: [
      { day: 1, location: "Anuradhapura", pageRoute: "/destinations/anuradhapura" },
      { day: 2, location: "Polonnaruwa", pageRoute: "/destinations/polonnaruwa" },
    ]
  },
  safari: {
    title: "Adventure Safari Package",
    imageUrl: "/images/cb3.jpg",
    description: "Experience the thrill of wildlife in Sri Lanka's national parks. Encounter elephants, leopards, and exotic birds in their natural habitat while staying in comfortable eco-friendly accommodations.",
    itinerary: [
      { day: 1, location: "Yala", pageRoute: "/destinations/yala" },
      { day: 2, location: "Udawalawe", pageRoute: "/destinations/udawalawe" },
    ]
  }
} as const;

const TourPackages: React.FC = () => {
  const tabData = Object.entries(TOUR_DATA).map(([key, data]) => ({
    title: data.title,
    value: key,
    content: (
      <TourPackage
        key={key}
        title={data.title}
        description={data.description}
        imageUrl={data.imageUrl}
        itinerary={data.itinerary}
      />
    ),
  }));

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
