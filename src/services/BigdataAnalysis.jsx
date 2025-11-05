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
    };
    return icons[icon] || Cloud;
};

// ====== Section Data ======
const roboticsSynergies = [
    {
        name: "Technology Agnostic Approach: ",
        description:
            "We are not tied to any single tool. We recommend the optimal platform based on your specific requirements and budget (Power BI, Redshift, Tableau, etc.).",
        icon: "Cpu", // Tech choice
    },
    {
        name: "Experienced Data Scientists & Analysts: ",
        description:
            "Our team comprises highly skilled data scientists and analysts with proven expertise in big data technologies and methodologies.",
        icon: "Server", // Represents professional team & systems
    },
    {
        name: "Focus on Business Value: ",
        description:
            "We don't just crunch numbers; we translate data into actionable insights that drive informed business decisions and measurable results.",
        icon: "BarChart", // Business insights
    },
    {
        name: "Scalable & Secure Solutions: ",
        description:
            "Our solutions are designed to scale alongside your growing data volume, while maintaining the highest security standards to protect your sensitive information.",
        icon: "Shield", // Security & scalability
    },
    {
        name: "Proven Track Record: ",
        description:
            "We have a well-established reputation for delivering successful big data analytics projects across diverse industries.",
        icon: "CheckCircle", // Proven success
    },
];

const roboticsBenefits = [
    {
        name: "Improved Decision-Making: ",
        description:
            "Gain data-driven insights to make informed business decisions and optimize your strategies.",
        icon: "BarChart", // Analytics decisions
    },
    {
        name: "Enhanced Operational Efficiency: ",
        description:
            "Identify areas for improvement and streamline processes based on data-driven insights.",
        icon: "Settings", // Optimization
    },
    {
        name: "Reduced Costs: ",
        description:
            "Uncover hidden patterns and trends that can help you optimize resource allocation and reduce costs.",
        icon: "Database", // Resource and data usage
    },
    {
        name: "Increased Customer Satisfaction: ",
        description:
            "Gain a deeper understanding of your customers and personalize your offerings to drive higher satisfaction.",
        icon: "Globe", // Global reach / customers
    },
    {
        name: "Gain a Competitive Advantage: ",
        description:
            "Leverage data insights to stay ahead of the curve and differentiate yourself in the marketplace.",
        icon: "Rocket", // Growth / advantage
    },
];

// ====== Component ======
export default function Bigdata() {
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
            <div className="max-w-7xl mx-auto px-8">
                <div className=" text-center mb-5 pt-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                        Big Data Analytics
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
                        Big Data Analytics
                        In today's data-driven world, harnessing the power of big data is
                        crucial for gaining a competitive edge. At Megascale, we're your
                        one-stop shop for comprehensive big data analytics solutions. We
                        leverage industry-leading tools like Microsoft Power BI, Amazon
                        Redshift, Tableau, and more, to empower you to transform raw data
                        into actionable insights that fuel business growth.
                    </p>
                </div>
            </div>

            {/* ===== Section 2: Unveiling the Potential ===== */}
            <section className="pt-4 px-8 bg-[#FFFDFB]">
                <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* ===== LEFT CONTENT ===== */}
                    <div>
                        <h2
                            className="text-left text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]"
                        >
                            Unveiling the Potential of Your Data:
                        </h2>

                        <div className="space-y-6 text-[#0A1721]">
                            <div>
                                <h3 className="text-left text-xl font-semibold mb-2">
                                    Data Integration & Management:
                                </h3>
                                <p className="text-left text-base opacity-80 ">
                                    We assist you in collecting, cleaning, and organizing massive
                                    datasets from various sources, ensuring data accuracy and
                                    accessibility for analysis.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-left text-xl font-semibold mb-2">
                                    Advanced Analytics & Visualization:
                                </h3>
                                <p className="text-left text-base opacity-80 leading-relaxed">
                                    Our team utilizes cutting-edge tools like Power BI, Redshift,
                                    and Tableau to create interactive dashboards and reports that
                                    translate complex data into clear, actionable insights.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-left text-xl font-semibold mb-2">
                                    Customizable Solutions:
                                </h3>
                                <p className="text-left text-base opacity-80 leading-relaxed">
                                    We tailor our approach to your specific needs, developing
                                    customized dashboards, reports, and data models that align
                                    perfectly with your business goals.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-left text-xl font-semibold mb-2">
                                    Cloud-Based Analytics:
                                </h3>
                                <p className="text-left text-base opacity-80 leading-relaxed">
                                    Leveraging the scalability and flexibility of cloud platforms
                                    like AWS and Azure, we enable efficient storage, processing,
                                    and analysis of large datasets.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-left text-xl font-semibold mb-2">
                                    Expert Support & Training:
                                </h3>
                                <p className="text-left text-base opacity-80 leading-relaxed">
                                    Our dedicated team provides ongoing support, training, and
                                    guidance to ensure you maximize the value of your big data
                                    analytics solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ===== RIGHT IMAGE ===== */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.wixstatic.com/media/4c1bd0_8e113a41cdda42bd9aaaad7d4abb03d2~mv2.jpg/v1/fill/w_367,h_367,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12083317_Wavy_Bus-15_Single-03.jpg"
                            alt="Data analytics illustration"
                            className="w-full max-w-md lg:max-w-lg rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* ===== Section 3: Why Choose Megascale ===== */}
            <section className="pt-12 px-8 flex items-center justify-center">
                <div className="max-w-7xl px-4 mx-auto w-full text-center">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
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

            {/* ===== Section 4: Benefits ===== */}
            <section
                className="pt-12 px-8"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
                <div className="max-w-7xl px-4 mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            The Benefits of Big Data Analytics with Megascale:
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

            {/* ===== Final Call to Action ===== */}
            <div className="pt-12 text-center   mb-16 max-w-7xl mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
                    Ready to Unlock the Power of Your Data?
                </h2>
                <p className="text-xl" style={{ color: "#000" }}>
                    Contact Megascale today for a free consultation. Let's discuss your big
                    data challenges and explore how our expertise can help you transform
                    data into a powerful driver of your business success.
                </p>
            </div>
        </>
    );
}
