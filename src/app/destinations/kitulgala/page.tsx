import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function KitulgalaForestPage() {
  const features = [
    { label: 'Location', value: 'Western Sri Lanka' },
    { label: 'Area', value: 'Approximately 21.5 km²' },
    { label: 'Famous For', value: 'Filming location of "The Bridge on the River Kwai"' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/kit1.jpg',
      width: 400,
      height: 400,
      alt: 'Scenic forest trail',
    },
    {
      src: '/wildlife/kit2.jpg',
      width: 400,
      height: 400,
      alt: 'Kitulgala riverfront',
    },
    {
      src: '/wildlife/kit3.jpg',
      width: 400,
      height: 400,
      alt: 'Dense forest vegetation',
    },
   
  ];

  const highlights = [
    {
      title: 'River Adventures',
      description: 'Known for white-water rafting and kayaking along the Kelani River'
    },
    {
      title: 'Endemic Birds',
      description: 'Home to a variety of endemic and migratory bird species'
    },
    {
      title: 'Cinematic History',
      description: 'Famed as the filming location of "The Bridge on the River Kwai"'
    }
  ];

  const recentSightings = [
    'Sri Lanka Hanging Parrot',
    'Green-billed Coucal',
    'Orange Minivet',
    'Sri Lanka Grey Hornbill',
    'Sri Lanka Junglefowl',
    'Spot-winged Thrush',
    'Black-capped Bulbul',
    'Layard’s Parakeet',
    'Chestnut-backed Owlet',
    'Sri Lanka Drongo',
    'Sri Lanka Frogmouth',
    'Malabar Trogon',
    'Sri Lanka Spurfowl',
    'Sri Lanka Green-Pigeon',
    'Black Eagle',
    'Rufous-bellied Eagle',
    'Sri Lanka Bay-Owl',
    'Serendib Scops-Owl',
    'Spot-bellied Eagle-Owl',
    'Sri Lanka Swallow',
    'Banded Bay Cuckoo',
    'Red-faced Malkoha',
    'Crimson-fronted Barbet',
    'Yellow-fronted Barbet',
    'Crimson-backed Flameback',
    'Lesser Yellownape',
    'Sri Lanka Blue-Magpie',
    'Tickell’s Blue Flycatcher',
    'Indian Paradise-Flycatcher',
    'Golden-fronted Leafbird',
    'Indian Pitta',
    'Brown-capped Babbler',
    'Orange-billed Babbler',
    'Sri Lanka Scimitar-Babbler',
    'White-throated Flowerpecker',
    'Black-throated Munia',
    'Sri Lanka Myna',
    'White-faced Starling',
    'Purple-faced Leaf Monkey',
    'Grizzled Indian Squirrel',
    'Layard’s Striped Squirrel'
  ];
   

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/kitul.jpg"
            alt="Kitulgala-Kelani Valley Forest"
            layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Kitulgala-Kelani Valley Forest</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              The Kitulgala-Kelani Valley Forest is a renowned eco-tourism destination in Sri Lanka, famous for its lush greenery,
              adventure activities, and rich biodiversity. Nestled along the Kelani River, it offers visitors a blend of
              nature, history, and excitement.
            </p>

            {/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
    Forest Gallery
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
              <h3 className="text-xl font-semibold">Forest Highlights</h3>
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

            {/* Wildlife Sightings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Possible Sightings
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
