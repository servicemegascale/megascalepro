import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "Mahita Gupta", title: "Co-founder & CEO", imageUrl: "https://www.shutterstock.com/image-photo/fashion-industry-black-woman-designer-600nw-2235667567.jpg" },
  { id: 2, name: "Jane Smith", title: "Marketing Director", imageUrl: "https://people-usa.org/wp-content/uploads/2024/04/SteveMiccio-7718-B-2x3F-1-scaled-1707x1707.jpg" },
  { id: 3, name: "John Doe", title: "CTO", imageUrl: "https://framerusercontent.com/images/1iGJRdNCbJ91HzNmMjmdmaEv2E.webp" },
  { id: 4, name: "Alice Johnson", title: "Lead Developer", imageUrl: "https://st4.depositphotos.com/20363444/83824/i/450/depositphotos_838245384-stock-photo-young-african-american-woman-smiles.jpg" },
  { id: 5, name: "Robert Brown", title: "Product Manager", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/067/861/783/small/a-portrait-of-a-young-man-with-a-beard-is-taken-in-front-of-a-modern-building-creating-a-professional-aesthetic-photo.jpg" },
  { id: 6, name: "Emily Davis", title: "UX Designer", imageUrl: "https://t4.ftcdn.net/jpg/03/96/16/79/360_F_396167959_aAhZiGlJoeXOBHivMvaO0Aloxvhg3eVT.jpg" },
  { id: 7, name: "Michael Wilson", title: "Data Scientist", imageUrl: "https://www.bu.edu/files/2019/02/Robin-DiAngelo-photo.jpg" },
  { id: 8, name: "Sarah Miller", title: "HR Manager", imageUrl: "https://media.istockphoto.com/id/495353929/photo/living-a-happy-life.jpg?s=612x612&w=0&k=20&c=Wl_4QWO5XMWoDbXLtiUyHPGFAptlkVcN7Ui-F5QjLzw=" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const MeetTheTeam = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto-scroll effect (only on mobile)
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const container = scrollRef.current;
    let index = 0;

    const scrollInterval = setInterval(() => {
      index = (index + 1) % teamMembers.length;
      const cardWidth = container.clientWidth; // scroll width = container width
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 2500); // scroll every 2.5 seconds

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  return (
    <section className="px-8 py-16 bg-[#0A1721] text-white relative overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-white text-center"
      >
        Meet The Team
      </motion.h1>

      {/* Team Display */}
      {isMobile ? (
        // 🔹 Mobile: Horizontal scroll carousel
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 w-full snap-center"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                variants={cardVariants}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-[#0A1721]/70 via-transparent">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-300">{member.title}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-700/50 group-hover:shadow-[0_0_20px_#1d4ed8aa] transition-all duration-500"></div>
              </motion.div>
            </div>
          ))}
        </div>
      ) : (
        // 🔹 Desktop: Normal grid layout
        <motion.div
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              variants={cardVariants}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-[#0A1721]/70 via-transparent">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-gray-300">{member.title}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-700/50 group-hover:shadow-[0_0_20px_#1d4ed8aa] transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default MeetTheTeam;
