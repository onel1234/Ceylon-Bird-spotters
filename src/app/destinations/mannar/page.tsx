import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function MannarIslandPage() {
  const features = [
    { label: 'Location', value: 'Northwestern Coast, Sri Lanka' },
    { label: 'Area', value: '130 km²' },
    { label: 'Established', value: '1991' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Mannar (1).jpg',
      width: 400,
      height: 400,
      alt: 'Mannar Island View',
    },
    {
      src: '/wildlife/Mannar (2).jpg',
      width: 400,
      height: 400,
      alt: 'Birds in Mannar',
    },
    {
      src: '/wildlife/Flamingos (1).jpg',
      width: 400,
      height: 400,
      alt: 'Sunset at Mannar Island',
    },
   
  ];

  const highlights = [
    {
      title: 'Bird Watching',
      description: 'Mannar Island is a key stop for migratory birds, particularly the flamingos.'
    },
    {
      title: 'Pristine Beaches',
      description: 'Known for its untouched beaches and tranquil surroundings.'
    },
    {
      title: 'Historical Sites',
      description: 'Home to ancient ruins, including the 16th-century Portuguese fort.'
    }
  ];

  const recentSightings = [
    'Northern Pintail',
    'Green-winged Teal',
    'Oriental Darter',
    'Indian Cormorant',
    'Brown-headed Gull',
    'Pallas’s Gull',
    'Lesser Black-backed Gull',
    'Little Tern',
    'Gull-billed Tern',
    'Caspian Tern',
    'Great Crested Tern',
    'Lesser Crested Tern',
    'Great Thick-knee',
    'Tibetan Sand-Plover',
    'Greater Sand-Plover',
    'Kentish Plover',
    'Bar-tailed Godwit',
    'Ruff',
    'Curlew Sandpiper',
    'Terek Sandpiper',
    'Marsh Sandpiper',
    'Crab-Plover',
    'Greater Flamingo',
    'Grey Francolin',
    'Booted Eagle',
    'Long-tailed Shrike',
    'Black Drongo'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/man.jpg"
            alt="Mannar Island"
           layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Mannar Island</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Mannar Island, located off the northwestern coast of Sri Lanka, is renowned for
              its biodiversity, pristine beaches, and as an important stopover for migratory birds.
              It also holds historical significance with ancient forts and ruins.
            </p>

            {/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
    Island Gallery
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
              <h3 className="text-xl font-semibold">Island Highlights</h3>
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
                Discover the beauty and serenity of Mannar Island, a paradise for birdwatchers
                and nature lovers, with its rich biodiversity and untouched landscapes.
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
