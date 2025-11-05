

// // ==== CloudSections.jsx ====
// import React, { useState } from "react";
// import {
//   Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap,Rocket 
// } from "lucide-react";


// // ===== Helper to get Icon =====
// const getIcon = (icon) => {
//   const icons = {
//     Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap ,Rocket
//   };
//   return icons[icon] || Layout;
// };

// // ===== Static Data =====
// const cloudPlatforms = [
//     //     {
//     //         name: "Amazon Web Services (AWS)",
//     //         description: "Scalable, reliable cloud solutions for enterprises worldwide.",
//     //         icon: "Cloud",
//     //     },
//     // {
//     //     name: "Microsoft Azure",
//     //     description: "Flexible hybrid cloud solutions designed for modern business.",
//     //     icon: "Server",
//     // },
//     // {
//     //     name: "Google Cloud Platform (GCP)",
//     //     description: "Innovative infrastructure with powerful AI and analytics tools.",
//     //     icon: "Database",
//     // },
//     // {
//     //     name: "IBM Cloud",
//     //     description: "Trusted hybrid cloud and AI-driven digital transformation.",
//     //     icon: "Shield",
//     // },
//     // {
//     //     name: "Oracle Cloud",
//     //     description: "High-performance enterprise cloud with data-driven insights.",
//     //     icon: "Settings",
//     // },
//     // {
//     //     name: "Alibaba Cloud",
//     //     description: "Asia’s leading cloud provider with a global footprint.",
//     //     icon: "Globe",
//     // },
//     {
//     "name": "HTML5 & CSS3",
//     "description": "Our developers utilize the latest standards in HTML and CSS to create well-structured, visually appealing, and responsive web experiences that adapt seamlessly to any device.",
//     "icon": "Layout"
//   },
//   {
//     "name": "Modern JavaScript Frameworks",
//     "description": "We leverage popular frameworks like React, Angular, or Vue.js to build dynamic, interactive web interfaces that enhance user engagement and functionality.",
//     "icon": "Monitor"
//   },
//   {
//     "name": "Robust Programming Languages",
//     "description": "Our team is proficient in a variety of server-side languages like Python (Django), PHP (Laravel), Java (Spring), and Node.js, allowing us to select the best fit for your project's specific needs.",
//     "icon": "Code2"
//   },
//   {
//     "name": "Secure & Scalable Frameworks",
//     "description": "We utilize secure and scalable frameworks to ensure efficient development, robust functionalities, and the ability to handle growing traffic demands.",
//     "icon": "Shield"
//   },
//   {
//     "name": "Relational & Non-Relational Databases",
//     "description": "We employ industry-standard relational databases (MySQL, PostgreSQL) for structured data and leverage NoSQL solutions (MongoDB) for flexible data models when required.",
//     "icon": "Database"
//   },
//   {
//     "name": "RESTful APIs",
//     "description": "We create well-designed APIs that facilitate seamless communication between your web application and other systems or data sources.",
//     "icon": "Link"
//   },
//   {
//     "name": "Content Management Systems (CMS)",
//     "description": "For projects requiring a user-friendly content editing experience, we offer expertise in popular CMS platforms like WordPress or Drupal.",
//     "icon": "FileText"
//   },
//   {
//     "name": "DevOps & Automation Tools",
//     "description": "We leverage DevOps practices and automation tools like Git and continuous integration/continuous delivery (CI/CD) pipelines to streamline development workflows, ensure code quality, and expedite deployment.",
//     "icon": "Settings"
//   },
//   {
//     "name": "Web Performance Optimization",
//     "description": "Our team prioritizes website performance. We utilize optimization techniques and tools to ensure fast loading times and a smooth user experience across all devices.",
//     "icon": "Zap"
//   }
//     ];

//     const cloudFeatures = [
//     // {
//     //     name: "High Availability",
//     //     description:
//     //     "Ensure your business runs without interruptions through reliable uptime and redundancy.",
//     //     icon: "Zap",
//     // },
//     // {
//     //     name: "Security First",
//     //     description:
//     //     "Protect your data with advanced encryption, monitoring, and compliance controls.",
//     //     icon: "Lock",
//     // },
//     // {
//     //     name: "Scalable Infrastructure",
//     //     description:
//     //     "Easily scale resources up or down to meet your evolving business demands.",
//     //     icon: "Cpu",
//     // },
//     // {
//     //     name: "Automation & DevOps",
//     //     description:
//     //     "Accelerate deployment cycles and improve efficiency with DevOps integration.",
//     //     icon: "Settings",
//     // },
//     // {
//     //     name: "Global Reach",
//     //     description:
//     //     "Deploy applications closer to your users with a vast global network.",
//     //     icon: "Globe",
//     // },
//     // {
//     //     name: "Cost Optimization",
//     //     description:
//     //     "Leverage pay-as-you-go models and cost management tools to reduce expenses.",
//     //     icon: "BarChart",
//     // },
//     {
//         "name": "Technology Expertise",
//         "description": "Our team has a deep understanding of modern web development technologies, allowing us to select the optimal tech stack for your project.",
//         "icon": "Cpu"
//     },
//     {
//         "name": "Custom-Tailored Solutions",
//         "description": "We don't offer a one-size-fits-all approach. We take the time to understand your unique needs and goals to craft a web solution that aligns perfectly with your vision.",
//         "icon": "Wrench"
//     },
//     {
//         "name": "Focus on User Experience",
//         "description": "We prioritize user-centric design principles to ensure your website is not only visually appealing but also intuitive, easy to navigate, and delivers a positive user experience.",
//         "icon": "UserCheck"
//     },
//     {
//         "name": "Scalability & Security",
//         "description": "We build web solutions that can scale with your business growth while adhering to the highest security standards to protect your data and user information.",
//         "icon": "ShieldCheck"
//     },
//     {
//         "name": "Agile Development Methodology",
//         "description": "We embrace agile development methodologies to ensure flexibility, continuous improvement, and close collaboration throughout the development process.",
//         "icon": "Repeat"
//     }
// ];

// const businessValues = [
//   {
//     name: "Innovation",
//     description:
//       "Driving continuous innovation through emerging technologies and agile methodologies.",
//     icon: "Rocket",
//   },
//   {
//     name: "Integrity",
//     description:
//       "Building long-term trust through transparency, reliability, and ethics.",
//     icon: "Shield",
//   },
//   {
//     name: "Customer Success",
//     description:
//       "Empowering clients to achieve measurable outcomes and lasting growth.",
//     icon: "CheckCircle",
//   },
//   {
//     name: "Collaboration",
//     description:
//       "Working closely with clients and partners to co-create impactful solutions.",
//     icon: "Cloud",
//   },
//   {
//     name: "Sustainability",
//     description:
//       "Advancing green cloud solutions for a sustainable digital future.",
//     icon: "Globe",
//   },
//   {
//     name: "Excellence",
//     description:
//       "Delivering high-quality results with precision, speed, and expertise.",
//     icon: "Cpu",
//   },
// ];

// const CloudSections = () => {
//   const [hoveredPlatform, setHoveredPlatform] = useState(null);
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const [hoveredValue, setHoveredValue] = useState(null);

//   return (
//     <>

//      <section className="bg-[#fffaf7] text-center">
//       {/* ===== Header Section ===== */}
//       <div className="pt-5">
//         <h1 className="text-4xl md:text-5xl font-extrabold">
//           Website Design & Management
//         </h1>
//       </div>

//       {/* ===== Main Content ===== */}
//       <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
//         <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed mb-6">
//           At <span className=" font-bold">Megascale IT firm</span>, our website design and management
//           services go beyond just creating websites. We offer comprehensive
//           solutions to help businesses establish and maintain a strong online
//           presence. Our services include designing and developing custom
//           websites tailored to our clients' unique needs and branding
//           requirements.
//         </p>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10">
//           We also provide separate website management services to ensure that
//           our clients’ existing websites are regularly updated, optimized for
//           performance, and secure. Our goal is to help businesses effectively
//           showcase their products or services online and achieve their business
//           objectives through their websites.
//         </p>

//         {/* ===== Subheading ===== */}
//         <h2 className="text-3xl md:text-4xl font-bold  mb-6">
//           Megascale Web Development: Crafting Exceptional Web Experiences with
//           Cutting-Edge Technologies
//         </h2>

//         <p className="text-gray-700 text-lg leading-relaxed mb-12">
//           At Megascale, we're a leading software firm passionate about crafting
//           exceptional web experiences. We leverage a powerful blend of
//           cutting-edge technologies and our team's in-depth expertise to deliver
//           high-performance, visually stunning, and user-centric websites and web
//           applications tailored to your unique business goals.
//         </p>

//         {/* ===== Section Title ===== */}
//         <h3 className="text-2xl md:text-3xl font-bold ">
//           A Modern Tech Stack for Optimal Results
//         </h3>
//       </div>
//     </section>
//       {/* ===== Section 1: Cloud Platforms ===== */}
//       <section className="py-20 px-4 flex items-center justify-center">
//         <div className="max-w-7xl mx-auto w-full text-center">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
              
// A Modern Tech Stack for Optimal Results
//             </h2>
//             {/* <p className="text-xl" style={{ color: "#000" }}>
//               Multi-cloud expertise to power your business
//             </p> */}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//             {cloudPlatforms.map((platform, idx) => {
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
//                           color:
//                             hoveredPlatform === idx ? "#F15124" : "#000",
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

//       {/* ===== Section 2: Cloud Features ===== */}
//       <section
//         className="py-20 px-4"
//         style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               Why Choose Megascale for Your Web Development Needs?
//             </h2>
//             {/* <p className="text-xl" style={{ color: "#000" }}>
//               Comprehensive cloud services tailored for you
//             </p> */}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cloudFeatures.map((feature, idx) => {
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
//                         hoveredFeature === idx
//                           ? "#F15124"
//                           : "rgba(0,0,0,0.1)",
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

//       {/* ===== Section 3: Business Values ===== */}
//       <section className=" pb-10 px-4">
//         <div className="max-w-7xl mx-auto">
          

//           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {businessValues.map((value, idx) => {
//               const IconComponent = getIcon(value.icon);
//               return (
//                 <div
//                   key={idx}
//                   className="group"
//                   onMouseEnter={() => setHoveredValue(idx)}
//                   onMouseLeave={() => setHoveredValue(null)}
//                 >
//                   <div
//                     className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
//                     style={{
//                       borderColor:
//                         hoveredValue === idx
//                           ? "#F15124"
//                           : "rgba(0,0,0,0.1)",
//                       boxShadow:
//                         hoveredValue === idx
//                           ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
//                           : "0 5px 20px rgba(0,0,0,0.05)",
//                     }}
//                   >
//                     <div
//                       className={`absolute inset-0 transform transition-transform duration-700 ${
//                         hoveredValue === idx
//                           ? "translate-x-0"
//                           : "-translate-x-full"
//                       }`}
//                       style={{ backgroundColor: "#F15124" }}
//                     ></div>

//                     <div className="relative z-10">
//                       <div className="flex items-center justify-between mb-6">
//                         <div
//                           className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
//                           style={{
//                             backgroundColor:
//                               hoveredValue === idx ? "#fff" : "#F15124",
//                           }}
//                         >
//                           <IconComponent
//                             className="w-7 h-7"
//                             style={{
//                               color:
//                                 hoveredValue === idx ? "#F15124" : "#fff",
//                             }}
//                           />
//                         </div>
//                         <div
//                           className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
//                           style={{
//                             color:
//                               hoveredValue === idx ? "#fff" : "#F15124",
//                           }}
//                         >
//                           0{idx + 1}
//                         </div>
//                       </div>

//                       <h3
//                         className="text-2xl font-bold mb-4 transition-colors"
//                         style={{
//                           color: hoveredValue === idx ? "#fff" : "#000",
//                         }}
//                       >
//                         {value.name}
//                       </h3>

//                       <p
//                         className="leading-relaxed transition-colors"
//                         style={{
//                           color: hoveredValue === idx ? "#fff" : "#000",
//                           opacity: hoveredValue === idx ? 1 : 0.8,
//                         }}
//                       >
//                         {value.description}
//                       </p>
//                     </div>

//                     <div
//                       className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
//                       style={{
//                         backgroundColor:
//                           hoveredValue === idx
//                             ? "rgba(255,255,255,0.1)"
//                             : "rgba(241,81,36,0.1)",
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div> */}

//           <section className=" px-4 text-center">
//   <div className="max-w-4xl mx-auto">
//     <h1 className="text-5xl font-bold mb-6">
//       Ready to build a web presence that sets you apart?
//     </h1>
//     <p className="text-xl text-gray-700">
//       Contact Megascale today for a free consultation. Let's discuss your vision and explore how our web development expertise can help you achieve your online goals.
//     </p>
//   </div>
// </section>

//         </div>
//       </section>
//     </>
//   );
// };

// export default CloudSections;





// ==== CloudSections.jsx ====
import React, { useState,useEffect } from "react";
import {
  Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap, Rocket
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap, Rocket
  };
  return icons[icon] || Layout;
};

// ===== Static Data =====
const cloudPlatforms = [
  {
    "name": "HTML5 & CSS3",
    "description": "Our developers utilize the latest standards in HTML and CSS to create well-structured, visually appealing, and responsive web experiences that adapt seamlessly to any device.",
    "icon": "Layout"
  },
  {
    "name": "Modern JavaScript Frameworks",
    "description": "We leverage popular frameworks like React, Angular, or Vue.js to build dynamic, interactive web interfaces that enhance user engagement and functionality.",
    "icon": "Monitor"
  },
  {
    "name": "Robust Programming Languages",
    "description": "Our team is proficient in a variety of server-side languages like Python (Django), PHP (Laravel), Java (Spring), and Node.js, allowing us to select the best fit for your project's specific needs.",
    "icon": "Code2"
  },
  {
    "name": "Secure & Scalable Frameworks",
    "description": "We utilize secure and scalable frameworks to ensure efficient development, robust functionalities, and the ability to handle growing traffic demands.",
    "icon": "Shield"
  },
  {
    "name": "Relational & Non-Relational Databases",
    "description": "We employ industry-standard relational databases (MySQL, PostgreSQL) for structured data and leverage NoSQL solutions (MongoDB) for flexible data models when required.",
    "icon": "Database"
  },
  {
    "name": "RESTful APIs",
    "description": "We create well-designed APIs that facilitate seamless communication between your web application and other systems or data sources.",
    "icon": "Link"
  },
  {
    "name": "Content Management Systems (CMS)",
    "description": "For projects requiring a user-friendly content editing experience, we offer expertise in popular CMS platforms like WordPress or Drupal.",
    "icon": "FileText"
  },
  {
    "name": "DevOps & Automation Tools",
    "description": "We leverage DevOps practices and automation tools like Git and continuous integration/continuous delivery (CI/CD) pipelines to streamline development workflows, ensure code quality, and expedite deployment.",
    "icon": "Settings"
  },
  {
    "name": "Web Performance Optimization",
    "description": "Our team prioritizes website performance. We utilize optimization techniques and tools to ensure fast loading times and a smooth user experience across all devices.",
    "icon": "Zap"
  }
];

const cloudFeatures = [
  {
    "name": "Technology Expertise",
    "description": "Our team has a deep understanding of modern web development technologies, allowing us to select the optimal tech stack for your project.",
    "icon": "Code2"
  },
  {
    "name": "Custom-Tailored Solutions",
    "description": "We don't offer a one-size-fits-all approach. We take the time to understand your unique needs and goals to craft a web solution that aligns perfectly with your vision.",
    "icon": "Settings"
  },
  {
    "name": "Focus on User Experience",
    "description": "We prioritize user-centric design principles to ensure your website is not only visually appealing but also intuitive, easy to navigate, and delivers a positive user experience.",
    "icon": "Monitor"
  },
  {
    "name": "Scalability & Security",
    "description": "We build web solutions that can scale with your business growth while adhering to the highest security standards to protect your data and user information.",
    "icon": "Shield"
  },
  {
    "name": "Agile Development Methodology",
    "description": "We embrace agile development methodologies to ensure flexibility, continuous improvement, and close collaboration throughout the development process.",
    "icon": "Zap"
  }
];

const businessValues = [
  {
    name: "Innovation",
    description: "Driving continuous innovation through emerging technologies and agile methodologies.",
    icon: "Rocket",
  },
  {
    name: "Integrity",
    description: "Building long-term trust through transparency, reliability, and ethics.",
    icon: "Shield",
  },
  {
    name: "Customer Success",
    description: "Empowering clients to achieve measurable outcomes and lasting growth.",
    icon: "Code2",
  },
  {
    name: "Collaboration",
    description: "Working closely with clients and partners to co-create impactful solutions.",
    icon: "Link",
  },
  {
    name: "Sustainability",
    description: "Advancing green cloud solutions for a sustainable digital future.",
    icon: "Database",
  },
  {
    name: "Excellence",
    description: "Delivering high-quality results with precision, speed, and expertise.",
    icon: "Zap",
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
      {/* ===== Header Section ===== */}
      <section className=" text-center">
        <div className="pt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A17216]">
            Website Design & Management
          </h1>
        </div>

        <div className="max-w-7xl mx-auto ">
          <p className="px-8 text-lg mb-4 text-gray-700 leading-relaxed transition-colors">
            At <span className="font-semibold">Megascale IT firm</span>, our website design and management
            services go beyond just creating websites. We offer comprehensive
            solutions to help businesses establish and maintain a strong online
            presence. Our services include designing and developing custom
            websites tailored to our clients' unique needs and branding
            requirements.
          </p>

          <p className="px-8 text-lg mb-10 text-gray-700 leading-relaxed transition-colors">
            We also provide separate website management services to ensure that
            our clients’ existing websites are regularly updated, optimized for
            performance, and secure. Our goal is to help businesses effectively
            showcase their products or services online and achieve their business
            objectives through their websites.
          </p>

          <h2 className="px-8 text-3xl md:text-3xl font-bold mb-6 text-[#0A1721]">
            Megascale Web Development: Crafting Exceptional Web Experiences with
            Cutting-Edge Technologies
          </h2>

          <p className="px-8 text-gray-700 text-lg leading-relaxed mb-4">
            At Megascale, we're a leading software firm passionate about crafting
            exceptional web experiences. We leverage a powerful blend of
            cutting-edge technologies and our team's in-depth expertise to deliver
            high-performance, visually stunning, and user-centric websites and web
            applications tailored to your unique business goals.
          </p>

          {/* <h3 className="text-2xl md:text-3xl font-bold">A Modern Tech Stack for Optimal Results</h3> */}
        </div>
      </section>

      {/* ===== Cloud Platforms Section ===== */}
      <section className="pt-12 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              A Modern Tech Stack for Optimal Results
            </h2>
          </div>

          <div className="container mx-auto px-8">
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
        </div>
      </section>

      {/* ===== Cloud Features Section ===== */}
      <section
        className="pt-12 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Why Choose Megascale for Your Web Development Needs?
            </h2>
          </div>

          <div className="container mx-auto px-8">
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
        </div>
      </section>

      {/* ===== Business Values Section ===== */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <section className="px-4 text-center">
            <div className="mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build a web presence that sets you apart?
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                Contact Megascale today for a free consultation. Let's discuss your vision and explore how our web development expertise can help you achieve your online goals.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CloudSections;
