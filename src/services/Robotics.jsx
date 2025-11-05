

// import React, { useState } from 'react';
// import { FaRobot, FaChartLine, FaDollarSign, FaShieldAlt, FaTrophy } from 'react-icons/fa';

// const Robotics = () => {
//     const [hoveredPlatform, setHoveredPlatform] = useState(null);

//     const roboticsBenefits = [
//         {
//             name: "Increased Productivity & Efficiency",
//             description: "Intelligent automation powered by IoT data streamlines workflows and optimizes robot performance.",
//             icon: "FaRobot",
//         },
//         {
//             name: "Enhanced Accuracy & Precision",
//             description: "Robots equipped with real-time sensor data can operate with greater accuracy and precision.",
//             icon: "FaChartLine",
//         },
//         {
//             name: "Reduced Costs",
//             description: "Predictive maintenance and remote monitoring minimize downtime and operational costs.",
//             icon: "FaDollarSign",
//         },
//         {
//             name: "Improved Safety",
//             description: "Enhanced situational awareness for robots leads to safer human-robot collaboration.",
//             icon: "FaShieldAlt",
//         },
//         {
//             name: "Gain a Competitive Advantage",
//             description: "Be at the forefront of innovation with cutting-edge IoT robotics solutions that revolutionize your industry.",
//             icon: "FaTrophy",
//         },
//     ];

//     const getIcon = (iconName) => {
//         switch (iconName) {
//             case 'FaRobot':
//                 return FaRobot;
//             case 'FaChartLine':
//                 return FaChartLine;
//             case 'FaDollarSign':
//                 return FaDollarSign;
//             case 'FaShieldAlt':
//                 return FaShieldAlt;
//             case 'FaTrophy':
//                 return FaTrophy;
//             default:
//                 return FaRobot;
//         }
//     };

//     return (
//         <section className="pt-12 px-4 flex items-center justify-center">
//             <div className="max-w-7xl mx-auto w-full text-center">
//                 {/* ===== Heading Section ===== */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" style={{ color: '#000' }}>
//                         IoT Robotics Solutions
//                     </h2>
//                     <p className="text-xl" style={{ color: '#000', opacity: 0.7 }}>
//                         Transform your operations with cutting-edge IoT robotics
//                     </p>
//                 </div>
//                 {/* ===== Cards Grid ===== */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//                     {roboticsBenefits.map((benefit, idx) => {
//                         const IconComponent = getIcon(benefit.icon);
//                         return (
//                             <div
//                                 key={idx}
//                                 className="group relative flex justify-center items-center"
//                                 onMouseEnter={() => setHoveredPlatform(idx)}
//                                 onMouseLeave={() => setHoveredPlatform(null)}
//                                 style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
//                             >
//                                 <div
//                                     className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
//                                     style={{
//                                         boxShadow:
//                                             hoveredPlatform === idx
//                                                 ? '0 25px 50px -12px rgba(241, 81, 36, 0.5)'
//                                                 : '0 10px 30px rgba(0,0,0,0.1)',
//                                         minHeight: '300px',
//                                     }}
//                                 >
//                                     <div className="relative z-10 flex flex-col items-center">
//                                         <div
//                                             className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
//                                             style={{ backgroundColor: '#F15124' }}
//                                         >
//                                             <IconComponent className="w-8 h-8 text-white" />
//                                         </div>
//                                         <h3
//                                             className="text-2xl font-bold mb-3 transition-colors"
//                                             style={{ color: hoveredPlatform === idx ? '#F15124' : '#000' }}
//                                         >
//                                             {benefit.name}
//                                         </h3>
//                                         <p
//                                             style={{ color: '#000', opacity: 0.8 }}
//                                             className="leading-relaxed max-w-sm"
//                                         >
//                                             {benefit.description}
//                                         </p>
//                                     </div>
//                                     {/* Bottom line animation */}
//                                     <div
//                                         className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${hoveredPlatform === idx ? 'scale-x-100' : 'scale-x-0'
//                                             }`}
//                                         style={{ backgroundColor: '#F15124' }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Robotics;
 
import React, { useState,useEffect } from "react";
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

 

// ===== Static Data for IoT Robotics =====
const roboticsSynergies = [
  {
    name: "Intelligent Automation",
    description: "Seamlessly integrate sensor data with robotic systems for real-time adaptability and automation.",
    icon: "Robot",
  },
  {
    name: "Data-Driven Robotics",
    description: "Leverage IoT sensor data to optimize robot movements, efficiency, and precision.",
    icon: "Chart",
  },
  {
    name: "Enhanced Situational Awareness",
    description: "Equip robots with IoT sensors for better navigation and decision-making in dynamic environments.",
    icon: "Sensor",
  },
  {
    name: "Predictive Maintenance",
    description: "Use IoT data to predict and prevent robotic equipment failures, minimizing downtime.",
    icon: "Tools",
  },
  {
    name: "Remote Monitoring & Control",
    description: "Enable remote monitoring and control of robots for flexible operation and deployment.",
    icon: "Network",
  },
];

const roboticsBenefits = [
  {
    name: "Increased Productivity & Efficiency",
    description: "Intelligent automation powered by IoT data streamlines workflows and optimizes robot performance.",
    icon: "Speed",
  },
  {
    name: "Enhanced Accuracy & Precision",
    description: "Robots equipped with real-time sensor data operate with greater accuracy and precision.",
    icon: "Target",
  },
  {
    name: "Reduced Costs",
    description: "Predictive maintenance and remote monitoring minimize downtime and operational costs.",
    icon: "Dollar",
  },
  {
    name: "Improved Safety",
    description: "Enhanced situational awareness leads to safer human-robot collaboration.",
    icon: "Shield",
  },
  {
    name: "Gain a Competitive Advantage",
    description: "Stay ahead with cutting-edge IoT robotics solutions that revolutionize your industry.",
    icon: "Trophy",
  },
];

const roboticsPartnership = [
  {
    name: "Industry-Specific Solutions",
    description: "Custom IoT robotics solutions tailored to address unique challenges in your sector.",
    icon: "Industry",
  },
  {
    name: "End-to-End Expertise",
    description: "Comprehensive services from concept to deployment, including sensor integration and robotic system design.",
    icon: "Expertise",
  },
  {
    name: "Advanced Robotics Capabilities",
    description: "Expertise in industrial robots, cobots, AMRs, and drones for diverse applications.",
    icon: "Robotics",
  },
  {
    name: "Focus on Security & Safety",
    description: "Robust security measures and adherence to safety regulations for responsible IoT robotics operation.",
    icon: "Lock",
  },
  {
    name: "Future-Proof Solutions",
    description: "Scalable and adaptable solutions designed to evolve with technological advancements.",
    icon: "Future",
  },
];



const CloudSections = () => {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <>
      {/* ===== Section 1: Robotics ===== */}
      <section className="pt-12 px-4 container flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Robotics
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Unlocking Synergies Between IoT and Robotics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-8">
            {roboticsSynergies.map((platform, idx) => {
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
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${hoveredPlatform === idx ? "scale-x-100" : "scale-x-0"
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
        className="pt-12 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >

              Benefits of Partnering with Megascale for
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Your IoT Robotics Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {roboticsBenefits.map((feature, idx) => {
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
      <section className="pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Megascale: Your Partner in IoT Robotics Innovation
            </h2>
            {/* <p className="text-xl" style={{ color: "#000" }}>
              Driving success through innovation
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {roboticsPartnership.map((value, idx) => {
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
                      className={`absolute inset-0 transform transition-transform duration-700 ${hoveredValue === idx
                        ? "translate-x-0"
                        : "-translate-x-full"
                        }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          // className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
                          className="w-14 h-14 rounded-lg flex items-center justify-center  transition-transform duration-700"
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






      
      <div className="text-center mb-16  max-w-7xl mx-auto px-8 pt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
          Ready to push the boundaries of what's possible?        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
          Contact Megascale today for a free consultation. Let's explore how our expertise in IoT and robotics can help you craft a future-proof solution that transforms your business and unlocks a new era of intelligent automation.
        </p>
      </div>


    </>




  );
};

export default CloudSections;
