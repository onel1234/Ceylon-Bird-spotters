import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'assets.aceternity.com',
      'res.cloudinary.com'  // Cloudinary domain added
    ],
  },
  /* other config options here */
};

module.exports = nextConfig;