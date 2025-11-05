import React, { useState,useEffect } from "react";
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
  Smartphone,
  Brush,
  Code,
  Layers,
  Wrench,
} from "lucide-react";

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
    Smartphone,
    Brush,
    Code,
    Layers,
    Wrench,
  };
  return icons[icon] || Cloud;
};

// ====== Section Data ======
const roboticsSynergies = [
  {
    name: "App Maintenance & Updates",
    description:
      "The mobile landscape is constantly evolving. We provide ongoing maintenance and update services to keep your app secure, optimized, and performing at its best.",
    icon: "Wrench", // 🛠 Maintenance
  },
  {
    name: "Google Play Store Optimization (ASO): ",
    description:
      " Our team optimizes your app listing to improve discoverability within the Google Play Store, ensuring your app reaches its target audience.",
    icon: "Globe", // 🌐 Optimization / Reach
  },
];

const roboticsBenefits = [
  {
    name: "Experienced & Agile Development Team",
    description:
      "Our team boasts a proven track record of delivering high-quality Android apps across diverse industries.",
    icon: "Rocket", // 🚀 Expertise / Launch
  },
  {
    name: "Scalable Solutions",
    description:
      "We design apps that can grow with your business, accommodating future feature additions and user base expansion.",
    icon: "Layers", // 📚 Scalability / Structure
  },
  {
    name: "Data Security & Privacy",
    description:
      "We prioritize the security of your app and user data, adhering to industry best practices and regulations.",
    icon: "Shield", // 🛡 Security
  },
];

// ====== Component ======
export default function Andoridapp() {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <>
      {/* ===== Section 1: Robotics ===== */}
      <div className="container max-w-7xl px-8 mx-auto">
        <div className=" text-center px-4  mb-5 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
            Android App Development
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
            Big Data Analytics In today's data-driven world, harnessing the power of big data
            is crucial for gaining a competitive edge. At Megascale, we're your one-stop shop for
            comprehensive big data analytics solutions. We leverage industry-leading tools like
            Microsoft Power BI, Amazon Redshift, Tableau, and more, to empower you to transform
            raw data into actionable insights that fuel business growth.
          </p>
        </div>
      </div>

      <section className=" pt-12 px-8">
        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2
              className="text-left text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
            >
              Unleash the Power of Android:
            </h2>

            <div className="space-y-8 text-[#0A1721]">
              <div className="p-6 rounded-xl bg-[#f6fafc] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-left text-xl font-semibold mb-3 text-[#0A1721] flex items-center gap-2">
                  <Code className="w-6 h-6 text-[#0A1721]" />
                  Native Development for Peak Performance:
                </h3>
                <p className="text-left text-base opacity-80 leading-relaxed">
                  We leverage the power of Kotlin, the official language for Android development,
                  to create high-performance, native apps that seamlessly integrate with the
                  Android ecosystem.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#f6fafc] shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-left text-xl font-semibold mb-3 text-[#0A1721] flex items-center gap-2">
                  <Brush className="w-6 h-6 text-[#0A1721]" />
                  Unmatched User Experience (UX):
                </h3>
                <p className="text-left text-base opacity-80 leading-relaxed">
                  Our UI/UX design team prioritizes user-centric design principles, ensuring your
                  app is intuitive, visually appealing, and fosters a smooth user journey.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative bg-white rounded-3xl p-8 shadow-2xl">
            <img
              src="https://www.karmickinstitute.com/wp-content/uploads/2025/02/Why-to-Learn-Android-Development-in-2025.jpg"
              alt="Android development illustration"
              className="w-full  max-w-md lg:max-w-lg rounded-2xl  "
            />
          </div>
        </div>
      </section>

      {/* ======= SECOND SECTION ======= */}
      <div className=" pt-12 px-8 ">
        <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 relative bg-white rounded-3xl p-8 shadow-2xl">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/8/444471990/JV/KM/OZ/17899636/android-application-development-services-500x500.jpg"
              alt="Android Development UI/UX"
              className="rounded-2xl w-full h-auto md:h-[500px] "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 text-left ">
            <h2 className="text-left text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Mastering the Android Development Stack:
            </h2>

            <div className="space-y-6 text-[#0A1721] text-base leading-relaxed">
              <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <p>
                  <Code className="inline w-5 h-5 mr-2" />
                  <span className="font-semibold text-[#0A1721]">
                    Kotlin Expertise:{" "}
                  </span>
                  <br />
                  Our developers are well-versed in Kotlin, allowing them to craft clean,
                  efficient, and maintainable code for your Android app.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <p>
                  <Wrench className="inline w-5 h-5 mr-2" />
                  <span className="font-semibold text-[#0A1721]">
                    Android Studio Mastery:
                  </span>
                  <br />
                  We utilize the official Integrated Development Environment (IDE) from Google,
                  ensuring efficient development workflows and access to the latest Android
                  development tools.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <p>
                  <Layers className="inline w-5 h-5 mr-2" />
                  <span className="font-semibold text-[#0A1721]">
                    Jetpack Libraries:
                  </span>
                  <br />
                  We leverage the power of Jetpack libraries, offering pre-built UI components and
                  architectural guidance to streamline development and enhance app functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========== Why Choose Section =========== */}
      <section className="pt-12 px-8 flex items-center justify-center">
        <div className="max-w-7xl px-4 mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Why Choose Megascale for Your Big Data Analytics Needs?
            </h2>
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
                          color: hoveredPlatform === idx ? "#F15124" : "#000",
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

      {/* ===== Section 2: Cloud Features ===== */}
      <section
        className="pt-12 px-8"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
              Why Choose Megascale for Your Android App Development?
            </h2>
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

      <div className="pt-12 text-center mb-16 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
          Ready to build a game-changing Android app?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
          Let's discuss your vision! Contact Megascale today for a free consultation and unlock the potential of the Android platform for your business.
        </p>
      </div>
    </>
  );
}
