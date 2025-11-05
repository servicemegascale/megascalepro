import React, { useState, useEffect, useRef } from 'react';

import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

const Services = () => {

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const [isVisible, setIsVisible] = useState({});
  const [stats, setStats] = useState({ projects: 0, years: 0, experts: 0, countries: 0 });
  const sectionsRef = useRef([]);


  const megaMenu = [
  { title: "Our Services", icon: "Globe", url: "/services/ourservices" },
  { title: "Web Development", icon: "Code", url: "/services/webdevleopment" },
  { title: "Cloud Solutions", icon: "Cloud", url: "/services/cloudsolutions" },
  { title: "Mobile Development", icon: "Smartphone", url: "/services/MobileAppDevelopment" },
  { title: "Software Testing", icon: "FileCheck", url: "/services/SoftwareTesting" },
  { title: "Software Development", icon: "Code", url: "/services/softwareDevelopment" },
  { title: "Offshore Development Services", icon: "Globe2", url: "/services/Offshore-development" },
  { title: "E-commerce Services", icon: "ShoppingCart", url: "/services/EcommerceServices" },
  { title: "IT Staff Augmentation", icon: "Users", url: "/services/it-staff-augmentation-services" },
  { title: "IT Support & Customer Care", icon: "Headphones", url: "/services/support" },
  { title: "Digital Marketing", icon: "Megaphone", url: "/services/marketing" },
  { title: "Robotics", icon: "Bot", url: "/services/robotics" },
  { title: "Android App Development", icon: "SmartphoneCharging", url: "/services/Android-app" },
  { title: "iPad and iPhone App Development", icon: "Apple", url: "/services/ios" },
  { title: "Big Data Analytics", icon: "Database", url: "/services/Big-data" },
  { title: "Networking & Security Solutions", icon: "Shield", url: "/services/network" },
  { title: "Artificial Intelligence", icon: "Brain", url: "/services/artificial-intellegence" },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(prev => ({ ...prev, [index]: true })), index * 200);
            // Animate stats when stats section is visible
            if (index === 2) {
              animateStats();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const increment = 60 / steps;

    let projects = 0;
    let years = 0;
    let experts = 0;
    let countries = 0;

    const interval = setInterval(() => {
      projects += increment;
      years += increment / 18; // Approximate for 14
      experts += increment;
      countries += increment / 25; // Approximate for 10

      setStats({
        projects: Math.min(projects, 250),
        years: Math.min(years, 14),
        experts: Math.min(experts, 200),
        countries: Math.min(countries, 10)
      });

      if (projects >= 250) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {/* Enhanced Banner Section with Unique Wave Animation */}

      <section className="py-16 px-8 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl text-[#0A1721] font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {megaMenu.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <Link
                to={item.url}
                key={index}
                className="flex items-center gap-4 p-4 bg-[#FDE2D3] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {IconComponent && <IconComponent className="w-6 h-6 text-[#F15124]" />}
                <span className="font-semibold text-gray-900 text-start">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

       
 
 

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 3px 10px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 3px 20px rgba(0,0,0,0.2); }
        }
        @media (max-width: 768px) {
          section {
            flex-direction: column !important;
            padding: 40px 20px !important;
            text-align: center !important;
          }
          div[style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;