import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import ProjectsGallery from "./Projects";
import CompanyPartners from "./CompanyPartners";
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

export default function AboutUs() {

  const [counts, setCounts] = useState({
    project: 0,
    customers: 0,
    team: 0,
    approach: 0,
    rate: 0,
    experience: 0,
  });

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

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineControls = useAnimation();
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // ================= Counter Animation =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = {
            project: 1120,
            customers: 500,
            team: 220,
            approach: 100,
            rate: 92,
            experience: 14,
          };
          const duration = 2;
          const keys = Object.keys(targets);

          keys.forEach((key) => {
            let start = 0;
            const increment = targets[key] / 60;
            const interval = setInterval(() => {
              start += increment;
              if (start >= targets[key]) {
                start = targets[key];
                clearInterval(interval);
              }
              setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
            }, (duration * 1000) / 60);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (observer) observer.disconnect();
    };

  }, []);

  // ================= Underline Animation =================
  useEffect(() => {
    const underlineObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          underlineControls.start({ width: "60%" });
        }
      },
      { threshold: 0.5 }
    );
    if (titleRef.current) underlineObserver.observe(titleRef.current);
    return () => underlineObserver.disconnect();
  }, [underlineControls]);

  // ================= Vision Sections =================
  const visionSections = [
    {
      title: "Client-Centric Approach:",
      text: `We prioritize our clients' visions and goals, ensuring our solutions are tailor-made to fit their requirements.`,
      img: "/about1.jpg",
      reverse: false,
    },
    {
      title: "Technical Innovation:",
      text: `As a global leader in software development, we remain at the forefront of emerging technologies, enabling us to deliver groundbreaking solutions that transform organizations and disrupt industries.`,
      img: "/about2.jpg",
      reverse: true,
    },
    {
      title: "Collaboration:",
      text: `From strategic consulting to technical execution, we work alongside our clients every step of the way, building long-term relationships based on trust and mutual respect.`,
      img: "/about3.jpg",
      reverse: false,
    },
    {
      title: "Future Aspirations:",
      text: `As we look to the future, we’re focused on sustainable growth, global collaboration, and delivering transformative digital experiences worldwide.`,
      img: "/about4.jpg",
      reverse: true,
    },
  ];

  const corevalues = [
    {
      name: "Pursuit of Innovation ",
      description: "We actively seek out new ideas, fostering an environment that encourages creative problem-solving and the development of cutting-edge solutions.",
      icon: "Industry",
    },
    {
      name: "Transparency & Accessibility ",
      description: "Our commitment to openness ensures that everyone has access to the information they need for informed decision-making, both within our organization and when communicating with clients and partners.",
      icon: "Expertise",
    },
    {
      name: "Inclusivity",
      description: "Everyone on our team plays a role in improving our services; we value diverse perspectives and encourage collaboration across all levels of our organization.",
      icon: "Robotics",
    },
    {
      name: "Technology Accessibility",
      description: "We believe technology should be easy to understand and use, not just by us but also by those we serve.",
      icon: "Lock",
    },
    {
      name: "Continuous Improvement ",
      description: "Learning from failure is essential as we strive to improve upon innovations continually.",
      icon: "Future",
    },
    {
      name: "Integrity ",
      description: "Honesty, transparency, and ethical behavior are at the core of how we conduct ourselves and engage with others.",
      icon: "Future",
    },
  ];

  return (
    <>
      {/* ---------------------- Banner Section ---------------------- */}
      <section
        className="relative text-white overflow-hidden flex flex-col justify-center items-center py-40 px-8 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/123.jpg')",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 left-20 w-8 h-8 bg-orange-500 rounded-full z-10 shadow-lg"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-32 w-6 h-6 bg-orange-500 rounded-full z-10 shadow-lg"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 right-24 w-10 h-10 bg-white/30 rounded-full rotate-12 z-10 backdrop-blur-sm"
          animate={{ y: [0, 10, 0], rotate: [12, 30, 12] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-7 h-7 bg-orange-500 rounded-full z-10 shadow-lg"
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Building success, together. We bring joy and innovation to every project.
              Since 2017, our web & mobile app development and digital marketing expertise
              has helped over 1100+ satisfied clients globally. We have a perfect track
              record of delivering 500+ mobile apps and 600+ web projects on time and
              within budget.
            </p>
          </div>

          {/* CTA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
          >
            <span className="text-orange-500 text-2xl">✨</span>
            <span className="text-white font-semibold">
              Inspiring Innovation Since 2017
            </span>
          </motion.div>
        </div>
      </section>


      {/* ========================= HERO ========================= */}
      {/* <section className="w-full bg-gradient-to-b from-[#0A1721] to-[#142a3c] text-white pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <motion.p
            className="text-[#F15124] text-lg sm:text-xl font-semibold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Story
          </motion.p>

          <motion.h1
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            We Are <span className="text-[#F15124]">Solution Megascale</span>
             <motion.span
              className="block mx-auto mt-3 h-[4px] bg-[#F15124] rounded-full"
              initial={{ width: 0 }}
              animate={underlineControls}
              transition={{ duration: 1 }}
            /> 
          </motion.h1>

          <motion.p
            className="mt-6 max-w-7xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We're a global creative and software powerhouse: Crafting exceptional experiences for major brands worldwide since 2016. Focus on creative expertise: We rewrite your vision globally. A comprehensive creative agency for leading brands. Focus on IT software development with latest AI technologies: Building the future together. We are a global software agency empowering world-class brands. Focus on the collaborative aspect: Globally connected, creatively inspired. Your one-stop shop for rewriting and software solutions. Focus on client experience: Building success together. We bring joy and innovation to every project. Focus on our IT expertise: Web & Mobile App Development, Marketing & Sales growth experts. Delivering innovation since 2016.
          </motion.p>
        </div>

        <motion.div
          className="max-w-7xl mx-auto mt-12 "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src="/about.jpg"
            alt="Our Team"
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </section> */}

      {/* ========================= VISION SECTIONS ========================= */}
      <section className="container mx-auto ">
        {visionSections.map((section, index) => (
          <motion.div
            key={index}
            className={`p-8 flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 md:gap-14`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <motion.img
                src={section.img}
                alt={section.title}
                className="w-full h-[250px] sm:h-[320px] md:h-[300px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1721] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          </motion.div>
        ))}
      </section>


      {/* ===== Section 3: Business Values ===== */}
      <section className="pt-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Core Values
            </h2>
            {/* <p className="text-xl" style={{ color: "#000" }}>
              Driving success through innovation
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {corevalues.map((value, idx) => {
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

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          // className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
                          className="w-14 h-14 rounded-lg flex items-center justify-center  transition-transform duration-700"
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

      {/* ========================= STATS ========================= */}
      <ProjectsGallery />
      <WhyChooseUs />
      <CompanyPartners />
    </>
  );
}