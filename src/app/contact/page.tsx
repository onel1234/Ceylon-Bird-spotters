"use client";

import React, { FormEvent, useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../NavbarFn";
import Footer from "../Footer";

interface FormData {
  from_name: string;
  email_from: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    email_from: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: "contact@ceylonbirdspotters.com",
      from_name: formData.from_name,
      email_from: formData.email_from,
      message: formData.message
    };

    const loadingToast = toast.loading("Sending message...");

    emailjs
      .send(
        'service_vkek2pe',
        "template_wzk609k",
        templateParams,
        "lHYF9zJWeaB3KgDsH"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully!");
          
          // Reset form
          setFormData({
            from_name: "",
            email_from: "",
            message: ""
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.dismiss(loadingToast);
          toast.error(`Failed to send email: ${error.text}`);
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-500 flex items-center justify-center p-3 md:p-1">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row">
          {/* Left Section - Contact Info */}
          <div className="text-white lg:w-1/2 mb-6 lg:mb-0 lg:pr-6 py-32">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact us</h1>
            <p className="text-base md:text-lg mb-10">
              Leave your email and we will get back to you 
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-80">Email</p>
                  <p className="text-base">contact@ceylonnaturalist.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-80">Phone</p>
                  <p className="text-base">+94 (72) 2068 960</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-80">Address</p>
                  <p className="text-base">Ceylon Naturalist, Kudawa, Veddagala, Kalwana, Sri Lanka.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-80">Working hours</p>
                  <p className="text-base">8 a.m. — 11 p.m.</p>
                </div>
              </div>
            </div>

            <div className="flex mt-10 space-x-5">
              <a
                href="https://www.facebook.com/susanaturalist?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} className="cursor-pointer hover:opacity-80 transition-opacity text-white" />
              </a>
              <a
                href="https://wa.me/+94722062989"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} className="cursor-pointer hover:opacity-80 transition-opacity text-white" />
              </a>
              <a
                href="https://instagram.com/ceylonnaturalist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className="cursor-pointer hover:opacity-80 transition-opacity text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/ceylon-birdspotters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="cursor-pointer hover:opacity-80 transition-opacity text-white" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-1/2 py-32">
            <div className="bg-white rounded-lg p-5 md:p-6 shadow-lg">
              <form onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label htmlFor="emailFrom" className="block text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email_from"
                    id="emailFrom"
                    placeholder="your@email.com"
                    value={formData.email_from}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="fromName" className="block text-gray-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="fromName"
                    placeholder="Enter your name here"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1.5">
                    Your message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-teal-600 text-white px-5 py-2.5 rounded-md flex items-center justify-center hover:bg-teal-900 transition-colors w-full sm:w-auto"
                >
                  <span className="mr-2">Send message</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Toast Container */}
        <Toaster position="top-right" />
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;