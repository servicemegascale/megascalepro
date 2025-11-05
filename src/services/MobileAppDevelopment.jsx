


// // ==== CloudSections.jsx ====
// import React, { useState } from "react";
// import {
//   Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap, Rocket
// } from "lucide-react";

// // ===== Helper to get Icon =====
// const getIcon = (icon) => {
//   const icons = {
//     Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap, Rocket
//   };
//   return icons[icon] || Layout;
// };

// // ===== Static Data =====
// const cloudPlatforms = [
//   {
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
// ];

// const cloudFeatures = [
//   {
//     "name": "Technology Expertise",
//     "description": "Our team has a deep understanding of modern web development technologies, allowing us to select the optimal tech stack for your project.",
//     "icon": "Code2"
//   },
//   {
//     "name": "Custom-Tailored Solutions",
//     "description": "We don't offer a one-size-fits-all approach. We take the time to understand your unique needs and goals to craft a web solution that aligns perfectly with your vision.",
//     "icon": "Settings"
//   },
//   {
//     "name": "Focus on User Experience",
//     "description": "We prioritize user-centric design principles to ensure your website is not only visually appealing but also intuitive, easy to navigate, and delivers a positive user experience.",
//     "icon": "Monitor"
//   },
//   {
//     "name": "Scalability & Security",
//     "description": "We build web solutions that can scale with your business growth while adhering to the highest security standards to protect your data and user information.",
//     "icon": "Shield"
//   },
//   {
//     "name": "Agile Development Methodology",
//     "description": "We embrace agile development methodologies to ensure flexibility, continuous improvement, and close collaboration throughout the development process.",
//     "icon": "Zap"
//   }
// ];

// const businessValues = [
//   {
//     name: "Innovation",
//     description: "Driving continuous innovation through emerging technologies and agile methodologies.",
//     icon: "Rocket",
//   },
//   {
//     name: "Integrity",
//     description: "Building long-term trust through transparency, reliability, and ethics.",
//     icon: "Shield",
//   },
//   {
//     name: "Customer Success",
//     description: "Empowering clients to achieve measurable outcomes and lasting growth.",
//     icon: "Code2",
//   },
//   {
//     name: "Collaboration",
//     description: "Working closely with clients and partners to co-create impactful solutions.",
//     icon: "Link",
//   },
//   {
//     name: "Sustainability",
//     description: "Advancing green cloud solutions for a sustainable digital future.",
//     icon: "Database",
//   },
//   {
//     name: "Excellence",
//     description: "Delivering high-quality results with precision, speed, and expertise.",
//     icon: "Zap",
//   },
// ];

// const CloudSections = () => {
//   const [hoveredPlatform, setHoveredPlatform] = useState(null);
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const [hoveredValue, setHoveredValue] = useState(null);

//   return (
//     <>
//       {/* ===== Header Section ===== */}
//       <section className="bg-[#fffaf7] text-center">
//         <div className="pt-5">
//           <h1 className="text-4xl md:text-5xl font-extrabold">
//             Mobile App Development
//           </h1>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
//           <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed mb-6">
//       in today's mobile-driven world, a robust and user-friendly app is essential for any business. At Megascale, we are your one-stop shop for crafting exceptional iOS and Android mobile applications, empowering your business to thrive in the ever-evolving app landscape.
//           </p>

//           <p className="text-gray-700 text-lg leading-relaxed mb-10">
//            We leverage cutting-edge technologies and a passionate development team to bring your vision to life. Here's a glimpse into our expertise:
//           </p>



//         </div>
//       </section>

//       {/* ===== Cloud Platforms Section ===== */}
//       <section className="py-20 px-4 flex items-center justify-center">
//         <div className="max-w-7xl mx-auto w-full text-center">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               A Modern Tech Stack for Optimal Results
//             </h2>
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

//       {/* ===== Cloud Features Section ===== */}
//       <section
//         className="py-20 px-4"
//         style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
//               Why Choose Megascale for Your Web Development Needs?
//             </h2>
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

//       {/* ===== Business Values Section ===== */}
//       <section className="pb-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           <section className="px-4 text-center">
//             <div className="max-w-4xl mx-auto">
//               <h1 className="text-5xl font-bold mb-6">
//                 Ready to build a web presence that sets you apart?
//               </h1>
//               <p className="text-xl text-gray-700">
//                 Contact Megascale today for a free consultation. Let's discuss your vision and explore how our web development expertise can help you achieve your online goals.
//               </p>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CloudSections;




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
        "name": "Experienced & Agile Development Team",
        "description": "Our team has a proven track record of delivering high-quality mobile apps across various industries.",
        "icon": "Layout"
    },
    {
        "name": "Scalable Solutions",
        "description": "We design apps that can grow with your business, accommodating future feature additions and user base expansion.",
        "icon": "Monitor"
    },
    {
        "name": "Data Security & Privacy",
        "description": "We prioritize the security of your app and user data, adhering to industry best practices and regulations.",
        "icon": "Code2"
    },

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

const CloudSections = () => {

     useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
    const [hoveredPlatform, setHoveredPlatform] = useState(null);
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <>
            {/* ===== Header Section ===== */}
            <section className="px-8 text-center">
                <div className="pt-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                        Mobile App Development
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-8">
                    <p className="text-lg text-gray-700 leading-relaxed transition-colors ">
                        In today's mobile-driven world, a robust and user-friendly app is essential for any business. At Megascale, we are your one-stop shop for crafting exceptional iOS and Android mobile applications, empowering your business to thrive in the ever-evolving app landscape.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                        We leverage cutting-edge technologies and a passionate development team to bring your vision to life. Here's a glimpse into our expertise:
                    </p>
                </div>
            </section>

            {/* ===== Native App Development Section ===== */}
            <section className="pt-12  px-8 bg-gradient-to-br ">
                <div className=" container max-w-7xl mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className=" text-left   text-3xl font-bold mb-4 text-[#0A1721]">
                                Native App Development for Peak Performance
                            </h2>

                            <div className="text-left space-y-8">
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#F15124]">
                                    <h3 className=" text-xl font-semibold mb-3 text-gray-900">
                                        Native Advantage :
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                        We specialize in native app development for both iOS (Swift) and Android (Kotlin), ensuring optimal performance, speed, and user experience tailored to each platform's strengths.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0A1721]">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        Unleashing Device Features :
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                        Our developers take full advantage of native functionalities like camera, GPS, and offline capabilities, creating feature-rich apps that seamlessly integrate with a user's device.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative">
                                <div className="absolute 0 rounded-3xl blur-2xl opacity-20  "></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
                                        alt="Native App Development"
                                        className="rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== UI/UX Design Section ===== */}
            <section className="pt-12 px-4  ">
                <div className=" container px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4  from-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
                                        alt="UI/UX Design"
                                        className="rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-left text-3xl  font-bold mb-4 text-[#0A1721]">
                                Seamless User Interface (UI) & User Experience (UX) Design
                            </h2>

                            <div className="text-left space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#F15124]">
                                    <h3 className="text-xl font-semibold mb-3  ">
                                        Intuitive Navigation & Flawless Design:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                        Our team of UI/UX designers crafts user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#0A1721]">
                                    <h3 className="text-xl font-semibold mb-3 ">
                                        Focus on User Flow :
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                        We prioritize a smooth user experience, ensuring a logical flow that keeps users engaged and effortlessly accomplishing their goals within the app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-12 px-4 bg-gradient-to-br ">
                <div className="container max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#0A1721]">
                        Development Technologies We Master :
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#F15124]">
                                <h3 className="text-2xl font-bold mb-4 text-[#0A1721] flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#F15124] rounded-lg flex items-center justify-center text-white font-bold p-9">iOS</span>
                                    iOS Development :
                                </h3>
                                <p className="text-gray-700 leading-relaxed transition-colors">
                                    Swift, Xcode, ARKit, Core ML, and more.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#0A1721]">
                                <h3 className="text-2xl font-bold mb-4 text-[#0A1721] flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#0A1721] rounded-lg flex items-center justify-center text-white p-9 font-bold">And</span>
                                    Android Development:
                                </h3>
                                <p className="text-gray-700 leading-relaxed transition-colors">
                                    Kotlin, Android Studio, Jetpack libraries, and more.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#F15124]">
                                <h3 className="text-2xl font-bold mb-4 text-[#0A1721]">
                                    Cross-Platform Integration :
                                </h3>
                                <p className="text-gray-700 leading-relaxed transition-colors">
                                    For specific needs, we can integrate functionalities like social media logins or payment gateways using relevant SDKs (Software Development Kits).
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#0A1721]">
                                <h3 className="text-2xl font-bold mb-4 text-[#0A1721]">
                                    API Integration :
                                </h3>
                                <p className="text-gray-700 leading-relaxed transition-colors">
                                    Connect your app to existing back-end systems or data sources using secure and efficient APIs.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F15124]/20 to-[#0A1721]/20 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="https://www.panoramicinfotech.com/wp-content/uploads/2021/07/app-development-min.jpg"
                                        alt="Development Technologies"
                                        className="rounded-2xl object-cover bg-cover h-[400px] md:h-[700px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Beyond Development Section ===== */}
            <section className="pt-12 px-4 bg-gradient-to-br ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#0A1721]">
                        Beyond Development : Our Continued Support
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-transparent hover:border-[#F15124]">
                            <div className="flex items-start gap-6 mb-6">
                                {/* <div className="flex-shrink-0">
                                    <img
                                        src="/api/placeholder/120/120"
                                        alt="App Maintenance"
                                        className="rounded-xl"
                                    />
                                </div> */}
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 text-[#F15124]">
                                        App Maintenance & Updates
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We understand that apps need constant care. We provide ongoing maintenance and update services to ensure your app remains secure, optimized, and delivers the best possible user experience.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-transparent hover:border-[#0A1721]">
                            <div className="flex items-start gap-6 mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 text-[#0A1721]">
                                        App Store Optimization (ASO):
                                    </h3>
                                </div>
                                {/* <div className="flex-shrink-0">
                                    <img
                                        src="/store.png"
                                        alt="ASO"
                                        className="rounded-xl"
                                    />
                                </div> */}
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our team optimizes your app listing to improve discoverability within the App Store and Google Play.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== Cloud Platforms Section ===== */}
            <section className="pt-12 px-4 flex items-center justify-center">
                <div className="container px-8 max-w-7xl mx-auto w-full text-center">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#000" }}>
                            Why Choose Megascale for Your Mobile App Development?
                        </h2>
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

            {/* ===== Cloud Features Section ===== */}
            {/* <section
                className="py-20 px-4"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4" style={{ color: "#000" }}>
                            Why Choose Megascale for Your Mobile App Development Needs?
                        </h2>
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
            </section> */}

            {/* ===== Call to Action Section ===== */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <section className="px-4 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to take your business to the next level with a powerful mobile app?
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                                Contact Megascale today for a free consultation and let's discuss how we can transform your vision into a thriving mobile application.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default CloudSections;