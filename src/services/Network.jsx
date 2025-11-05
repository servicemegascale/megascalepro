
// import React, { useState,useEffect } from "react";
// import {
//   Shield,
//   Network,
//   Server,
//   Lock,
//   Activity,
//   AlertTriangle,
//   Laptop,
//   Users,
//   Eye,
//   Cloud,
//   Cpu,
//   Globe,
//   CheckCircle,
//   BarChart,
//   Rocket,
//   Settings,
//   Zap,
// } from "lucide-react";

// // ===== Helper to get Icon =====
// const getIcon = (icon) => {
//   const icons = {
//     Cloud,
//     Server,
//     Database: Server, // Using Server as a placeholder for Database
//     Shield,
//     Zap,
//     Settings,
//     Cpu,
//     Globe,
//     Lock,
//     CheckCircle,
//     BarChart,
//     Rocket,
//   };
//   return icons[icon] || Cloud;
// };

// // ===== Data =====
// const networkAndSecurityData = {
//   optimizingNetworkInfrastructure: {
//     title: "Optimizing Your Network Infrastructure",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Network Design & Consulting",
//         description:
//           "Our certified engineers collaborate with you to design a scalable, secure, and high-performance network infrastructure tailored to your business needs and growth plans. We have expertise in designing networks using industry-leading solutions from Cisco, HP, and other top vendors.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Network Implementation",
//         description:
//           "Our team seamlessly implements your chosen networking solutions, ensuring proper configuration and integration with your existing infrastructure.",
//       },
//       {
//         icon: <Activity size={26} />,
//         heading: "Network Management & Support",
//         description:
//           "We offer ongoing network management services, including proactive monitoring, troubleshooting, and performance optimization to keep your network running smoothly and efficiently.",
//       },
//     ],
//   },
//   fortifyingSecurityPosture: {
//     title: "Fortifying Your Security Posture",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_6e8f5fcf6d7c4428a3227898532662e8~mv2.jpg/v1/fill/w_273,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/open.jpg",
//     sections: [
//       {
//         icon: <AlertTriangle size={26} />,
//         heading: "Vulnerability Assessment & Penetration Testing",
//         description:
//           "We identify potential security weaknesses in your network infrastructure and applications through comprehensive vulnerability assessments and penetration testing, allowing you to address them before they can be exploited.",
//       },
//       {
//         icon: <Lock size={26} />,
//         heading: "Firewall & Intrusion Detection/Prevention (IDS/IPS)",
//         description:
//           "Our team implements robust firewalls and next-generation security solutions like IDS/IPS to protect your network from unauthorized access, malware, and other cyber threats.",
//       },
//       {
//         icon: <Laptop size={26} />,
//         heading: "Endpoint Security",
//         description:
//           "We safeguard your devices (desktops, laptops, mobile devices) with advanced endpoint security solutions that prevent malware infections, data breaches, and unauthorized access.",
//       },
//       {
//         icon: <Users size={26} />,
//         heading: "Security Awareness Training",
//         description:
//           "We empower your employees to become active participants in your cybersecurity strategy by providing comprehensive security awareness training programs.",
//       },
//       {
//         icon: <Eye size={26} />,
//         heading: "Security Information and Event Management (SIEM)",
//         description:
//           "We implement SIEM solutions that centralize log data from various security tools, providing real-time insights into potential security incidents and facilitating faster response times.",
//       },
//     ],
//   },
// };

// const networkSecurityApproach = [
//   {
//     name: "Vendor-Agnostic Approach",
//     description:
//       "We recommend the best-fit solutions based on your specific requirements, leveraging products from leading vendors like Cisco, HP, Palo Alto Networks, Fortinet, and more.",
//     icon: "Globe",
//   },
//   {
//     name: "Security Expertise",
//     description:
//       "Our team holds industry-recognized security certifications and possesses in-depth knowledge of the latest cyber threats and defense mechanisms.",
//     icon: "Shield",
//   },
//   {
//     name: "Comprehensive Approach",
//     description:
//       "We address both network infrastructure and security aspects, providing a holistic solution to safeguard your IT environment.",
//     icon: "Settings",
//   },
//   {
//     name: "Focus on Compliance",
//     description:
//       "We help you adhere to relevant industry regulations and compliance standards related to data security and privacy.",
//     icon: "CheckCircle",
//   },
//   {
//     name: "24/7 Support",
//     description:
//       "Our dedicated security operations center (SOC) provides around-the-clock monitoring and support to address security incidents promptly.",
//     icon: "Cpu",
//   },
// ];

// const networkSecurityBenefits = [
//   {
//     name: "Enhanced Network Performance & Security",
//     description:
//       "Experience a reliable and secure network that can handle your growing demands while protecting your valuable data assets.",
//     icon: "Zap",
//   },
//   {
//     name: "Reduced Downtime & Costs",
//     description:
//       "Proactive network management and robust security solutions minimize downtime and associated costs.",
//     icon: "BarChart",
//   },
//   {
//     name: "Improved User Productivity & Confidence",
//     description:
//       "A secure and well-functioning network empowers employees to be productive and fosters a culture of cybersecurity awareness.",
//     icon: "Server",
//   },
//   {
//     name: "Peace of Mind & Business Continuity",
//     description:
//       "Gain peace of mind knowing your IT infrastructure is secure and prepared to address potential threats.",
//     icon: "Lock",
//   },
//   {
//     name: "Scalability for Future Growth",
//     description:
//       "Our solutions are designed to scale alongside your business, ensuring your network and security posture can adapt to your evolving needs.",
//     icon: "Rocket",
//   },
// ];

// // ===== Section Component =====
// const Section = ({ title, image, sections, reverse }) => {
//   const content = (
//     <div className="flex flex-col justify-center">
//       <h2 className="text-4xl font-bold mb-8 text-gray-800 text-left ml-10">{title}</h2>
//       <div className="space-y-6">
//         {sections.map((item, idx) => (
//           <div
//             key={idx}
//             className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="text-blue-600">{item.icon}</div>
//             <div>
//               <h3 className="font-semibold text-lg text-gray-800 text-left">
//                 {item.heading}
//               </h3>
//               <p className="text-gray-600 mt-1 text-left">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//   const imageDiv = (
//     <div className="flex justify-center">
//       <div className="relative w-full h-[480px] max-w-md">
//         <img
//           src={image}
//           alt={title}
//           className="rounded-2xl shadow-lg object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
//       </div>
//     </div>
//   );
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//         {reverse ? imageDiv : content}
//         {reverse ? content : imageDiv}
//       </div>
//     </section>
//   );
// };

// // ===== CloudSections Component =====
// const CloudSections = () => {
//    useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   const [hoveredPlatform, setHoveredPlatform] = useState(null);
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const [hoveredValue, setHoveredValue] = useState(null);
//   return (
//     <>
      


//       {/* ===== Section 1: Approach ===== */}
//       <section className="py-20 px-4 flex items-center justify-center">
//         <div className="max-w-7xl mx-auto w-full text-center">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               Why Choose Megascale for Your Software Testing Needs?
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//             {networkSecurityApproach.map((platform, idx) => {
//               const IconComponent = getIcon(platform.icon);
//               return (
//                 <div
//                   key={idx}
//                   className="group relative flex justify-center items-center"
//                   onMouseEnter={() => setHoveredPlatform(idx)}
//                   onMouseLeave={() => setHoveredPlatform(null)}
//                 >
//                   <div
//                     className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
//                     style={{
//                       boxShadow:
//                         hoveredPlatform === idx
//                           ? "0 25px 50px -12px rgba(241, 81, 36, 0.5)"
//                           : "0 10px 30px rgba(0,0,0,0.1)",
//                       minHeight: "300px",
//                     }}
//                   >
//                     <div className="relative z-10 flex flex-col items-center">
//                       <div
//                         className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
//                         style={{ backgroundColor: "#F15124" }}
//                       >
//                         <IconComponent className="w-8 h-8 text-white" />
//                       </div>
//                       <h3
//                         className="text-2xl font-bold mb-3 transition-colors"
//                         style={{
//                           color: hoveredPlatform === idx ? "#F15124" : "#000",
//                         }}
//                       >
//                         {platform.name}
//                       </h3>
//                       <p
//                         style={{ color: "#000", opacity: 0.8 }}
//                         className="leading-relaxed max-w-sm"
//                       >
//                         {platform.description}
//                       </p>
//                     </div>
//                     <div
//                       className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${hoveredPlatform === idx ? "scale-x-100" : "scale-x-0"
//                         }`}
//                       style={{ backgroundColor: "#F15124" }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       <div className="text-center mb-16 max-w-7xl mx-auto px-4">
//         <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//           Ready to build a secure and high-performing IT foundation?
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//           Contact Megascale today for a free consultation. Let our IT networking and security specialists assess your needs and recommend the optimal solutions to empower your business for success in today's digital age.
//         </p>
//       </div>
//       {/* ===== Section 2: Benefits ===== */}
//       <section
//         className="py-20 px-4"
//         style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               The Benefits of Partnering with Megascale
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {networkSecurityBenefits.map((feature, idx) => {
//               const IconComponent = getIcon(feature.icon);
//               return (
//                 <div
//                   key={idx}
//                   className="relative group"
//                   onMouseEnter={() => setHoveredFeature(idx)}
//                   onMouseLeave={() => setHoveredFeature(null)}
//                 >
//                   <div
//                     className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
//                     style={{
//                       borderColor:
//                         hoveredFeature === idx ? "#F15124" : "rgba(0,0,0,0.1)",
//                       boxShadow:
//                         hoveredFeature === idx
//                           ? "0 20px 40px rgba(241, 81, 36, 0.3)"
//                           : "0 5px 20px rgba(0,0,0,0.05)",
//                     }}
//                   >
//                     <div className="relative z-10">
//                       <div
//                         className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
//                         style={{ backgroundColor: "#F15124" }}
//                       >
//                         <IconComponent className="w-10 h-10 text-white" />
//                       </div>
//                       <h3
//                         className="text-2xl font-bold text-center mb-4"
//                         style={{ color: "#000" }}
//                       >
//                         {feature.name}
//                       </h3>
//                       <p
//                         className="text-center leading-relaxed"
//                         style={{ color: "#000", opacity: 0.8 }}
//                       >
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// // ===== NetworkSecurityOverview Component =====
// const NetworkSecurityOverview = () => {
//   const { optimizingNetworkInfrastructure, fortifyingSecurityPosture } =
//     networkAndSecurityData;
//   return (
//     <div className="bg-gray-100">
//       <Section {...optimizingNetworkInfrastructure} />
//       <Section {...fortifyingSecurityPosture} reverse />
//     </div>
//   );
// };

// // ===== Parent Component =====
// const NetworkAndSecurityPage = () => {
//   return (
//     <><div className="text-center   max-w-7xl mx-auto px-10 mt-12">
//         <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//           Networking & Security Solutions
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//           At Megascale, we understand the ever-evolving IT landscape and the critical role both robust networking and comprehensive security play in ensuring business continuity and success. We're your one-stop shop for all your IT networking and security needs, offering a comprehensive suite of services and industry-leading solutions to empower businesses of all sizes.  </p>
//       </div>
//       <NetworkSecurityOverview />
//       <CloudSections />
//     </>
//   );
// };

// export default NetworkAndSecurityPage;















// import React, { useState, useEffect } from "react";
// import {
//   Shield,
//   Network,
//   Server,
//   Lock,
//   Activity,
//   AlertTriangle,
//   Laptop,
//   Users,
//   Eye,
//   Globe,
//   CheckCircle,
//   BarChart,
//   Rocket,
//   Settings,
//   Zap,
//   Cpu,
// } from "lucide-react";

// // ===== Helper to get Icon =====
// const getIcon = (icon) => {
//   const icons = {
//     Globe,
//     Shield,
//     Settings,
//     CheckCircle,
//     Cpu,
//     Zap,
//     BarChart,
//     Server,
//     Lock,
//     Rocket,
//     Network,
//     Activity,
//     AlertTriangle,
//     Laptop,
//     Users,
//     Eye,
//   };
//   return icons[icon] || Globe;
// };

// // ===== Data =====
// const networkAndSecurityData = {
//   optimizingNetworkInfrastructure: {
//     title: "Optimizing Your Network Infrastructure",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Network Design & Consulting",
//         description:
//           "Our certified engineers collaborate with you to design a scalable, secure, and high-performance network infrastructure tailored to your business needs and growth plans. We have expertise in designing networks using industry-leading solutions from Cisco, HP, and other top vendors.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Network Implementation",
//         description:
//           "Our team seamlessly implements your chosen networking solutions, ensuring proper configuration and integration with your existing infrastructure.",
//       },
//       {
//         icon: <Activity size={26} />,
//         heading: "Network Management & Support",
//         description:
//           "We offer ongoing network management services, including proactive monitoring, troubleshooting, and performance optimization to keep your network running smoothly and efficiently.",
//       },
//     ],
//   },
//   fortifyingSecurityPosture: {
//     title: "Fortifying Your Security Posture",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_6e8f5fcf6d7c4428a3227898532662e8~mv2.jpg/v1/fill/w_273,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/open.jpg",
//     sections: [
//       {
//         icon: <AlertTriangle size={26} />,
//         heading: "Vulnerability Assessment & Penetration Testing",
//         description:
//           "We identify potential security weaknesses in your network infrastructure and applications through comprehensive vulnerability assessments and penetration testing, allowing you to address them before they can be exploited.",
//       },
//       {
//         icon: <Lock size={26} />,
//         heading: "Firewall & Intrusion Detection/Prevention (IDS/IPS)",
//         description:
//           "Our team implements robust firewalls and next-generation security solutions like IDS/IPS to protect your network from unauthorized access, malware, and other cyber threats.",
//       },
//       {
//         icon: <Laptop size={26} />,
//         heading: "Endpoint Security",
//         description:
//           "We safeguard your devices (desktops, laptops, mobile devices) with advanced endpoint security solutions that prevent malware infections, data breaches, and unauthorized access.",
//       },
//       {
//         icon: <Users size={26} />,
//         heading: "Security Awareness Training",
//         description:
//           "We empower your employees to become active participants in your cybersecurity strategy by providing comprehensive security awareness training programs.",
//       },
//       {
//         icon: <Eye size={26} />,
//         heading: "Security Information and Event Management (SIEM)",
//         description:
//           "We implement SIEM solutions that centralize log data from various security tools, providing real-time insights into potential security incidents and facilitating faster response times.",
//       },
//     ],
//   },
// };

// const networkSecurityApproach = [
//   {
//     name: "Vendor-Agnostic Approach",
//     description:
//       "We recommend the best-fit solutions based on your specific requirements, leveraging products from leading vendors like Cisco, HP, Palo Alto Networks, Fortinet, and more.",
//     icon: "Globe",
//   },
//   {
//     name: "Security Expertise",
//     description:
//       "Our team holds industry-recognized security certifications and possesses in-depth knowledge of the latest cyber threats and defense mechanisms.",
//     icon: "Shield",
//   },
//   {
//     name: "Comprehensive Approach",
//     description:
//       "We address both network infrastructure and security aspects, providing a holistic solution to safeguard your IT environment.",
//     icon: "Settings",
//   },
//   {
//     name: "Focus on Compliance",
//     description:
//       "We help you adhere to relevant industry regulations and compliance standards related to data security and privacy.",
//     icon: "CheckCircle",
//   },
//   {
//     name: "24/7 Support",
//     description:
//       "Our dedicated security operations center (SOC) provides around-the-clock monitoring and support to address security incidents promptly.",
//     icon: "Cpu",
//   },
// ];

// const networkSecurityBenefits = [
//   {
//     name: "Enhanced Network Performance & Security",
//     description:
//       "Experience a reliable and secure network that can handle your growing demands while protecting your valuable data assets.",
//     icon: "Zap",
//   },
//   {
//     name: "Reduced Downtime & Costs",
//     description:
//       "Proactive network management and robust security solutions minimize downtime and associated costs.",
//     icon: "BarChart",
//   },
//   {
//     name: "Improved User Productivity & Confidence",
//     description:
//       "A secure and well-functioning network empowers employees to be productive and fosters a culture of cybersecurity awareness.",
//     icon: "Server",
//   },
//   {
//     name: "Peace of Mind & Business Continuity",
//     description:
//       "Gain peace of mind knowing your IT infrastructure is secure and prepared to address potential threats.",
//     icon: "Lock",
//   },
//   {
//     name: "Scalability for Future Growth",
//     description:
//       "Our solutions are designed to scale alongside your business, ensuring your network and security posture can adapt to your evolving needs.",
//     icon: "Rocket",
//   },
// ];

// // ===== Section Component =====
// const Section = ({ title, image, sections, reverse }) => {
//   const content = (
//     <div className="flex flex-col justify-center">
//       <h2 className="text-4xl font-bold mb-8 text-gray-800 text-left ml-10">
//         {title}
//       </h2>
//       <div className="space-y-6">
//         {sections.map((item, idx) => (
//           <div
//             key={idx}
//             className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="text-blue-600">{item.icon}</div>
//             <div>
//               <h3 className="font-semibold text-lg text-gray-800 text-left">
//                 {item.heading}
//               </h3>
//               <p className="text-gray-600 mt-1 text-left">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const imageDiv = (
//     <div className="flex justify-center">
//       <div className="relative w-full h-[480px] max-w-md">
//         <img
//           src={image}
//           alt={title}
//           className="rounded-2xl shadow-lg object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
//         {reverse ? imageDiv : content}
//         {reverse ? content : imageDiv}
//       </div>
//     </section>
//   );
// };

// // ===== CloudSections Component =====
// const CloudSections = () => {
//   const [hoveredPlatform, setHoveredPlatform] = useState(null);
//   const [hoveredFeature, setHoveredFeature] = useState(null);

//   return (
//     <>
//       {/* ===== Section 1: Why Choose Megascale ===== */}
//       <section className="pt-12 px-12 flex items-center justify-center">
//         <div className="max-w-7xl container mx-auto w-full text-center">
//           <div className="text-center mb-10">
//             <h2
//               className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
//               style={{ color: "#000" }}
//             >
//               Why Choose Megascale for Your Networking & Security Needs?
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//             {networkSecurityApproach.map((platform, idx) => {
//               const IconComponent = getIcon(platform.icon);
//               return (
//                 <div
//                   key={idx}
//                   className="group relative flex justify-center items-center"
//                   onMouseEnter={() => setHoveredPlatform(idx)}
//                   onMouseLeave={() => setHoveredPlatform(null)}
//                 >
//                   <div
//                     className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
//                     style={{
//                       boxShadow:
//                         hoveredPlatform === idx
//                           ? "0 25px 50px -12px rgba(241, 81, 36, 0.5)"
//                           : "0 10px 30px rgba(0,0,0,0.1)",
//                       minHeight: "300px",
//                     }}
//                   >
//                     <div className="relative z-10 flex flex-col items-center">
//                       <div
//                         className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
//                         style={{ backgroundColor: "#F15124" }}
//                       >
//                         <IconComponent className="w-8 h-8 text-white" />
//                       </div>

//                       <h3
//                         className="text-2xl font-bold mb-3 transition-colors"
//                         style={{
//                           color: hoveredPlatform === idx ? "#F15124" : "#000",
//                         }}
//                       >
//                         {platform.name}
//                       </h3>

//                       <p
//                         style={{ color: "#000", opacity: 0.8 }}
//                         className="leading-relaxed max-w-sm"
//                       >
//                         {platform.description}
//                       </p>
//                     </div>

//                     <div
//                       className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
//                         hoveredPlatform === idx ? "scale-x-100" : "scale-x-0"
//                       }`}
//                       style={{ backgroundColor: "#F15124" }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ===== Call to Action ===== */}
//       <div className="text-center mb-10 max-w-7xl mx-auto px-12 pt-12">
//         <h2
//           className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
//           style={{ color: "#000" }}
//         >
//           Ready to build a secure and high-performing IT foundation?
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//           Contact Megascale today for a free consultation. Let our IT networking
//           and security specialists assess your needs and recommend the optimal
//           solutions to empower your business for success in today's digital age.
//         </p>
//       </div>

//       {/* ===== Section 2: Benefits ===== */}
//       <section
//         className="pt-12 px-4"
//         style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2
//               className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
//               style={{ color: "#000" }}
//             >
//               The Benefits of Partnering with Megascale
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
//             {networkSecurityBenefits.map((feature, idx) => {
//               const IconComponent = getIcon(feature.icon);
//               return (
//                 <div
//                   key={idx}
//                   className="relative group"
//                   onMouseEnter={() => setHoveredFeature(idx)}
//                   onMouseLeave={() => setHoveredFeature(null)}
//                 >
//                   <div
//                     className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
//                     style={{
//                       borderColor:
//                         hoveredFeature === idx ? "#F15124" : "rgba(0,0,0,0.1)",
//                       boxShadow:
//                         hoveredFeature === idx
//                           ? "0 20px 40px rgba(241, 81, 36, 0.3)"
//                           : "0 5px 20px rgba(0,0,0,0.05)",
//                     }}
//                   >
//                     <div className="relative z-10">
//                       <div
//                         className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
//                         style={{ backgroundColor: "#F15124" }}
//                       >
//                         <IconComponent className="w-10 h-10 text-white" />
//                       </div>

//                       <h3
//                         className="text-2xl font-bold text-center mb-4"
//                         style={{ color: "#000" }}
//                       >
//                         {feature.name}
//                       </h3>

//                       <p
//                         className="text-center leading-relaxed"
//                         style={{ color: "#000", opacity: 0.8 }}
//                       >
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// // ===== NetworkSecurityOverview Component =====
// const NetworkSecurityOverview = () => {
//   const { optimizingNetworkInfrastructure, fortifyingSecurityPosture } =
//     networkAndSecurityData;
//   return (
//     <div className="bg-gray-100">
//       <Section {...optimizingNetworkInfrastructure} />
//       <Section {...fortifyingSecurityPosture} reverse />
//     </div>
//   );
// };

// // ===== Parent Component =====
// const NetworkAndSecurityPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <div className="text-center max-w-7xl mx-auto px-10 mt-12">
//         <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//           Networking & Security Solutions
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//           At Megascale, we understand the ever-evolving IT landscape and the
//           critical role both robust networking and comprehensive security play in
//           ensuring business continuity and success. We're your one-stop shop for
//           all your IT networking and security needs, offering a comprehensive
//           suite of services and industry-leading solutions to empower businesses
//           of all sizes.
//         </p>
//       </div>
//       <NetworkSecurityOverview />
//       <CloudSections />
//     </>
//   );
// };

// export default NetworkAndSecurityPage;






























import React, { useState, useEffect } from "react";
import {
  Shield,
  Network,
  Server,
  Lock,
  Activity,
  AlertTriangle,
  Laptop,
  Users,
  Eye,
  Globe,
  CheckCircle,
  BarChart,
  Rocket,
  Settings,
  Zap,
  Cpu,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Globe,
    Shield,
    Settings,
    CheckCircle,
    Cpu,
    Zap,
    BarChart,
    Server,
    Lock,
    Rocket,
    Network,
    Activity,
    AlertTriangle,
    Laptop,
    Users,
    Eye,
  };
  return icons[icon] || Globe;
};

// ===== Data =====
const networkAndSecurityData = {
  optimizingNetworkInfrastructure: {
    sections: [
      {
        icon: <Network size={26} />,
        heading: "Network Design & Consulting",
        description:
          "Our certified engineers collaborate with you to design a scalable, secure, and high-performance network infrastructure tailored to your business needs and growth plans. We have expertise in designing networks using industry-leading solutions from Cisco, HP, and other top vendors.",
      },
      {
        icon: <Server size={26} />,
        heading: "Network Implementation",
        description:
          "Our team seamlessly implements your chosen networking solutions, ensuring proper configuration and integration with your existing infrastructure.",
      },
      {
        icon: <Activity size={26} />,
        heading: "Network Management & Support",
        description:
          "We offer ongoing network management services, including proactive monitoring, troubleshooting, and performance optimization to keep your network running smoothly and efficiently.",
      },
    ],
  },
  fortifyingSecurityPosture: {
    sections: [
      {
        icon: <AlertTriangle size={26} />,
        heading: "Vulnerability Assessment & Penetration Testing",
        description:
          "We identify potential security weaknesses in your network infrastructure and applications through comprehensive vulnerability assessments and penetration testing, allowing you to address them before they can be exploited.",
      },
      {
        icon: <Lock size={26} />,
        heading: "Firewall & Intrusion Detection/Prevention (IDS/IPS)",
        description:
          "Our team implements robust firewalls and next-generation security solutions like IDS/IPS to protect your network from unauthorized access, malware, and other cyber threats.",
      },
      {
        icon: <Laptop size={26} />,
        heading: "Endpoint Security",
        description:
          "We safeguard your devices (desktops, laptops, mobile devices) with advanced endpoint security solutions that prevent malware infections, data breaches, and unauthorized access.",
      },
      {
        icon: <Users size={26} />,
        heading: "Security Awareness Training",
        description:
          "We empower your employees to become active participants in your cybersecurity strategy by providing comprehensive security awareness training programs.",
      },
      {
        icon: <Eye size={26} />,
        heading: "Security Information and Event Management (SIEM)",
        description:
          "We implement SIEM solutions that centralize log data from various security tools, providing real-time insights into potential security incidents and facilitating faster response times.",
      },
    ],
  },
};

const networkSecurityApproach = [
  {
    name: "Vendor-Agnostic Approach",
    description:
      "We recommend the best-fit solutions based on your specific requirements, leveraging products from leading vendors like Cisco, HP, Palo Alto Networks, Fortinet, and more.",
    icon: "Globe",
  },
  {
    name: "Security Expertise",
    description:
      "Our team holds industry-recognized security certifications and possesses in-depth knowledge of the latest cyber threats and defense mechanisms.",
    icon: "Shield",
  },
  {
    name: "Comprehensive Approach",
    description:
      "We address both network infrastructure and security aspects, providing a holistic solution to safeguard your IT environment.",
    icon: "Settings",
  },
  {
    name: "Focus on Compliance",
    description:
      "We help you adhere to relevant industry regulations and compliance standards related to data security and privacy.",
    icon: "CheckCircle",
  },
  {
    name: "24/7 Support",
    description:
      "Our dedicated security operations center (SOC) provides around-the-clock monitoring and support to address security incidents promptly.",
    icon: "Cpu",
  },
];

const networkSecurityBenefits = [
  {
    name: "Enhanced Network Performance & Security",
    description:
      "Experience a reliable and secure network that can handle your growing demands while protecting your valuable data assets.",
    icon: "Zap",
  },
  {
    name: "Reduced Downtime & Costs",
    description:
      "Proactive network management and robust security solutions minimize downtime and associated costs.",
    icon: "BarChart",
  },
  {
    name: "Improved User Productivity & Confidence",
    description:
      "A secure and well-functioning network empowers employees to be productive and fosters a culture of cybersecurity awareness.",
    icon: "Server",
  },
  {
    name: "Peace of Mind & Business Continuity",
    description:
      "Gain peace of mind knowing your IT infrastructure is secure and prepared to address potential threats.",
    icon: "Lock",
  },
  {
    name: "Scalability for Future Growth",
    description:
      "Our solutions are designed to scale alongside your business, ensuring your network and security posture can adapt to your evolving needs.",
    icon: "Rocket",
  },
];

// ===== CloudSections Component =====
const CloudSections = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  return (
    <>
      {/* ===== Section 1: Why Choose Megascale ===== */}
      <section className="pt-12 px-12 flex items-center justify-center">
        <div className="max-w-7xl container mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-3xl font-bold mb-4 text-[#0A1721]"
            >
              Why Choose Megascale for Your Networking & Security Needs?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {networkSecurityApproach.map((platform, idx) => {
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
                          color: hoveredPlatform === idx ? "#F15124" : "#000",
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

      {/* ===== Section 2: Network & Security Services ===== */}
      <section
        className="pt-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
              
            >
              Comprehensive Network & Security Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              End-to-end solutions for your IT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {[
              ...networkAndSecurityData.optimizingNetworkInfrastructure.sections,
              ...networkAndSecurityData.fortifyingSecurityPosture.sections,
            ].map((feature, idx) => {
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
                        hoveredFeature === idx ? "#F15124" : "rgba(0,0,0,0.1)",
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
                        <div className="text-white">{feature.icon}</div>
                      </div>

                      <h3
                        className="text-2xl font-bold text-center mb-4"
                        style={{ color: "#000" }}
                      >
                        {feature.heading}
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

      {/* ===== Section 3: Benefits ===== */}
      <section className="pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
              
            >
              The Benefits of Partnering with Megascale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {networkSecurityBenefits.map((value, idx) => {
              const IconComponent = getIcon(value.icon);
              return (
                <div
                  key={idx}
                  className="group"
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      borderColor:
                        hoveredBenefit === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredBenefit === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredBenefit === idx
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-700"
                          style={{
                            backgroundColor:
                              hoveredBenefit === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color: hoveredBenefit === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color: hoveredBenefit === idx ? "#fff" : "#F15124",
                          }}
                        >
                          0{idx + 1}
                        </div>
                      </div>

                      <h3
                        className="text-2xl font-bold mb-4 transition-colors"
                        style={{
                          color: hoveredBenefit === idx ? "#fff" : "#000",
                        }}
                      >
                        {value.name}
                      </h3>

                      <p
                        className="leading-relaxed transition-colors"
                        style={{
                          color: hoveredBenefit === idx ? "#fff" : "#000",
                          opacity: hoveredBenefit === idx ? 1 : 0.8,
                        }}
                      >
                        {value.description}
                      </p>
                    </div>

                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        backgroundColor:
                          hoveredBenefit === idx
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

      {/* ===== Section 4: Call to Action ===== */}
      <div className="text-center mb-10 max-w-7xl mx-auto px-12 pt-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
          s
        >
          Ready to build a secure and high-performing IT foundation?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
          Contact Megascale today for a free consultation. Let our IT networking
          and security specialists assess your needs and recommend the optimal
          solutions to empower your business for success in today's digital age.
        </p>
      </div>
    </>
  );
};

// ===== Parent Component =====
const NetworkAndSecurityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="text-center max-w-7xl mx-auto px-10 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
          Networking & Security Solutions
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors">
          At Megascale, we understand the ever-evolving IT landscape and the
          critical role both robust networking and comprehensive security play in
          ensuring business continuity and success. We're your one-stop shop for
          all your IT networking and security needs, offering a comprehensive
          suite of services and industry-leading solutions to empower businesses
          of all sizes.
        </p>
      </div>
      <CloudSections />
    </>
  );
};

export default NetworkAndSecurityPage;