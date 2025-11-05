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
//     Database: Server,
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
//     title: "Harnessing the Power of Swift:",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Native Development for Peak Performance: ",
//         description:
//           "We specialize in native iOS app development using Swift, Apple's powerful and modern programming language. This ensures your app is optimized for speed, performance, and seamless integration with the iOS ecosystem.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Unleashing Device Features :",
//         description:
//           "Our developers are experts in utilizing the full potential of iPhone and iPad functionalities like Touch ID, Face ID, augmented reality (AR), and Core ML for machine learning. This creates feature-rich apps that provide an unparalleled user experience.",
//       },
      
//     ],
//   },
//   fortifyingSecurityPosture: {
//     title: "Seamless User Interface (UI) & User Experience (UX) Design",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_6e8f5fcf6d7c4428a3227898532662e8~mv2.jpg/v1/fill/w_273,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/open.jpg",
//     sections: [
//       {
//         icon: <AlertTriangle size={26} />,
//         heading: "Intuitive Navigation & Apple's Design Language:",
//         description:
//           "Our UI/UX design team adheres to Apple's Human Interface Guidelines (HIG) to create user interfaces that are not only aesthetically pleasing but also intuitive and consistent with the look and feel of native iOS apps.",
//       },
//       {
//         icon: <Lock size={26} />,
//         heading: "Focus on User Flow : ",
//         description:
//           "We prioritize a smooth user journey, ensuring a logical flow that keeps users engaged and effortlessly accomplishing their goals within the app.",
//       },
      
//     ],
//   },
//    optimizingNetworkInfrastructure1: {
//     title: "Mastering the iOS Development Landscape:",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Swift Expertise:",
//         description:
//           "Our developers are highly skilled in Swift, allowing them to write clean, efficient, and maintainable code for your iOS app.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Xcode Proficiency: ",
//         description:
//           "We leverage Xcode, Apple's official IDE, to streamline development workflows and take advantage of the latest iOS development tools and frameworks.",
//       },
//       {
//         icon: <Activity size={26} />,
//         heading: "Apple Frameworks: ",
//         description:
//           "We utilize a variety of Apple frameworks like SwiftUI, Core Data, and ARKit to enhance app functionality, create intuitive interfaces, and deliver powerful features.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "API Integration:",
//         description:
//           "Connect your app to existing back-end systems or data sources using secure and efficient APIs.",
//       },
//     ],
//   },
// };

// const networkSecurityApproach = [
//   {
//     name: "App Maintenance & Updates: ",
//     description:
//       "The iOS app store is competitive, and keeping your app updated is crucial. We provide ongoing maintenance and update services to ensure your app remains secure, optimized, and delivers the best possible user experience.",
//     icon: "Globe",
//   },
//   {
//     name: "App Store Optimization (ASO): ",
//     description:
//       "Our team optimizes your app listing to improve discoverability within the App Store, ensuring your app reaches its target audience.",
//     icon: "Shield",
//   },
  
// ];

// const networkSecurityBenefits = [
//   {
//     name: "Experienced & Agile Development Team",
//     description:
//       "Our team has a proven track record of delivering high-quality iOS apps across various industries.",
//     icon: "Zap",
//   },
//   {
//     name: "Scalable Solutions",
//     description:
//       "We design apps that can grow with your business, accommodating future feature additions and user base expansion.",
//     icon: "BarChart",
//   },
//   {
//     name: "Data Security & Privacy",
//     description:
//       "We prioritize the security of your app and user data, adhering to Apple's strict App Store guidelines and industry best practices.",
//     icon: "Server",
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
//           <div className="text-center mb-10">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               Beyond Development: Your Long-Term Partner
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
//       {/* <div className="text-center mb-10 max-w-7xl mx-auto px-4">
//         <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//           Ready to build a secure and high-performing IT foundation?
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//           Contact Megascale today for a free consultation. Let our IT networking and security specialists assess your needs and recommend the optimal solutions to empower your business for success in today's digital age.
//         </p>
//       </div> */}
//       {/* ===== Section 2: Benefits ===== */}
//       <section
//         className="py-20 px-4"
//         style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               Why Choose Megascale for Your iOS App Development?
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
//    useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   const { optimizingNetworkInfrastructure, fortifyingSecurityPosture ,optimizingNetworkInfrastructure1} =
//     networkAndSecurityData;
//   return (
//     <div className="bg-gray-100">
//       <Section {...optimizingNetworkInfrastructure} />
//       <Section {...fortifyingSecurityPosture} reverse />
//       <Section {...optimizingNetworkInfrastructure1} />
//     </div>
//   );
// };

// // ===== Parent Component =====
// const Iphone = () => {
//    useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <div className="text-center max-w-7xl mx-auto px-10 mt-20">
//         <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//          Expertise for iPhone & iPad
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
         
 
// In today's mobile-first world, an exceptional iOS app is a game-changer for businesses looking to target iPhone and iPad users. At Megascale, we're your trusted partner for crafting innovative iOS mobile apps that leverage the power of Apple's platform to deliver exceptional user experiences and propel your business forward.   </p>
//       </div>
//       <NetworkSecurityOverview />
//       <CloudSections />
//     </>
//   );
// };

// export default Iphone;


import React, { useState, useEffect } from "react";
import {
  Clock,
  MessageSquare,
  Award,
  Wrench,
  Network,
  Users,
  Activity,
  BookOpen,
  GraduationCap,
  Zap,
  TrendingUp,
  DollarSign,
  Heart,
  Shield,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Clock,
    MessageSquare,
    Award,
    Wrench,
    Network,
    Users,
    Activity,
    BookOpen,
    GraduationCap,
    Zap,
    TrendingUp,
    DollarSign,
    Heart,
    Shield,
  };
  return icons[icon] || Clock;
};

// ===== Static Data for Technical Support =====
const dedicatedSupportFeatures = [
  {
    name: "24/7 Availability",
    description:
      "Our support team is available around the clock, 365 days a year, to address your inquiries and resolve technical issues promptly.",
    icon: "Clock",
  },
  {
    name: "Multi-Channel Support",
    description:
      "Reach us through your preferred channel - phone, email, live chat, or an online ticketing system - for a convenient and responsive support experience.",
    icon: "MessageSquare",
  },
];

const technicalExpertiseFeatures = [
  {
    name: "Certified Professionals",
    description:
      "Our team consists of highly qualified and certified professionals with extensive experience in various IT domains.",
    icon: "Award",
  },
  {
    name: "Problem-Solving Prowess",
    description:
      "We don't just answer questions; we delve deep to diagnose issues, provide effective solutions, and ensure your technology continues to function optimally.",
    icon: "Wrench",
  },
];

const tailoredSolutionsFeatures = [
  {
    name: "Customized Support Plans",
    description:
      "We offer flexible support plans that can be tailored to your specific needs and budget, ensuring you get the right level of coverage for your IT infrastructure.",
    icon: "Network",
  },
  {
    name: "Dedicated Account Managers",
    description:
      "For enterprise clients, we assign dedicated account managers who act as your single point of contact, ensuring a smooth and personalized support experience.",
    icon: "Users",
  },
];

const proactiveSupportFeatures = [
  {
    name: "Preventative Maintenance",
    description:
      "We offer proactive maintenance plans to identify and address potential issues before they disrupt your operations.",
    icon: "Activity",
  },
  {
    name: "Knowledge Base & Resources",
    description:
      "Our comprehensive knowledge base and resource library provide a wealth of self-help articles, tutorials, and FAQs to empower you to troubleshoot common issues independently.",
    icon: "BookOpen",
  },
  {
    name: "Training & Workshops",
    description:
      "Invest in your team's knowledge with our customized training programs and workshops, designed to enhance their technical skills and optimize technology utilization.",
    icon: "GraduationCap",
  },
];

const whyChooseMegascale = [
  {
    name: "Faster Resolution Times",
    description:
      "Our team's expertise allows for swift issue resolution, minimizing downtime and ensuring business continuity.",
    icon: "Zap",
  },
  {
    name: "Increased Productivity",
    description:
      "By resolving technical challenges promptly and offering ongoing support resources, we empower your team to focus on core business activities.",
    icon: "TrendingUp",
  },
  {
    name: "Reduced IT Costs",
    description:
      "Proactive maintenance and self-service tools can help prevent costly disruptions and empower your team to handle basic troubleshooting, ultimately minimizing IT support costs.",
    icon: "DollarSign",
  },
  {
    name: "Peace of Mind",
    description:
      "Knowing you have a reliable support team in your corner allows you to focus on what matters most - growing your business.",
    icon: "Heart",
  },
];

const TechnicalSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Combine all features for second section
  const allSupportFeatures = [
    ...dedicatedSupportFeatures,
    ...technicalExpertiseFeatures,
    ...tailoredSolutionsFeatures,
  ];

  return (
    <>
      {/* ===== Section 1: Dedicated Support ===== */}
      <section className="pt-12 px-12 flex items-center justify-center">
        <div className="max-w-7xl container mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
            >
              Megascale Technical IT Support / Customer Care Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Empowering You with Expert IT Care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {proactiveSupportFeatures.map((platform, idx) => {
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

      {/* ===== Section 2: Support Features ===== */}
      <section
        className="pt-12 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
            >
              Comprehensive Support Coverage
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Multiple ways to get the help you need, when you need it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {allSupportFeatures.map((feature, idx) => {
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

      {/* ===== Section 3: Why Choose Megascale ===== */}
      <section className="pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
            >
              Why Choose Megascale Support?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {whyChooseMegascale.map((value, idx) => {
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
                        hoveredValue === idx ? "#F15124" : "rgba(0,0,0,0.1)",
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
                          className="w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-700"
                          style={{
                            backgroundColor:
                              hoveredValue === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color: hoveredValue === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color: hoveredValue === idx ? "#fff" : "#F15124",
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

      {/* ===== Section 4: Call to Action ===== */}
      <div className="text-center mb-10 max-w-7xl mx-auto px-12 pt-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
        >
          Ready to Experience Expert IT Support?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
          Contact Megascale today for a free consultation. Let us show you how
          our technical support and customer care services can empower your
          business to focus on growth while we handle your IT challenges. With
          our team in your corner, you'll have peace of mind knowing your
          technology is in expert hands.
        </p>
      </div>
    </>
  );
};

export default TechnicalSupport;