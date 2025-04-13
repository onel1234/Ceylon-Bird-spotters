/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function MinneriyaNationalParkPage() {
  const features = [
    { label: 'Location', value: 'North Central Province, Sri Lanka' },
    { label: 'Area', value: '88.9 km²' },
    { label: 'Established', value: '1997' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Elephant (2).jpg',
      width: 400,
      height: 400,
      alt: 'Elephants in Minneriya',
    },
    {
      src: '/wildlife/Elephant (5).jpg',
      width: 400,
      height: 400,
      alt: 'Peacock at Minneriya',
    },
    {
      src: '/wildlife/White-bellied sea Eagle (1).jpg',
      width: 400,
      height: 400,
      alt: 'Waterhole in Minneriya',
    },
    
  ];

  const highlights = [
    {
      title: 'The Great Elephant Gathering',
      description: 'Home to one of the largest concentrations of Asian elephants during the dry season.'
    },
    {
      title: 'Bird Watching',
      description: 'A popular site for birdwatching, especially migratory species.'
    },
    {
      title: 'Minneriya Tank',
      description: 'A man-made reservoir that attracts wildlife, especially during the dry season.'
    }
  ];

  const recentSightings = [
    'Oriental Darter',
    'Indian Cormorant',
    'Spot-billed Pelican',
    'Asian Wooly-necked Stork',
    'Lesser Adjutant',
    'Painted Stork',
    'Black-headed Ibis',
    'Eurasian Spoonbill',
    'Sri Lanka Junglefowl',
    'Sri Lanka Green-Pigeon',
    'Orange-breasted Green-Pigeon',
    'Crested Serpent Eagle',
    'Changeable Hawk-Eagle',
    'Grey-headed Fish-Eagle',
    'White-bellied Sea-Eagle',
    'Brown Fish-Owl',
    'Sri Lanka Swallow',
    'Alexandrine Parakeet',
    'Sri Lanka Grey-Hornbill',
    'Malabar Pied-Hornbill',
    'Sri Lanka Woodshrike',
    'Asian Elephant',
    'Spotted Deer'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/minneriya.jpg"
            alt="Minneriya National Park"
            layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Minneriya National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Minneriya National Park is renowned for its large elephant population,
              particularly during the "Great Elephant Gathering." It also offers an
              exceptional experience for birdwatchers and wildlife enthusiasts alike.
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
                    className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{highlight.description}</p>
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

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-100">
                Explore Minneriya National Park and witness the spectacular Great Elephant Gathering and
                rich biodiversity of the region.
              </p>
            </div>

            {/* Recent Wildlife Sightings */}
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
