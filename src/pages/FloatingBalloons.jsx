// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const balloonsData = [
//   { id: 1, label: "AI Services", color: "from-slate-700 to-slate-900" },
//   { id: 2, label: "DevOps & Cloud Hosting", color: "from-purple-800 to-slate-900" },
//   { id: 3, label: "MVP & Product Development", color: "from-blue-800 to-slate-900" },
//   { id: 4, label: "SaaS Solutions", color: "from-indigo-900 to-slate-900" },
//   { id: 5, label: "Prototyping & UI/UX", color: "from-green-700 to-slate-900" },
//   { id: 6, label: "2D & 3D Game Development", color: "from-yellow-700 to-slate-900" },
//   { id: 7, label: "Web Development", color: "from-cyan-800 to-slate-900" },
//   { id: 8, label: "Mobile App Development", color: "from-pink-700 to-slate-900" },
// ];

// const FloatingBalloons = () => {
//   const [balloons, setBalloons] = useState(balloonsData);

//   const handleBlast = (id) => {
//     setBalloons((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <div
//       className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//         AI-Powered Digital
//       </h1>
//       <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
//         Solutions Tailored for You
//       </h2>

//       <div className="absolute inset-0 pointer-events-none">
//         <AnimatePresence>
//           {balloons.map((b) => (
//             <motion.div
//               key={b.id}
//               className={`absolute flex items-center justify-center text-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${b.color} text-white font-semibold cursor-pointer pointer-events-auto shadow-lg`}
//               style={{
//                 left: `${Math.random() * 80 + 10}%`,
//                 top: `${Math.random() * 70 + 10}%`,
//               }}
//               whileHover={{ scale: 1.1 }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 2, -2, 0],
//                 transition: { duration: 4 + Math.random() * 3, repeat: Infinity },
//               }}
//               exit={{
//                 scale: [1, 1.3, 0],
//                 opacity: [1, 0],
//                 transition: { duration: 0.5 },
//               }}
//               onClick={() => handleBlast(b.id)}
//             >
//               {b.label}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default FloatingBalloons;





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const balloonsData = [
//   { id: 1, label: "AI Services", color: "from-slate-700 to-slate-900" },
//   { id: 2, label: "DevOps & Cloud", color: "from-purple-800 to-slate-900" },
//   { id: 3, label: "MVP Development", color: "from-blue-800 to-slate-900" },
//   { id: 4, label: "SaaS Solutions", color: "from-indigo-900 to-slate-900" },
//   { id: 5, label: "UI/UX Design", color: "from-green-700 to-slate-900" },
//   { id: 6, label: "Game Dev", color: "from-yellow-700 to-slate-900" },
//   { id: 7, label: "Web Development", color: "from-cyan-800 to-slate-900" },
//   { id: 8, label: "Mobile Apps", color: "from-pink-700 to-slate-900" },
// ];

// const FloatingBalloons = () => {
//   const [balloons, setBalloons] = useState([]);

//   // Generate non-overlapping positions
//   const generatePosition = (existingPositions) => {
//     const minDistance = 25; // minimum distance between balloons
//     let attempts = 0;
//     let position;

//     while (attempts < 50) {
//       position = {
//         x: Math.random() * 70 + 10, // 10% to 80%
//         y: Math.random() * 60 + 10, // 10% to 70%
//       };

//       const hasOverlap = existingPositions.some((pos) => {
//         const distance = Math.sqrt(
//           Math.pow(pos.x - position.x, 2) + Math.pow(pos.y - position.y, 2)
//         );
//         return distance < minDistance;
//       });

//       if (!hasOverlap) {
//         return position;
//       }
//       attempts++;
//     }

//     return position;
//   };

//   // Initialize balloons with non-overlapping positions
//   useEffect(() => {
//     const positions = [];
//     const initialBalloons = balloonsData.map((b) => {
//       const pos = generatePosition(positions);
//       positions.push(pos);
//       return { ...b, position: pos };
//     });
//     setBalloons(initialBalloons);
//   }, []);

//   const handleBlast = (id) => {
//     setBalloons((prev) => prev.filter((b) => b.id !== id));

//     // Respawn balloon after 2 seconds
//     setTimeout(() => {
//       const blasted = balloonsData.find((b) => b.id === id);
//       const currentPositions = balloons
//         .filter((b) => b.id !== id)
//         .map((b) => b.position);
//       const newPosition = generatePosition(currentPositions);

//       setBalloons((prev) => [...prev, { ...blasted, position: newPosition }]);
//     }, 2000);
//   };

//   return (
//     <div
//       className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative z-10 drop-shadow-2xl">
//         AI-Powered Digital
//       </h1>
//       <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 relative z-10 drop-shadow-2xl">
//         Solutions Tailored for You
//       </h2>

//       <div className="absolute inset-0 pointer-events-none">
//         <AnimatePresence>
//           {balloons.map((b) => (
//             <motion.div
//               key={b.id}
//               className={`absolute flex items-center justify-center text-center w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br ${b.color} text-white font-bold cursor-pointer pointer-events-auto shadow-2xl border-4 border-white/30`}
//               style={{
//                 left: `${b.position.x}%`,
//                 top: `${b.position.y}%`,
//               }}
//               whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 2, -2, 0],
//                 transition: { duration: 4 + Math.random() * 3, repeat: Infinity },
//               }}
//               exit={{
//                 scale: [1, 1.5, 0],
//                 opacity: [1, 0],
//                 rotate: 360,
//                 transition: { duration: 0.6 },
//               }}
//               onClick={() => handleBlast(b.id)}
//             >
//               <span className="text-base md:text-xl leading-tight px-4 drop-shadow-lg">
//                 {b.label}
//               </span>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default FloatingBalloons;






















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // ✅ for navigation

// const balloonsData = [
//   { id: 1, label: "AI Services", link: "/ai-services" },
//   { id: 2, label: "DevOps & Cloud Hosting", link: "/devops" },
//   { id: 3, label: "MVP & Product Development", link: "/mvp" },
//   { id: 4, label: "SaaS Solutions", link: "/saas" },
//   { id: 5, label: "Prototyping & UI/UX", link: "/ui-ux" },
//   { id: 6, label: "2D & 3D Game Development", link: "/game-dev" },
//   { id: 7, label: "Web Development", link: "/web-dev" },
//   { id: 8, label: "Mobile App Development", link: "/mobile-dev" },
// ];

// const bubbleColors = [
//   "rgba(255,255,255,0.06)",
//   "rgba(255,255,255,0.08)",
//   "rgba(255,255,255,0.05)",
//   "rgba(255,255,255,0.09)",
//   "rgba(255,255,255,0.07)",
//   "rgba(255,255,255,0.06)",
//   "rgba(255,255,255,0.08)",
//   "rgba(255,255,255,0.05)",
// ];

// const FloatingBalloons = () => {
//   const [positions, setPositions] = useState([]);
//   const [blasted, setBlasted] = useState([]); // store which balloons are popped
//   const navigate = useNavigate();

//   useEffect(() => {
//     const newPositions = balloonsData.map(() => ({
//       top: `${Math.random() * 60 + 10}%`,
//       left: `${Math.random() * 70 + 10}%`,
//       delay: Math.random() * 2,
//     }));
//     setPositions(newPositions);
//   }, []);

//   // 💥 When balloon is clicked
//   const handleBlast = (b) => {
//     setBlasted((prev) => [...prev, b.id]);
//     setTimeout(() => {
//       navigate(b.link); // redirect after animation
//     }, 600); // wait for blast animation to finish
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Center Heading */}
//       <div className="z-10">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
//           AI-Powered Digital
//         </h1>
//         <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
//           Solutions Tailored for You
//         </h2>
//       </div>

//       {/* Floating & Blasting Bubbles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <AnimatePresence>
//           {balloonsData.map((b, i) =>
//             !blasted.includes(b.id) ? (
//               <motion.div
//                 key={b.id}
//                 className="absolute flex items-center justify-center rounded-full pointer-events-auto cursor-pointer"
//                 style={{
//                   width: "10rem",
//                   height: "10rem",
//                   top: positions[i]?.top,
//                   left: positions[i]?.left,
//                   background: bubbleColors[i % bubbleColors.length],
//                   border: "1px solid rgba(255,255,255,0.15)",
//                   boxShadow:
//                     "inset 0 0 25px rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.8)",
//                   backdropFilter: "blur(10px)",
//                   WebkitBackdropFilter: "blur(10px)",
//                 }}
//                 animate={{
//                   y: [0, -25, 0, 20, 0],
//                   rotate: [0, 2, -2, 0],
//                 }}
//                 transition={{
//                   duration: 10 + Math.random() * 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: positions[i]?.delay,
//                 }}
//                 whileHover={{
//                   scale: 1.15,
//                   transition: { duration: 0.6 },
//                 }}
//                 exit={{
//                   scale: [1, 1.3, 0],
//                   opacity: [1, 0],
//                   transition: { duration: 0.6, ease: "easeInOut" },
//                 }}
//                 onClick={() => handleBlast(b)}
//               >
//                 {/* Inner Glass Gradient */}
//                 <div
//                   className="absolute inset-0 rounded-full"
//                   style={{
//                     background:
//                       "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.35), rgba(0,0,0,0.1) 70%)",
//                     mixBlendMode: "screen",
//                   }}
//                 ></div>

//                 {/* Reflection highlight */}
//                 <div
//                   className="absolute w-10 h-10 rounded-full opacity-70"
//                   style={{
//                     top: "15%",
//                     left: "20%",
//                     background:
//                       "radial-gradient(circle, rgba(255,255,255,0.9), transparent 60%)",
//                     filter: "blur(4px)",
//                   }}
//                 ></div>

//                 {/* Text */}
//                 <span className="z-10 text-sm md:text-base font-bold text-white text-center px-2 drop-shadow-lg">
//                   {b.label}
//                 </span>
//               </motion.div>
//             ) : null
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default FloatingBalloons;

































import React, { useState, useEffect } from 'react';

const AIServicesHero = () => {
  const [stars, setStars] = useState([]);
  const [blastingBubble, setBlastingBubble] = useState(null);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []); 

  const services = [
  {
    title: 'Ecommerce Services',
    size: 'medium',
    color: 'from-blue-500/20 to-cyan-500/20',
    position: { top: '45%', left: '15%' },
    url: '/services/EcommerceServices'
  },
  { 
    title: 'Web Development', 
    size: 'large', 
    color: 'from-blue-500/20 to-indigo-500/20', 
    position: { top: '40%', right: '10%' }, 
    url: '/services/webdevleopment' 
  },
  { 
    title: 'Mobile Development', 
    size: 'large', 
    color: 'from-green-500/20 to-lime-500/20', 
    position: { top: '50%', left: '45%' }, 
    url: '/services/MobileAppDevelopment' 
  },
  { 
    title: 'Software Development', 
    size: 'large', 
    color: 'from-purple-500/20 to-fuchsia-500/20', 
    position: { top: '90%', right: '10%' }, 
    url: '/services/softwareDevelopment' 
  },
  { 
    title: 'iOS App Development', 
    size: 'large', 
    color: 'from-teal-500/20 to-emerald-500/20', 
    position: { top: '100%', left: '20%' }, 
    url: '/services/ios' 
  },
  { 
    title: 'Digital Marketing', 
    size: 'large', 
    color: 'from-orange-500/20 to-amber-500/20', 
    position: { top: '90%', left: '45%' }, 
    url: '/services/marketing' 
  },
  { 
    title: 'Android App Development', 
    size: 'large', 
    color: 'from-cyan-500/20 to-sky-500/20', 
    position: { top: '62%', right: '22%' }, 
    url: '/services/Android-app' 
  }
];



  const getBubbleSize = (size) => {
    switch(size) {
      case 'small': return 'w-32 h-32';
      case 'medium': return 'w-40 h-40';
      case 'large': return 'w-44 h-44';
      default: return 'w-40 h-40';
    }
  };

  const handleBubbleClick = (index, url) => {
    setBlastingBubble(index);
    
    // Blast animation complete thaya pachi redirect
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Main Content */}

<div className="z-10 text-center ">
         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-20 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
           AI-Powered IT Services
        </h1>
         {/* <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
           Solutions Tailored for You
         </h2> */}
       </div>
      
      
      {/* Floating Bubbles */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute ${getBubbleSize(service.size)} cursor-pointer group`}
          style={{
            ...service.position,
            transform: 'translate(-50%, -50%)',
            zIndex: blastingBubble === index ? 100 : 20
          }}
          onClick={() => handleBubbleClick(index, service.url)}
        >
          <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${service.color} backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] ${blastingBubble === index ? 'animate-blast' : 'animate-float'}`}
            style={{
              animationDelay: blastingBubble === index ? '0s' : `${index * 0.3}s`,
              animationDuration: blastingBubble === index ? '0.6s' : `${6 + index * 0.5}s`
            }}
          >
            {/* Glossy highlight */}
            <div className="absolute top-4 left-6 w-12 h-12 bg-white/40 rounded-full blur-xl" />
            <div className="absolute top-3 left-5 w-8 h-8 bg-white/60 rounded-full blur-md" />
            
            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span className="text-white font-bold text-center text-sm md:text-base leading-tight">
                {service.title}
              </span>
            </div>
          </div>

          {/* Blast Particles */}
          {blastingBubble === index && (
            <>
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-particle"
                  style={{
                    animationDelay: '0s',
                    '--angle': `${i * 30}deg`
                  }}
                />
              ))}
            </>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) translateX(0px);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-25px) translateX(10px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-35px) translateX(-5px);
          }
          75% {
            transform: translate(-50%, -50%) translateY(-20px) translateX(-10px);
          }
        }
        
        @keyframes blast {
          0% {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
          }
          30% {
            transform: scale(1.2);
            opacity: 0.9;
            filter: blur(2px);
          }
          60% {
            transform: scale(1.5);
            opacity: 0.4;
            filter: blur(5px);
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
            filter: blur(10px);
          }
        }
        
        @keyframes particle {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-100px) scale(0);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-blast {
          animation: blast ease-out forwards;
        }
        
        .animate-particle {
          animation: particle 0.6s ease-out forwards;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      `}</style>
    </div>
  );
};

export default AIServicesHero;  