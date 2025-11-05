import React, { useState,useEffect } from "react";
import {
  CheckSquare,
  Bug,
  Lock,
  Terminal,
  ShieldCheck,
  Play,
  Wrench,
  Smile,
  DollarSign,
  Clock,
  Users,
  Brain,
  Zap,
  Globe,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    CheckSquare,
    Bug,
    Lock,
    Terminal,
    ShieldCheck,
    Play,
    Wrench,
    Smile,
    DollarSign,
    Clock,
    Users,
    Brain,
    Zap,
    Globe,
  };
  return icons[icon] || CheckSquare;
};

// ===== Static Data =====
const testingServices = [
  {
    name: "Functional Testing",
    description:
      "We meticulously test software functionalities to ensure they adhere to your requirements and specifications.",
    icon: "CheckSquare",
  },
  {
    name: "Non-Functional Testing",
    description:
      "We evaluate performance, usability, security, and compatibility to guarantee a seamless user experience.",
    icon: "Bug",
  },
  {
    name: "Mobile App Testing",
    description:
      "Our specialists rigorously test your mobile app across various devices and platforms.",
    icon: "Lock",
  },
  {
    name: "API Testing",
    description:
      "We ensure your application programming interfaces (APIs) function flawlessly and integrate seamlessly with other systems.",
    icon: "Terminal",
  },
  {
    name: "Security Testing",
    description:
      "We prioritize the security of your software by conducting thorough penetration testing and vulnerability assessments.",
    icon: "ShieldCheck",
  },
  {
    name: "Automation Testing",
    description:
      "We leverage automation tools to streamline repetitive testing processes, saving time and resources.",
    icon: "Play",
  },
];

const testingBenefits = [
  {
    name: "Improved Software Quality",
    description:
      "Identify and address bugs early in the development cycle to deliver high-quality, reliable software.",
    icon: "Wrench",
  },
  {
    name: "Enhanced User Experience",
    description:
      "Ensure your software is user-friendly, performs well, and functions flawlessly across different devices and platforms.",
    icon: "Smile",
  },
  {
    name: "Reduced Development Costs",
    description:
      "Early defect detection prevents costly rework and delays later in the development process.",
    icon: "DollarSign",
  },
  {
    name: "Increased Customer Satisfaction",
    description:
      "Deliver bug-free, reliable software that meets user expectations and fosters brand loyalty.",
    icon: "Users",
  },
  {
    name: "Faster Time to Market",
    description:
      "Efficient testing processes help you get your software to market quicker.",
    icon: "Clock",
  },
];

const whyChooseMegascale = [
  {
    name: "Experienced Testers",
    description:
      "Our team comprises highly skilled testers with proven experience across diverse technologies and software domains.",
    icon: "Brain",
  },
  {
    name: "In-Depth Testing Expertise",
    description:
      "We go beyond basic functionality testing. We delve deep into performance, security, usability, and compatibility to ensure a polished final product.",
    icon: "Zap",
  },
  {
    name: "Agile & Collaborative Approach",
    description:
      "We work closely with your development team throughout the testing process, fostering communication and ensuring timely issue resolution.",
    icon: "Globe",
  },
  {
    name: "Test Automation Expertise",
    description:
      "Our team is adept at leveraging automation tools to optimize testing efficiency and reduce costs.",
    icon: "Terminal",
  },
  {
    name: "Scalable Testing Solutions",
    description:
      "We tailor our testing services to your specific project needs and budget, ensuring you receive the right level of testing coverage.",
    icon: "ShieldCheck",
  },
];

const SoftwareTesting = () => {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);

  return (
    <div className="min-h-screen px-8  ">
      {/* Header Section */}
      <header className="  pt-12 px-4 text-center" >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">Software Testing</h1>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed transition-colors">
            Software Testing or Quality Assurance is the cornerstone of impeccable software development, ensuring that applications meet rigorous standards for functionality, performance, and security.
          </p>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed transition-colors">
            By rigorously testing and validating software throughout its development lifecycle, we guarantee a seamless user experience, minimize defects, and enhance overall product reliability. Our commitment to quality assurance translates into software solutions that not only meet but exceed user expectations.
          </p>
        </div>
      </header>

      {/* Megascale: Delivering Confidence Section */}
      <section className="pt-12 px-4 text-center " >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl  font-bold mb-4 text-[#0A1721]">
            Megascale: Delivering Confidence Through Exceptional Software Testing
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed transition-colors">
            In today's competitive software landscape, ensuring quality is paramount. At Megascale, we offer comprehensive software testing services designed to identify and address defects before they reach your users. Our team of experienced testers leverages industry-best practices and cutting-edge tools to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* A Spectrum of Testing Services */}
      <section className="pt-12 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              A Spectrum of Testing Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {testingServices.map((service, idx) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredService === idx
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
                          color: hoveredService === idx ? "#F15124" : "#000",
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
                        hoveredService === idx ? "scale-x-100" : "scale-x-0"
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

      {/* Why Choose Megascale */}
      <section className="pt-12 px-4" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Why Choose Megascale for Your Software Testing Needs?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseMegascale.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHoveredWhy(idx)}
                  onMouseLeave={() => setHoveredWhy(null)}
                >
                  <div
                    className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor:
                        hoveredWhy === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredWhy === idx
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
                        {item.name}
                      </h3>
                      <p
                        className="text-center leading-relaxed"
                        style={{ color: "#000", opacity: 0.8 }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of Software Testing */}
      <section className="pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Benefits of Software Testing with Megascale
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingBenefits.map((benefit, idx) => {
              const IconComponent = getIcon(benefit.icon);
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
                        hoveredBenefit === idx
                          ? "#F15124"
                          : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredBenefit === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredBenefit === idx ? "translate-x-0" : "-translate-x-full"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
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
                        {benefit.name}
                      </h3>
                      <p
                        className="leading-relaxed transition-colors"
                        style={{
                          color: hoveredBenefit === idx ? "#fff" : "#000",
                          opacity: hoveredBenefit === idx ? 1 : 0.8,
                        }}
                      >
                        {benefit.description}
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

      {/* Ready to Guarantee Section */}
      <footer className="py-12 px-8 text-gray-800 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">Ready to Guarantee Your Software's Success?</h2>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed transition-colors">
            Contact Megascale today for a free consultation and discover how our comprehensive software testing services can empower you to deliver exceptional software that exceeds user expectations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareTesting;