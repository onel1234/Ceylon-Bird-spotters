import React, { useState } from 'react';
import { CategoryType } from '../types';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryFilterProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories: CategoryType[] = [
    'All',
    'Endemics',
    'Birds',
     'Mammals',
     'Butterflies',
     'Reptiles',
    
  ];

  return (
    <>
      {/* Invisible overlay for closing the menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-8 right-8 z-40">
        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-teal-700 text-white shadow-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
          aria-label="Toggle filter menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Filter size={24} />}
          </motion.div>
        </button>

        {/* Filter Options Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-48 border border-gray-100"
            >
              <div className="flex flex-col gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-teal-700 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default GalleryFilter;