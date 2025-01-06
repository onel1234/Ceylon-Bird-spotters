/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function YalaNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Southeastern Sri Lanka' },
    { label: 'Area', value: 'Approximately 978.8 km²' },
    { label: 'Established', value: '1938' },
  ];

  const imageGallery = [
    {
      src: '/wildlife/Black Necked Stork.jpg',
      width: 400,
      height: 400,
      alt: 'Elephant in Yala National Park',
    },
    {
      src: '/wildlife/Leopard (4).jpg',
      width: 400,
      height: 400,
      alt: 'Leopard in the wild',
    },
    {
        src: '/wildlife/Leopard (5).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (6).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
    {
      src: '/wildlife/HooPoo.jpg',
      width: 400,
      height: 400,
      alt: 'Waterhole with wildlife',
    },
    {
        src: '/wildlife/Leopard (7).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
    {
      src: '/wildlife/Sloth Bear (1).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic view of Yala',
    },
    {
        src: '/wildlife/Leopard (8).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (9).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (10).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (11).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (12).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (13).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      
      {
        src: '/wildlife/Leopard (15).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (16).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (17).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
      {
        src: '/wildlife/Leopard (18).jpg',
        width: 400,
        height: 400,
        alt: 'Leopard in the wild',
      },
  ];

  const highlights = [
    {
      title: 'Leopard Population',
      description: 'Home to one of the highest densities of leopards in the world.',
    },
    {
      title: 'Diverse Ecosystems',
      description: 'Features a mix of forests, grasslands, and wetlands.',
    },
    {
      title: 'Birdwatching Paradise',
      description: 'Over 200 bird species, including migratory birds, can be observed.',
    },
  ];

  const recentSightings = [
    'Sri Lankan Leopard',
    'Asian Elephant',
    'Sloth Bear',
    'Mugger Crocodile',
    'Spot-billed Pelican',
    'Painted Stork',
    'Malabar Pied Hornbill',
    'Black-necked Stork',
    'Indian Peafowl',
    'Eurasian Spoonbill',
    'Grey Heron',
    'Purple Heron',
    'Jungle Cat',
    'Golden Jackal',
    'Indian Star Tortoise',
    'Wild Boar',
    'Yellow-wattled Lapwing',
    'Barred Buttonquail',
    'Asian Wooly-necked Stork',
    'Lesser Adjutant',
    'Black-headed Ibis',
    'Sri Lanka Junglefowl',
    'Orange-breasted Green-Pigeon',
    'Crested Serpent-Eagle',
    'Changeable Hawk-Eagle',
    'White-bellied Sea-Eagle',
    'Grey-headed Fish-Eagle',
    'Brown Fish-Owl',
    'Jerdon’s Nightjar',
    'Indian Nightjar',
    'Crested Treeswift',
    'Sri Lanka Swallow',
    'Sirkeer Malkoha',
    'Blue-faced Malkoha',
    'Pied Cuckoo',
    'Grey-bellied Cuckoo',
    'Common Kingfisher',
    'Asian Green Bee-eater',
    'Blue-tailed Bee-eater',
    'Chestnut-headed Bee-eater',
    'Indian Roller',
    'Eurasian Hoopoe',
    'Coppersmith Barbet',
    'Brown-headed Barbet',
    'Yellow-crowned Woodpecker',
    'Red-backed Flameback',
    'Indian Pitta',
    'Indian Robin',
    'Sri Lanka Woodshrike',
    'Small Minivet',
    'White-tailed Iora',
    'Brahminy Starling',
    'Baya Weaver',
    'Indian Siverbill',
    'Jerdon’s Bushlark',
    'Paddyfield Pipit',
    'Spotted Deer',
    'Wild Water Buffalo',
    'Grey Langer',
    'Sri Lankan Jackal',
    'Ruddy Mongoose',
    'Indian Hare',
    'Sambar Deer',
    'Land Monitor'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/yala.jpg"
            alt="Yala National Park"
            width={520}
            height={400}
            className="object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Yala National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Yala National Park is one of Sri Lanka's premier wildlife destinations,
              known for its rich biodiversity and stunning landscapes. It is a haven
              for wildlife enthusiasts and photographers.
            </p>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Wildlife Gallery
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
                    <p className="text-gray-700 dark:text-gray-300">
                      {highlight.description}
                    </p>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
