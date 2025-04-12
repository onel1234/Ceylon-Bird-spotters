/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function HortonPlainsPage() {
  const features = [
    { label: 'Location', value: 'Central Highlands, Sri Lanka' },
    { label: 'Area', value: '3,160 hectares' },
    { label: 'Established', value: '1988' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Hortan Plains (1).jpg',
      width: 400,
      height: 400,
      alt: 'Horton Plains Landscape',
    },
    {
      src: '/wildlife/Hortan Plains (2).jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
    {
      src: '/wildlife/Bush Warbler (1).jpg',
      width: 400,
      height: 400,
      alt: 'Sunrise over Horton Plains',
    },
    {
      src: '/wildlife/Bush Warbler (2).jpg',
      width: 400,
      height: 400,
      alt: 'Sunrise over Horton Plains',
    },
    {
      src: '/wildlife/Hortan Plains (3).jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
    {
      src: '/wildlife/Hortan Plains (4).jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
    {
      src: '/wildlife/Whistling Thrush.jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
    {
      src: '/wildlife/Yellow-eared Bulbul (1).jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
    {
      src: '/wildlife/Yellow-eared Bulbul (2).jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife at Horton Plains',
    },
  ];

  const highlights = [
    {
      title: 'World’s End',
      description: 'A sheer cliff that drops nearly 1,000 meters, offering stunning views of the surrounding landscapes.'
    },
    {
      title: 'Baker’s Falls',
      description: 'A beautiful waterfall located in the park, named after the famous British explorer Baker.'
    },
    {
      title: 'Endemic Wildlife',
      description: 'Home to several endemic species like the Sri Lankan Sambar deer and the purple-faced langur.'
    }
  ];

  const recentSightings = [
    'Sri Lanka Junglefowl',
    'Sri Lanka Wood-Pigeon',
    'Black-winged Kite',
    'Legg’s Hawk-Eagle',
    'Hill Swallow',
    'Crimson-backed Flameback',
    'Dull-blue Flycatcher',
    'Indian Blue Robin',
    'Sri Lanka Whistling-Thrush',
    'Indian Blackbird',
    'Pied Bushchat',
    'Sri Lanka Bush Warbler',
    'Grey-headed Canary-Flycatcher',
    'Green Warbler',
    'Sri Lanka White-eye',
    'Yellow-eared Bulbul',
    'Tricolored Munia',
    'Sambar Deer',
    'Purple-faced Leaf Monkey',
    'Toque Macaque'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/hortonplains.jpg"
            alt="Horton Plains Landscape"
           layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Horton Plains National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Horton Plains National Park is one of the most unique and ecologically rich areas in Sri Lanka.
              Known for its stunning landscapes, high-altitude plateau, and endemic wildlife, this UNESCO
              World Heritage site is a must-visit for nature enthusiasts and wildlife lovers.
            </p>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Horton Plains Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imageGallery.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover transition-transform group-hover:scale-105"
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
                Discover the breathtaking beauty and biodiversity of Horton Plains National Park,
                a natural treasure in the heart of Sri Lanka's highlands.
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
