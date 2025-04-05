"use client";
import React from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const InstagramSection = () => {
  // Sample Instagram posts - replace with your actual Instagram posts
 
  const instagramPosts = [
    { id: 1, src: "/wildlife/ins1.jpg", alt: "Instagram post 1" },
    { id: 11, src: "/wildlife/ins2.jpg", alt: "Instagram post 2" },
    { id: 3, src: "/wildlife/ins3.jpg", alt: "Instagram post 3" },
    { id: 4, src: "/wildlife/ins4.jpg", alt: "Instagram post 4" },
    { id: 5, src: "/wildlife/ins5.jpg", alt: "Instagram post 5" },
    { id: 6, src: "/wildlife/ins6.jpg", alt: "Instagram post 6" },
    { id: 7, src: "/wildlife/ins7.jpg", alt: "Instagram post 7" },
    { id: 8, src: "/wildlife/ins8.jpg", alt: "Instagram post 8" },
    { id: 9, src: "/wildlife/ins9.jpg", alt: "Instagram post 9" },
   
    // Add more posts as needed
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Instagram Header */}
        <div className="flex flex-col items-center mb-12">
          <Link 
            href="https://www.instagram.com/ceylonnaturalist/" 
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-pink-500 transition-colors duration-300"
          >
            <Instagram size={32} />
            <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
          </Link>
          <p className="text-gray-400 mt-4">@ceylonnaturalist</p>
        </div>

        {/* Instagram Posts Slider */}
        <div className="overflow-hidden relative">
          <div className="flex gap-4 animate-scroll">
            {/* First set of images */}
            {instagramPosts.map((post) => (
              <div 
                key={post.id} 
                className="flex-shrink-0 w-72 h-72 relative group"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <Instagram 
                    className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" 
                    size={32} 
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {instagramPosts.map((post) => (
              <div 
                key={`duplicate-${post.id}`} 
                className="flex-shrink-0 w-72 h-72 relative group"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <Instagram 
                    className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" 
                    size={32} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;