"use client";

import { Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">
             <Image src="/images/cb-logo.png" alt="Logo" width={150} height={150} /> 
          </div>
          <span className="text-xl font-semibold">CeylonBirdSpotters</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link 
            href="/tour-packages" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Tour Packages
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            href="/gallery" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Gallery
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;