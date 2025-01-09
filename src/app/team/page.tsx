"use client";
import React from 'react';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Footer from "../Footer";
import Navbar from "../NavbarFn";

interface TeamMember {
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
}


const Team: React.FC = ()  => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Susantha Weerappuli (susa)',
      role: '',
      description: [
        'Susantha Weerappuli, a distinguished Co-founder of Ceylon Birdspotters, shares a profound connection with the untamed beauty of the wilderness, where elephants roam freely, and birds serenade the surroundings.',
        'His extensive journey began as a dedicated volunteer with the National Park Service, fostering an invaluable wealth of field knowledge encompassing diverse wildlife. A devoted life member of the Field Ornithology Group of Sri Lanka (FOGSL) at the University of Colombo, Susantha’s passion for ornithology is evident in his active involvement.',
        'Possessing a Tourist Guide Lectures License from the Tourism Development Authority of Sri Lanka, he has served as a seasoned naturalist tour guide leader for over fifteen years.',
        'Susantha has been a cornerstone for both local and foreign renowned birdwatching tour companies, contributing his expertise and enriching the experience for enthusiasts.',
        'Furthermore, his commitment extends to research initiatives, notably contributing to the biodiversity baseline survey conducted by the Department of Wildlife Conservation and the University of Colombo. Susantha Weerappuli emerges not only as a seasoned naturalist and guide but also as a fervent advocate for wildlife conservation, leaving an indelible mark on the exploration and understanding of Sri Lanka’s rich and diverse ecosystems.',
      ],
      imageUrl: '/images/Susa.jpg',
    },
    {
      name: 'Suneth Bashitha',
      role: '',
      description: [
        'Suneth Bashitha Dilshan, still a young nature enthusiast, is co-founder of Ceylon Birdspotters alongside his father, Susantha Weerappuli.',
        'Raised in a family deeply rooted in expert wildlife and birdwatching experiences, Suneth’s upbringing was immersed in the wonders of nature, with elephants roaming and birds chirping in the backdrop of his everyday life.',
        'Guided by his father’s passion, Suneth developed into a naturalist with an exceptional ability to identify most bird species in Sri Lanka.',
        'Beyond his personal interests, Suneth’s commitment to environmental appreciation is evident. As the operational manager of Ceylon Birdspotters, he leverages not only his naturalist skills but also his professional acumen gained from as an auditor at EY.',
        'This dual expertise showcases his versatility and capacity to excel in diverse fields. Additionally, Suneth is a member of the Field Ornithology Group of Sri Lanka (FOGSL) at the University of Colombo.',
        'His dedication to both auditing and environmental conservation reflects a unique blend of analytical precision and a profound love for nature.',
        'With the family being avid birdwatchers, Suneth’s leadership ensures that Ceylon Birdspotters thrives as a platform sharing the beauty of Sri Lanka’s birdlife with the world. Suneth embodies a harmonious convergence of professional excellence and a deep-seated passion for preserving and celebrating the natural world.',
      ],
      imageUrl: '/images/Suneth.jpg',
    },
    {
      name: 'Chamil Uddika',
      role: '',
      description: [
        'Uddika Chamil stands as a highly qualified professional in the realm of wildlife and naturalist tourism. Certified as a tourist guide lecturer by the Sri Lanka Tourism Development Authority Uddika’s educational background seamlessly aligns with his profound passion for nature. With over a decade of expertise, he has made significant contributions to wildlife and environmental conservation projects in reserves like Wathurana Swap, Alwala, and Karawita.',
        'Since 1996, Uddika has been a dedicated member of the Young Zoologist Association, where he actively served on the central management committee. Demonstrating leadership, he held the role of Vice President of the Public Relations Committee in 2001 and 2002. His commitment to research shines through his role as a research assistant in the project “Habitat Relation of Birds, Reptiles, and Amphibians in Knuckles Reserve” conducted by the Open University of Sri Lanka.',
        'Uddika’s dedication extends beyond associations, actively engaging in forest conservation with the Wanaspathi Nature Team and the Wildlife and Nature Protection Society. Noteworthy is his voluntary service as a field assistant for ECO-V, contributing to public awareness programs on environmental conservation. A member of the Field Ornithology Group of Sri Lanka since 2010, Chamil’s extensive experience and unwavering passion make him an invaluable asset to the team, enhancing the tourism experience with his profound knowledge of Sri Lanka’s diverse ecosystems.',
      ],
      imageUrl: '/images/Chamil.jpg',
    },
    {
      name: 'Kalinga Abesinghe',
      role: '',
      description: [
        'Kalinga Abeysinghe, an experienced naturalist tour guide from the captivating city of Kandy, deeply connects with the vibrant landscapes of Sri Lanka. Holding a prestigious tourist guide lecturer license from the Tourism Development Authority of Sri Lanka, Kalinga stands out as an expert in naturalist guiding..',
        'With over a decade of dedicated service to well-known tour companies, Kalinga’s wealth of experience shines through in his insightful interpretation of the country’s diverse ecosystems. His roots in the picturesque city of Kandy not only add a personal touch to his narrative but also highlight his intimate knowledge of the local terrain.',
        'Kalinga’s commitment to showcasing the beauty of Sri Lanka goes beyond his professional expertise; it reflects a genuine passion for the rich biodiversity that graces this island nation. As a naturalist tour guide, Kalinga Abeysinghe invites travelers to embark on an immersive journey, unlocking the secrets of Sri Lanka’s natural wonders under his expert guidance.',
      ],
      imageUrl: '/images/Kalinga.jpg',
    },
    {
      name: 'Tiran Abeywardana',
      role: '',
      description: [
        'Tiran’s academic journey diverged from his undergraduate studies in Archaeology, Social Science, and Mass Communication to a fulfilling career guided by an instinctive love for nature and wildlife. His transformative path began with the Young Zoologists Association of Sri Lanka, where he laid the foundation for his wildlife knowledge. Building upon this, Tiran pursued a Diploma in Biodiversity Management, honing his expertise in the intricate web of biodiversity.',
        'As a field researcher and ecologist, Tiran actively contributed to significant research projects, including the national review on Sri Lankan flora conducted by IUCN, as well as the protected area management and wildlife conservation project. His notable involvement in the biodiversity baseline survey led by the Department of Wildlife Conservation and the University of Colombo showcases his commitment to understanding and preserving the rich ecosystems of Sri Lanka.',
        'What sets Tiran apart is his unique blend of knowledge in both archaeology and biodiversity. This distinctive combination allows him to offer a different dimension of experience, guiding others through a captivating interpretation of the natural world. Tiran’s journey exemplifies a harmonious fusion of academic disciplines, a passion for wildlife, and dedicated contributions to the understanding and conservation of Sri Lanka’s diverse ecosystems.',
      ],
      imageUrl: '/images/Tiran.jpg',
    },
  ];
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Our Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <motion.div 
                    className="w-48 h-48 rounded-full overflow-hidden mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <div className="relative">
                      <motion.div
                        className="h-0.5 w-12 bg-blue-500 mx-auto mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                    <div className="text-gray-500 leading-relaxed px-4 space-y-4">
                      {member.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;