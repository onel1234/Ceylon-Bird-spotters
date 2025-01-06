/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardContent } from '@/app/Ui/Card';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function KandyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-6xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
        <div className="md:flex">
          {/* Main Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <Image
                src="/culture/kandy2.webp"
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
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Kandy, Sri Lanka</h3>
                <p className="text-lg text-gray-500">Temple of the Tooth</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Cradled amidst the hills of the Kandy plateau and embraced by lush tropical plantations lies the sacred city of Kandy. Once the thriving capital of the Sinhala Kings for 3.5 centuries, it bore witness to significant historical events until the British assumed control in 1815. Revered as one of the most sacred places in the Buddhist world, it proudly houses the Temple of the Tooth Relic. The royal palace and temples like Lankatilaka and Gadaladeniya showcase unparalleled, best-preserved examples of traditional Sinhalese architecture and sculpture. It's no wonder that this city has earned its place as a UNESCO World Heritage Site.
              </p>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/kandy1.webp"
                    alt="Gallery 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/images/kandy.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/kandy3.webp"
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