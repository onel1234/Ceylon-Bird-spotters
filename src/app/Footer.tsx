"use client";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-xl font-[Poppins] font-bold">
            <Image src="/images/footer.png" alt="Logo" width={200} height={150} className="object-contain" />
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link
            href="/tour-packages"
            className="text-gray-300 hover:text-white font-[Poppins]  transition-colors"
          >
            Tour Packages
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white font-[Poppins] transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white font-[Poppins]  transition-colors"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-gray-300 hover:text-white font-[Poppins] transition-colors"
          >
            Gallery
          </Link>
        </nav>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/susanaturalist?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://wa.me/+94722062989"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://www.instagram.com/ceylonnaturalist/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/ceylon-birdspotters/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;