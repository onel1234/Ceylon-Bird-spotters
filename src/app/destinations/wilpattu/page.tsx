/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function WilpattuNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Northwest Sri Lanka' },
    { label: 'Area', value: 'Approximately 1,300 km²' },
    { label: 'Established', value: 'One of the oldest national parks in Sri Lanka' },
    { label: 'Known For', value: '"Villus" (natural rain-fed lakes) and leopards' }
  ];
 
  const imageGallery = [
    {
      src: '/images/wil4.jpg',
      width: 400,
      height: 400,
      alt: 'Sri Lankan leopard in Wilpattu National Park',
    },
    {
      src: '/images/wil3.jpg',
      width: 400,
      height: 400,
      alt: 'Natural villu lake in Wilpattu',
    },
    {
      src: '/images/wil5.jpg',
      width: 400,
      height: 400,
      alt: 'Asian elephant in dense forest habitat',
    },
    
  ];

  const highlights = [
    {
      title: 'Land of Lakes',
      description: 'Home to over 50 natural "villus" (rain-fed lakes) that support diverse ecosystems and wildlife.'
    },
    {
      title: 'Leopard Territory',
      description: 'Prime habitat for the endemic Sri Lankan Leopard (Panthera pardus kotiya), with one of the highest densities in the world.'
    },
    {
      title: 'Diverse Habitats',
      description: 'Features a mosaic of dense forests, scrublands, and open grasslands supporting incredible biodiversity.'
    }
  ];

  const recentSightings = [
    'Sri Lankan Leopard',
    'Sloth Bear',
    'Asian Elephant',
    'Mugger Crocodile',
    'Water Buffalo',
    'Spotted Deer',
    'Sambar Deer',
    'Barking Deer',
    'Golden Jackal',
    'Purple-faced Langur',
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
      <div className="w-full">
      <div className="relative w-full h-72">
          <Image
            src="/images/wil5.jpg"
            alt="Wilpattu National Park"
           layout="fill" 
        objectFit="cover"
          />
        </div>
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Wilpattu National Park – The Land of Lakes and Leopards</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Spanning over 1,300 square kilometers in Sri Lanka's northwest dry zone, Wilpattu is the country's largest and one of its oldest national parks. 
              Renowned for its unique "villus"—natural rain-fed lakes—Wilpattu is a mosaic of dense forests, scrublands, and open grasslands that support a remarkable diversity of life.
            </p>
            
            <p className="text-lg">
              This wilderness is a prime stronghold for the elusive Sri Lankan Leopard (Panthera pardus kotiya), a recognized endemic subspecies. 
              The park also shelters iconic species such as Sloth Bears, Asian Elephants, Mugger Crocodiles, and over 200 species of birds, including endemic and migratory species.
            </p>
            
            <p className="text-lg">
              A safari through Wilpattu offers a serene and scientifically rich experience, with nature unfolding in quiet, timeless beauty.
            </p>

          {/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
   Park Gallery
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
              <h3 className="text-xl font-semibold">Park Highlights</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Recent Wildlife Sightings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Wildlife Sightings
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

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-lg text-blue-800 dark:text-blue-100">
                Explore the wild beauty of Wilpattu National Park, where ancient forests, serene lakes, and magnificent wildlife create an unforgettable safari experience in Sri Lanka's pristine wilderness.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}