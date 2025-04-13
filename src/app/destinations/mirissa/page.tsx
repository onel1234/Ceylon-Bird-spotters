/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function MirissaPage() {
  const features = [
    { label: 'Location', value: 'Southern Province, Sri Lanka' },
    { label: 'Famous For', value: 'Whale Watching and Pristine Beaches' },
    { label: 'Best Time to Visit', value: 'November to April' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/mirssa1.jpg',
      width: 400,
      height: 400,
      alt: 'Mirissa beach at sunset',
    },
    
    {
      src: '/wildlife/mirissa4.jpg',
      width: 400,
      height: 400,
      alt: 'Traditional stilt fishing',
    },
   
    {
        src: '/wildlife/Mirissa 6.jpg',
        width: 400,
        height: 400,
        alt: 'Surfing in Mirissa',
      }
  ];

  const highlights = [
    {
      title: 'Whale Watching',
      description: 'Mirissa is one of the best places in the world to see blue and sperm whales.'
    },
    {
      title: 'Coconut Tree Hill',
      description: 'A picturesque spot with a hill covered in coconut trees, offering stunning ocean views.'
    },
    {
      title: 'Beach Activities',
      description: 'From snorkeling and surfing to relaxing on the golden sands, Mirissa offers a range of activities.'
    }
  ];

  const recentSightings = [
    'Blue Whale',
    'Spinner Dolphin',
    'Green Turtle',
    'Olive Ridley Turtle',
    'Flying Fish',
    'White-bellied Sea Eagle',
    'Indian Mackerel',
    'Reef Shark',
    'Lionfish',
    'Moray Eel',
    'Great Crested Tern', 'Lesser Crested Tern', 'Gull-billed Tern', 'Bridled Tern', 'Whiskered Tern' 
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/mirissa.jpg"
            alt="Mirissa Beach"
            layout="fill" 
        objectFit="cover"
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-3xl"> Sea of Mirissa</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Mirissa is a tropical paradise known for its golden beaches, serene environment,
              and incredible opportunities for whale watching. It is a must-visit destination for 
              beach lovers and nature enthusiasts.
            </p>
{/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
    Mirissa Gallery
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {imageGallery.map((image, index) => (
      <div key={index} className="relative group aspect-square">
        <div className="h-full w-full overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Highlights Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Highlights</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((highlight) => (
                  <div 
                    key={highlight.title}
                    className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="font-semibold text-sm text-gray-600 dark:text-gray-300">
                    {feature.label}
                  </h3>
                  <p className="mt-1 text-gray-900 dark:text-gray-100">
                    {feature.value}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-lg text-blue-800 dark:text-blue-100">
                Discover Mirissa's vibrant marine life and unwind in this coastal haven 
                with its stunning beaches and unforgettable experiences.
              </p>
            </div>

            {/* Recent Sightings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Recent Sightings
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recentSightings.map((species) => (
                  <div 
                    key={species} 
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <h4 className="font-semibold text-lg text-center">{species}</h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
