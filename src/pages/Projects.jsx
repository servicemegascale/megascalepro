// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// // Example: Replace these URLs with your actual client logo URLs
// const clientLogos = [
//   { id: 1, src: '/c1.jpg', alt: 'Client 1' },
//   { id: 2, src: '/c2.jpg', alt: 'Client 2' },
//   { id: 3, src: '/c3.jpg', alt: 'Client 3' },
//   { id: 4, src: '/c4.jpg', alt: 'Client 4' },
//   { id: 5, src: '/c5.jpg', alt: 'Client 5' },
//   { id: 6, src: '/c6.jpg', alt: 'Client 6' },
//   { id: 7, src: '/c7.jpg', alt: 'Client 7' },
//   { id: 8, src: '/c8.jpg', alt: 'Client 8' },
//   { id: 9, src: '/c9.jpg', alt: 'Client 9' },
//   { id: 10, src: '/c10.jpg', alt: 'Client 10' },
//   { id: 11, src: '/c11.jpg', alt: 'Client 11' },
//   { id: 12, src: '/c12.jpg', alt: 'Client 12' },
//   { id: 13, src: '/c13.jpg', alt: 'Client 13' },
//   { id: 14, src: '/c14.jpg', alt: 'Client 14' },
//   { id: 15, src: '/c15.jpg', alt: 'Client 15' },
//   { id: 16, src: '/c16.jpg', alt: 'Client 16' },
//   { id:17, src: '/c17.jpg', alt: 'Client 17' },
//   { id: 18, src: '/c18.jpg', alt: 'Client 18' },
//   { id: 19, src: '/c19.jpg', alt: 'Client 19' },
//   { id: 20, src: '/c20.jpg', alt: 'Client 20' },
// ];

// const ProjectsGallery = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
//   const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

//   return (
//     <div className="py-12 bg-blue-50  px-8">
//       <div className="container mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]">
//           Our Clients
//         </h1>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {clientLogos.map((client) => (
//             <div
//               key={client.id}
//               className="bg-white flex rounded-[15px]  items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer h-[190px]"
//             >
//               <img
//                 src={client.src}
//                 alt={client.alt}
//                 className="rounded-[15px] "
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProjectsGallery;



import React from "react";
import { motion } from "framer-motion";

// Example: Replace with your actual logo paths
const clientLogos = [
  { id: 1, src: "/c1.jpg", alt: "Client 1" },
  { id: 2, src: "/c2.jpg", alt: "Client 2" },
  { id: 3, src: "/c3.jpg", alt: "Client 3" },
  { id: 4, src: "/c4.jpg", alt: "Client 4" },
  { id: 5, src: "/c5.jpg", alt: "Client 5" },
  { id: 6, src: "/c6.jpg", alt: "Client 6" },
  { id: 7, src: "/c7.jpg", alt: "Client 7" },
  { id: 8, src: "/c8.jpg", alt: "Client 8" },
  { id: 9, src: "/c9.jpg", alt: "Client 9" },
  // { id: 10, src: "/c10.jpg", alt: "Client 10" },
  { id: 11, src: "/c11.jpg", alt: "Client 11" },
  { id: 12, src: "/c12.jpg", alt: "Client 12" },
  { id: 13, src: "/c13.jpg", alt: "Client 13" },
  { id: 14, src: "/c14.jpg", alt: "Client 14" },
  { id: 15, src: "/c15.jpg", alt: "Client 15" },
  { id: 16, src: "/c16.jpg", alt: "Client 16" },
  { id: 17, src: "/c17.jpg", alt: "Client 17" },
  { id: 18, src: "/c18.jpg", alt: "Client 18" },
  { id: 19, src: "/c19.jpg", alt: "Client 19" },
  { id: 20, src: "/c20.jpg", alt: "Client 20" },
];

const MarqueeRow = ({ logos, direction = "left", speed = 30 }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((client, index) => (
          <div
            key={index}
            className="border border-[#0A1721] hover:border-[#F15124] p-[3px] flex-shrink-0 w-[150px] h-[150px] bg-white rounded-2xl flex items-center justify-center  transition-transform duration-300"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="object-contain w-full h-full rounded-xl border border-[#0A1721] hover:border-[#F15124] hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectsGallery = () => {
  const row1 = clientLogos.slice(0, 10);
  const row2 = clientLogos.slice(10, 20);

  return (
    <div className="bg-blue-50 py-12">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721] text-center">
          Our Clients
        </h1>

        {/* Row 1 (Left to Right) */}
        <div className="mb-8 group">
          <MarqueeRow logos={row1} direction="left" speed={80} />
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="group">
          <MarqueeRow logos={row2} direction="right" speed={80} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
