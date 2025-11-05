import React, { useState } from 'react';
import { FaRobot, FaChartLine, FaDollarSign, FaShieldAlt, FaTrophy, FaCogs, FaIndustry, FaUserTie, FaLock, FaRocket, FaTools, FaPhoneAlt } from 'react-icons/fa';

const Webdevlopment = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const synergies = [
    {
      name: "Intelligent Automation",
      description: "By seamlessly integrating sensor data from connected devices with robotic systems, we enable intelligent automation, allowing robots to adapt and react to their environment in real-time.",
      icon: "FaCogs",
    },
    {
      name: "Data-Driven Robotics",
      description: "Robots can leverage the vast data collected by IoT sensors to optimize their movements, improve efficiency, and perform tasks with greater precision.",
      icon: "FaChartLine",
    },
    {
      name: "Enhanced Situational Awareness",
      description: "Robots equipped with IoT sensors gain a deeper understanding of their surroundings, enabling them to navigate more effectively and make informed decisions.",
      icon: "FaRobot",
    },
    {
      name: "Predictive Maintenance",
      description: "IoT data can predict potential issues with robotic equipment, allowing for preventative maintenance and minimizing downtime.",
      icon: "FaTools",
    },
    {
      name: "Remote Monitoring & Control",
      description: "The connectivity provided by IoT allows for remote monitoring and control of robots, facilitating flexible operation and deployment.",
      icon: "FaRocket",
    },
  ];

  const benefits = [
    {
      name: "Increased Productivity & Efficiency",
      description: "Intelligent automation powered by IoT data streamlines workflows and optimizes robot performance.",
      icon: "FaRobot",
    },
    {
      name: "Enhanced Accuracy & Precision",
      description: "Robots equipped with real-time sensor data can operate with greater accuracy and precision.",
      icon: "FaChartLine",
    },
    {
      name: "Reduced Costs",
      description: "Predictive maintenance and remote monitoring minimize downtime and operational costs.",
      icon: "FaDollarSign",
    },
    {
      name: "Improved Safety",
      description: "Enhanced situational awareness for robots leads to safer human-robot collaboration.",
      icon: "FaShieldAlt",
    },
    {
      name: "Gain a Competitive Advantage",
      description: "Be at the forefront of innovation with cutting-edge IoT robotics solutions that revolutionize your industry.",
      icon: "FaTrophy",
    },
  ];

  const partnership = [
    {
      name: "Industry-Specific Solutions",
      description: "Our team has experience across various sectors, crafting solutions that address the unique challenges and opportunities presented by IoT robotics in your industry.",
      icon: "FaIndustry",
    },
    {
      name: "End-to-End Expertise",
      description: "From initial concept development and sensor integration to robotic system design, application development, and ongoing support, we offer a comprehensive suite of services to empower your IoT robotics journey.",
      icon: "FaUserTie",
    },
    {
      name: "Advanced Robotics Capabilities",
      description: "Our team is well-versed in various robotics technologies, including industrial robots, collaborative robots (cobots), autonomous mobile robots (AMRs), and aerial vehicles (drones).",
      icon: "FaRobot",
    },
    {
      name: "Focus on Security & Safety",
      description: "We prioritize robust security measures and adhere to safety regulations to ensure the secure and responsible operation of your IoT robotics systems.",
      icon: "FaLock",
    },
    {
      name: "Future-Proof Solutions",
      description: "Our solutions are designed with scalability and adaptability in mind, ensuring they can evolve alongside technological advancements.",
      icon: "FaRocket",
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaRobot':
        return FaRobot;
      case 'FaChartLine':
        return FaChartLine;
      case 'FaDollarSign':
        return FaDollarSign;
      case 'FaShieldAlt':
        return FaShieldAlt;
      case 'FaTrophy':
        return FaTrophy;
      case 'FaCogs':
        return FaCogs;
      case 'FaIndustry':
        return FaIndustry;
      case 'FaUserTie':
        return FaUserTie;
      case 'FaLock':
        return FaLock;
      case 'FaRocket':
        return FaRocket;
      case 'FaTools':
        return FaTools;
      default:
        return FaRobot;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1 className="text-5xl font-bold mb-6">IoT Robotics Solutions</h1>
          <p className="text-xl mb-8">
            At Megascale, we're not just an IT firm; we're pioneers at the forefront of technological convergence. We combine our expertise in the Internet of Things (IoT) with the power of robotics to deliver groundbreaking solutions that transform industries and redefine what's possible.
          </p>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Unlocking Synergies Between IoT and Robotics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {synergies.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredItem === idx
                          ? '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                          : '0 10px 30px rgba(0,0,0,0.1)',
                      minHeight: '280px',
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3 transition-colors"
                        style={{ color: hoveredItem === idx ? '#3B82F6' : '#000' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{ color: '#000', opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredItem === idx ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ backgroundColor: '#3B82F6' }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-gray-100">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Benefits of Partnering with Megascale for Your IoT Robotics Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {benefits.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredItem(idx + synergies.length)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredItem === idx + synergies.length
                          ? '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                          : '0 10px 30px rgba(0,0,0,0.1)',
                      minHeight: '280px',
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3 transition-colors"
                        style={{ color: hoveredItem === idx + synergies.length ? '#3B82F6' : '#000' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{ color: '#000', opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredItem === idx + synergies.length ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ backgroundColor: '#3B82F6' }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Megascale: Your Partner in IoT Robotics Innovation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {partnership.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredItem(idx + synergies.length + benefits.length)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s both` }}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredItem === idx + synergies.length + benefits.length
                          ? '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                          : '0 10px 30px rgba(0,0,0,0.1)',
                      minHeight: '280px',
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3 transition-colors"
                        style={{ color: hoveredItem === idx + synergies.length + benefits.length ? '#3B82F6' : '#000' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{ color: '#000', opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredItem === idx + synergies.length + benefits.length ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ backgroundColor: '#3B82F6' }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to push the boundaries of what's possible?</h2>
          <p className="text-xl mb-8">
            Contact Megascale today for a free consultation. Let's explore how our expertise in IoT and robotics can help you craft a future-proof solution that transforms your business and unlocks a new era of intelligent automation.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg flex items-center mx-auto hover:bg-gray-100 transition-colors">
            <FaPhoneAlt className="mr-2" /> Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Webdevlopment;