import React, { useState, useEffect } from "react";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Settings,
  Cpu,
  Globe,
  Lock,
  CheckCircle,
  BarChart,
  Rocket,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Cloud,
    Server,
    Database,
    Shield,
    Zap,
    Settings,
    Cpu,
    Globe,
    Lock,
    CheckCircle,
    BarChart,
    Rocket,
  };
  return icons[icon] || Cloud;
};

// ===== Cloud Platforms Data =====
const cloudPlatforms = [
  {
    name: "Google Cloud Platform (GCP)",
    description:
      "Leverage Google's cutting-edge infrastructure and suite of cloud services, including computing, storage, databases, analytics, machine learning, and AI. We help you migrate, manage, and optimize your workloads on GCP for scalability, security, and cost-efficiency.",
    icon: "Database",
  },
  {
    name: "Oracle Cloud Infrastructure (OCI)",
    description:
      "Our full-stack development teams are proficient in a wide range of technologies, including web development (front-end and back-end), mobile app development (native and cross-platform), and cloud development. We leverage agile methodologies, prioritize security and scalability, and deliver custom software solutions tailored to your unique needs.",
    icon: "Settings",
  },
  {
    name: "Amazon Web Services (AWS)",
    description:
      "As an AWS Partner, Megascale empowers you to harness the vast potential of the world's leading cloud platform. We provide comprehensive services, from cloud architecture design and migration to ongoing management and optimization. Benefit from unmatched scalability, a wide range of services, and a global reach with AWS.",
    icon: "Cloud",
  },
  {
    name: "Microsoft Azure",
    description:
      "Tap into the power of Microsoft's robust cloud platform, known for its seamless integration with Microsoft products and services. Our team of Azure experts can guide you through migration, management, and optimization, allowing you to leverage Azure's scalability, security, and hybrid cloud capabilities.",
    icon: "Server",
  },
  {
    name: "IBM Cloud",
    description:
      "Explore the flexibility and security of IBM Cloud, ideal for businesses with a focus on open standards and hybrid cloud environments. We can help you migrate workloads, manage your cloud infrastructure, and leverage IBM's cognitive services (Watson) to unlock new possibilities.",
    icon: "Shield",
  },
  {
    name: "DigitalOcean Cloud",
    description:
      "Experience a developer-friendly cloud platform with a simple pricing structure. Our team can assist you with migrating and managing your applications on DigitalOcean, making it ideal for startups and businesses seeking a cost-effective cloud solution.",
    icon: "Globe",
  },
];

// ===== Cloud Features Data =====
const cloudFeatures = [
  {
    name: "Cloud Agnostic Expertise",
    description:
      "We are not tied to any one platform. Our experts can recommend the best cloud solution for your specific needs and budget.",
    icon: "Zap",
  },
  {
    name: "Seamless Cloud Migration & Management",
    description:
      "Our team ensures a smooth transition to the cloud and provides ongoing management services to optimize your cloud environment.",
    icon: "Cpu",
  },
  {
    name: "Enhanced Security & Compliance",
    description:
      "We help you optimize your cloud costs by identifying opportunities for resource allocation and service selection.",
    icon: "Lock",
  },
  {
    name: "Cost Optimization",
    description:
      "We help you optimize your cloud costs by identifying opportunities for resource allocation and service selection.",
    icon: "BarChart",
  },
  {
    name: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to address your cloud-related inquiries and resolve any issues promptly.",
    icon: "Settings",
  },
];

// ===== Business Values Data =====
const businessValues = [
  {
    name: "Scalability & Agility",
    description:
      ' "Global Catalyst for Innovation" our ambition to be a leader in the IT industry worldwide.',
    icon: "Rocket",
  },
  {
    name: "Increased Efficiency",
    description:
      ' "Revolutionizing Businesses" Megascale transformative power of your software solutions.',
    icon: "CheckCircle",
  },
  {
    name: "Improved Business Continuity",
    description:
      ' "Exceptional Software Solutions" showcases our dedication to delivering top-tier work.',
    icon: "Globe",
  },
  {
    name: "Enhanced Collaboration",
    description:
      'Empowering Businesses to Scale. We envision a world where every company thrives with the power of Megascale\'s software solutions.',
    icon: "Shield",
  },
  {
    name: "Innovation & Competitive Advantage",
    description:
      'The Future of Software Development is Agile. We see Megascale at the forefront, delivering cutting-edge solutions with unmatched expertise.',
    icon: "BarChart",
  },
];

const CloudSolutions = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <div className="min-h-screen px-8  ">
      {/* Header Section */}
      <header
        className="  pt-12 px-4 text-center"
         
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">Cloud Solutions</h1>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed transition-colors ">
            At Megascale, our website design and management services go beyond just creating websites. We offer
            comprehensive solutions to help businesses establish and maintain a strong online presence. Our
            services include designing and developing custom websites tailored to our clients' unique needs and
            branding requirements.
          </p>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed transition-colors">
            We also provide separate website management services to ensure that our clients' existing websites
            are regularly updated, optimized for performance, and secure. Our goal is to help businesses
            effectively showcase their products or services online and achieve their business objectives through
            their websites.
          </p>
        </div>
      </header>

      {/* Megascale: Your Trusted Partner for Leading Cloud Solutions */}
      <section
        className="py-5 px-4 text-center "
       // text-gray-800   equivalent
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-[#0A1721]">
            Megascale: Your Trusted Partner for Leading Cloud Solutions
          </h2>
          <p className="mt-4  text-lg text-gray-700 leading-relaxed transition-colors ">
            In today's digital landscape, cloud computing has become the foundation for modern businesses. At
            Megascale, we are your one-stop shop for comprehensive cloud solutions, offering expertise across a
            wide range of industry-leading cloud platforms:
          </p>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-5 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0A1721]" >
              Cloud Platforms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors ">
              Multi-cloud expertise to power your business
            </p>
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

      {/* Open-Source Software Support Section */}
      <section className="py-10 px-4 text-center  ">
        <div className=" mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
            Open-Source Software Support
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed transition-colors">
            In addition to these leading cloud platforms, Megascale also offers comprehensive support for
            open-source software like Linux, Apache, and MySQL. Our team of open-source specialists can help you
            manage, optimize, and troubleshoot your open-source deployments.
          </p>
        </div>
      </section>

      {/* Why Choose Megascale for Your Cloud Solutions */}
      <section className="py-5 px-4   text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">Why Choose Megascale for Your Cloud Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, idx) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2 text-gray-800"
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
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        style={{ backgroundColor: "#F15124" }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4">
                        {feature.name}
                      </h3>
                      <p className="text-center leading-relaxed">
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

      {/* Benefits of Cloud Solutions with Megascale */}
      <section className="py-5 px-4  ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
            Benefits of Cloud Solutions with Megascale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessValues.map((value, idx) => {
              const IconComponent = getIcon(value.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      borderColor:
                        hoveredValue === idx
                          ? "#F15124"
                          : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredValue === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${hoveredValue === idx
                        ? "translate-x-0"
                        : "-translate-x-full"
                        }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center justify-between mb-6 w-full">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
                          style={{
                            backgroundColor:
                              hoveredValue === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color:
                                hoveredValue === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color:
                              hoveredValue === idx ? "#fff" : "#F15124",
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

      {/* Ready to Embrace the Cloud */}
      <footer className="py-5 px-4 text-gray-800 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">Ready to Embrace the Cloud?</h2>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed transition-colors">
            Contact Megascale today for a free consultation and discover how our leading cloud solutions can
            empower your business to achieve its full potential. We'll help you choose the right platform,
            navigate the migration process, and optimize your cloud environment for success.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CloudSolutions;