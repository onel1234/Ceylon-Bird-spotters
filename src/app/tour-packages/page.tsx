"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../NavbarFn";
import { Tabs } from "../Ui/Tabs";

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
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white border-b pb-2">
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
          <p className="text-gray-900 dark:text-white font-medium">
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
          <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-8">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Contact Us Now
        </Link>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Main Tour
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourItems.map((item, index) => (
            <TourDayCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
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
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
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
    title: "Endemics- Migrants and Big Game",
    imageUrl: "/culture/head1.jpg",
    description: `The main focus of this tour is to hopefully show you all 35 birds endemic to the island, winter migrants, and subcontinent specialties.
In Yala and Lunugamvehera National Parks, you can try the most demanding Sri Lankan Leopard and Sloth bear. Udawalawe National Park is well-known for Asian Elephants. Additionally, if you missed any dry zone species in Yala or Lunugamvehera National Parks, Udawalawe is a good backup site to catch up with them.

At your consent, you will have the opportunity to get the whale-watching extension on day 14th and try your luck to see the largest mammal – the Blue Whale – ever to have lived on this planet and the other cetacean species found in the tropical waters of the Indian Ocean.

This is an intensive birdwatching tour and contains a big opportunity for endemics. If you are interested in the wider natural beauty of Sri Lanka, let's discover nature's wonders together.`,

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
        image: "/images/hortonplains.jpg",
      },
      {
        day: 5,
        location: "Transfer to Tissamaharama",
        pageRoute: "/destinations/yala",
        image: "/images/tissamaharama.jpg",
      },
      {
        day: 6,
        location: "Yala National Park",
        pageRoute: "/destinations/yala",
        image: "/images/yala.jpg",
      },
      {
        day: 7,
        location: "Bundala National Park",
        pageRoute: "/destinations/bundala",
        image: "/images/bundala.jpg",
      },
      {
        day: 8,
        location: "Lunugamvehera National Park",
        pageRoute: "/destinations/lunugamwehara",
        image: "/images/lunugamvehera.jpg",
      },
      {
        day: 9,
        location: "Transfer to Udawalawe and Udawalawe National Park",
        pageRoute: "/destinations/udawalawe",
        image: "/images/udawala.jpg",
      },
      {
        day: 10,
        location: "Transfer to Sinharaja",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/images/sinharaja.jpg",
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
        image: "/images/sinha1.jpg",
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
        image: "/wildlife/mirissa3.jpg",
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
    title: 'Big Games of Sri Lanka And Migratory watch in the North',

    imageUrl: "/images/Big Game.jpg",
    description: "This tour is mainly designed for trying the Sri Lankan Leopard and the Sloth Bear in the largest and the oldest national park – “Wilpattu” in the North West of Sri Lanka and, to witness the fascinating wintering bird life in Mannar Island in the north of Sri Lanka. In addition, visits to places where dry zone bird species can be observed and a visit to a Sigiriya ancient rock fortress – a world-famous archeological site where a number of interesting birds can be observed – have been added to the tour add an extra dimension. This is an exciting bird and mammal-watching tour and contains a big opportunity for Sri Lankan Leopard and Northern wintering birds. If you are interested in the wider natural history of Sri Lanka Let’s Discover Nature’s Wonders Together.",

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
        pageRoute: "",
        image: "/wildlife/Leopard (5).jpg",
      },
      {
        day: 4,
        location: "Wilpattu National Park",
        pageRoute: "",
        image: "/wildlife/Leopard (7).jpg",
      },
     
      {
        day: 5,
        location: "Wilpattu National Park",
        pageRoute: "",
        image: "/wildlife/Leopard (15).jpg",
      },
       {
        day: 6,
        location: "Transfer to mannar island",
        pageRoute: "/destinations/mannar",
        image: "/images/mannar.jpg",
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
        image: "/images/minneriya.jpg",
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
    title: 'Photography tour Endemic birds and Wildlife',

    imageUrl: "/images/Tour3.jpg",
    description:'This tour is mainly focused on the photography opportunities of the Endemic bird species + mammals and other wildlife of Sri Lanka.This is an exciting bird and mammal-watching tour and contains a big opportunity for capturing memorable moments of the wonderful wildlife of Sri Lanka.',
   
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
      image: "/images/hortonplains.jpg",
    },
    {
      day: 6,
      location: "Surrey Bird Park and transfer to Tissamaharama",
      pageRoute: "/destinations/yala",
      image: "/images/tissamaharama.jpg",
    },
    {
      day: 7,
      location: "Yala National Park",
      pageRoute: "/destinations/yala",
      image: "/images/yala.jpg",
    },
    {
      day: 8,
      location: "Bundala National Park",
      pageRoute: "/destinations/bundala",
      image: "/images/bundala.jpg",
    },
    {
      day: 9,
      location: "Lunugamvehera National Park",
      pageRoute: "/destinations/lunugamwehara",
      image: "/images/lunugamvehera.jpg",
    },
    {
      day: 10,
      location: "Transfer to Udawalawe",
      pageRoute: "/destinations/udawalawe",
      image: "/images/udawala.jpg",
    },
    {
      day: 11,
      location: "Udawalawe National Park",
      pageRoute: "/destinations/udawalawe-national-park",
      image: "/images/udawala.jpg",
    },
    {
      day: 12,
      location: "Transfer to Sinharaja",
      pageRoute: "/destinations/sinharaja",
      image: "/images/sinharaja.jpg",
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
      image: "/images/sinha1.jpg",
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
      image: "/images/mirissa.jpg",
    },
    {
      day: 16,
      location: "Whale-watching excursion at Mirissa",
      pageRoute: "/destinations/mirissa",
      image: "/wildlife/mirissa3.jpg",
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
    title: 'Tailor-Made Expiditions',
    imageUrl: "/images/Tour4.jpg",
    description: 'Create your perfect wildlife adventure...',
    fullWidthImage: "/images/tour4.png",
    tourItems: [
      {
        type: "location",
        number: 1,
        location: "Sinharaja Forest Reserve",
        pageRoute: "/destinations/sinharaja-forest",
        image: "/images/sinharaja.jpg",
      },
      {
        type: "location",
        number: 2,
        location: "Kitulgala – Kelani Valley Forest Reserve",
        pageRoute: "/destinations/kitulgala",
        image: "/images/kitulgala.jpg",
      },
      {
        type: "location",
        number: 3,
        location: "Yala (Ruhunu) National Park",
        pageRoute: "/destinations/yala",
        image: "/images/yala.jpg",
      },
      {
        type: "location",
        number: 4,
        location: "Udawalawe National Park",
        pageRoute: "/destinations/udawalawe",
        image: "/images/udawala.jpg",
      },
      {
        type: "location",
        number: 5,
        location: "Bundala National Park",
        pageRoute: "/destinations/bundala",
        image: "/images/bundala.jpg",
      },
      {
        type: "location",
        number: 6,
        location: "Lunugamvehera National Park",
        pageRoute: "/destinations/lunugamwehara",
        image: "/images/lunugamvehera.jpg",
      },
      {
        type: "location",
        number: 7,
        location: "Minneriya National Park",
        pageRoute: "/destinations/minneriya",
        image: "/images/minneriya.jpg",
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
        image: "/images/mannar.jpg",
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
        image: "/images/hortonplains.jpg",
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
        pageRoute: "",
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
      <TourPackage
        key={key}
        title={data.title}
        description={data.description}
        imageUrl={data.imageUrl}
        tourItems={data.tourItems}
        fullWidthImage={data.fullWidthImage}
        details={data.details}
      />
    ),
  }));

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-40">
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