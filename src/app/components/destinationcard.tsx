// components/DestinationCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'wildlife' | 'cultural';
}

interface DestinationCardProps {
  title: string;
  locations: Location[];
}

export const DestinationCard = ({ title, locations }: DestinationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <Link 
              href={`/destinations/${location.id}`} 
              key={location.id}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl cursor-pointer 
                          hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={location.imageUrl}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 64px, 64px"
                      priority={index < 4}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
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
};

export default DestinationCard;