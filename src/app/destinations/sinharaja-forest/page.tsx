import React from 'react';
import { Card, CardHeader, CardTitle, CardContent,CardImage } from '@/app/Ui/Card';
import { Camera, Eye } from 'lucide-react';
import Image from 'next/image';

export default function SinharajaForestPage() {
  const features = [
    { label: 'Location', value: 'Southwestern Sri Lanka' },
    { label: 'Area', value: 'Approximately 88.64 km²' },
    { label: 'UNESCO Status', value: 'World Heritage Site since 1988' }
  ];

 const imageGallery = [
    
    {
      src: '/wildlife/grey.jpg',
      width: 400,
      height: 400,
      alt: 'Rare bird species',
     
    },
   
    {
      src: '/wildlife/mag.jpg',
      width: 400,
      height: 400,
      alt: 'Wildlife trail',
     
    },
    {
      src: '/wildlife/apur.jpg',
      width: 400,
      height: 400,
      alt: 'Endemic butterfly',
     
    }
  ];

  const highlights = [
    {
      title: 'Endemic Species',
      description: 'Home to over 830 endemic species including 217 birds and 65 butterflies'
    },
    {
      title: 'Ancient Trees',
      description: 'Features centuries-old emergent trees reaching heights of up to 45 meters'
    },
    {
      title: 'Research Value',
      description: 'Active site for biodiversity research and species documentation'
    }
  ];
  const recentSightings = [
    'Sri Lankan Blue Magpie',
    'Purple-faced Langur',
    'Red Slender Loris',
    'Sri Lankan Leopard',
    'Ceylon Tree Nymph',
    'Green Pit Viper',
    'Sri Lanka Spurfowl',
    'Sri Lanka Junglefowl',
    'Sri Lanka Green-Pigeon',
    'Black Eagle',
    'Sri Lanka Bay-Owl',
    'Serendib Scops-Owl',
    'Spot-bellied Eagle-Owl',
    'Chestnut-backed Owlet',
    'Sri Lanka Frogmouth',
    'Sri Lanka Swallow',
    'Green-billed Coucal',
    'Red-faced Malkoha',
    'Banded Bay Cuckoo',
    'Layard’s Parakeet',
    'Sri Lanka Hanging Parrot',
    'Malabar Trogon',
    'Sri Lanka Grey Hornbill',
    'Crimson-fronted Barbet',
    'Yellow-fronted Barbet',
    'Crimson-backed Flameback',
    'Lesser Yellownape',
    'Indian Paradise-Flycatcher',
    'Golden-fronted Leafbird',
    'Orange Minivet',
    'Sri Lanka Thrush',
    'Spot-winged Thrush',
    'Brown-capped Babbler',
    'Black-capped Bulbul',
    'Ashy-headed Laughingthrush',
    'Orange-billed Babbler',
    'Sri Lanka Scimitar-Babbler',
    'White-throated Flowerpecker',
    'Black-throated Munia',
    'Sri Lanka Myna',
    'White-faced Starling',
    'Sri Lanka Drongo',
    'Purple-faced Leaf Monkey',
    'Grizzled Indian Squirrel',
    'Layard’s Striped Squirrel'
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
      <CardImage>
      <div className=" w-full h-72">
          <Image
            src="https://res.cloudinary.com/dfxolekjs/image/upload/v1745402712/testsin2_yugyqg.jpg"
            alt="Sinharaja Forest"
             layout="fill" 
        objectFit="cover"
          />
     
        </div>
        </CardImage>
        
        <CardHeader>
          <CardTitle className="text-3xl">Sinharaja Forest Reserve</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-8">
            <p className="text-lg">
              The Sinharaja Forest Reserve is a UNESCO World Heritage Site and a
              biodiversity hotspot in Sri Lanka. Known for its dense rainforest
              ecosystem, it is home to numerous endemic flora and fauna species.
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

            {/* Recent Wildlife Sightings */}
            
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
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-100">
                Visit Sinharaja Forest Reserve to discover its rich biodiversity and 
                witness these magnificent species in their natural habitat!
              </p>
            </div>
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