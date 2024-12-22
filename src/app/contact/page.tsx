"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Menu, MenuItem } from "../Navbar";
import { useRouter } from "next/navigation";
import Footer from "../Footer";

export default function ContactPage() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    setActiveItem(path);
    router.push(path);
  };

  return (
    <div>
      {/* Navbar */}
      <Menu setActive={setActiveItem}>
        <MenuItem
          item="Home"
          active={activeItem}
          setActive={() => handleMenuClick("/")}
        />
        <MenuItem
          item="Tour Packages"
          active={activeItem}
          setActive={() => handleMenuClick("/tour-packages")}
        />
        <MenuItem
          item="Contact Us"
          active={activeItem}
          setActive={() => handleMenuClick("/contact")}
        />
        <MenuItem
          item="Team"
          active={activeItem}
          setActive={() => handleMenuClick("/team")}
        />
        <MenuItem
          item="About Us"
          active={activeItem}
          setActive={() => handleMenuClick("/about")}
        />
        <MenuItem
          item="Gallery"
          active={activeItem}
          setActive={() => handleMenuClick("/gallery")}
        />
      </Menu>

      {/* Contact Section */}
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-blue-600 p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white" />
                <div>
                  <p className="text-sm text-white/80">Email</p>
                  <p className="text-lg font-semibold">hello@mantine.dev</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white" />
                <div>
                  <p className="text-sm text-white/80">Phone</p>
                  <p className="text-lg font-semibold">+49 (800) 335 35 35</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white" />
                <div>
                  <p className="text-sm text-white/80">Address</p>
                  <p className="text-lg font-semibold">844 Morris Park Avenue</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-white" />
                <div>
                  <p className="text-sm text-white/80">Working Hours</p>
                  <p className="text-lg font-semibold">8 a.m. – 11 p.m.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@mantine.dev"
                    required
                    className="mt-2 w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="mt-2 w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Please include all relevant information"
                  required
                  className="mt-2 w-full px-4 py-2 bg-gray-900 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
