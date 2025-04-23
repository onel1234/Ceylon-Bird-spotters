import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function AnawilundawaSanctuaryPage() {
  const features = [
    { label: 'Location', value: 'Northwestern Sri Lanka' },
    { label: 'Area', value: '3,198 ha' },
    { label: 'Established', value: '1997' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Ashy Woodswallow (1).jpg',
      width: 400,
      height: 400,
      alt: 'Anawilundawa Wetlands',
    },
    {
      src:  '/wildlife/Ashy Woodswallow (2).jpg',
      width: 400,
      height: 400,
      alt: 'Birds in Anawilundawa',
    },
    {
      src: '/wildlife/Lesser Whistling Duck (1).jpg',
      width: 400,
      height: 400,
      alt: 'Sunset at Anawilundawa',
    },
   
    
   

  ];

  const highlights = [
    {
      title: 'Wetland Ecosystem',
      description: 'A significant wetland habitat home to diverse bird species, aquatic plants, and reptiles.'
    },
    {
      title: 'Migratory Birds',
      description: 'A vital stopover for migratory birds, particularly waterfowl and waders.'
    },
    {
      title: 'Biodiversity',
      description: 'Rich in flora and fauna, offering an ideal environment for birdwatching and nature walks.'
    }
  ];

 const recentSightings = [
  'Lesser Whistling-Duck',
  'Oriental Darter',
  'Indian Cormorant',
  'Spot-billed Pelican',
  'Whiskered Tern',
  'Peasant-tailed Jacana',
  'Asian Openbill',
  'Painted Stork',
  'Yellow Bittern',
  'Black Bittern',
  'Indian Pond-Heron',
  'Black-headed Ibis',
  'Eurasian Spoonbill',
  'Sri Lanka Junglefowl',
  'Orange-breasted Green-Pigeon',
  'Sri Lanka Green-Pigeon',
  'White-bellied Sea-Eagle',
  'Grey-headed Fish-Eagle',
  'Brown Fish-Owl',
  'Sri Lanka Swallow',
  'Ashy Woodswallow',
  'Pied Cuckoo',
  'Coppersmith Barbet',
  'Brown-headed Barbet',
  'White-napped Woodpecker',
  'Red-backed Flameback',
  'Asian Brown Flycatcher',
  'Indian Paradise Flycatcher',
  'Sri Lanka Woodshrike',
  'Brown Shrike',
  'Indian Roller'
];


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/ana.jpg"
            alt="Anawilundawa Sanctuary"
           layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Anawilundawa Sanctuary</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Anawilundawa Sanctuary, located in northwestern Sri Lanka, is an important wetland
              area rich in biodiversity. The sanctuary is a haven for migratory birds and provides
              an excellent opportunity for birdwatching and wildlife observation.
            </p>
{/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
    Sanctuary Gallery
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
              <h3 className="text-xl font-semibold">Sanctuary Highlights</h3>
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
                Explore the serene wetlands of Anawilundawa Sanctuary, a paradise for nature lovers
                and birdwatchers, with its rich biodiversity and peaceful surroundings.
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
