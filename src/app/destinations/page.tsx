/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


interface Location {
  name: string;
  description: string;
  imageUrl: string;
  path: string; // Replacing 'path' with 'path' for static routing
}

interface DestinationCardProps {
  title: string;
  locations: Location[];
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, locations }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <h2 className="absolute bottom-0 left-0 p-6 text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location: Location, index: number) => (
            <Link href={location.path} key={location.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={location.imageUrl}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {location.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const DestinationsSection: React.FC = () => {
  const wildlifeDestinations: Location[] = [
    { 
      name: "Sinharaja Forest", 
      description: "A UNESCO World Heritage site, Sinharaja Forest Reserve is a verdant haven teeming with endemic flora and fauna, perfect for eco-enthusiasts.",
      imageUrl: "/images/sinharaja.jpg",
      path:'destinations/sinharaja-forest',
    },
    { 
      name: "Kitulgala-Kelani Valley Forest", 
      description: "Famous for white-water rafting and lush greenery, Kitulgala offers a thrilling escape into nature's embrace.",
      imageUrl: "/images/kitulgala.jpg",
      path: 'destinations/kitulgala',
    },
    { 
      name: "Mirissa", 
      description: "Renowned for whale watching and pristine beaches, Mirissa is a coastal paradise waiting to be explored.",
      imageUrl: "/images/mirissa.jpg",
      path: 'destinations/mirissa',
    },
    { 
      name: "Yala National Park", 
      description: "Home to the elusive leopard and diverse wildlife, Yala offers an unparalleled safari experience.",
      imageUrl: "/images/yala.jpg",
      path: 'destinations/yala',
    },
    { 
      name: "Victoria National Park", 
      description: "This scenic haven is perfect for hiking and bird watching, with breathtaking views of lush landscapes.",
      imageUrl: "/images/victoria.jpg",
      path: 'destinations/victoria',
    },
    { 
      name: "Udawalawe National Park", 
      description: "Renowned for its large elephant population, Udawalawe is a must-visit for wildlife enthusiasts.",
      imageUrl: "/images/udawala.jpg",
      path: 'destinations/udawalawe',
    },
    { 
      name: "Bundala National Park", 
      description: "A Ramsar Wetland, Bundala is a paradise for bird watchers with its vibrant avian diversity.",
      imageUrl: "/images/bundala.jpg",
      path: 'destinations/bundala',
    },
    { 
      name: "Lunugamwehera National Park", 
      description: "A tranquil sanctuary blending forests and savannahs, Lunugamwehera is perfect for those seeking solitude amidst nature.",
      imageUrl: "/images/lunugamvehera.jpg",
      path: 'destinations/lunugamwehara',
    },
    { 
      name: "Minneriya National Park", 
      description: "Witness the incredible 'Gathering' of elephants at Minneriya, a spectacle like no other.",
      imageUrl: "/images/minneriya.jpg",
      path: 'destinations/minneriya',
    },
    { 
      name: "Mannar Island", 
      description: "A hidden gem known for its pristine beaches, migratory birds, and rich cultural history.",
      imageUrl: "/images/mannar.jpg",
      path: 'destinations/mannar',
    },
    { 
      name: "Anawilundawa Sanctuary", 
      description: "This Ramsar Wetland is a tranquil retreat, ideal for bird watching and immersing in serene wetlands.",
      imageUrl: "/images/anawilundawa.jpg",
      path: 'destinations/anawilundawa',
    },
    
    { 
      name: "Horton Plains National Park", 
      description: "An eco-tourist's dream, Horton Plains features misty grasslands, dense forests, and the famous World's End viewpoint.",
      imageUrl: "/images/hortonplains.jpg",
      path:'destinations/horton-plains',
    }
  ];

  const culturalDestinations: Location[] = [
    { 
      name: "Kandy", 
      description: "Home to the Temple of the Tooth, Kandy is the cultural heart of Sri Lanka, steeped in history and spirituality.",
      imageUrl: "/images/kandy.jpg",
      path: 'destinations/kandy',
    },
    { 
      name: "Sigiriya", 
      description: "Rising majestically above the plains, Sigiriya is an ancient rock fortress with stunning frescoes and breathtaking views.",
      imageUrl: "/images/sigiriya.jpg",
      path: 'destinations/sigiriya',
    },
    { 
      name: "Anuradhapura", 
      description: "A UNESCO World Heritage city, Anuradhapura boasts ancient stupas, ruins, and the sacred Sri Maha Bodhi tree.",
      imageUrl: "/images/anuraphapura.jpg",
      path: 'destinations/anuradhapura',
    },
    { 
      name: "Nuwara Eliya", 
      description: "Known as 'Little England,' Nuwara Eliya charms visitors with its cool climate, lush tea estates, and colonial architecture.",
      imageUrl: "/images/nuwara-eliya.jpg",
      path: 'destinations/nuwara-eliya',
    },
    { 
      name: "Polonnaruwa", 
      description: "Step back in time at Polonnaruwa, an ancient capital featuring well-preserved ruins and exquisite stone carvings.",
      imageUrl: "/images/polonnaruwa.jpg",
      path: 'destinations/polonnaruwa',
    },
    { 
      name: "Dambulla", 
      description: "Explore the stunning cave temples of Dambulla, adorned with intricate murals and Buddha statues.",
      imageUrl: "/images/dambulla.jpg",
      path: 'destinations/dambulla',
    },
    { 
      name: "Galle", 
      description: "Discover the charm of Galle Fort, a UNESCO World Heritage site blending colonial architecture with a coastal vibe.",
      imageUrl: "/images/galle.jpg",
      path: 'destinations/galle',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Explore Our Destinations
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the world's most remarkable wildlife sanctuaries and cultural heritage sites.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DestinationCard title="Wildlife Destinations" locations={wildlifeDestinations} />
        <DestinationCard title="Cultural Destinations" locations={culturalDestinations} />
      </div>
      
     
    </div>
  );
};

export default DestinationsSection;
