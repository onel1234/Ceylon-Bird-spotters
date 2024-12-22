import React from 'react';
import { motion } from 'framer-motion';

interface Location {
  name: string;
  description: string;
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
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{location.name[0]}</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationsSection: React.FC = () => {
  const wildlifeDestinations: Location[] = [
    { name: "Serengeti National Park", description: "Tanzania's iconic safari destination with the great migration" },
    { name: "Ranthambore", description: "India's famous tiger reserve with ancient ruins" },
    { name: "Galapagos Islands", description: "Ecuador's unique wildlife sanctuary with endemic species" },
    { name: "Kruger National Park", description: "South Africa's premier big five wildlife destination" },
    { name: "Yellowstone", description: "America's first national park with diverse wildlife" },
    { name: "Borneo Rainforest", description: "Home to orangutans and diverse tropical wildlife" },
    { name: "Arctic National Park", description: "Polar bears and arctic wildlife viewing" },
    { name: "Amazon Rainforest", description: "World's largest rainforest ecosystem" },
    { name: "Great Barrier Reef", description: "Australia's marine wildlife wonderland" },
    { name: "Madagascar", description: "Unique lemurs and endemic wildlife species" }
  ];

  const culturalDestinations: Location[] = [
    { name: "Kyoto", description: "Japan's cultural heart with ancient temples and traditions" },
    { name: "Petra", description: "Jordan's ancient rock-carved architectural wonder" },
    { name: "Varanasi", description: "India's spiritual capital on the Ganges River" },
    { name: "Cusco", description: "Peru's Incan capital with rich heritage" },
    { name: "Istanbul", description: "Turkey's cultural bridge between East and West" },
    { name: "Fez", description: "Morocco's medieval medina and cultural center" },
    { name: "Angkor Wat", description: "Cambodia's ancient temple complex" },
    { name: "Rome", description: "Italy's eternal city of history and culture" },
    { name: "Luxor", description: "Egypt's open-air museum of ancient wonders" },
    { name: "Chiang Mai", description: "Thailand's northern cultural capital" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Explore Our Destinations
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the world's most remarkable wildlife sanctuaries and cultural heritage sites
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DestinationCard title="Wildlife Destinations" locations={wildlifeDestinations} />
        <DestinationCard title="Cultural Destinations" locations={culturalDestinations} />
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default DestinationsSection;