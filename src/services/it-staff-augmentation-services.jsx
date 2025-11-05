import React, { useEffect } from "react";
import { CheckCircle, Bug, Code, Users, Lightbulb, Shield, Briefcase, Search, FileText, TrendingUp } from "lucide-react";

const ItStaff = () => {
    const points = [
        "selected professionals capable of managing both domestic and international projects.",
        "Select the necessary skills from our expanding talent pool.",
        "Obtain an affordable workforce in contrast to traditional hiring methods."
    ];
    const steps = [
        {
            title: "Finding Out",
            description: "We will go over the job requirements in detail so I can grasp the main responsibilities and competencies you are seeking.",
            icon: Search,
            side: "left"
        },
        {
            title: "Interview and Screening",
            description: "We will first shortlist the best candidates who meet your criteria. After that, you will interview candidates to select one.",
            icon: Users,
            side: "right"
        },
        {
            title: "Onboarding",
            description: "After negotiating the final offer we will initiate the onboarding process and complete the necessary contract documents to get the job underway.",
            icon: FileText,
            side: "left"
        },
        {
            title: "Scaling and Management",
            description: "We'll evaluate performance and get input on a timely manner. We can also adjust or enlarge your team based on the growth of your business and assessment of your project.",
            icon: TrendingUp,
            side: "right"
        }
    ];
    return (
        <div className="min-h-screen  px-8">
            <section className="flex items-center justify-center py-20">
                <div className="max-w-7xl mx-auto w-full text-center">
                    {/* Title and Description */}
                    <div className="mb-10 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
                            IT Staff Augmentation Services
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                            We offer the flexibility to hire either a developer or an entire team according to your project needs. Our developers' expertise bridges any gaps in your team, revitalizing your project with renewed energy and efficiency. This approach significantly reduces development costs while ensuring the delivery of a high-quality digital product.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                            Megascale Infotech is one of the leading IT staff augmentation companies globally. Utilize our flexible staff augmentation services to quickly acquire the skills and capabilities you need to meet your short- and long-term business objectives.
                        </p>
                    </div>

                    {/* Image and Paragraph */}
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center px-4">
                        <img
                            src="https://static.wixstatic.com/media/1bf9ca_bd1d263cb676419689381774d3e1ed7a~mv2.jpg/v1/fill/w_334,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/performance%20(1).jpg"
                            alt="IT Staff Augmentation"
                            className="w-full max-w-xs rounded-lg shadow-lg"
                        />
                        <p className="text-lg text-gray-700 leading-relaxed transition-colors">
                            Our IT staff augmentation services provide you with the flexibility to scale your team with skilled professionals who seamlessly integrate into your existing workflows. Whether you need developers, testers, or project managers, we offer a diverse talent pool to meet your specific project requirements. By leveraging our staff augmentation services, you can quickly adapt to changing business needs, reduce time-to-market, and optimize costs while maintaining high-quality standards.
                        </p>
                    </div>

                    {/* Section Heading */}
                    <h3 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-black px-4">
                        Our trusted IT staff augmentation services easily and accurately meet your staffing needs, giving you peace of mind.
                    </h3>

                    {/* Hire a Developer Section */}
                    <section className="bg-blue-50 px-4 md:px-12 pt-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                                <div className="text-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hire a Developer</h2>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                        Megascale can meet your business needs by providing a pro-screened pool of skilled developers, coders, and testers.
                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                        The knowledge and experience required to deliver solutions utilizing state-of-the-art performance technologies are offered by our high-performance specialists.
                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        Whether you need development, coding, testing, or any combination of these services, our team is capable of producing outstanding outcomes that will advance your company.
                                    </p>
                                </div>
                                <img
                                    src="https://static.wixstatic.com/media/1bf9ca_a05dc803d1de45d6a17028ed8c3442f0~mv2.jpg/v1/fill/w_293,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/developer.jpg"
                                    alt="Hire Developer"
                                    className="w-full max-w-xs rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Hire a Dedicated Team Section */}
                    <section className="bg-blue-50 px-4 md:px-12 pt-12">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Hire a Dedicated Team</h2>
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <img
                                    src="https://static.wixstatic.com/media/1bf9ca_09ddde3eef73499eb1dbb640a4d6e271~mv2.jpg/v1/fill/w_298,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/team.jpg"
                                    alt="Dedicated Team"
                                    className="w-full max-w-xs rounded-md"
                                />
                                <div className="text-left">
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                        With Megascale, you can work with a team of trained specialists who are committed to helping your business achieve its long-term goals.
                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                        Close any skills gaps in IT, get technical advice during the development process, have a single point of contact for management, cut down on operating costs, and focus on your business plan.
                                    </p>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        Our staff stays up to date on the latest innovations in the industry and cutting-edge technologies, so your projects will be completed effectively and creatively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="px-6 md:px-12 py-12">
                        <div className="max-w-4xl mx-auto">
                            <ul className="space-y-4">
                                {points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <span className="text-gray-800 font-semibold text-lg flex-shrink-0 mt-1">•</span>
                                        <span className="text-gray-800 text-base md:text-lg leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    The Hiring Procedure
                                </h1>
                                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                    We put together the ideal long-term committed team for your project using a 3-day systematic procedures. Our high-performing specialists give you the knowledge and experience you need to deliver results.
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Center line - hidden on mobile */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-400 transform -translate-x-1/2"></div>

                                {/* Steps */}
                                <div className="space-y-12">
                                    {steps.map((step, index) => {
                                        const Icon = step.icon;
                                        const isLeft = step.side === "left";

                                        return (
                                            <div key={index} className="relative">
                                                {/* Mobile Layout */}
                                                <div className="md:hidden">
                                                    <div className="flex gap-4">
                                                        <div className="flex flex-col items-center">
                                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                                <Icon size={24} className="text-blue-600" />
                                                            </div>
                                                            {index < steps.length - 1 && (
                                                                <div className="w-1 h-16 bg-gray-300 mt-2"></div>
                                                            )}
                                                        </div>
                                                        <div className="pb-4">
                                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
                                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                                    {step.title}
                                                                </h3>
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {step.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Desktop Layout */}
                                                <div className="hidden md:flex gap-8 items-center">
                                                    {isLeft ? (
                                                        <>
                                                            <div className="w-5/12 text-right">
                                                                <div className="bg-white border-2 border-gray-400 rounded-lg p-6 inline-block w-full">
                                                                    <div className="flex items-center gap-3 mb-3">
                                                                        <div className="flex-1"></div>
                                                                        <Icon size={32} className="text-blue-500 flex-shrink-0" />
                                                                    </div>
                                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                                        {step.title}
                                                                    </h3>
                                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                                        {step.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="w-2/12 flex justify-center">
                                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                                                                    <Icon size={24} className="text-blue-600" />
                                                                </div>
                                                            </div>
                                                            <div className="w-5/12"></div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="w-5/12"></div>
                                                            <div className="w-2/12 flex justify-center">
                                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                                                                    <Icon size={24} className="text-blue-600" />
                                                                </div>
                                                            </div>
                                                            <div className="w-5/12">
                                                                <div className="bg-white border-2 border-gray-400 rounded-lg p-6">
                                                                    <div className="flex items-center gap-3 mb-3">
                                                                        <Icon size={32} className="text-blue-500 flex-shrink-0" />
                                                                        <div className="flex-1"></div>
                                                                    </div>
                                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                                        {step.title}
                                                                    </h3>
                                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                                        {step.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItStaff;
