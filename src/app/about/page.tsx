import Image from "next/image";
import React from "react";
import { Timeline } from "../Ui/Timeline";
import Navbar from "../NavbarFn";
import Footer from "../Footer";
import { Badge } from "lucide-react";

export default function About() {
  const data = [
    {
      title: "The start",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-[Poppins]  text-base md:text-lg font-normal mb-8">
           Ceylon Naturalist began with people who have over 2 decades of experience in this field.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/start1.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/st.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/start3.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/start2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-[Poppins] text-base md:text-lg font-normal mb-8">
            Today we cater to people all over the world to discover the wonders of Sri Lanka.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 font-[Poppins] text-base md:text-lg font-normal mb-8">
            The story is still writing for Ceylon Naturalist. Reserve your page in our story.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/today1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/to.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/culture/dam1.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/today.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Future Goals",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-[Poppins] text-base md:text-lg font-normal mb-4">
            Striving to redefine wildlife and nature tourism in Sri Lanka with innovative and sustainable approaches.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins] dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Launch interactive birdwatching workshops for enthusiasts and beginners.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins] dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Develop eco-friendly tour packages, including carbon-offset programs.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins]   dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Partner with local communities to promote sustainable tourism and empower locals.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins]  dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Continue and improve the customer experience.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins] dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Expand knowledge about Sri Lanka to foreign countries.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 font-[Poppins] dark:text-neutral-300 text-base md:text-lg">
              <Badge size={20} color="#00ffff" strokeWidth={3} /> Establish a bird conservation fund to support research and habitat protection.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1745402131/20231202_609_Bundala_National_Park_Purperhoningzuiger_nj3tfv.jpg"
              alt="Interactive Birdwatching Workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/wildlife/Elephant (1).jpg"
              alt="Eco-Friendly Tour Packages"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1740831187/slide1_2_1_qet0pf.jpg"
              alt="Ceylon Birdspotters Mobile App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dfxolekjs/image/upload/v1745402130/20231202_648_Bundala_National_Park_Bonte_ijsvogel_gw5ugv.jpg"
              alt="Bird Conservation Fund"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <Footer />
    </>
  );
}
