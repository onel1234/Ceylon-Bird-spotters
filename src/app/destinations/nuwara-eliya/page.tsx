import React from 'react';
import { Card, CardContent } from '@/app/Ui/Card';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function NuwaraEliayaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
        <div className="md:flex">
          {/* Main Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <Image
                src="/images/nuwara-eliya.jpg"
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
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Nuwara Eliya, Sri Lanka</h3>
                <p className="text-lg text-gray-500">Little England of Sri lanka</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
             

Nuwara Eliya, nestled in the scenic hills of Sri Lanka’s hill country and overlooked by Pidurutalagala, the country’s tallest mountain, is often referred to as “Little England” due to its cool temperate climate and picturesque landscapes reminiscent of England. Situated at an altitude of 1,868 m, it holds significant importance as the primary location for tea production in Sri Lanka.

Founded in 1846 by Samuel Baker, Nuwara Eliya became a favorite retreat for British civil servants and planters in Ceylon, offering a climate conducive to various pastimes. The city still retains its colonial charm, with many buildings from the colonial era, such as Queen’s Cottage, General’s House, Grand Hotel, and Town Post Office, standing to this day.

              </p>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/nuwara1.jpg"
                    alt="Gallery 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/nuwara2.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/nuwara3.jpg"
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