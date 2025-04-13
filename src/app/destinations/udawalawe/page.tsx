/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function UdawalaweNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Southern Province, Sri Lanka' },
    { label: 'Area', value: 'Approximately 308.21 km²' },
    { label: 'Established', value: '1972' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Elephant (1).jpg',
      width: 400,
      height: 400,
      alt: 'Elephants in Udawalawe',
    },
    {
      src: '/wildlife/Malabar Pied Hornbill (1).jpg',
      width: 400,
      height: 400,
      alt: 'Birdwatching at Udawalawe',
    },
    {
      src: '/wildlife/Sirkeer Malkoha (1).jpg',
      width: 400,
      height: 400,
      alt: 'Scenic landscape of Udawalawe',
    },
   
  ];

  const highlights = [
    {
      title: 'Elephant Herds',
      description: 'Renowned for its large population of Sri Lankan elephants that roam freely in their natural habitat.'
    },
    {
      title: 'Bird Watching Paradise',
      description: 'Hosts a rich diversity of bird species, making it a hotspot for birdwatchers.'
    },
    {
      title: 'Udawalawe Reservoir',
      description: 'The park features a stunning reservoir, attracting a variety of wildlife to its banks.'
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
            src="/images/udawala.jpg"
            alt="Udawalawe National Park"
            layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Udawalawe National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Udawalawe National Park is a sanctuary for wildlife in the Southern Province of Sri Lanka. Famous for its elephant population, the park offers a unique opportunity to witness these magnificent creatures up close in their natural environment.
            </p>

            {/* Image Gallery */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    <Camera className="w-5 h-5" />
   WildLife Gallery
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

            {/* Recent Sightings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Recent Wildlife Sightings
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

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-100">
                Plan your visit to Udawalawe National Park to experience the grandeur of Sri Lanka's wildlife and the beauty of its landscapes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
