import React from 'react';
import { Card, CardContent } from '@/app/Ui/Card';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function GallePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
        <div className="md:flex">
          {/* Main Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <Image
                src="/culture/galle1.jpg"
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
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Galle, Sri Lanka</h3>
                <p className="text-lg text-gray-500">The City of vibes</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
             

              Founded by the Portuguese in the 16th century, Galle reached its pinnacle in the 18th century before the arrival of the British, showcasing the best example of a fortified city built by Europeans in South and Southeast Asia and illustrating the interaction between European architectural styles and rich South Asian traditions. The Galle Fort is a World Heritage Site and stands as the largest remaining fortress in Asia built by European occupiers. Perfect for surfing and relaxation on the beach.

              </p>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/images/galle.jpg"
                    alt="Gallery 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/galle2.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/galle3.jpg"
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