"use client";

import { IconPhoto } from "@tabler/icons-react";
import { Quote } from "lucide-react";
import React from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Were enjoyed 18 fantastic days with Susa. He's shown us all the endemic birds and many more, loads of mammals and given us an insight to a whole host of other wildlife, plants and Sri Lankan culture and life. The tour vehicle was very comfortable with air conditioning and a constant supply of water. Asela's driving was faultless and we all felt extremely safe, driving along at a relaxed pace and stopping off enroute so that Susa could show us the local wildlife. We stayed at a number of different locations, and all of the accommodation was excellent, with spacious ensuite cabins, air conditioning and fridges. Some of the accommodation had pools, which we made use of during our down-time in the afternoons. The accommodation staff we all so kind and helpful, and the food was outstanding, with lots of fresh local produce. The Hibiscus Lodge was probably our favorite, and we were lucky enough to enjoy four nights there. Susa has been a first-class guide in every sense of the word; he's thoughtful, considerate, patient, flexible and above all extremely knowledgeable. Susa's itinerary was perfect, taking in a range of wildlife and cultural sites. We really appreciated his flexibility - if someone in our small group expressed an interest in a particular thing, or a desire to experience a local delicacy, then Susa would work that into our trip. Although this was booked as predominantly a birding trip, Susa's Knowledge of Sri Lankan life and culture, and his ability to answer our questions on religion, the economy, tea production etc. really enriched our holiday. We could not have found a better guide and it has been an absolute pleasure to spend 18 days in Susa's company. We would have no hesitation in recommending Susa and Ceylon Naturalist to friends and anyone considering a wildlife trip to Sri Lanka.",
    name: "Paul Harvey & Jane Outram",
    designation: "United Kingdom (February 2025)",
  },
  {
    quote: "These 18 days have certainly been enjoyable and memorable, and so much more. Educational, informative, exciting, unforgettable, full of wonder and delight. Don't think I have ever felt so looked after, at any where we stayed. Splendid food and so well served with someone always ready to accommodate whatever you need. All in beautiful surroundings, so comfortable and relaxed, friendly and homely. Such lovely reception on arrival, With fruit juice and cleansing towels. Impeccable planning and organization, but flexible to suit the smallest request. Something mentioned in a passing comment was quietly acted on, from the willingness to accommodate any change in plan for any reason to Red Bananas, no sooner mentioned than there they are…! It is challenge to birdwatch with a group that went from total expert to virtual novice. It was always, as the novice, useful to see, and be told several times, which bird we were looking for, looking at, hearing or playing the sound of, non-of this was obviously need by the expert but essential to me. The forward planning needed to ensure we saw many birds, and certainly to satisfy our expert, was memorable. 248 species is utterly memorable. All of this I have said so far could not have been without Susa. I have learnt so much about all aspects of Sri Lankan culture, farming, land management, and in such a generous, sharing, personal way. Susa was so highly recommended to us and we will certainly be sharing that and singing his praises and that of Sr Lanka, it's nature, culture, people and remarkable world-leading care of its environment and its survival. I actually can't possibly write down how much this experience has meant to us in so many ways. My enormous heartfelt thanks to Susa and Asela and to everyone involved.",
    name: "Jane Morton",
    designation: "United Kingdom (February 2025)",
  }
];

const GOOGLE_DRIVE_LINK = "https://drive.google.com/drive/folders/1VNExEVuV0OBXxRzx_iIX4ShNPCoaluPC?usp=sharing";

const TestimonialsSection = () => {
  const openGoogleDrive = () => {
    window.open(GOOGLE_DRIVE_LINK, "_blank");
  };

  return (
    <div className="relative w-full py-16 overflow-hidden font-['Poppins',sans-serif]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/culture/clients.jpg" 
          alt="Wildlife background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Clients Say About Us
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured testimonials (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/90 rounded-lg p-6 shadow-lg relative h-full flex flex-col"
            >
              {/* Opening quote icon */}
              <div className="absolute -top-4 -left-4 text-teal-500 opacity-80">
                <Quote size={32} className="transform rotate-180" />
              </div>
              
              <div className="mb-6 relative z-10 pt-2 flex-grow">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="mt-auto">
                <p className="text-gray-900 font-bold text-sm">{testimonial.name}</p>
                <p className="text-gray-600 text-xs">{testimonial.designation}</p>
              </div>
              
              {/* Closing quote icon */}
              <div className="absolute -bottom-4 -right-4 text-teal-500 opacity-80">
                <Quote size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={openGoogleDrive}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto"
          >
            <IconPhoto className="h-5 w-5" />
            <span className="text-sm sm:text-base">Explore Our Tour History & More Reviews </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;