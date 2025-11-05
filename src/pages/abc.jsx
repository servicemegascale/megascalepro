// import React, { useState, useEffect } from 'react';
// import {
//     Cloud,
//     Shield,
//     TrendingUp,
//     Zap,
//     Globe,
//     Award,
//     Server,
//     Database,
//     Lock,
//     Headphones,
//     Cpu,
//     Layers,
//     BarChart3,
//     Users,
//     Target,
//     Activity,
//     CheckCircle,
//     Settings
// } from 'lucide-react';
// // import data from '../data/service.json'; // ✅ Correct way to import static JSON
// import data from '../data/service.js';
// import ReactMarkdown from "react-markdown";

// const CloudServicesPage = () => {
//     const [hoveredPlatform, setHoveredPlatform] = useState(null);
//     const [hoveredFeature, setHoveredFeature] = useState(null);
//     const [hoveredValue, setHoveredValue] = useState(null);
//     const [serviceData, setServiceData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Icon mapping
//     const iconMap = {
//         cloud: Cloud,
//         'cloud-network': Cloud,
//         oracle: Database,
//         amazon: Server,
//         micro: Settings,
//         dicloud: Layers,
//         open: Globe,
//         tile: Target,
//         shield: Shield,
//         stretching: Activity,
//         '24-7': Headphones,
//         analytics: BarChart3,
//         efficiency: Zap,
//         agreement: CheckCircle,
//         'world-creativity-and-innovation-day': Globe
//     };

//     // ✅ Directly use imported data
//     useEffect(() => {
//         if (data && data.services && data.services.length > 0) {
//             setServiceData(data.services[0]);
//         }
//         setLoading(false);
//     }, []);

//     const getIcon = (iconName) => iconMap[iconName] || Cloud;

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff' }}>
//                 <div className="text-2xl font-bold" style={{ color: '#F15124' }}>
//                     Loading...
//                 </div>
//             </div>
//         );
//     }

//     if (!serviceData) {
//         return (
//             <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff' }}>
//                 <div className="text-2xl font-bold" style={{ color: '#F15124' }}>
//                     Error loading data
//                 </div>
//             </div>
//         );
//     }

//     const { cloudPlatforms, cloudFeatures, businessValues } = serviceData;

//     return (
//         <div className="min-h-screen" style={{ backgroundColor: '#fff' }}>
//             {/* Section 1: Cloud Platforms */}
//             {/* <section className="py-20 px-4">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-5xl font-bold mb-4" style={{ color: '#000' }}>
//                             Cloud Platforms
//                         </h2>
//                         <p className="text-xl" style={{ color: '#000', opacity: 0.7 }}>
//                             Multi-cloud expertise to power your business
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {cloudPlatforms.map((platform, idx) => {
//                             const IconComponent = getIcon(platform.icon);
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="group relative"
//                                     onMouseEnter={() => setHoveredPlatform(idx)}
//                                     onMouseLeave={() => setHoveredPlatform(null)}
//                                     style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
//                                 >
//                                     <div
//                                         className="relative h-full bg-white rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
//                                         style={{
//                                             boxShadow:
//                                                 hoveredPlatform === idx
//                                                     ? '0 25px 50px -12px rgba(241, 81, 36, 0.5)'
//                                                     : '0 10px 30px rgba(0,0,0,0.1)'
//                                         }}
//                                     >
//                                         <div className="relative z-10">
//                                             <div
//                                                 className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
//                                                 style={{ backgroundColor: '#F15124' }}
//                                             >
//                                                 <IconComponent className="w-8 h-8 text-white" />
//                                             </div>

//                                             <h3
//                                                 className="text-2xl font-bold mb-3 transition-colors"
//                                                 style={{ color: hoveredPlatform === idx ? '#F15124' : '#000' }}
//                                             >
//                                                 {platform.name}
//                                             </h3>

//                                             <p style={{ color: '#000', opacity: 0.8 }} className="leading-relaxed">
//                                                 {platform.description}
//                                             </p>
//                                         </div>

//                                         <div
//                                             className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${hoveredPlatform === idx ? 'scale-x-100' : 'scale-x-0'
//                                                 }`}
//                                             style={{ backgroundColor: '#F15124' }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section> */}


// <section className="py-20 px-4 flex items-center justify-center">
//   <div className="max-w-7xl mx-auto w-full text-center">
//     {/* ===== Heading Section ===== */}
//     <div className="text-center mb-16">
//       <h2 className="text-5xl font-bold mb-4" style={{ color: '#000' }}>
//         Cloud Platforms
//       </h2>
//       <p className="text-xl" style={{ color: '#000', opacity: 0.7 }}>
//         Multi-cloud expertise to power your business
//       </p>
//     </div>

//     {/* ===== Cards Grid ===== */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//       {cloudPlatforms.map((platform, idx) => {
//         const IconComponent = getIcon(platform.icon);
//         return (
//           <div
//             key={idx}
//             className="group relative flex justify-center items-center"
//             onMouseEnter={() => setHoveredPlatform(idx)}
//             onMouseLeave={() => setHoveredPlatform(null)}
//             style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
//           >
//             <div
//               className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
//               style={{
//                 boxShadow:
//                   hoveredPlatform === idx
//                     ? '0 25px 50px -12px rgba(241, 81, 36, 0.5)'
//                     : '0 10px 30px rgba(0,0,0,0.1)',
//                 minHeight: '300px', // ensures equal height cards
//               }}
//             >
//               <div className="relative z-10 flex flex-col items-center">
//                 <div
//                   className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
//                   style={{ backgroundColor: '#F15124' }}
//                 >
//                   <IconComponent className="w-8 h-8 text-white" />
//                 </div>

//                 <h3
//                   className="text-2xl font-bold mb-3 transition-colors"
//                   style={{ color: hoveredPlatform === idx ? '#F15124' : '#000' }}
//                 >
//                   {platform.name}
//                 </h3>

//                 <p
//                   style={{ color: '#000', opacity: 0.8 }}
//                   className="leading-relaxed max-w-sm"
//                 >
//                   {platform.description}
//                 </p>
//               </div>

//               {/* Bottom line animation */}
//               <div
//                 className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
//                   hoveredPlatform === idx ? 'scale-x-100' : 'scale-x-0'
//                 }`}
//                 style={{ backgroundColor: '#F15124' }}
//               ></div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>

//             {/* Section 2: Cloud Features */}
//             <section className="py-20 px-4" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-5xl font-bold mb-4" style={{ color: '#000' }}>
//                             Our Cloud Features
//                         </h2>
//                         <p className="text-xl" style={{ color: '#000', opacity: 0.7 }}>
//                             Comprehensive cloud services tailored for you
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {cloudFeatures.map((feature, idx) => {
//                             const IconComponent = getIcon(feature.icon);
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="relative group"
//                                     onMouseEnter={() => setHoveredFeature(idx)}
//                                     onMouseLeave={() => setHoveredFeature(null)}
//                                     style={{ animation: `fadeIn 0.8s ease-out ${idx * 0.15}s both` }}
//                                 >
//                                     <div
//                                         className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y
//                     -2"
//                                         style={{
//                                             borderColor: hoveredFeature === idx ? '#F15124' : 'rgba(0,0,0,0.1)',
//                                             boxShadow:
//                                                 hoveredFeature === idx
//                                                     ? '0 20px 40px rgba(241, 81, 36, 0.3)'
//                                                     : '0 5px 20px rgba(0,0,0,0.05)'
//                                         }}
//                                     >
//                                         <div className="relative z-10">
//                                             <div
//                                                 className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
//                                                 style={{ backgroundColor: '#F15124' }}
//                                             >
//                                                 <IconComponent className="w-10 h-10 text-white" />
//                                             </div>

//                                             <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#000' }}>
//                                                 {feature.name}
//                                             </h3>

//                                             <p className="text-center leading-relaxed" style={{ color: '#000', opacity: 0.8 }}>
//                                                 {feature.description}
//                                             </p>
//                                         </div>

                                         
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Section 3: Business Values */}
//             <section className="py-20 px-4">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-5xl font-bold mb-4" style={{ color: '#000' }}>
//                             Business Values
//                         </h2>
//                         <p className="text-xl" style={{ color: '#000', opacity: 0.7 }}>
//                             Driving success through innovation
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {businessValues.map((value, idx) => {
//                             const IconComponent = getIcon(value.icon);
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="group"
//                                     onMouseEnter={() => setHoveredValue(idx)}
//                                     onMouseLeave={() => setHoveredValue(null)}
//                                     style={{ animation: `slideIn 0.7s ease-out ${idx * 0.12}s both` }}
//                                 >
//                                     <div
//                                         className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
//                                         style={{
//                                             borderColor: hoveredValue === idx ? '#F15124' : 'rgba(0,0,0,0.1)',
//                                             boxShadow:
//                                                 hoveredValue === idx
//                                                     ? '0 25px 50px -12px rgba(241, 81, 36, 0.4)'
//                                                     : '0 5px 20px rgba(0,0,0,0.05)'
//                                         }}
//                                     >
//                                         <div
//                                             className={`absolute inset-0 transform transition-transform duration-700 ${hoveredValue === idx ? 'translate-x-0' : '-translate-x-full'
//                                                 }`}
//                                             style={{ backgroundColor: '#F15124' }}
//                                         ></div>

//                                         <div className="relative z-10">
//                                             <div className="flex items-center justify-between mb-6">
//                                                 <div
//                                                     className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
//                                                     style={{ backgroundColor: hoveredValue === idx ? '#fff' : '#F15124' }}
//                                                 >
//                                                     <IconComponent
//                                                         className="w-7 h-7"
//                                                         style={{ color: hoveredValue === idx ? '#F15124' : '#fff' }}
//                                                     />
//                                                 </div>
//                                                 <div
//                                                     className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
//                                                     style={{ color: hoveredValue === idx ? '#fff' : '#F15124' }}
//                                                 >
//                                                     0{idx + 1}
//                                                 </div>
//                                             </div>

//                                             <h3
//                                                 className="text-2xl font-bold mb-4 transition-colors"
//                                                 style={{ color: hoveredValue === idx ? '#fff' : '#000' }}
//                                             >
//                                                 {value.name}
//                                             </h3>

//                                             <p
//                                                 className="leading-relaxed transition-colors"
//                                                 style={{
//                                                     color: hoveredValue === idx ? '#fff' : '#000',
//                                                     opacity: hoveredValue === idx ? 1 : 0.8
//                                                 }}
//                                             >
//                                                 {value.description}
//                                             </p>
//                                         </div>

//                                         <div
//                                             className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
//                                             style={{
//                                                 backgroundColor:
//                                                     hoveredValue === idx ? 'rgba(255,255,255,0.1)' : 'rgba(241,81,36,0.1)'
//                                             }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
          


            

//             {/* Animations */}
//             <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default CloudServicesPage;





// ==== CloudSections.jsx ====
import React, { useState } from "react";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Settings,
  Cpu,
  Globe,
  Lock,
  CheckCircle,
  BarChart,
  Rocket,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const icons = {
    Cloud,
    Server,
    Database,
    Shield,
    Zap,
    Settings,
    Cpu,
    Globe,
    Lock,
    CheckCircle,
    BarChart,
    Rocket,
  };
  return icons[icon] || Cloud;
};

// ===== Static Data =====
const cloudPlatforms = [
  {
    name: "Amazon Web Services (AWS)",
    description: "Scalable, reliable cloud solutions for enterprises worldwide.",
    icon: "Cloud",
  },
  {
    name: "Microsoft Azure",
    description: "Flexible hybrid cloud solutions designed for modern business.",
    icon: "Server",
  },
  {
    name: "Google Cloud Platform (GCP)",
    description: "Innovative infrastructure with powerful AI and analytics tools.",
    icon: "Database",
  },
  {
    name: "IBM Cloud",
    description: "Trusted hybrid cloud and AI-driven digital transformation.",
    icon: "Shield",
  },
  {
    name: "Oracle Cloud",
    description: "High-performance enterprise cloud with data-driven insights.",
    icon: "Settings",
  },
  {
    name: "Alibaba Cloud",
    description: "Asia’s leading cloud provider with a global footprint.",
    icon: "Globe",
  },
];

const cloudFeatures = [
  {
    name: "High Availability",
    description:
      "Ensure your business runs without interruptions through reliable uptime and redundancy.",
    icon: "Zap",
  },
  {
    name: "Security First",
    description:
      "Protect your data with advanced encryption, monitoring, and compliance controls.",
    icon: "Lock",
  },
  {
    name: "Scalable Infrastructure",
    description:
      "Easily scale resources up or down to meet your evolving business demands.",
    icon: "Cpu",
  },
  {
    name: "Automation & DevOps",
    description:
      "Accelerate deployment cycles and improve efficiency with DevOps integration.",
    icon: "Settings",
  },
  {
    name: "Global Reach",
    description:
      "Deploy applications closer to your users with a vast global network.",
    icon: "Globe",
  },
  {
    name: "Cost Optimization",
    description:
      "Leverage pay-as-you-go models and cost management tools to reduce expenses.",
    icon: "BarChart",
  },
];

const businessValues = [
  {
    name: "Innovation",
    description:
      "Driving continuous innovation through emerging technologies and agile methodologies.",
    icon: "Rocket",
  },
  {
    name: "Integrity",
    description:
      "Building long-term trust through transparency, reliability, and ethics.",
    icon: "Shield",
  },
  {
    name: "Customer Success",
    description:
      "Empowering clients to achieve measurable outcomes and lasting growth.",
    icon: "CheckCircle",
  },
  {
    name: "Collaboration",
    description:
      "Working closely with clients and partners to co-create impactful solutions.",
    icon: "Cloud",
  },
  {
    name: "Sustainability",
    description:
      "Advancing green cloud solutions for a sustainable digital future.",
    icon: "Globe",
  },
  {
    name: "Excellence",
    description:
      "Delivering high-quality results with precision, speed, and expertise.",
    icon: "Cpu",
  },
];

const CloudSections = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <>
      {/* ===== Section 1: Cloud Platforms ===== */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
              Cloud Platforms
            </h2>
            <p className="text-xl" style={{ color: "#000" }}>
              Multi-cloud expertise to power your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {cloudPlatforms.map((platform, idx) => {
              const IconComponent = getIcon(platform.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredPlatform(idx)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredPlatform === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.5)"
                          : "0 10px 30px rgba(0,0,0,0.1)",
                      minHeight: "300px",
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
                        style={{ backgroundColor: "#F15124" }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3
                        className="text-2xl font-bold mb-3 transition-colors"
                        style={{
                          color:
                            hoveredPlatform === idx ? "#F15124" : "#000",
                        }}
                      >
                        {platform.name}
                      </h3>

                      <p
                        style={{ color: "#000", opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {platform.description}
                      </p>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredPlatform === idx ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 2: Cloud Features ===== */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
              Our Cloud Features
            </h2>
            <p className="text-xl" style={{ color: "#000" }}>
              Comprehensive cloud services tailored for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudFeatures.map((feature, idx) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor:
                        hoveredFeature === idx
                          ? "#F15124"
                          : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredFeature === idx
                          ? "0 20px 40px rgba(241, 81, 36, 0.3)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="relative z-10">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        style={{ backgroundColor: "#F15124" }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      <h3
                        className="text-2xl font-bold text-center mb-4"
                        style={{ color: "#000" }}
                      >
                        {feature.name}
                      </h3>

                      <p
                        className="text-center leading-relaxed"
                        style={{ color: "#000", opacity: 0.8 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 3: Business Values ===== */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
              Business Values
            </h2>
            <p className="text-xl" style={{ color: "#000" }}>
              Driving success through innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessValues.map((value, idx) => {
              const IconComponent = getIcon(value.icon);
              return (
                <div
                  key={idx}
                  className="group"
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      borderColor:
                        hoveredValue === idx
                          ? "#F15124"
                          : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredValue === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredValue === idx
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
                          style={{
                            backgroundColor:
                              hoveredValue === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color:
                                hoveredValue === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color:
                              hoveredValue === idx ? "#fff" : "#F15124",
                          }}
                        >
                          0{idx + 1}
                        </div>
                      </div>

                      <h3
                        className="text-2xl font-bold mb-4 transition-colors"
                        style={{
                          color: hoveredValue === idx ? "#fff" : "#000",
                        }}
                      >
                        {value.name}
                      </h3>

                      <p
                        className="leading-relaxed transition-colors"
                        style={{
                          color: hoveredValue === idx ? "#fff" : "#000",
                          opacity: hoveredValue === idx ? 1 : 0.8,
                        }}
                      >
                        {value.description}
                      </p>
                    </div>

                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        backgroundColor:
                          hoveredValue === idx
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(241,81,36,0.1)",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSections;
