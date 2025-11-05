import React, { useState,useEffect } from 'react';
import { FaCloud, FaCode, FaGlobe, FaMobileAlt, FaTools, FaCheckCircle, FaGlobeAmericas, FaWrench, FaUsers } from 'react-icons/fa';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return children;
};

const ServiceCard = ({ title, description, icon: Icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative group  bg-white rounded-2xl p-6 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? '#F15124' : 'rgba(0,0,0,0.1)',
        boxShadow: hovered ? '0 25px 50px -12px rgba(241, 81, 36, 0.4)' : '0 5px 20px rgba(0,0,0,0.05)',
      }}
    >
      <div className={`absolute inset-0 transform transition-transform duration-700 ${hovered ? 'translate-x-0' : '-translate-x-full'}`} style={{ backgroundColor: '#F15124' }}></div>
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-180 transition-transform duration-700" style={{ backgroundColor: hovered ? '#fff' : '#F15124' }}>
          <Icon className="text-2xl" style={{ color: hovered ? '#F15124' : '#fff' }} />
        </div>
        <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: hovered ? '#fff' : '#000' }}>{title}</h3>
        <p className="text-gray-600 leading-relaxed transition-colors" style={{ color: hovered ? '#fff' : '#000', opacity: hovered ? 1 : 0.8 }}>{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const services = [
    { title: 'Cloud Solutions', description: 'We are experts in leading cloud platforms like Google Cloud Platform (GCP), Amazon Web Services (AWS), Microsoft Azure, Oracle Cloud, IBM Cloud, and more. We assist with cloud migration, management, optimization, and ensuring security and compliance with your environment.', icon: FaCloud },
    { title: 'Software Development', description: 'Our full-stack development teams are proficient in a wide range of technologies, including web development (front-end and back-end), mobile app development (native and cross-platform), and cloud development. We leverage agile methodologies, prioritize security and scalability, and deliver custom software solutions tailored to your unique needs.', icon: FaCode },
    { title: 'Web Development', description: 'We craft exceptional web experiences using cutting-edge technologies like HTML5, CSS3, modern JavaScript frameworks, and secure back-end development practices. We prioritize user experience, performance optimization, and scalability to ensure your website thrives in the digital landscape.', icon: FaGlobe },
    { title: 'Mobile App Development', description: 'Our team specializes in building high-performance native Android and iOS apps using Kotlin and Swift programming languages respectively. We also offer cross-platform apps using relevant SDKs to reach a wider audience.', icon: FaMobileAlt },
    { title: 'IT Support & Customer Care', description: 'We offer 24/7 technical support and customer care services to address your IT and software issues promptly. Our team provides proactive maintenance plans, staff resources, and training programs to empower your team and optimize operations.', icon: FaTools },
    { title: 'Software Testing', description: 'We provide comprehensive testing services across domains, including functional, non-functional, mobile apps, API, and automation testing. Our team leverages industry-standard tools and frameworks to ensure exceptional software quality before deployment.', icon: FaCheckCircle },
    { title: 'Offshore Development Services', description: 'We offer cost-effective solutions for your development, outsourcing needs, providing a dedicated offshore team. We offer a rigorous vetting process, streamlined project management, and prioritize clear communication for successful offshore development projects.', icon: FaGlobeAmericas },
    { title: 'Open-Source Software Support', description: 'Our team provides comprehensive support for open-source software like Linux, Apache, and MySQL, ensuring efficient management, optimization, and troubleshooting.', icon: FaWrench },
    { title: 'IT Staff Augmentation Services', description: 'We provide comprehensive support for open-source software such as Linux, Apache, and MySQL, ensuring efficient management, optimization, and troubleshooting. Our dedicated team ensures effective collaboration with your company.', icon: FaUsers },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100   px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-center mb-6 text-gray-700 font-bold text-[18px]">As a leader in software development, Megascale provides a diverse range of services within these core areas, ensuring we have the right solution for your needs.</p>
          <h1 className="text-[40px] font-bold text-center mb-10 text-gray-800">Megascale: Your One-Stop Shop for Comprehensive IT Services</h1>
          <p className="text-center mb-12 text-gray-600 text-[16px]">At Megascale, we understand the complex IT needs of modern businesses. We offer a comprehensive suite of IT services designed to empower your organization, optimize your technology infrastructure, and fuel your success. Here's an overview of the key areas where Megascale can be your trusted partner:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
          <p className="text-center mt-16 mb-6 text-gray-600 font-bold text-[18px]">By partnering with Megascale, you gain access to a wealth of IT expertise and services all under one roof. Our goal is to become your trusted IT advisor, helping you navigate your technology landscape, overcome challenges, and achieve your business objectives.</p>
          <p className="text-center mt-6 mb-6 text-gray-900 text-[40px] font-bold ">Ready to discuss your specific IT needs?</p>
          <p className="text-center mt-2 mb-8 text-gray-600 text-[16px]">Contact Megascale today for a free consultation and discover how our comprehensive IT services can empower your organization to thrive in the digital age.</p>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default OurServices;