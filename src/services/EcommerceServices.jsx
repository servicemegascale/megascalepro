import React, { useState,useEffect } from "react";
import {
  Cloud,
  ShoppingCart,
  Zap,
  Settings,
  Rocket,
  CreditCard,
  Package,
  Lock,
  Globe,
  Palette,
  Camera,
  Shield,
  PlayCircle,
  Brain,
  UserCheck,
  CheckCircle,
  Heart,
  BarChart,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Cloud,
    ShoppingCart,
    Zap,
    Settings,
    Rocket,
    CreditCard,
    Package,
    Lock,
    Globe,
    Palette,
    Camera,
    Shield,
    PlayCircle,
    Brain,
    UserCheck,
    CheckCircle,
    Heart,
    BarChart,
  };
  return icons[icon] || Cloud;
};

// ===== Static Data =====
const hostingOptions = [
  {
    name: "Demystifying E-commerce Hosting Options",
    description:
      "E-commerce hosting provides the virtual space where all your website's data resides – product information, customer details, and your website's code. Reliable and secure hosting ensures your online store functions smoothly, delivering a positive experience for your customers. Here's a breakdown of the two main categories to consider",
    icon: "Globe",
  },
  {
    name: "Customizable Cloud Hosting Providers",
    description:
      "Scalability & Control: These providers like Amazon Web Services (AWS), DigitalOcean, Vultr, IBM Cloud (SoftLayer), Google Cloud Platform, and KT Cloud offer immense control and scalability. You can customize server configurations to perfectly match your store's needs. Technical Expertise Required: Managing these solutions often requires a higher level of technical knowledge compared to shared hosting options.",
    icon: "Cloud",
  },
  {
    name: "Popular E-commerce Hosting Providers",
    description:
      "Ease of Use: Providers like Wix, Shopify, GoDaddy, Squarespace, and Ecwid offer user-friendly platforms with built-in e-commerce features. These are ideal for beginners with limited technical expertise. Limited Customization: While offering ease of use, these platforms often come with limitations on customization compared to cloud hosting solutions.",
    icon: "ShoppingCart",
  },
];

const choosingFactors = [
  {
    name: "Traffic Volume",
    description:
      "Expected number of visitors to your online store. Shared hosting might suffice for low traffic, while cloud hosting offers better scalability for high traffic volumes.",
    icon: "Zap",
  },
  {
    name: "Technical Expertise",
    description:
      "Consider your comfort level with server management. If you're a beginner, a user-friendly platform might be preferable.",
    icon: "Settings",
  },
  {
    name: "Growth Plans",
    description:
      "Think about your future needs. Cloud hosting offers more flexibility to accommodate growth compared to some shared hosting plans.",
    icon: "Rocket",
  },
  {
    name: "Budget",
    description:
      "Customizable cloud hosting can be more expensive than shared hosting plans offered by popular providers.",
    icon: "CreditCard",
  },
];

const beyondHosting = [
  {
    name: "E-commerce Platform",
    description:
      "Select a platform like Shopify, Wix, or WooCommerce that aligns with your needs and technical skills.",
    icon: "Package",
  },
  {
    name: "Security Measures",
    description:
      "Implement additional security features like SSL certificates and fraud prevention tools to protect your store and customer data.",
    icon: "Lock",
  },
  {
    name: "Performance Optimization",
    description:
      "Ensure your website loads quickly and offers a seamless user experience to keep visitors engaged and coming back for more.",
    icon: "Globe",
  },
];

const brandBuilding = [
  {
    name: "Logo Design",
    description:
      "Our team of skilled graphic designers collaborates closely with you to create a unique and memorable logo that perfectly embodies your brand essence. We'll translate your vision into a timeless visual identity that sets you apart.",
    icon: "Palette",
  },
  {
    name: "Product Photography & Videography",
    description:
      "Showcase your products in stunning detail with our professional photography and videography services. High-quality visuals are essential for capturing attention and driving sales in today's online marketplace. Our experts will create captivating content that highlights your product's features and benefits.",
    icon: "Camera",
  },
  {
    name: "Brand Identity Development",
    description:
      "We delve deeper than just aesthetics. We help you establish a comprehensive brand identity that extends beyond your logo. This includes crafting your brand voice, messaging strategy, color palettes, and typography, ensuring consistency across all touchpoints.",
    icon: "Shield",
  },
  {
    name: "Explainer Videos",
    description:
      "Tell your brand story in a captivating and informative way with explainer videos. Our video production experts will script, storyboard, and produce high-quality explainer videos that educate and engage your target audience.",
    icon: "PlayCircle",
  },
];

const whyChooseMegascale = [
  {
    name: "Scalability & Agility",
    description:
      '"Global Catalyst for Innovation" our ambition to be a leader in the IT industry worldwide.',
    icon: "Rocket",
  },
  {
    name: "Increased Efficiency",
    description:
      '"Revolutionizing Businesses" Megascale transformative power of your software solutions.',
    icon: "Brain",
  },
  {
    name: "Improved Business Continuity",
    description:
      '"Exceptional Software Solutions" showcases our dedication to delivering top-tier work.',
    icon: "Shield",
  },
  {
    name: "Enhanced Collaboration",
    description:
      "Empowering Businesses to Scale. We envision a world where every company thrives with the power of Megascale's software solutions.",
    icon: "UserCheck",
  },
  {
    name: "Innovation & Competitive Advantage",
    description:
      "The Future of Software Development is Agile. We see Megascale at the forefront, delivering cutting-edge solutions with unmatched expertise.",
    icon: "Zap",
  },
];

const brandPower = [
  {
    name: "Enhanced Brand Recognition",
    description:
      "Increase brand awareness and memorability, differentiating yourself from the competition.",
    icon: "CheckCircle",
  },
  {
    name: "Emotional Connection",
    description:
      "Forge deeper connections with your target audience, fostering brand loyalty and trust.",
    icon: "Heart",
  },
  {
    name: "Improved Marketing ROI",
    description:
      "Attract more qualified leads and customers with impactful branding that resonates with your target market.",
    icon: "BarChart",
  },
  {
    name: "Streamlined Brand Management",
    description:
      "Maintain brand consistency across all platforms with a comprehensive brand identity guide.",
    icon: "Settings",
  },
  {
    name: "Foundation for Future Growth",
    description:
      "Build a solid brand foundation that empowers your business to achieve long-term success.",
    icon: "Globe",
  },
];

const EcommerceServices = () => {
   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);
  const [hoveredPower, setHoveredPower] = useState(null);

  return (
    <>
      {/* ===== Section 1: Header ===== */}
      <section
        className=" px-4 flex items-center justify-center"
  
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="text-center  pt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              E-commerce Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Welcome to the exciting world of e-commerce! At Megascale, we know
              you're eager to showcase your products and cultivate a loyal
              customer base. But before you dive in, there's a crucial decision to
              make: choosing the right hosting solution for your online store.
              This forms the bedrock of your e-commerce empire, influencing
              everything from performance to security.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Hosting Options ===== */}
      <section
        className="pt-12 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="container px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {hostingOptions.map((platform, idx) => {
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

      {/* ===== Section 3: Choosing the Right E-commerce Hosting Partner ===== */}
      <section className="pt-12 px-4">
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Choosing the Right E-commerce Hosting Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Megascale can be your guide through this decision process. Here are
              some key factors to consider:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {choosingFactors.map((feature, idx) => {
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
                        hoveredFeature === idx ? "#F15124" : "rgba(0,0,0,0.1)",
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

      {/* ===== Section 4: Beyond Hosting ===== */}
      <section
        className="pt-12 px-4"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Beyond Hosting: Building Your E-commerce Success
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Here are some additional considerations to ensure your e-commerce
              journey thrives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beyondHosting.map((value, idx) => {
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
                        hoveredValue === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredValue === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredValue === idx
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
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
                              color: hoveredValue === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color: hoveredValue === idx ? "#fff" : "#F15124",
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

      {/* ===== Section 5: Let Megascale be Your E-commerce Hosting Partner ===== */}
      <section
        className="pt-12 px-4 flex items-center justify-center"
        
      >
        <div className="container px-8 max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Let Megascale be Your E-commerce Hosting Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Contact Megascale today for a free consultation. Our IT specialists
              will assess your specific needs, recommend the optimal hosting
              solution, and guide you through the process of setting up your
              online store. With Megascale as your partner, you'll have the secure
              and scalable foundation needed to build a successful and thriving
              e-commerce empire. Remember, choosing the right hosting solution is
              an investment in your online business's future. Let us help you make
              the perfect choice!
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 6: Building Your Brand from the Ground Up ===== */}
      <section className=" px-4">
        <div className="container px-8max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Building Your Brand from the Ground Up
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Megascale: Your Vision, Brought to Life - Expert Branding Solutions
            </p>
            <p className="text-lg px-8 mt-2" style={{ color: "#000", opacity: 0.8 }}>
              In today's digital age, a strong brand is your most valuable asset.
              At Megascale, we're your one-stop shop for crafting a brand identity
              that captivates, compels, and converts. We offer a comprehensive
              suite of services designed to transform your vision into a powerful
              branding strategy that elevates your business and connects with your
              target audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {brandBuilding.map((brand, idx) => {
              const IconComponent = getIcon(brand.icon);
              return (
                <div
                  key={idx}
                  className="group relative flex justify-center items-center"
                  onMouseEnter={() => setHoveredBrand(idx)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredBrand === idx
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
                          color: hoveredBrand === idx ? "#F15124" : "#000",
                        }}
                      >
                        {brand.name}
                      </h3>
                      <p
                        style={{ color: "#000", opacity: 0.8 }}
                        className="leading-relaxed max-w-sm"
                      >
                        {brand.description}
                      </p>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${
                        hoveredBrand === idx ? "scale-x-100" : "scale-x-0"
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

      {/* ===== Section 7: Why Choose Megascale as Your Branding Partner? ===== */}
      <section
        className="pt-12 px-4"
        
      >
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#000" }}>
              Why Choose Megascale as Your Branding Partner?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Driving success through innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseMegascale.map((why, idx) => {
              const IconComponent = getIcon(why.icon);
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
                        {why.name}
                      </h3>
                      <p
                        className="text-center leading-relaxed"
                        style={{ color: "#000", opacity: 0.8 }}
                      >
                        {why.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Section 8: The Power of a Strong Brand Identity ===== */}
      <section className="pt-12 px-4">
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              The Power of a Strong Brand Identity
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
              Knowledge to empower your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandPower.map((power, idx) => {
              const IconComponent = getIcon(power.icon);
              return (
                <div
                  key={idx}
                  className="group"
                  onMouseEnter={() => setHoveredPower(idx)}
                  onMouseLeave={() => setHoveredPower(null)}
                >
                  <div
                    className="relative h-full bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      borderColor:
                        hoveredPower === idx ? "#F15124" : "rgba(0,0,0,0.1)",
                      boxShadow:
                        hoveredPower === idx
                          ? "0 25px 50px -12px rgba(241, 81, 36, 0.4)"
                          : "0 5px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transform transition-transform duration-700 ${
                        hoveredPower === idx
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                      style={{ backgroundColor: "#F15124" }}
                    ></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700"
                          style={{
                            backgroundColor:
                              hoveredPower === idx ? "#fff" : "#F15124",
                          }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{
                              color: hoveredPower === idx ? "#F15124" : "#fff",
                            }}
                          />
                        </div>
                        <div
                          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            color: hoveredPower === idx ? "#fff" : "#F15124",
                          }}
                        >
                          0{idx + 1}
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4 transition-colors"
                        style={{
                          color: hoveredPower === idx ? "#fff" : "#000",
                        }}
                      >
                        {power.name}
                      </h3>
                      <p
                        className="leading-relaxed transition-colors"
                        style={{
                          color: hoveredPower === idx ? "#fff" : "#000",
                          opacity: hoveredPower === idx ? 1 : 0.8,
                        }}
                      >
                        {power.description}
                      </p>
                    </div>
                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        backgroundColor:
                          hoveredPower === idx
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

      {/* ===== Section 9: Ready to Tell Your Brand Story? ===== */}
      <section
        className="pt-12 px-4 flex items-center justify-center"
        
      >
        <div className="container px-8 max-w-7xl mx-auto w-full text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
              Ready to Tell Your Brand Story?
            </h2>
            <p className="text-gray-700 leading-relaxed transition-colors" >
              Contact Megascale today for a free consultation. Let's discuss your
              brand vision and explore how our branding solutions can bring it to
              life. Together, we'll craft a brand identity that not only looks
              good but strategically positions you for success in the
              marketplace. Let's make your vision a reality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceServices;