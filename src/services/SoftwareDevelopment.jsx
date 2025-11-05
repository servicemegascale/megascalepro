
import React, { useState,useEffect } from "react";
import {
    Layout, Monitor, Code2, Shield, Database, Link, FileText, Settings, Zap,Rocket
} from "lucide-react";
import { Code, Server, Wrench } from 'lucide-react';


// ===== Helper to get Icon =====
const getIcon = (icon) => {
    const icons = {
        Layout, Monitor, Code2, Shield, Link, FileText, Settings, Zap, Rocket
    };
    return icons[icon] || Layout;
};

// ===== Static Data =====
const cloudPlatforms = [

  {
    "name": "Technology Agnostic Approach",
    "description": "We recommend the most suitable technology stack based on your specific project requirements and budget.",
    "icon": "Solution"
  },
  {
    "name": "Full-Stack Development Expertise",
    "description": "Our team has comprehensive skills across front-end, back-end, mobile, and cloud development, allowing us to handle complex projects seamlessly.",
    "icon": "Engineer"
  },
  {
    "name": "Agile Development Methodology",
    "description": "We embrace agile principles to ensure flexibility, continuous improvement, and close collaboration throughout the development process.",
    "icon": "Analytics"
  },
  {
    "name": "Scalability & Security",
    "description": "We prioritize secure coding practices and build solutions that can scale with your business growth.",
    "icon": "Stretching"
  },
  {
    "name": "Focus on Security & Scalability",
    "description": "We prioritize secure coding practices and build solutions that can scale with your business growth.",
    "icon": "Shield"
  },
  {
    "name": "Proven Track Record",
    "description": "We have a well-established reputation for delivering successful software projects across various industries.",
    "icon": "RaceTrack"
  },
  {
    "name": "Front-End Development",
    "description": "HTML5 & CSS3: Building the foundation with well-structured and visually appealing web interfaces.",
    "icon": "Layout"
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
            <section className=" text-center">
                <div className="pt-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-0 text-[#0A1721]">
                    Software Development
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto px-8 pt-4 ">
                   <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                        In today's mobile-driven world, a robust and user-friendly app is essential for any business. At Megascale, we are your one-stop shop for crafting exceptional iOS and Android mobile applications, empowering your business to thrive in the ever-evolving app landscape.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                      Megascale Software Development: A Spectrum of Technologies to Power Your Vision
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                      At Megascale, we're a comprehensive software development firm equipped to tackle a wide range of projects. Here's a glimpse into the diverse technologies our expert developers leverage to bring your software vision to life:
                    </p>
                </div>
            </section>

            {/* ===== Native App Development Section ===== */}
            

            {/* ===== UI/UX Design Section ===== */}
            <section className="pt-12 px-4  ">

                  <h1 className="text-3xl md:text-4xl font-bold mb-0 text-[#0A1721]">
                   Web Development Technologies

                </h1>
                <div className="container px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4  from-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="https://www.intelivita.com/wp-content/uploads/2023/10/Software-Development-Process.webp"
                                        alt="UI/UX Design"
                                        className="rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <h2 className="text-3xl  font-bold mx-2 mt-2 text-[#0A1721]">
                                Front-End Development
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3  ">
                                       HTML5 & CSS3: 
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                       Building the foundation with well-structured and visually appealing web interfaces.
                                        
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3 ">
                                       JavaScript Frameworks: 
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                        Utilizing frameworks like React, Angular, or Vue.js to create dynamic and interactive user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="container px-8 max-w-7xl mx-auto mt-12">
                    <div className="text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                                Back-End Development:
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3  ">
                                    Programming Languages:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                      Our expertise spans across Python (Django), PHP (Laravel), Java (Spring), Node.js, and more, allowing us to choose the best fit for your project.
                                        
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3 ">
                                       Web Frameworks:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                       Leveraging secure and scalable frameworks for efficient development, robust functionalities, and handling increased traffic.
                                    </p>
                                    </div>
                                     <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3 ">
                                      Databases:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                       Relational databases like MySQL and PostgreSQL for structured data, and NoSQL solutions like MongoDB for flexible data models.
                                    </p>
                                    </div>
                                     <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-3 ">
                                      APIs:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed transition-colors">
                                       Creating well-designed RESTful APIs for seamless communication between your web application and other systems.   
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4  from-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740&q=80"
                                        alt="UI/UX Design"
                                        className="rounded-2xl h-[400px] md:h-[550px] object-cover bg-cover"
                                    />
                                </div>
                            </div>
                        </div>

                       

                        
                    </div>
                </div>
            </section>

       
 


            {/* ===== Cloud Platforms Section ===== */}
            <section className="pt-12 px-4 flex items-center justify-center">
                <div className="container px-8 max-w-7xl mx-auto w-full text-center">
                    <div className="text-center mb-10">
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
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                        Ready to transform your software vision into reality?
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                                Contact Megascale today for a free consultation and let's discuss how our expertise and diverse technological capabilities can empower your software development journey.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default CloudSections;