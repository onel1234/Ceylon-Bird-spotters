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
                src="/culture/dam1.jpg"
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
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Dambulla, Sri Lanka</h3>
                <p className="text-lg text-gray-500">Ancient Kingdom of Sri lanka</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
             

For 22 centuries, the cave monastery at Dambulla has stood as a sacred pilgrimage site, hosting the largest and best-preserved cave temple complex in Sri Lanka. The Dambulla rock, towering 160 m over the surrounding plains, encompasses more than 80 documented caves. Five major caves are the primary attractions, featuring 153 Buddha statues and significant Buddhist mural paintings vividly depicting the life of Buddha.

Dambulla is also home to the largest rose quartz mountain range in South Asia and the Ironwood forest, known as Na Uyana Aranya. The site showcases the rich cultural and religious heritage of Sri Lanka, making it a remarkable destination for both pilgrims and enthusiasts of Buddhist art and history.

              </p>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/images/dambulla.jpg"
                    alt="Gallery 1"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/dam2.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src="/culture/dam3.jpg"
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