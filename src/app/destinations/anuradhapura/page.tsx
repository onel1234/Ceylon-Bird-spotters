import React from 'react';
import { Card, CardContent } from '@/app/Ui/Card';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function AnuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
        <div className="md:flex">
          {/* Main Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <Image
                src="/culture/anu1.webp"
                alt="Cultural Destination"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={1200}
                height={800}
                priority
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            <CardContent className="p-6 md:p-8">
              {/* Title and Location */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Anuradhapura, Sri Lanka</h3>
                <p className="text-lg text-gray-500">Ancient Kingdom of Sri lanka</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Established in the 4th century BC, Anuradhapura served as the inaugural capital of the island, standing as the royal seat for 119 successive Singhalese Kings and enduring for approximately 1,500 years, making it one of the oldest continuously occupied cities in Asia. Anuradhapura holds a distinct place as the cradle of the Hydraulic Sinhalese civilization and Theravada Buddhism. Today, it is a renowned World Heritage Site and a major Buddhist pilgrimage site, adorned with the ruins of ancient Buddhist temples. Among these, the Anuradhapura Maha Viharaya and the Jaya Sri Maha Bodhi stand out, the latter being the oldest documented, still-living tree globally. This sacred Bodhi tree is believed to have originated as a branch of the revered fig tree at Bodh Gaya in Bihar, India, beneath which the Buddha attained enlightenment.
              </p>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/images/anuraphapura.jpg"
                    alt="Gallery 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/anu2.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/anu3.jpg"
                    alt="Gallery 3"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}