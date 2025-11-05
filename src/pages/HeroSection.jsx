
// import React from 'react';

// function HeroSection(props) {
//     return (
//         <div>
//             dsjfdsbjf
//         </div>  
//     );
// }

// export default HeroSection;




// import React from 'react';

// export default function HeroWithGoogleReviews() {
//   const placeId = 'ChIJtQMtA1fw4DsRjTfj4GtmFeE'; // Example Place ID for MegaScale

//   return (
//     <section className="relative w-full h-screen flex items-center">
//       {/* Background (video or image) */}
//       {/* <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/videos/hero-bg.mp4" // replace with your own video or use background image instead
//         autoPlay
//         muted
//         loop
//         playsInline
//       /> */}
//       <img
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/about.jpg" // replace with your own image
//         alt="Hero Background"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//         {/* Left Side: Hero text */}
//         <div className="text-white max-w-xl">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">MegaScale</h1>
//           <p className="mt-4 text-lg md:text-xl opacity-90">
//             Web solutions that scale with your vision. Rated <span className="text-orange-500">4.3 ★</span> on Google!
//           </p>

//         </div>

//         {/* Right Side: Google-style info card */}
//         <div className="w-full flex justify-end">
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[250PX]">
//             {/* Google Maps Embed */}
//             {/* <iframe
//               title="MegaScale Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35290.523119620615!2d72.84654079041013!3d21.23701830225883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7ea6a03051%3A0x14e5f64d606e8c3a!2sMegaScale!5e1!3m2!1sen!2sin!4v1760509577109!5m2!1sen!2sin"
//               className="w-full h-52"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             /> */}

//             {/* Info card below map */}
//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-900">MegaScale</h2>
//                   <p className="text-sm text-gray-600 leading-snug">
//                     New Escon Plaza, 411/412, Amroli,<br />
//                     Surat, Gujarat 394107
//                   </p>
//                 </div>
//                 <a
//                   href="https://www.google.com/maps/dir/?api=1&destination=MegaScale,+Surat"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 text-sm font-medium hover:underline"
//                 >
//                   Directions
//                 </a>
//               </div>

//               {/* Rating & review info */}
//               <div className="mt-2 flex items-center text-sm text-gray-700">
//                 <span className="text-orange-500 text-base font-semibold mr-1">★</span>
//                 <span className="font-medium mr-1 text-orange-500">4.3</span>
//                 <span className="text-orange-500">★★★★★</span>
//                 <a
//                   href={`https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2 text-blue-600 hover:underline"
//                 >
//                   15 reviews
//                 </a>
//               </div>

//               {/* View larger map link */}
//               <div className="mt-2">
//                 <a
//                   href="https://www.google.com/maps/place/MegaScale,+Surat"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 text-sm hover:underline"
//                 >
//                   View larger map
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function HeroWithGoogleReviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15 - 7.5,
        y: (e.clientY / window.innerHeight) * 15 - 7.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0b132b]">
      {/* ==== Background Video with Parallax Motion ==== */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <video
          className="w-full h-full object-cover opacity-90"
          src="/file.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>

      {/* ==== Floating Particles ==== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* ==== Hero Content ==== */}
      <div className="relative z-10 container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ==== Left Section (Text) ==== */}
        <div
          className={`text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h1 className="text-start text-6xl  font-medium leading-tight mb-6">
            <span className="bg-clip-text text-[#F15124] drop-shadow-lg">
              Mega<span className='text-[#fff]'>Scale</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg text-start">
            Building scalable web experiences with next-generation technology.
            Rated <span className="text-orange-400 font-semibold">4.3 ★</span> on Google.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
           <Link
  to="/about-us"
  className="inline-block px-8 py-2 bg-[#F15124] text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
>
  Learn More
</Link>
            {/* <button className="px-8 py-3 border-2 border-white/70 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Get Started
            </button> */}
          </div>
        </div>

        {/* ==== Right Section (Google Review Card) ==== */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl py-8 px-3 w-full max-w-[320px] hover:scale-105 hover:shadow-orange-300/30 transition-all duration-500 transform">
            {/* Pin Icon + Business Info */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=MegaScale,+Surat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-start gap-3 mb-3">

                {/* Text Content */}
                <div>
                  {/* Location Icon */}
                  <div className="flex justify-center items-center mb-3">
                    <FaMapMarkerAlt className="text-xl text-[#0A1721] animate-bounce me-2" />
                    <h2 className="text-xl font-bold text-gray-800">MegaScale</h2>
                  </div>
                  <p className="text-sm text-gray-700 leading-snug mb-2">
                    New Escon Plaza, 411/412, Amroli, Surat, Gujarat 394107
                  </p>
                </div>
              </div>

            </a>

            {/* Rating Section */}
            <div className="flex items-center justify-center bg-orange-50 rounded-xl px-4 py-2 mb-4 hover:bg-orange-100 transition-all duration-300">
              {/* <span className="text-[#F15124] text-lg font-bold mr-2 animate-pulse-glow">
                ★
              </span> */}
              <span className="font-semibold text-[#F15124] mr-1">4.3</span>
              <div className="flex text-[#F15124] mr-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="animate-star-pop"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <a
                href="https://share.google/h6tyskBCUKfw7eHPu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A1721] text-sm font-medium hover:underline ml-1"
              >
                15 Reviews
              </a>
            </div>

            {/* Google CTA */}
            <a
              href="https://www.google.com/maps/place/MegaScale,+Surat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A1721] text-md font-medium hover:underline transition-all"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* ==== Animations ==== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.85; filter: brightness(1.3); }
        }
        @keyframes star-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-star-pop { animation: star-pop 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
}
