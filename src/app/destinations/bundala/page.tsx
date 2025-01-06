import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function BundalaNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Southern Sri Lanka, near Hambantota' },
    { label: 'Area', value: 'Approximately 62 km²' },
    { label: 'Ramsar Status', value: 'Recognized as a Wetland of International Importance since 1990' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Bundala (1).jpg',
      width: 400,
      height: 400,
      alt: 'Flock of flamingos at Bundala',
    },
    {
      src: '/wildlife/Bundala (2).jpg',
      width: 400,
      height: 400,
      alt: 'Salt pans in Bundala',
    },
    {
      src: '/wildlife/Mugger Croc (1).jpg',
      width: 400,
      height: 400,
      alt: 'Migratory birds in Bundala',
    },
    {
      src: '/wildlife/Mugger Croc (2).jpg',
      width: 400,
      height: 400,
      alt: 'Crocodile near the water',
    },
    {
      src: '/wildlife/Watercock (1).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic view of Bundala',
    },
    {
      src: '/wildlife/Watercock (2).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic view of Bundala',
    },
    {
      src: '/wildlife/Small Pratincole (1).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic view of Bundala',
    },
    {
      src: '/wildlife/Small Pratincole (2).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic view of Bundala',
    },
  ];

  const highlights = [
    {
      title: 'Birdwatcher’s Paradise',
      description: 'Home to over 200 bird species, including migratory flamingos and pelicans.'
    },
    {
      title: 'Unique Ecosystem',
      description: 'Features lagoons, salt pans, and marshes teeming with biodiversity.'
    },
    {
      title: 'Endangered Species',
      description: 'Supports populations of endangered species like the Eurasian otter and Indian star tortoise.'
    }
  ];

  const recentSightings = [
    'Spot-billed Pelican',
    'Great Thick-knee',
    'Yellow-wattled Lapwing',
    'Barred Buttonquail',
    'Asian Wooly-necked Stork',
    'Lesser Adjutant',
    'Painted Stork',
    'Black-headed Ibis',
    'Eurasian Spoonbill',
    'Sri Lanka Junglefowl',
    'Orange-breasted Green-Pigeon',
    'Crested Serpent-Eagle',
    'Changeable Hawk-Eagle',
    'White-bellied Sea-Eagle',
    'Grey-headed Fish-Eagle',
    'Black-winged Kite',
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
    'Malabar Pied-Hornbill',
    'Coppersmith Barbet',
    'Brown-headed Barbet',
    'Tawny-bellied Babbler',
    'Yellow-eyed Babbler',
    'Yellow-crowned Woodpecker',
    'Red-backed Flameback',
    'Indian Pitta',
    'Indian Robin',
    'Sri Lanka Woodshrike',
    'Small Minivet',
    'White-tailed Iora',
    'Baya Weaver',
    'Indian Siverbill',
    'Jerdon’s Bushlark',
    'Paddyfield Pipit',
    'Jungle Prinia',
    'Ashy Prinia',
    'Plum-headed Parakeet',
    'Sri Lanka Leopard',
    'Sloth Bear',
    'Asian Elephant',
    'Spotted Deer',
    'Wild Water Buffalo',
    'Grey Langer',
    'Sri Lankan Jackal',
    'Ruddy Mongoose',
    'Indian Hare',
    'Wild Boar',
    'Sambar Deer',
    'Mugger Crocodile',
    'Land Monitor'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/bundala.jpg"
            alt="Bundala National Park"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Bundala National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Bundala National Park is a wetland sanctuary in southern Sri Lanka, renowned for its 
              incredible birdlife and diverse ecosystems. As a Ramsar Wetland of International Importance, 
              Bundala offers visitors the chance to explore lagoons, marshes, and dunes while witnessing 
              a vibrant array of wildlife.
            </p>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Park Gallery
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
                Visit Bundala National Park to immerse yourself in its serene landscapes and 
                extraordinary biodiversity!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
