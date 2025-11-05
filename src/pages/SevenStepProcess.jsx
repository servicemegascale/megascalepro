// import React from 'react';

// const SevenStepProcess = () => {
//   const steps = [
//     {
//       id: 1,
//       title: 'Planning for desired results',
//       icon: '📝',
//       position: { top: '20%', left: '5%' }
//     },
//     {
//       id: 2,
//       title: 'Craft it on paper',
//       icon: '📄',
//       position: { top: '10%', left: '20%' }
//     },
//     {
//       id: 3,
//       title: 'Empathize with client vision',
//       icon: '👁️',
//       position: { top: '5%', left: '40%' }
//     },
//     {
//       id: 4,
//       title: 'Design optimal architecture',
//       icon: '🔗',
//       position: { top: '10%', right: '20%' }
//     },
//     {
//       id: 5,
//       title: 'Delivery with quality',
//       icon: '🚀',
//       position: { top: '20%', right: '5%' }
//     },
//     {
//       id: 6,
//       title: 'Test like gorilla',
//       icon: '🦍',
//       position: { bottom: '20%', right: '5%' }
//     },
//     {
//       id: 7,
//       title: 'Standing right behind to maintain it',
//       icon: '🤝',
//       position: { bottom: '10%', left: '20%' }
//     }
//   ];

//   return (
//     <div style={{ 
//       position: 'relative', 
//       width: '800px', 
//       height: '600px', 
//       margin: '0 auto',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       {/* Background Curve - Simplified as SVG path for the loop */}
//       <svg
//         width="100%"
//         height="100%"
//         style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
//       >
//         <path
//           d="M 100 300 Q 200 100 400 100 Q 600 100 700 300 Q 600 500 400 500 Q 200 500 100 300"
//           stroke="#FF6B35"
//           strokeWidth="4"
//           fill="none"
//           strokeDasharray="5,5"
//         />
//       </svg>

//       {/* Title */}
//       <div style={{ 
//         textAlign: 'center', 
//         marginBottom: '20px', 
//         zIndex: 2,
//         position: 'relative'
//       }}>
//         <h1 style={{ color: '#FF6B35', fontSize: '24px', margin: '0' }}>
//           We Offer A Simple Yet Effective Seven-Step Process To Build Your Dream Website.
//         </h1>
//         <p style={{ color: '#6C757D', fontSize: '14px', margin: '5px 0 0' }}>
//           How to work at Upstair Technologies
//         </p>
//       </div>

//       {/* Steps */}
//       {steps.map((step) => (
//         <div
//           key={step.id}
//           style={{
//             position: 'absolute',
//             zIndex: 2,
//             textAlign: 'center',
//             width: '150px',
//             ...step.position
//           }}
//         >
//           <div style={{
//             width: '60px',
//             height: '60px',
//             borderRadius: '50%',
//             backgroundColor: '#FF6B35',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: '0 auto 10px',
//             color: 'white',
//             fontSize: '24px'
//           }}>
//             {step.icon}
//           </div>
//           <p style={{ 
//             margin: '0', 
//             fontSize: '12px', 
//             color: '#333',
//             lineHeight: '1.2'
//           }}>
//             {step.title}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SevenStepProcess;




// import React from "react";
// import "./SevenStepSection.css"; // Create a CSS file for styles

// const steps = [
//   {
//     id: 1,
//     title: "Empathize with client vision",
//     img: "https://www.upstairtechnologies.com/images/progimg1.svg",
//   },
//   {
//     id: 2,
//     title: "Craft it on paper",
//     img: "https://www.upstairtechnologies.com/images/progimg2.svg",
//   },
//   {
//     id: 3,
//     title: "Planning for desired results",
//     img: "https://www.upstairtechnologies.com/images/progimg3.svg",
//   },
//   {
//     id: 4,
//     title: "Design optimal architecture",
//     img: "https://www.upstairtechnologies.com/images/progimg4.svg",
//   },
//   {
//     id: 5,
//     title: "Delivery with quality",
//     img: "https://www.upstairtechnologies.com/images/progimg5.svg",
//   },
//   {
//     id: 6,
//     title: "Test it like gorilla",
//     img: "https://www.upstairtechnologies.com/images/progimg6.svg",
//   },
//   {
//     id: 7,
//     title: "Standing right behind to maintain it",
//     img: "https://www.upstairtechnologies.com/images/progimg7.svg",
//   },
// ];

// export default function SevenStepSection() {
//   return (
//     <section className="seven_step_img text-center position-relative" id="seven_step_img">
//       <div className="container">
//         <div className="work-list-wrap">
//           <ul className="workflow-list">
//             {steps.map((step) => (
//               <li key={step.id} className={`list-${step.id} test`}>
//                 <span dangerouslySetInnerHTML={{ __html: step.title.replace(/\n/g, "<br>") }} />
//                 <img
//                   className="load-img"
//                   alt={step.title}
//                   width="28"
//                   height="28"
//                   src={step.img}
//                   loading="lazy"
//                 />
//               </li>
//             ))}
//           </ul>

//           {/* SVG Animation */}
//           <svg width="100%" viewBox="0 0 1156 608">
//             <path
//               d="M253.829 523.292C189.329 521.625 53.4285 483.592 25.8285 344.792C-1.77148 205.992 75.3285 125.292 117.329 102.292C167.162 68.1249 292.629 21.6916 395.829 109.292C499.029 196.892 650.829 357.125 713.829 426.292C752.495 472.958 860.029 555.392 980.829 511.792C1101.63 468.192 1135.83 362.958 1137.83 315.792C1145.5 268.792 1136.23 160.292 1037.83 102.292C1018.83 85.6249 960.629 53.7916 879.829 59.7916"
//               opacity="0.1"
//               stroke="#000"
//               fill="none"
//               strokeWidth="3"
//               id="theMotionPath"
//             ></path>

//             <image
//               id="ios-logo"
//               xlinkHref="images/logo-icon.svg"
//               y="-20"
//               x="-20"
//               path="#theMotionPath"
//               className="hide-path"
//             >
//               <animateMotion dur="11.35s" repeatCount="0" id="anim">
//                 <mpath xlinkHref="#theMotionPath"></mpath>
//               </animateMotion>
//             </image>

//             <path
//               id="highlighted-path"
//               className="highlighted-path-anime"
//               fill="none"
//               stroke="#F15124"
//               strokeWidth="3"
//               d="M253.829 523.292C189.329 521.625 53.4285 483.592 25.8285 344.792C-1.77148 205.992 75.3285 125.292 117.329 102.292C167.162 68.1249 292.629 21.6916 395.829 109.292C499.029 196.892 650.829 357.125 713.829 426.292C752.495 472.958 860.029 555.392 980.829 511.792C1101.63 468.192 1135.83 362.958 1137.83 315.792C1145.5 268.792 1136.23 160.292 1037.83 102.292C1018.83 85.6249 960.629 53.7916 879.829 59.7916"
//             ></path>
//           </svg>
//         </div>

//         {/* Mobile Slider (optional: integrate SwiperJS later) */}
//         <div className="process-slider mob">
//           <div className="slide-process">
//             {steps.map((step) => (
//               <div key={step.id} className="slide-process-content">
//                 <img className="load-img" alt={step.title} width="40" height="40" src={step.img} />
//                 <h4>{step.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useState } from 'react';

// const ProjectFlow = () => {
//   const steps = [
//     { id: 1, title: 'Empathize with client vision', icon: '👁️', position: 'bottom-left' },
//     { id: 2, title: 'Craft it on paper', icon: '📝', position: 'top-left' },
//     { id: 3, title: 'Planning for desired results', icon: '📋', position: 'top-center-left' },
//     { id: 4, title: 'Design optimal architecture', icon: '🎨', position: 'center' },
//     { id: 5, title: 'Test it like gorilla', icon: '🦍', position: 'top-right' },
//     { id: 6, title: 'Standing right behind to maintain it', icon: '🤝', position: 'bottom-right' },
//     { id: 7, title: 'Delivery with quality', icon: '🚀', position: 'bottom-center-right' }
//   ];

//   const [activeStep, setActiveStep] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true);

//   useEffect(() => {
//     if (isAnimating) {
//       const interval = setInterval(() => {
//         setActiveStep((prev) => (prev + 1) % steps.length);
//       }, 2000);

//       return () => clearInterval(interval);
//     }
//   }, [isAnimating]);

//   const toggleAnimation = () => {
//     setIsAnimating(!isAnimating);
//   };

//   return (
//     <section className="pf-section py-20 bg-white text-center overflow-hidden relative">
//       <div className="pf-container max-w-7xl mx-auto px-4">
//         <h2 className="pf-title text-3xl md:text-5xl font-bold mb-4 text-slate-800">Process To Build Your Dream Website.</h2>
        
//         <div className="pf-flow relative flex flex-col items-center mb-8">
//           <div className="pf-infinity relative w-[500px] h-[250px] md:w-[600px] md:h-[300px] mx-auto">
//             {/* Infinity path from SVG example, stroked */}
//             <svg className="pf-lines absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0" viewBox="0 0 500 250">
//               <path 
//                 d="M367.5 0.5C434.971 0.5 490 55.529 490 123C490 190.539 435.039 245.5 367.5 245.5C316.23 245.5 285.062 217.227 261 182.5C268.178 170.947 274.053 159.641 280 148.703C301.465 184.182 325.527 210.5 367.5 210.5C415.762 210.5 455 171.262 455 123C455 74.465 416.035 35.5 367.5 35.5C339.199 35.5 321.221 45.617 304.609 62.844C287.998 80.07 273.984 104.953 259.766 131.203C245.547 157.453 231.123 185.07 210 207.219C188.877 229.367 159.756 245.5 122.5 245.5C55.0293 245.5 0 190.471 0 123C0 55.461 54.9609 0.5 122.5 0.5C173.496 0.5 204.869 28.025 229 62C221.822 73.348 215.4 84.24 209.453 95.109C188.125 60.656 164.336 35.5 122.5 35.5C74.2383 35.5 35 74.738 35 123C35 171.535 73.9648 210.5 122.5 210.5C150.322 210.5 167.822 200.383 184.297 183.156C200.771 165.93 214.854 141.047 229.141 114.797C243.428 88.547 258.125 60.93 279.453 38.781C300.781 16.633 329.902 0.5 367.5 0.5" 
//                 stroke="#f97316" 
//                 strokeWidth="3" 
//                 fill="none" 
//                 strokeLinecap="round"
//               />
//             </svg>

//             {steps.map((step, index) => {
//               const isActive = index === activeStep;
//               return (
//                 <div
//                   key={step.id}
//                   className={`pf-step absolute flex flex-col items-center transition-all duration-1000 ease-out z-10 opacity-70 scale-90
//                     ${isActive ? 'opacity-100 scale-110 z-20' : ''}
//                     ${step.position === 'bottom-left' ? 'left-[80px] bottom-[40px] md:left-[100px] md:bottom-[50px]' : ''}
//                     ${step.position === 'top-left' ? 'left-[60px] top-[40px] md:left-[80px] md:top-[50px]' : ''}
//                     ${step.position === 'top-center-left' ? 'left-[140px] top-[20px] md:left-[170px] md:top-[25px]' : ''}
//                     ${step.position === 'center' ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
//                     ${step.position === 'top-right' ? 'right-[140px] top-[20px] md:right-[170px] md:top-[25px]' : ''}
//                     ${step.position === 'bottom-right' ? 'right-[60px] bottom-[40px] md:right-[80px] md:bottom-[50px]' : ''}
//                     ${step.position === 'bottom-center-right' ? 'right-[180px] bottom-[60px] md:right-[220px] md:bottom-[75px]' : ''}
//                   `}
//                 >
//                   <div className={`pf-circle w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md border-2 transition-all duration-700 mb-1
//                     ${isActive ? 'bg-gradient-to-r from-orange-500 to-red-500 border-orange-400 shadow-lg scale-110' : 'bg-white border-orange-300'}`}
//                   >
//                     <span className={`pf-icon text-lg md:text-xl transition-colors ${isActive ? 'text-white' : 'text-orange-500'}`}>
//                       {step.icon}
//                     </span>
//                   </div>
//                   <p className={`pf-step-text text-xs md:text-sm font-medium text-center max-w-[150px] px-1 transition-all ${isActive ? 'text-orange-600 font-bold drop-shadow-sm' : 'text-slate-600'}`}>
//                     {step.title}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
          
//           <button 
//             onClick={toggleAnimation} 
//             className="pf-toggle px-6 py-2 md:px-8 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md mt-4"
//           >
//             {isAnimating ? '⏸️ Pause' : '▶️ Play'}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectFlow;

// import React from 'react';

// const ProcessSteps = () => {
//   const steps = [
//     {
//       number: 1,
//       title: 'Discovery',
//       description: 'We start by understanding your goals and requirements through in-depth consultations.',
//     },
//     {
//       number: 2,
//       title: 'Planning',
//       description: 'Our team creates a detailed roadmap and strategy tailored to your needs.',
//     },
//     {
//       number: 3,
//       title: 'Execution',
//       description: 'We build and implement the solution with precision and efficiency.',
//     },
//     {
//       number: 4,
//       title: 'Review',
//       description: 'Final testing and feedback ensure everything meets your expectations.',
//     },
//      {
//       number: 5,
//       title: 'Review',
//       description: 'Final testing and feedback ensure everything meets your expectations.',
//     },
//      {
//       number: 6,
//       title: 'Review',
//       description: 'Final testing and feedback ensure everything meets your expectations.',
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Our Step-by-Step Process
//         </h2>
//         <div className="relative">
//           {/* Connecting lines for horizontal flow */}
//           <div className="absolute top-8 left-0 right-0 hidden md:block">
//             <div className="flex items-center">
//               {steps.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`flex-1 h-0.5 bg-gray-300 ${
//                     index < steps.length - 1 ? 'block' : 'hidden'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Steps */}
//           <div className="grid md:grid-cols-6 gap-8 md:gap-0">
//             {steps.map((step, index) => (
//               <div key={step.number} className="text-center md:px-4">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg">
//                     {step.number}
//                   </div>
                   
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;


// import React, { useState, useEffect, useRef } from "react";

// const ProcessSteps = () => {
//   const steps = [
//     { number: 1, title: "Discovery", description: "We start by understanding your goals and requirements through in-depth consultations." },
//     { number: 2, title: "Planning", description: "Our team creates a detailed roadmap and strategy tailored to your needs." },
//     { number: 3, title: "Execution", description: "We build and implement the solution with precision and efficiency." },
//     { number: 4, title: "Review", description: "Final testing and feedback ensure everything meets your expectations." },
//     { number: 5, title: "Launch", description: "We deploy the final solution and ensure smooth performance post-launch." },
//     { number: 6, title: "Support", description: "We provide ongoing support to maintain and improve your solution." },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);
//   const [startAnimation, setStartAnimation] = useState(false);
//   const sectionRef = useRef(null);

//   // 👀 Start animation when section enters the viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setStartAnimation(true);
//         }
//       },
//       { threshold: 0.4 } // trigger when 40% visible
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // 🔄 Animate progress through steps
//   useEffect(() => {
//     if (!startAnimation) return;
//     const timer = setInterval(() => {
//       setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [startAnimation]);

//   // 🧮 Perfectly aligned progress width (stops exactly at last circle center)
//   const totalSegments = steps.length - 1;
//   const progressWidth = totalSegments > 0 
//     ? Math.min((currentStep / totalSegments) * 90, 100)
//     : 0;

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]">
//           Our Step-by-Step Process
//         </h2>

//         <div className="relative">
//           {/* Connecting line with animated progress */}
//           <div className="absolute top-8 left-0 right-0 hidden md:block">
//             <div className="h-0.5 bg-gray-300 relative mx-8">
//               <div
//                 className="absolute top-0 left-0 h-full bg-[#004386] transition-all duration-2000 ease-in-out"
//                 style={{ width: `${progressWidth}%` }}
//               />
//             </div>
//           </div>

//           {/* Steps */}
//           <div className="grid md:grid-cols-6 gap-8 md:gap-0">
//             {steps.map((step) => (
//               <div key={step.number} className="text-center md:px-4">
//                 <div className="relative">
//                   <div
//                     className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg transition-all duration-500 ${
//                       step.number <= currentStep
//                         ? "bg-[#004386] text-white scale-105"
//                         : "bg-gray-300 text-gray-500"
//                     }`}
//                   >
//                     {step.number}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;


// import React, { useState, useEffect, useRef } from "react";
// import { Search, ClipboardList, Hammer, Eye, Rocket, LifeBuoy } from "lucide-react";

// const ProcessSteps = () => {
//   const steps = [
//     { icon: <Search size={28} />, title: "Discovery", description: "We start by understanding your goals and requirements through in-depth consultations." },
//     { icon: <ClipboardList size={28} />, title: "Planning", description: "Our team creates a detailed roadmap and strategy tailored to your needs." },
//     { icon: <Hammer size={28} />, title: "Execution", description: "We build and implement the solution with precision and efficiency." },
//     { icon: <Eye size={28} />, title: "Review", description: "Final testing and feedback ensure everything meets your expectations." },
//     { icon: <Rocket size={28} />, title: "Launch", description: "We deploy the final solution and ensure smooth performance post-launch." },
//     { icon: <LifeBuoy size={28} />, title: "Support", description: "We provide ongoing support to maintain and improve your solution." },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);
//   const [startAnimation, setStartAnimation] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setStartAnimation(true);
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!startAnimation) return;
//     const timer = setInterval(() => {
//       setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [startAnimation]);

//   const totalSegments = steps.length - 1;
//   const progressWidth =
//     totalSegments > 0 ? Math.min((currentStep / totalSegments) * 90, 100) : 0;

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#132e41]">
//           Our Step-by-Step Process
//         </h2>

//         <div className="relative">
//           <div className="absolute top-8 left-0 right-0 hidden md:block">
//             <div className="h-0.5 bg-gray-300 relative mx-8">
//               <div
//                 className="absolute top-0 left-0 h-full bg-[#f15124] transition-all duration-2000 ease-in-out"
//                 style={{ width: `${progressWidth}%` }}
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-6 gap-8 md:gap-0">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center md:px-4">
//                 <div className="relative">
//                   <div
//                     className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg transition-all duration-500 ${
//                       index + 1 <= currentStep
//                         // ? "bg-[#004386] text-[#f15124] scale-105"
//                         // ? "bg-blue-200 text-[#f15124] scale-105"
//                         // ? "bg-[#ffae98] text-[#f15124] scale-105"
//                         ? "bg-[#f15124] text-white scale-105"
//                         : "bg-gray-300 text-gray-500"
//                     }`}
//                   >
//                     {step.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;


// import React, { useState, useEffect, useRef } from "react";
// import { Search, ClipboardList, Hammer, Eye, Rocket, LifeBuoy } from "lucide-react";

// const ProcessSteps = () => {
//   const steps = [
//     {
//       icon: <Search size={24} />,
//       icon1: <Search size={20} />,
//       title: "Discovery",
//       description: "We start by understanding your goals and requirements through in-depth consultations.",
//     },
//     {
//       icon: <ClipboardList size={24} />,
//       icon1: <ClipboardList size={20} />,
//       title: "Planning",
//       description: "Our team creates a detailed roadmap and strategy tailored to your needs.",
//     },
//     {
//       icon: <Hammer size={24} />,
//       icon1: <Hammer size={20} />,
//       title: "Execution",
//       description: "We build and implement the solution with precision and efficiency.",
//     },
//     {
//       icon: <Eye size={24} />,
//       icon1: <Eye size={20} />,
//       title: "Review",
//       description: "Final testing and feedback ensure everything meets your expectations.",
//     },
//     {
//       icon: <Rocket size={24} />,
//       icon1: <Rocket size={24} />,
//       title: "Launch",
//       description: "We deploy the final solution and ensure smooth performance post-launch.",
//     },
//     {
//       icon: <LifeBuoy size={24} />,
//       icon1: <LifeBuoy size={24} />,
//       title: "Support",
//       description: "We provide ongoing support to maintain and improve your solution.",
//     },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);
//   const [startAnimation, setStartAnimation] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setStartAnimation(true);
//       },
//       { threshold: 0.4 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!startAnimation) return;
//     const timer = setInterval(() => {
//       setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [startAnimation]);

//   const totalSegments = steps.length - 1;
//   const progressWidth =
//     totalSegments > 0 ? Math.min((currentStep / totalSegments) * 90, 100) : 0;

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#132e41]">
//           Our Step-by-Step Process
//         </h2>

//         {/* 💻 Desktop Layout (Horizontal) */}
//         <div className="relative hidden md:block">
//           <div className="absolute top-8 left-0 right-0">
//             <div className="h-0.5 bg-gray-300 relative mx-8">
//               <div
//                 className="absolute top-0 left-0 h-full bg-[#f15124] transition-all duration-2000 ease-in-out"
//                 style={{ width: `${progressWidth}%` }}
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-6 gap-8 md:gap-0">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center md:px-4">
//                 <div
//                   className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
//                     index + 1 <= currentStep
//                       ? "bg-[#f15124] text-white scale-105"
//                       : "bg-gray-300 text-gray-500  scale-100"
//                   }`}
//                 >
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 📱 Mobile Layout (Vertical Timeline) */}
//         <div className="md:hidden relative mt-10">
//           {/* Vertical line */}
//           <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300">
//             <div
//               className="absolute left-0 top-0 w-1 bg-[#f15124] transition-all duration-1000 ease-in-out"
//               style={{
//                 height: `${(currentStep / steps.length) * 100}%`,
//               }}
//             ></div>
//           </div>

//           <div className="flex flex-col space-y-8 pl-12">
//             {steps.map((step, index) => (
//               <div key={index} className="relative flex items-start space-x-4">
//                 <div
//                   className={`w-14 h-7 rounded-full flex items-center  justify-center shadow-md transition-all duration-500 ${
//                     index + 1 <= currentStep
//                       ? "bg-[#f15124] text-white scale-105"
//                       : "bg-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {step.icon1}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 text-left">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm text-left">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;

// import React, { useState, useEffect, useRef } from "react";
// import { Search, ClipboardList, Hammer, Eye, Rocket, LifeBuoy } from "lucide-react";

// const ProcessSteps = () => {
//   const steps = [
//     {
//       icon: <Search size={24} />,
//       icon1: <Search size={20} />,
//       title: "Discovery",
//       description: "We start by understanding your goals and requirements through in-depth consultations.",
//     },
//     {
//       icon: <ClipboardList size={24} />,
//       icon1: <ClipboardList size={20} />,
//       title: "Planning",
//       description: "Our team creates a detailed roadmap and strategy tailored to your needs.",
//     },
//     {
//       icon: <Hammer size={24} />,
//       icon1: <Hammer size={20} />,
//       title: "Execution",
//       description: "We build and implement the solution with precision and efficiency.",
//     },
//     {
//       icon: <Eye size={24} />,
//       icon1: <Eye size={20} />,
//       title: "Review",
//       description: "Final testing and feedback ensure everything meets your expectations.",
//     },
//     {
//       icon: <Rocket size={24} />,
//       icon1: <Rocket size={20} />,
//       title: "Launch",
//       description: "We deploy the final solution and ensure smooth performance post-launch.",
//     },
//     {
//       icon: <LifeBuoy size={24} />,
//       icon1: <LifeBuoy size={20} />,
//       title: "Support",
//       description: "We provide ongoing support to maintain and improve your solution.",
//     },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);
//   const [startAnimation, setStartAnimation] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setStartAnimation(true);
//       },
//       { threshold: 0.4 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!startAnimation) return;
//     const timer = setInterval(() => {
//       setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [startAnimation]);

//   const totalSegments = steps.length - 1;
//   const progressWidth =
//     totalSegments > 0 ? Math.min((currentStep / totalSegments) * 90, 100) : 0;

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#132e41]">
//           Our Step-by-Step Process
//         </h2>

//         {/* 💻 Desktop Layout (Horizontal) */}
//         <div className="relative hidden md:block">
//           <div className="absolute top-8 left-0 right-0">
//             <div className="h-0.5 bg-gray-300 relative mx-8">
//               <div
//                 className="absolute top-0 left-0 h-full bg-[#f15124] transition-all duration-2000 ease-in-out"
//                 style={{ width: `${progressWidth}%` }}
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-6 gap-8 md:gap-0">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center md:px-4">
//                 <div
//                   className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
//                     index + 1 <= currentStep
//                       ? "bg-[#f15124] text-white scale-105"
//                       : "bg-gray-300 text-gray-500  scale-100"
//                   }`}
//                 >
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 📱 Mobile Layout (Vertical Timeline) */}
//         <div className="md:hidden relative mt-10">
//           {/* Vertical line */}
//           <div className="absolute left-14 top-0 bottom-0 w-0.5 bg-gray-300">
//             <div
//               className="absolute left-0 top-0 w-0.5 bg-[#f15124] transition-all duration-2000 ease-in-out"
//               style={{
//                 height: `${(currentStep / steps.length) * 100}%`,
//               }}
//             ></div>
//           </div>

//           <div className="flex flex-col space-y-10 pl-8">
//             {steps.map((step, index) => (
//               <div key={index} className="relative flex items-center space-x-3">
//                 <div
//                   className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-500 flex-shrink-0 ${
//                     index + 1 <= currentStep
//                       ? "bg-[#f15124] text-white scale-105"
//                       : "bg-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {step.icon1}
//                 </div>
//                 <div className="min-w-0">
//                   <h3 className="text-lg font-semibold text-gray-800 text-left">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm text-left">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSteps;

import React, { useState, useEffect, useRef } from "react";
import { Search, ClipboardList, Hammer, Eye, Rocket, LifeBuoy ,Code ,MessageCircleMore } from "lucide-react";

const ProcessSteps = () => {

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  
  const steps = [
    {
      icon: <Search size={24} />,
      icon1: <Search size={20} />,
      title: "Discovery",
      description: "We start by understanding your goals and requirements.",
    },
    {
      icon: <ClipboardList size={24} />,
      icon1: <ClipboardList size={20} />,
      title: "Planning",
      description: "Our team creates a detailed roadmap and strategy tailored to your needs.",
    },
    {
      icon: <Code  size={24} />,
      icon1: <Code  size={20} />,
      title: "Execution",
      description: "We build and implement the solution with precision and efficiency.",
    },
    {
      icon: <Eye size={24} />,
      icon1: <Eye size={20} />,
      title: "Review",
      description: "Final testing and feedback ensure everything meets your expectations.",
    },
    {
      icon: <Rocket size={24} />,
      icon1: <Rocket size={20} />,
      title: "Launch",
      description: "We deploy the final solution and ensure smooth performance post-launch.",
    },
    {
      icon: <MessageCircleMore size={24} />,
      icon1: <MessageCircleMore size={20} />,
      title: "Support",
      description: "We provide ongoing support to maintain and improve your solution.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(timer);
  }, [startAnimation]);

  const totalSegments = steps.length - 1;
  const progressWidth =
    totalSegments > 0 ? Math.min((currentStep / totalSegments) * 90, 100) : 0;

  return (
    <section ref={sectionRef} className="py-12 px-8 ">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]">
          Our Step-by-Step Process
        </h2>

        {/* 💻 Desktop Layout (Horizontal) */}
        <div className="relative hidden lg:block">
          <div className="absolute top-8 left-0 right-0">
            <div className="h-0.5 bg-gray-300 relative mx-8">
              <div
                className="absolute top-0 left-0 h-full bg-[#f15124] transition-all duration-2000 ease-in-out"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-6 gap-0">
            {steps.map((step, index) => (
              <div key={index} className="text-center px-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-md   scale-105 hover:scale-110 transition-all duration-500 ${
                    index + 1 <= currentStep
                      ? "bg-[#f15124] text-white scale-105 "
                      : "bg-gray-300 text-gray-500  "
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 📱 Mobile & Tablet Layout (Vertical Timeline) */}
        <div className="lg:hidden relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-9 md:left-18 top-0 bottom-0 w-0.5 bg-gray-300">
            <div
              className="absolute left-0 top-0 w-0.5 bg-[#f15124] transition-all duration-2000 ease-in-out"
              style={{
                height: `${(currentStep / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="flex flex-col space-y-10 pl-4 md:pl-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start md:items-center space-x-2 mb-5 md:space-x-4">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-500 flex-shrink-0 ${
                    index + 1 <= currentStep
                      ? "bg-[#f15124] text-white scale-105"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {step.icon1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-left mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;