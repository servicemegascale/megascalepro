import React, { useState,useEffect } from "react";
import {
    Cpu,
    Zap,
    Globe,
    CheckCircle,
    Settings,
    Shield,
    Lock,
    Rocket,
    BarChart,
    Users,
    DollarSign,
    Star,
    Target,
    Briefcase,
    Wrench,
    Brain,
} from "lucide-react";

const getIcon = (icon) => {
    const icons = {
        Cpu,
        Zap,
        Globe,
        CheckCircle,
        Settings,
        Shield,
        Lock,
        Rocket,
        BarChart,
        Users,
        DollarSign,
        Star,
        Target,
        Briefcase,
        Wrench,
        Brain,
    };
    return icons[icon] || Cpu;
};

// ====== Section Data ======
const roboticsSynergies = [
    {
        name: "Cost-Effectiveness",
        description:
            "Extend your development team with access to a wider talent pool at competitive rates, allowing you to optimize your project budget.",
        icon: "DollarSign",
    },
    {
        name: "Global Expertise",
        description:
            "Tap into a diverse range of skills and experiences from developers across the globe, finding the perfect fit for your specific project needs.",
        icon: "Globe",
    },
    {
        name: "Scalability ",
        description:
            "Effortlessly scale your development team up or down as your project requirements evolve, ensuring you have the right resources at the right time.",
        icon: "Users",
    },
];

const roboticsBenefits = [
    {
        name: "Rigorous Vetting Process",
        description:
            "We meticulously screen and assess developers based on technical skills, experience, and cultural fit to ensure you work with the best talent.",
        icon: "Target",
    },
    {
        name: "Streamlined Project Management",
        description:
            "Our experienced project managers oversee communication, collaboration, and delivery timelines, keeping your project on track and within budget.",
        icon: "Settings",
    },
    {
        name: "Communication & Transparency",
        description:
            "We prioritize seamless communication between you and your offshore team, fostering a collaborative environment and clear project direction.",
        icon: "Users",
    },
    {
        name: "Security & Compliance",
        description:
            "Data security is paramount. We adhere to strict industry standards and best practices to protect your confidential information.",
        icon: "Shield",
    },
];

const roboticsPartnership = [
    {
        name: "Technology Consulting",
        description:
            "Our IT experts analyze your needs and recommend the optimal technologies and development approaches to achieve your goals.",
        icon: "Rocket",
    },
    {
        name: "Customizable Solutions",
        description:
            "We tailor our offshore development services to your specific project requirements and long-term objectives.",
        icon: "Wrench",
    },
    {
        name: "Ongoing Support",
        description:
            "Megascale doesn't stop at deployment. We offer ongoing maintenance and support services to ensure your project's continued success.",
        icon: "CheckCircle",
    },
];

const roboticsSynergies2 = [
    {
        name: "Proven Track Record",
        description:
            "We have a well-established reputation for delivering successful projects for clients across various industries.",
        icon: "BarChart",
    },
    {
        name: "Focus on Client Success",
        description:
            "Your satisfaction is our priority. We partner with you to understand your goals and exceed your expectations.",
        icon: "Star",
    },
    {
        name: "Cost-Effective Solutions",
        description:
            "We provide exceptional value by offering top-tier talent at competitive rates, allowing you to optimize your IT budget.",
        icon: "DollarSign",
    },
];

// ====== Component ======
export default function Offshoredevelopment() {
     useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
    const [hoveredPlatform, setHoveredPlatform] = useState(null);
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [hoveredValue, setHoveredValue] = useState(null);

    return (
        <div className=" px-8 ">
            {/* ===== Section 1: Intro ===== */}
            <div className="max-w-7xl   mx-auto">
                <div className="text-center mb-4 pt-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                        Offshore Development Services
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                        In today's competitive IT landscape, finding skilled developers and managing complex projects can be a challenge. At Megascale, we offer a comprehensive solution: a leading Information Technology firm specializing in connecting businesses with highly qualified offshore developers.
                    </p>
                </div>
            </div>

            {/* ===== Section 2: Advantages ===== */}
            <section className="py-5 px-4 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full text-center">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            Unlock the Advantages of Offshore Development
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

                                            <p className="leading-relaxed max-w-sm text-black/80">
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

            {/* ===== Section 3: Partner ===== */}
            <section
                className="py-9 px-4"
                
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            Megascale: Your Trusted Offshore Development Partner
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

                                            <h3 className="text-2xl font-bold text-center mb-4 text-black">
                                                {feature.name}
                                            </h3>

                                            <p className="text-center leading-relaxed text-black/80">
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

            {/* ===== Section 4: Beyond Outsourcing ===== */}
            <section className="py-5 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            Beyond Outsourcing
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roboticsPartnership.map((value, idx) => {
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
                                                    className="w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-700"
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
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== Section 5: Why Choose ===== */}
            <section className="py-10 px-4 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full text-center">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            Why Choose Megascale for Your Offshore Development Needs?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {roboticsSynergies2.map((platform, idx) => {
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

            {/* ===== Section 6: CTA ===== */}
            <div className="pt-4 text-center mb-16 max-w-7xl mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                    Ready to unlock the potential of offshore development?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed transition-colors ">
                    Contact Megascale today for a free consultation and discover how we can help you build a high-performing offshore development team for your next project.
                </p>
            </div>
        </div>
    );
}
