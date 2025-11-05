import React from "react";
import { motion } from "framer-motion";

// Example: Replace with your actual logo paths
const partnersLogos = [
  { id: 1, src: "/i1.avif", alt: "Client 1" },
  { id: 2, src: "/i2.avif", alt: "Client 2" },
  { id: 3, src: "/i3.avif", alt: "Client 3" },
  { id: 4, src: "/i4.avif", alt: "Client 4" },
  { id: 5, src: "/i5.avif", alt: "Client 5" },
  { id: 6, src: "/i6.avif", alt: "Client 6" },
  { id: 7, src: "/i7.avif", alt: "Client 7" },
  { id: 8, src: "/i8.avif", alt: "Client 8" },
  { id: 9, src: "/i9.avif", alt: "Client 9" },
  { id: 11, src: "/i11.avif", alt: "Client 11" },
  { id: 12, src: "/i12.avif", alt: "Client 12" },
  { id: 13, src: "/i13.avif", alt: "Client 13" },
  { id: 14, src: "/i14.avif", alt: "Client 14" },
  // { id: 15, src: "/i15.avif", alt: "Client 15" },
  // { id: 16, src: "/i16.avif", alt: "Client 16" },
  // { id: 17, src: "/i17.avif", alt: "Client 17" },
  // { id: 18, src: "/i18.avif", alt: "Client 18" },
  // { id: 19, src: "/i19.avif", alt: "Client 19" },
  // { id: 20, src: "/c20.jpg", alt: "Client 20" },
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
              className="object-contain w-full h-full rounded-2xl border border-[#0A1721] hover:border-[#F15124] hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CompanyPartners = () => {
  const row1 = partnersLogos.slice(0, 7);
  const row2 = partnersLogos.slice(7, 14);

  return (
    <div className="bg-blue-50 py-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721] text-center">
          Associate Partners
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

export default CompanyPartners;
