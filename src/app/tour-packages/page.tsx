"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../NavbarFn";
import { ClientTabs } from "../Ui/ClientTabs";

type TourDay =  BaseTourItem & {
  day: number;
  location: string;
  image: string;
  pageRoute: string;
};

type SectionHeader = {
  type: 'section';
  title: string;
};
type BaseTourItem = {
  location: string;
  image: string;
  pageRoute: string;
};

type TourLocation = BaseTourItem & {
  type: 'location';
  number: number;
};

type TourItem = TourDay | TourLocation | SectionHeader;

interface TourPackageProps {
  title: string;
  description: string;
  details?: string;
  imageUrl: string;
  tourItems: TourItem[];
  fullWidthImage: string;
}

const TourDayCard: React.FC<{ item: TourItem }> = ({ item }) => {
  if ('type' in item && item.type === 'section') {
    return (
      <div className="col-span-full my-4">
        <h3 className="text-xl font-semibold text-gray-800 font-[Poppins] dark:text-white border-b pb-2">
          {item.title}
        </h3>
      </div>
    );
  }
  const getDisplayLabel = (item: TourDay | TourLocation) => {
    if ('type' in item && item.type === 'location') {
      return `Location ${item.number}`;
    }
    if ('day' in item) {
      return `Day ${item.day}`;
    }
    return '';
  };

  return (
    <Link href={item.pageRoute || '#'}>
      <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.location}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {getDisplayLabel(item)}
          </span>
          <p className="text-gray-900 font-[Poppins] dark:text-white font-medium">
            {item.location}
          </p>
        </div>
      </div>
    </Link>
  );
};

const TourPackage: React.FC<TourPackageProps> = ({
  title,
  description,
  details,
  imageUrl,
  tourItems,
  fullWidthImage,
}) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
    <div className="relative w-full">
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio container */}
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
          <h2 className="absolute bottom-6 left-6 text-3xl font-[Poppins] font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 font-[Poppins]  leading-relaxed">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-teal-700 font-[Poppins]  hover:bg-teal-700 text-white rounded-lg transition-colors"
        >
          Contact Us Now
        </Link>
      </div>

      <div className="space-y-6">
  <h3 className="text-2xl font-semibold text-gray-800 font-[Poppins] dark:text-white">
    {title === 'Tailor - made Holidays ' ? 'Destinations' : 'Main Tour'}
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {tourItems.map((item, index) => (
      <TourDayCard key={index} item={item} />
    ))}
  </div>
</div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 font-[Poppins] dark:text-white text-center">
          Map View
        </h3>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-full h-0 pb-[75%]">
            <Image
              src={fullWidthImage}
              alt={`${title} tour map`}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {details && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 font-[Poppins] dark:text-white">
            Additional Details
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {details}
          </p>
        </div>
      )}
    </div>
  </div>
);

const TOUR_DATA: Record<string, {
  title: string;
  imageUrl: string;
  description: string;
  details?: string;
  fullWidthImage: string;
  tourItems: TourItem[];
}> =  {
  mountain: {
    title: "Endemics, Migrants, and Big Game",
    imageUrl: "/culture/head1.jpg",
    description: `The main focus of this tour is to showcase 35 bird species endemics to Sri Lanka, along with winter migrants and subcontinental specialties. In Yala and Lunugamvehera National Parks, you’ll have the chance to encounter iconic wildlife such as the elusive Sri Lankan Leopard and the Sloth Bear. Udawalawe National Park, renowned for its large population of Asian Elephants, also serves as a reliable backup location to spot any dry-zone species you may have missed in Yala or Lunugamvehera.
With your consent, we offer a whale-watching extension on Day 14, giving you the opportunity to see the largest mammal ever to live on Earth—the Blue Whale—alongside other cetaceans in the tropical waters of the Indian Ocean.
This is an intensive birdwatching tour that provides excellent chances to observe Sri Lanka’s endemics. If you’re eager to experience the island’s rich biodiversity and breathtaking natural beauty.
"Let’s discover nature’s wonders together”,`,


    fullWidthImage: "/images/Tour1(1).png",
    tourItems: [
      {
        day: 1,
        location: "Arrival and transfer to Kitulgala",
        pageRoute: "/destinations/kitulgala",
        image: "/culture/arrival.webp",
      },
      {
        day: 2,
        location: "Kitulgala / Kelany Valley Forest Reserve",
        pageRoute: "/destinations/kitulgala",
        image: "/culture/kitulgala2.jpg",
      },
      {
        day: 3,
        location: "Nuwara Eliya / Victoria Park",
        pageRoute: "/destinations/victoria",
        image: "/images/nuwara-eliya.jpg",
      },
      {
        day: 4,
        location: "Horton Plains National Park",
        pageRoute: "/destinations/horton-plains",
        image: "/images/horton.jpg",
      },
      {
        day: 5,
        location: "Transfer to Tissamaharama",
        pageRoute: "/images/yal.jpg",
        image: "/images/tissamaharama.jpg",
      },
      {
        day: 6,
        location: "Yala National Park",
        pageRoute: "/images/yal.jpg",
        image: "/images/yal.jpg",
      },
      {
        day: 7,
        location: "Bundala National Park",
        pageRoute: "/destinations/bundala",
        image: "/wildlife/Flamingos (1).jpg",
      },
      {
        day: 8,
        location: "Lunugamvehera National Park",
        pageRoute: "/destinations/lunugamwehara",
        image: "/images/lunu.jpg",
      },
      {
        day: 9,
        location: "Transfer to Udawalawe and Udawalawe National Park",
        pageRoute: "/destinations/udawalawe",
        image: "/images/udaw.jpg",
      },
      {
        day: 10,
        location: "Transfer to Sinharaja",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/images/sin.jpg",
      },
      {
        day: 11,
        location: "Sinharaja Rain Forest",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/wildlife/Blue Magpie (1).jpg",
      },
      {
        day: 12,
        location: "Sinharaja Rain Forest",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/images/sin.jpg",
      },
      {
        day: 13,
        location: "Departure",
        pageRoute: "",
        image: "/images/dep1.jpg",
      },
      {
        type: 'section',
        title: "Whale Watching Extension"
      },
      {
        day: 14,
        location: "Transfer to Mirissa",
        pageRoute: "/destinations/mirissa",
        image: "/images/mirissa.jpg",
      },
      {
        day: 15,
        location: "Whale-watching excursion at Mirissa",
        pageRoute: "/destinations/mirissa",
        image: "/images/mi.jpg",
      },
      {
        day: 16,
        location: "Departure",
        pageRoute: "",
        image: "/images/dep1.jpg",
      },
    ],
  },
  coastal: {
    title: 'Big Game of Sri Lanka and Migratory Bird Watching in the North',

    imageUrl: "/images/Big Game.jpg",
description: `This tour is specially designed to explore the iconic wildlife of Sri Lanka, including the Sri Lankan Leopard and the Sloth Bear, in the ancient and legendary Wilpattu National Park, located in the northwestern region of the island.
You’ll also have the opportunity to witness the fascinating wintering birdlife at Mannar Island in northern Sri Lanka—one of the country’s most important sites for migratory birds.
To enhance the experience, the itinerary includes visits to key dry zone birding sites and the historic Sigiriya Rock Fortress, a UNESCO World Heritage Site known for its archaeological significance and birdlife.
This tour offers a rich blend of birdwatching and mammal encounters, ideal for those seeking to discover Sri Lanka's leopards and wintering birds in their natural habitats.
If you're curious about the natural wonders of Sri Lanka, let’s explore them together!`,
fullWidthImage: "/images/Tour2.png",
    tourItems: [
      {
        day: 1,
        location: "Arrival and transfer to Anawilundawa",
        pageRoute: "",
        image: "/culture/arrival.webp",
      },
      {
        day: 2,
        location: "Anawilundawa",
        pageRoute: "/destinations/anawilundawa",
        image: "/images/anawilundawa.jpg",
      },
      {
        day: 3,
        location: "Transfer to Wilpattu",
        pageRoute: "/destinations/wilpattu",
        image: "/images/wilpat.jpg",
      },
      {
        day: 4,
        location: "Wilpattu National Park",
        pageRoute: "/destinations/wilpattu",
        image: "/images/wilpat.jpg",
      },
     
      {
        day: 5,
        location: "Wilpattu National Park",
        pageRoute: "/destinations/wilpattu",
        image: "/images/wilpat.jpg",
      },
       {
        day: 6,
        location: "Transfer to mannar island",
        pageRoute: "/destinations/mannar",
        image: "/images/man.jpg",
      }, 
      {
        day: 7,
        location: "Wankalei Bird Sanctuary ",
        pageRoute: "",
        image: "/images/wan.jpg",
      },
       {
        day: 8,
        location: "Urumalei Point Sanctuary ",
        pageRoute: "",
        image: "/images/uru.jpg",
      }, 
      {
        day: 9,
        location: "Transfer to Sigiriya",
        pageRoute: "/destinations/sigiriya",
        image: "/images/sigiriya.jpg",
      },
      {
        day: 10,
        location: "Sigirya Sancuary",
        pageRoute: "/destinations/sigirya",
        image: "/images/sigiriya.jpg",
      },
      {
        day: 11,
        location: "Minneriya and Kaudulla National Park",
        pageRoute: "/destinations/minneriya",
        image: "/images/minneri.jpg",
      },
      {
        day: 12,
        location: "Depature",
        pageRoute: "",
        image: "/images/dep1.jpg",
      },
    ],
  },
  photography: {
    title: 'Photography Tour – Endemic Birds and Wildlife',

    imageUrl: "/images/Tour3.jpg",
    description:'This tour is specially designed for photography enthusiasts, focusing on the endemic bird species, mammals, and other unique wildlife of Sri Lanka. This is an exciting opportunity for bird and mammal watchers to capture unforgettable moments of the island’s rich biodiversity.',
   fullWidthImage: "/images/tour3.png",
   tourItems: [
    {
      day: 1,
      location: "Arrival and transfer to the hotel close to the airport",
      pageRoute: "",
      image: "/culture/arrival.webp",
    },
    {
      day: 2,
      location: "Transfer to Sigiriya",
      pageRoute: "/destinations/sigiriya",
      image: "/images/sigiriya.jpg",
    },
    {
      day: 3,
      location: "Sigiriya Sanctuary",
      pageRoute: "/destinations/sigiriya-sanctuary",
      image: "/images/sigiriya.jpg",
    },
    {
      day: 4,
      location: "Transfer to Nuwara Eliya",
      pageRoute: "/destinations/nuwara-eliya",
      image: "/images/nuwara-eliya.jpg",
    },
    {
      day: 5,
      location: "Horton Plains National Park and Victoria Park",
      pageRoute: "/destinations/horton-plains",
      image: "/images/horton.jpg",
    },
    {
      day: 6,
      location: "Surrey Bird Park and transfer to Tissamaharama",
      pageRoute: "/images/yal.jpg",
      image: "/images/tissamaharama.jpg",
    },
    {
      day: 7,
      location: "Yala National Park",
      pageRoute: "/images/yal.jpg",
      image: "/images/yal.jpg",
    },
    {
      day: 8,
      location: "Bundala National Park",
      pageRoute: "/destinations/bundala",
      image: "/wildlife/Flamingos (1).jpg",
    },
    {
      day: 9,
      location: "Lunugamvehera National Park",
      pageRoute: "/destinations/lunugamwehara",
      image: "/images/lunu.jpg",
    },
    {
      day: 10,
      location: "Transfer to Udawalawe",
      pageRoute: "/destinations/udawalawe",
      image: "/images/udaw.jpg",
    },
    {
      day: 11,
      location: "Udawalawe National Park",
      pageRoute: "/destinations/udawalawe-national-park",
      image: "/images/udaw.jpg",
    },
    {
      day: 12,
      location: "Transfer to Sinharaja",
      pageRoute: "/destinations/sinharaja",
      image: "/images/sin.jpg",
    },
    {
      day: 13,
      location: "Sinharaja Forest Reserve",
      pageRoute: "/destinations/sinharaja-forest",
      image: "/wildlife/Blue Magpie (1).jpg",
    },
    {
      day: 14,
      location: "Sinharaja Forest Reserve",
      pageRoute: "/destinations/sinharaja-forest",
      image: "/images/sin.jpg",
    },
    {
      day: 15,
      location: "Departure",
      pageRoute: "",
      image: "/images/dep1.jpg",
    },
    {
      type: "section",
      title: "Whale Watching Extension",
    },
    {
      day: 15,
      location: "Transfer to Mirissa",
      pageRoute: "/destinations/mirissa",
      image: "/images/mi.jpg",
    },
    {
      day: 16,
      location: "Whale-watching excursion at Mirissa",
      pageRoute: "/destinations/mirissa",
      image: "/images/mi.jpg",
    },
    {
      day: 17,
      location: "Departure",
      pageRoute: "",
      image: "/images/dep1.jpg",
    },
  ],
  
  
  },
  tailor: {
    title: 'Tailor - made Holidays ',
    imageUrl: "/images/Tour4.jpg",
    description: 'Explore your dream holiday in Sri Lanka with CeylonNaturalist! Choose your favorite destinations from our curated list below, and let us craft a personalized journey just for you',
    fullWidthImage: "/images/tour4.png",
    tourItems: [
      {
        type: "location",
        number: 1,
        location: "Sinharaja Forest Reserve",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/images/sin.jpg",
      },
      {
        type: "location",
        number: 2,
        location: "Kitulgala – Kelani Valley Forest Reserve",
        pageRoute: "/destinations/kitulgala",
        image: "/images/kitul.jpg",
      },
      {
        type: "location",
        number: 3,
        location: "Yala (Ruhunu) National Park",
        pageRoute: "/images/yal.jpg",
        image: "/images/yal.jpg",
      },
      {
        type: "location",
        number: 4,
        location: "Udawalawe National Park",
        pageRoute: "/destinations/udawalawe",
        image: "/images/udaw.jpg",
      },
      {
        type: "location",
        number: 5,
        location: "Bundala National Park",
        pageRoute: "/destinations/bundala",
        image: "/wildlife/Flamingos (1).jpg",
      },
      {
        type: "location",
        number: 6,
        location: "Lunugamvehera National Park",
        pageRoute: "/destinations/lunugamwehara",
        image: "/images/lunu.jpg",
      },
      {
        type: "location",
        number: 7,
        location: "Minneriya National Park",
        pageRoute: "/destinations/minneriya",
        image: "/images/minneri.jpg",
      },
      {
        type: "location",
        number: 8,
        location: "Kaudulla National Park",
        pageRoute: "",
        image: "/wildlife/Elephant (1).jpg",
      },
      {
        type: "location",
        number: 9,
        location: "Mannar Island",
        pageRoute: "/destinations/mannar",
        image: "/images/man.jpg",
      },
      {
        type: "location",
        number: 10,
        location: "Anawilundawa Sanctuary",
        pageRoute: "/destinations/anawilundawa",
        image: "/images/anawilundawa.jpg",
      },
      {
        type: "location",
        number: 11,
        location: "Nuwara Eliya",
        pageRoute: "/destinations/nuwara-eliya",
        image: "/images/nuwara-eliya.jpg",
      },
      {
        type: "location",
        number: 12,
        location: "Horton Plains National Park",
        pageRoute: "/destinations/horton-plains",
        image: "/images/horton.jpg",
      },
      {
        type: "location",
        number: 13,
        location: "Victoria Park",
        pageRoute: "/destinations/victoria-park",
        image: "/wildlife/vic1.jpg",
      },
      {
        type: "location",
        number: 14,
        location: "The sea off Mirissa",
        pageRoute: "/destinations/mirissa",
        image: "/images/mirissa.jpg",
      },
      {
        type: "location",
        number: 15,
        location: "Wilpattu National Park",
        pageRoute: "/destinations/wilpattu",
        image: "/wildlife/Leopard (4).jpg",
      },
      {
        type: "location",
        number: 16,
        location: "Kandy",
        pageRoute: "/destinations/kandy",
        image: "/images/kandy.jpg",
      },
      {
        type: "location",
        number: 17,
        location: "Sigiriya Sanctuary",
        pageRoute: "/destinations/sigiriya-sanctuary",
        image: "/images/sigiriya.jpg",
      },
      {
        type: "location",
        number: 18,
        location: "Anuradhapura Sacred City",
        pageRoute: "/destinations/anuradhapura",
        image: "/culture/anu1.webp",
      },
      {
        type: "location",
        number: 19,
        location: "Polonnaruwa Sacred City",
        pageRoute: "/destinations/polonnaruwa",
        image: "/images/polonnaruwa.jpg",
      },
      {
        type: "location",
        number: 20,
        location: "Dambulla",
        pageRoute: "/destinations/dambulla",
        image: "/images/dambulla.jpg",
      },
      {
        type: "location",
        number: 21,
        location: "Galle",
        pageRoute: "/destinations/galle",
        image: "/images/galle.jpg",
      },
    ],
    
  },
};

const TourPackages: React.FC = () => {
  const tabData = Object.entries(TOUR_DATA).map(([key, data]) => ({
    title: data.title,
    value: key,
    content: (
      <div id={key}>
        <TourPackage
          key={key}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
          tourItems={data.tourItems}
          fullWidthImage={data.fullWidthImage}
          details={data.details}
        />
      </div>
    ),
  }));

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-40">
        <h1 className="text-4xl font-bold text-center font-[Poppins] mb-12 text-gray-800 dark:text-white">
          Discover Our Tour Packages
        </h1>
        <ClientTabs
          tabs={tabData}
          containerClassName="bg-gray-50 dark:bg-gray-900 font-[Poppins] p-6 rounded-xl shadow-md"
          activeTabClassName="bg-teal-700 font-[Poppins] text-white"
          tabClassName="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 font-[Poppins] transition-colors"
          contentClassName="mt-8"
        />
      </div>
    </>
  );
};

export default TourPackages;