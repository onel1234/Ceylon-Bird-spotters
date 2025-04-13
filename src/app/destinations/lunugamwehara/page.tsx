import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function LunugamweheraNationalParkPage() {
  const features = [
    { label: 'Location', value: 'Southern Province, Sri Lanka' },
    { label: 'Area', value: '235 km²' },
    { label: 'Established', value: '1995' }
  ];

  const imageGallery = [
    {
      src: '/wildlife/Adjutant (1).jpg',
      width: 400,
      height: 400,
      alt: 'Elephants in Lunugamwehera',
    },
   
    {
      src: '/wildlife/Brown Fish Owl (1).jpg',
      width: 400,
      height: 400,
      alt: 'Wetlands in the park',
    },
   
    {
      src: '/wildlife/Marshell (2).jpg',
      width: 400,
      height: 400,
      alt: 'Wetlands in the park',
    }
  ];

  const highlights = [
    {
      title: 'Elephant Corridor',
      description: 'A vital corridor for elephant migration connecting Yala and Udawalawe.'
    },
    {
      title: 'Bird Watching',
      description: 'Home to a variety of water birds, including pelicans, herons, and storks.'
    },
    {
      title: 'Biodiversity',
      description: 'Rich in flora and fauna with a mix of dry zone forests and wetlands.'
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
    'Sri Lanka Green-Pigeon',
    'Crested Serpent-Eagle',
    'Changeable Hawk-Eagle',
    'White-bellied Sea-Eagle',
    'Grey-headed Fish-Eagle',
    'Black-winged Kite',
    'Brown Fish-Owl',
    'Jungle Owlet',
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
    'Forest Wagtail',
    'Asian Elephant',
    'Sri Lankan Leopard',
    'Sloth Bear',
    'Spotted Deer',
    'Grey Langer',
    'Grizzled Indian Squirrel',
    'Palm Squirrel'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src="/images/lunugamvehera.jpg"
            alt="Lunugamwehera National Park"
           layout="fill" 
        objectFit="cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-3xl">Lunugamwehera National Park</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              Lunugamwehera National Park is a vital protected area in Sri Lanka,
              serving as an elephant corridor and hosting a diverse range of wildlife.
              Its blend of wetlands and forests makes it a unique sanctuary for
              animals and birds.
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
                Experience the tranquility and biodiversity of Lunugamwehera National Park.
                A haven for nature lovers and wildlife enthusiasts alike!
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
