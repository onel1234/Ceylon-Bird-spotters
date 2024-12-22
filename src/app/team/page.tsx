"use client";

import React from "react";
import { StickyScroll } from "../Ui/StickyScrollReveal";
import Navbar from "../NavbarFn";
import Footer from "../Footer";

export default function Team() {
  const contentData = [
    {
      title: "Welcome",
      description: "Explore our exciting content on this sticky scroll page.",
      content: <div>Welcome Content</div>,
    },
    {
      title: "Discover",
      description: "Find out more about our features and offerings.",
      content: <div>Discover Content</div>,
    },
    {
      title: "Enjoy",
      description: "Enjoy a smooth and interactive experience.",
      content: <div>Enjoy Content</div>,
    },
  ];

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <StickyScroll content={contentData} />
    </main>
    <Footer/>
    </>
  );
}