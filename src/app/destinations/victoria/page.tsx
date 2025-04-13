/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function VictoriaNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Central Sri Lanka, near Nuwara Eliya' },
    { label: 'Area', value: 'Approximately 27 km²' },
    { label: 'Elevation', value: '2,000 to 2,300 meters above sea level' },
    { label: 'Established', value: '1988 as a national park' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/vic1.jpg',
      width: 400,
      height: 400,
      alt: 'Mountainous landscape of Victoria Park',
    },
    {
      src: '/wildlife/vic2.jpg',
      width: 400,
      height: 400,
      alt: 'Endemic flora in the park',
    },
    {
      src: '/wildlife/vic3.jpg',
      width: 400,
      height: 400,
      alt: 'A serene lake within the park',
    },
   
  ];

  const highlights = [
    {
      title: 'Endemic Flora and Fauna',
      description: 'The park is home to many endemic species of plants, birds, and insects native to Sri Lanka.'
    },
    {
      title: 'Scenic Trails',
      description: 'Features lush walking paths surrounded by vibrant flowers and pristine landscapes.'
    },
    {
      title: 'Ideal Birdwatching Spot',
      description: 'Renowned for spotting species like the Sri Lanka White-eye and the Dull-blue Flycatcher.'
    }
  ];

  const recentSightings = [
    'Sri Lanka White-eye',
    'Dull-blue Flycatcher',
    'Sri Lanka Wood Pigeon',
    'Kashmir Flycatcher',
    'Pied Thrush',
    'Bar-winged Flycatcher-shrike',
    'Velvet-fronted Nuthatch',
    'Sri Lanka Scimitar-Babbler',
    'Indian Pitta',
    'Yellow-eared Bulbul',
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 font-[Poppins]">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        {/* Fix for header image - make it span the full width of the card */}
        <div className="w-full">
          <div className="relative w-full h-72">
            <Image
              src="/images/victoria2.webp"
              alt="Victoria National Park"
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-3xl font-[Poppins]">Victoria Park - Nuwara Eliya</CardTitle>
        </CardHeader>

        <CardContent className="font-[Poppins]">
          <div className="space-y-8">
            <p className="text-lg">
              Victoria National Park, located near Nuwara Eliya, is a haven of biodiversity and a stunning example of
              Sri Lanka's montane ecosystems. Its cool climate and scenic beauty make it a popular destination for
              nature enthusiasts and birdwatchers.
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

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-lg text-blue-800 dark:text-blue-100">
                Explore the serene beauty of Victoria National Park and discover its rich biodiversity while enjoying
                peaceful walking trails amidst nature.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}