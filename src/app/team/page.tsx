"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "../Ui/StickyScrollReveal";
import Navbar from "../NavbarFn";
import Footer from "../Footer";

export default function Team() {
  const contentData = [
    {
      title: "Suneth Bashitha",
      description: (
        <div>
          <p>
            Suneth Bashitha Dilshan, still a young nature enthusiast, is co-founder of Ceylon Birdspotters 
            alongside his father, Susantha Weerappuli. Raised in a family deeply rooted in expert wildlife 
            and birdwatching experiences, Suneth’s upbringing was immersed in the wonders of nature, with 
            elephants roaming and birds chirping in the backdrop of his everyday life. Guided by his father’s 
            passion, Suneth developed into a naturalist with an exceptional ability to identify most bird 
            species in Sri Lanka.
          </p>
          <p>Beyond his personal interests, Suneth’s commitment to environmental appreciation is evident. As the operational manager of Ceylon Birdspotters, he leverages not only his naturalist skills but also his professional acumen gained from as an auditor at EY. This dual expertise showcases his versatility and capacity to excel in diverse fields. Additionally, Suneth is a member of the Field Ornithology Group of Sri Lanka (FOGSL) at the University of Colombo.</p>
          <p>His dedication to both auditing and environmental conservation reflects a unique blend of analytical precision and a profound love for nature. With the family being avid birdwatchers, Suneth’s leadership ensures that Ceylon Birdspotters thrives as a platform sharing the beauty of Sri Lanka’s birdlife with the world. Suneth embodies a harmonious convergence of professional excellence and a deep-seated passion for preserving and celebrating the natural world</p>
        </div>
      ),
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <Image
            src="/images/Suneth.jpg"
            alt="Welcome"
            width={1000}
            height={1000}
            className="mx-auto"
          />
          <p>MEET OUR TEAM</p>
        </div>
      ),
    },
    {
      title: "Susantha Weerappuli (susa)",
      description: (
        <div>
          <p>Susantha Weerappuli, a distinguished Co-founder of Ceylon Birdspotters, shares a profound connection with the untamed beauty of the wilderness, where elephants roam freely, and birds serenade the surroundings. His extensive journey began as a dedicated volunteer with the National Park Service, fostering an invaluable wealth of field knowledge encompassing diverse wildlife.</p>
          <p>A devoted life member of the Field Ornithology Group of Sri Lanka (FOGSL) at the University of Colombo, Susantha’s passion for ornithology is evident in his active involvement. Possessing a Tourist Guide Lectures License from the Tourism Development Authority of Sri Lanka, he has served as a seasoned naturalist tour guide leader for over fifteen years. Susantha has been a cornerstone for both local and foreign renowned birdwatching tour companies, contributing his expertise and enriching the experience for enthusiasts.</p>
          <p>Furthermore, his commitment extends to research initiatives, notably contributing to the biodiversity baseline survey conducted by the Department of Wildlife Conservation and the University of Colombo. Susantha Weerappuli emerges not only as a seasoned naturalist and guide but also as a fervent advocate for wildlife conservation, leaving an indelible mark on the exploration and understanding of Sri Lanka’s rich and diverse ecosystems.</p>
        </div>

      ),
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <Image
            src="/images/SUSA.jpg"
            alt="Discover"
            width={1500}
            height={1500}
            className="mx-auto"
          />
          <p></p>
        </div>
      ),
    },
    {
      title: "Enjoy",
      description: "Enjoy a smooth and interactive experience.",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Enjoy</h2>
          <Image
            src="/images/enjoy.jpg"
            alt="Enjoy"
            width={500}
            height={300}
            className="mx-auto"
          />
          <p>Enjoy Content</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <StickyScroll content={contentData} />
      </main>
      <Footer />
    </>
  );
}
