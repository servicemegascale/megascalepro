import React from "react";
import {
  FaMicrochip ,
  FaProjectDiagram ,
  FaCogs ,
  FaExpandArrowsAlt ,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  
  const features = [
    {
      icon: <FaMicrochip  className="text-[#0A1721] text-4xl mb-4" />,
      title: "Cutting-Edge Technology",
      description:
        "Leveraging the latest advancements in technology, we provide innovative solutions that empower your organization to stay ahead of the competition. From AI-driven analytics to cloud-based infrastructure, we harness the power of innovation to fuel your success.",
    },
    {
      icon: <FaProjectDiagram  className="text-[#0A1721] text-4xl mb-4" />,
      title: "End-to-End Services",
      description:
        "Whether you're seeking software development, cybersecurity solutions, cloud migration, or IT consulting, we offer end-to-end services to meet all your technology needs. Our comprehensive approach ensures seamless integration and maximum efficiency across every aspect of your IT ecosystem.",
    },
    {
      icon: <FaCogs  className="text-[#0A1721] text-4xl mb-4" />,
      title:"Customized Solutions",
      description:
        "We understand that every business is unique, which is why we tailor our solutions to align with your specific goals and requirements. Our team works closely with you to develop personalized strategies that optimize performance, enhance security, and drive growth.",
    },
    {
      icon: <FaExpandArrowsAlt  className="text-[#0A1721] text-4xl mb-4" />,
      title: "Scalability and Flexibility",
      description:
        "As your business evolves, so do your technology needs. Our solutions are designed to scale seamlessly with your organization, providing the flexibility to adapt to changing demands and opportunities.",
    },
  ];

  return (
    <section className="py-12 px-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[#F15124] font-semibold mb-3 tracking-wide uppercase">
            Intelligence • Innovation • Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
            Why Choose MegaScale?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
           Choose MegaScale for unparalleled expertise, comprehensive solutions, and a client-centric approach that drives success for your business.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F9FAFB] border border-gray-200 hover:border-[#0A1721] p-4 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all "
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#0A1721]">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
