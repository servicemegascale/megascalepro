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
//     title: "Dedicated Support for Every Need",
//     image:
//       "https://static.wixstatic.com/media/4c1bd0_942402b7fc18420aa4be4d46b7e1badd~mv2.jpg/v1/fill/w_249,h_96,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/28695263_site_support_12%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "24/7 Availability:",
//         description:
//           "Our support team is available around the clock, 365 days a year, to address your inquiries and resolve technical issues promptly.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Multi-Channel Support:",
//         description:
//           "Reach us through your preferred channel - phone, email, live chat, or an online ticketing system - for a convenient and responsive support experience.",
//       },
        
      
//     ],
//   },
//   fortifyingSecurityPosture: {
//     title: "Highly Skilled Technical Expertise",
//     image:
//       "https://static.wixstatic.com/media/4c1bd0_b2666e4ce2fe495eb1830fa19d8106ac~mv2.jpg/v1/fill/w_263,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6504173_3327598.jpg",
//     sections: [
//       {
//         icon: <AlertTriangle size={26} />,
//         heading: "Certified Professionals:",
//         description:
//           "Our team consists of highly qualified and certified professionals with extensive experience in various IT domains.",
//       },
//       {
//         icon: <Lock size={26} />,
//         heading: "Problem-Solving Prowess:",
//         description:
//           "We don't just answer questions; we delve deep to diagnose issues, provide effective solutions, and ensure your technology continues to function optimally.",
//       }
//     ],
//   },
//    optimizingNetworkInfrastructure1: {
//     title: "Tailored Support Solutions",
//     image:
//       "https://static.wixstatic.com/media/4c1bd0_03c3a5cb316f4ad8a30c46cefd47af65~mv2.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/23673001_6770986.jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Customized Support Plans:",
//         description:
//           "We offer flexible support plans that can be tailored to your specific needs and budget, ensuring you get the right level of coverage for your IT infrastructure.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Dedicated Account Managers:",
//         description:
//           "For enterprise clients, we assign dedicated account managers who act as your single point of contact, ensuring a smooth and personalized support experience.",
//       },
      
      
//     ],
//   },
//    optimizingNetworkInfrastructure2: {
//     title: "Beyond Reactive Support",
//     image:
//       "https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg",
//     sections: [
//       {
//         icon: <Network size={26} />,
//         heading: "Preventative Maintenance: ",
//         description:
//           "We offer proactive maintenance plans to identify and address potential issues before they disrupt your operations.",
//       },
//       {
//         icon: <Server size={26} />,
//         heading: "Knowledge Base & Resources: ",
//         description:
//           "Our comprehensive knowledge base and resource library provide a wealth of self-help articles, tutorials, and FAQs to empower you to troubleshoot common issues independently.",
//       },
//       {
//         icon: <Activity size={26} />,
//         heading: "Training & Workshops:",
//         description:
//           "Invest in your team's knowledge with our customized training programs and workshops, designed to enhance their technical skills and optimize technology utilization.",
//       },
      
//     ],
//   },
    
// };

// const networkSecurityApproach = [
//   {
//     name: "WhatsApp Marketing: ",
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
 

// // ===== NetworkSecurityOverview Component =====
// const NetworkSecurityOverview = () => {
//    useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   const { optimizingNetworkInfrastructure, fortifyingSecurityPosture ,optimizingNetworkInfrastructure1,optimizingNetworkInfrastructure2, } =
//     networkAndSecurityData;
//   return (
//     <div className="bg-gray-100">
//       <Section {...optimizingNetworkInfrastructure} />
//       <Section {...fortifyingSecurityPosture} reverse />
//       <Section {...optimizingNetworkInfrastructure1}  />
//       <Section {...optimizingNetworkInfrastructure2} reverse />
      
//     </div>
//   );
// };



// const LayoutComponent = () => {
//   const data = [
//     {
//       heading: "Faster Resolution Times:",
//       paragraph:
//         "Our team's expertise allows for swift issue resolution, minimizing downtime and ensuring business continuity.",
//       imageUrl: "https://static.wixstatic.com/media/4c1bd0_31bfda975dbd4a3ca25e511f01a1fa84~mv2.gif",
//     },
//     {
//       heading: "Increased Productivity: ",
//       paragraph:
//         "By resolving technical challenges promptly and offering ongoing support resources, we empower your team to focus on core business activities.",
//       imageUrl: "https://static.wixstatic.com/media/4c1bd0_750fed721ae04caf8b0375779bda0e87~mv2.gif",
//     },
//      {
//       heading: "Reduced IT Costs: ",
//       paragraph:
//         "Proactive maintenance and self-service tools can help prevent costly disruptions and empower your team to handle basic troubleshooting, ultimately minimizing IT support costs.",
//       imageUrl: "https://static.wixstatic.com/media/4c1bd0_36c48a319b204b1ab5a5192bbba71c1a~mv2.gif",
//     },
//      {
//       heading: "Peace of Mind ",
//       paragraph:
//         "Knowing you have a reliable support team in your corner allows you to focus on what matters most - growing your business.",
//       imageUrl: "https://static.wixstatic.com/media/4c1bd0_e4c192b8178d4e7d9d34a4ed7de71338~mv2.gif",
//     },
      
//   ];

//   return (
//     <div className="  bg-white py-12">
//       <div className="mx-auto max-w-7xl px-8 lg:px-8">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`mb-12 flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//           >
//             <div className="w-full md:w-7/10">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left" >
//                 {item.heading}
//               </h2>
//               <p className="text-lg text-gray-600 text-left">{item.paragraph}</p>
//             </div>
//             <div className="">
//               <img
//                 src={item.imageUrl}
//                 alt="Travel"
//                 className="w-30 h-auto rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

 



// // ===== Parent Component =====
// const Iphone = () => {
//   return (
//     <>
//       <div className="text-center max-w-7xl mx-auto px-10 mt-20">



//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" style={{ color: "#000" }}>
//       Megascale Technical IT Support / Customer care support : Empowering You with Expert IT Care
//         </h2>
//         <p className="text-xl" style={{ color: "#000" }}>
//          At Megascale, we understand that technology is the backbone of your business. That's why we offer unparalleled customer and technical support, ensuring your critical systems run smoothly and you have the resources to maximize their potential.  </p>
//       </div>
//       <NetworkSecurityOverview />
//        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" style={{ color: "#000" }}>
//       Why Choose Megascale Support?
//         </h2>
//       <LayoutComponent/>
      
//     </>
//   );
// };

// export default Iphone;




import React, { useState, useEffect } from "react";
import {
  Shield,
  Network,
  Server,
  Lock,
  Activity,
  AlertTriangle,
  Users,
  Clock,
  MessageSquare,
  Award,
  Wrench,
  BookOpen,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Heart,
  Zap,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Clock,
    MessageSquare,
    Award,
    Wrench,
    Network,
    Server,
    Activity,
    BookOpen,
    GraduationCap,
    TrendingUp,
    Users,
    DollarSign,
    Heart,
    Shield,
    AlertTriangle,
    Lock,
    Zap,
  };
  return icons[icon] || Clock;
};

// ===== Static Data =====
const supportFeatures = [
  {
    name: "Dedicated Support for Every Need",
    description:
      "Our support team is available around the clock, 365 days a year, to address your inquiries and resolve technical issues promptly. Reach us through your preferred channel - phone, email, live chat, or an online ticketing system.",
    icon: "Clock",
  },
  {
    name: "Highly Skilled Technical Expertise",
    description:
      "Our team consists of highly qualified and certified professionals with extensive experience in various IT domains. We don't just answer questions; we delve deep to diagnose issues and provide effective solutions.",
    icon: "Award",
  },
  {
    name: "Tailored Support Solutions",
    description:
      "We offer flexible support plans that can be tailored to your specific needs and budget. For enterprise clients, we assign dedicated account managers who act as your single point of contact.",
    icon: "Users",
  },
];

const supportChannels = [
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

const tailoredSupport = [
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
  {
    name: "Proactive Solutions",
    description:
      "Beyond reactive support, we focus on preventing issues before they occur, keeping your business running smoothly at all times.",
    icon: "Shield",
  },
];

const proactiveServices = [
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

const supportBenefits = [
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

const TechnicalSupportServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredChannel, setHoveredChannel] = useState(null);
  const [hoveredTailored, setHoveredTailored] = useState(null);
  const [hoveredProactive, setHoveredProactive] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  return (
    <>
      {/* ===== Section 1: Header ===== */}
      <section
        className="pt-12 px-4 container flex items-center justify-center"
        style={{  }}
      >
        <div className="max-w-7xl mx-auto w-full text-center px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Megascale Technical IT Support / Customer Care Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Empowering You with Expert IT Care
            </p>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              At Megascale, we understand that technology is the backbone of your
              business. That's why we offer unparalleled customer and technical
              support, ensuring your critical systems run smoothly and you have
              the resources to maximize their potential.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Main Support Features ===== */}
      <section
        className="py-0 px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {supportFeatures.map((feature, idx) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredFeature === idx
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
                          color: hoveredFeature === idx ? "#F15124" : "#000",
                        }}
                      >
                        {feature.name}
                      </h3>
                      <p
                        style={{ color: "#000", opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredFeature === idx ? "scale-x-100" : "scale-x-0"
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

      {/* ===== Section 3: Support Channels ===== */}
      <section className="pt-12 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Comprehensive Support Coverage
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Multiple ways to get the help you need, when you need it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => {
              const IconComponent = getIcon(channel.icon);
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHoveredChannel(idx)}
                  onMouseLeave={() => setHoveredChannel(null)}
                >
                  <div
                    className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor:
                        hoveredChannel === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredChannel === idx
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
                        {channel.name}
                      </h3>
                      <p
                        className="text-center leading-relaxed"
                        style={{ color: "#000", opacity: 0.8 }}
                      >
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 4: Tailored Support Solutions ===== */}
      <section
        className="pt-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Tailored Support Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Customized plans designed specifically for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {tailoredSupport.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="group"
                  onMouseEnter={() => setHoveredTailored(idx)}
                  onMouseLeave={() => setHoveredTailored(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      borderColor:
                        hoveredTailored === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredTailored === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredTailored === idx
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
                              hoveredTailored === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color: hoveredTailored === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color: hoveredTailored === idx ? "#fff" : "#F15124",
                          }}
                        >
                          0{idx + 1}
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4 transition-colors"
                        style={{
                          color: hoveredTailored === idx ? "#fff" : "#000",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="leading-relaxed transition-colors"
                        style={{
                          color: hoveredTailored === idx ? "#fff" : "#000",
                          opacity: hoveredTailored === idx ? 1 : 0.8,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        backgroundColor:
                          hoveredTailored === idx
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

      {/* ===== Section 5: Beyond Reactive Support ===== */}
      <section className="pt-12 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Beyond Reactive Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Proactive solutions to keep your business running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {proactiveServices.map((service, idx) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredProactive(idx)}
                  onMouseLeave={() => setHoveredProactive(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredProactive === idx
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
                          color: hoveredProactive === idx ? "#F15124" : "#000",
                        }}
                      >
                        {service.name}
                      </h3>
                      <p
                        style={{ color: "#000", opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {service.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredProactive === idx ? "scale-x-100" : "scale-x-0"
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

      {/* ===== Section 6: Why Choose Megascale Support ===== */}
      <section
        className="pt-12 px-12"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Why Choose Megascale Support?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Experience the difference that expert support makes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportBenefits.map((benefit, idx) => {
              const IconComponent = getIcon(benefit.icon);
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div
                    className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor:
                        hoveredBenefit === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredBenefit === idx
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
                        {benefit.name}
                      </h3>
                      <p
                        className="text-center leading-relaxed"
                        style={{ color: "#000", opacity: 0.8 }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 7: Call to Action ===== */}
      <section
        className="pt-12 px-12 flex items-center justify-center"
        style={{  }}
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Ready to Experience Expert IT Support?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Contact Megascale today for a free consultation. Let us show you
              how our technical support and customer care services can empower
              your business to focus on growth while we handle your IT
              challenges. With our team in your corner, you'll have peace of mind
              knowing your technology is in expert hands.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSupportServices;
 