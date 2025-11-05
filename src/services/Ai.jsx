import React, { useState,useEffect } from "react";
import {
  Brain,
  MessageCircle,
  Target,
  Code,
  BarChart3,
  UserCheck,
  Database,
  Activity,
  Timer,
  Zap,
} from "lucide-react";

const getIcon = (icon) => {
  const icons = {
    Brain,
    MessageCircle,
    Target,
    Code,
    BarChart3,
    UserCheck,
    Database,
    Activity,
    Timer,
    Zap,
  };
  return icons[icon] || Brain;
};

// ====== Section Data ======
const roboticsSynergies = [
  {
    name: "Student Training:",
    description:
      "Gone are the days of one-size-fits-all training. AI-powered adaptive learning platforms personalize student journeys. These platforms identify knowledge gaps and deliver targeted content, ensuring a deeper understanding and faster skill development for your future workforce.",
    icon: "Brain", // 🧠 AI learning
  },
  {
    name: "24/7 Customer Support:",
    description:
      "Our AI chatbots are always on duty, providing immediate answers to frequently asked questions, resolving basic issues, and intelligently routing complex problems to human agents. This ensures a seamless customer experience, no matter the time of day.",
    icon: "MessageCircle", // 💬 Chat support
  },
  {
    name: "Hyper-Targeted Marketing:",
    description:
      "AI empowers us to analyze vast amounts of customer data and market trends. This allows us to craft hyper-targeted marketing campaigns that resonate with specific audience segments. Imagine personalized product recommendations and marketing messages that truly connect with your customers, leading to increased engagement and brand loyalty.",
    icon: "Target", // 🎯 Marketing precision
  },
  {
    name: "Software Development Revolution:",
    description:
      "Streamline your software development process with AI! We utilize AI tools for code generation, bug detection, and automated testing. This translates to improved code quality, accelerated development timelines, and a more productive work environment.",
    icon: "Code", // 💻 Software development
  },
];

const roboticsBenefits = [
  {
    name: "Enhanced Efficiency:",
    description:
      "AI automates repetitive tasks, freeing up your valuable human resources to focus on strategic initiatives and complex problem-solving.",
    icon: "Activity", // ⚙️ Efficiency
  },
  {
    name: "Personalized Experiences:",
    description:
      "From student training to customer support and marketing, AI personalizes interactions across all touchpoints, fostering deeper connections and enhancing satisfaction.",
    icon: "UserCheck", // 👤 Personalized
  },
  {
    name: "Data-Driven Decisions:",
    description:
      "AI analyzes massive datasets, providing valuable insights that inform better decision-making across your entire organization.",
    icon: "Database", // 🗄️ Data-driven
  },
  {
    name: "Improved Accuracy & Productivity:",
    description:
      "AI reduces human error in tasks like code generation and testing, leading to a more productive and error-free work environment.",
    icon: "BarChart3", // 📊 Accuracy & performance
  },
  {
    name: "Faster Time to Market:",
    description:
      "AI streamlines processes and accelerates development cycles, allowing you to bring innovative solutions to market faster and capitalize on emerging opportunities.",
    icon: "Timer", // ⏱️ Speed
  },
];

// ====== Component ======
export default function ArtificialIntelligence() {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <>
      {/* ===== Section 1 ===== */}
      <div className="container max-w-7xl mx-auto">
        <div className="text-center px-8 mb-5 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
            The Future of IT is Here - Powered by AI
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
            The Future of IT is Here - Powered by AI At Megascale, we're not
            just another IT firm. We're a team of passionate innovators
            leveraging the transformative power of Artificial Intelligence (AI)
            to revolutionize the way we deliver IT solutions. We believe AI
            isn't just a trend; it's the key to unlocking a future of
            efficiency, personalization, and growth.
          </p>
        </div>
      </div>

      <section className="px-4 flex items-center justify-center">
        <div className="container px-8 max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl  font-bold mb-4 text-[#0A1721]">
              Unlocking Potential Across Every IT Domain:
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Megascale utilizes a diverse range of AI technologies to enhance
              every aspect of our services. Here's a glimpse into how AI is
              shaping the future at Megascale:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {roboticsSynergies.map((platform, idx) => {
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
      </section>

      {/* ===== Section 2 ===== */}
      <section
        className="py-20 px-4"
        
      >
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl  font-bold mb-4 text-[#0A1721]">
              Why Partner with an AI-Powered IT Firm?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              The benefits of embracing AI are undeniable:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roboticsBenefits.map((feature, idx) => {
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
      </section>

      <div className="container text-center mb-16 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
          Embrace the Future with Megascale
        </h2>
        <p className="text-lg px-8 text-gray-700 leading-relaxed transition-colors" >
          At Megascale, AI is not just a technology; it's a core principle woven
          into the fabric of everything we do. By partnering with us, you gain
          access to a team of AI experts and cutting-edge solutions designed to
          revolutionize your IT operations and propel your business forward.
        </p>
      </div>

      <div className="container text-center mb-16 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
          Ready to unlock the transformative power of AI in IT?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors px-8">
          Contact Megascale today for a free consultation. Let's discuss your
          specific needs and explore how our AI-powered solutions can unlock
          your full potential and empower you to achieve your business goals in
          the ever-evolving landscape of information technology.
        </p>
      </div>
    </>
  );
}
