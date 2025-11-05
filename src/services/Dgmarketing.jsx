import React, { useState, useEffect } from "react";
import {
  Shield,
  Network,
  Server,
  Lock,
  Activity,
  AlertTriangle,
  Laptop,
  Users,
  Eye,
  Cloud,
  Cpu,
  Globe,
  CheckCircle,
  BarChart,
  Rocket,
  Settings,
  Zap,
} from "lucide-react";

// ===== Helper to get Icon =====
const getIcon = (icon) => {
  const icons = {
    Cloud,
    Server,
    Database: Server,
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

// ===== Data =====
const networkAndSecurityData = {
  optimizingNetworkInfrastructure: {
    title: "Facebook Marketing: Amplify Your Brand Voice",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/042/127/218/small/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png",
    sections: [
      {
        icon: <Network size={26} />,
        heading: "Leverage the Power of Social Media's Giant: ",
        description:
          "Reach a massive audience and cultivate a loyal community through targeted Facebook campaigns.",
      },
      {
        icon: <Server size={26} />,
        heading: "Targeted Ads & Organic Growth: ",
        description:
          "We craft compelling ad campaigns alongside strategic organic growth techniques to maximize your reach.",
      },
      {
        icon: <Server size={26} />,
        heading: "Engagement is Key: ",
        description:
          "Foster brand loyalty through interactive content, contests, and community management.",
      },

    ],
  },
  fortifyingSecurityPosture: {
    title: "Instagram Marketing: Captivate Your Audience Visually",
    image:
      "https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png",
    sections: [
      {
        icon: <AlertTriangle size={26} />,
        heading: "Showcase Your Brand Story: ",
        description:
          "Instagram's visual focus is ideal for businesses with a strong visual identity. ",
      },
      {
        icon: <Lock size={26} />,
        heading: "Eye-Catching Content Creation:",
        description:
          "Our team creates stunning photos, videos, and Stories that resonate with your target audience.",
      },
      {
        icon: <AlertTriangle size={26} />,
        heading: "Influencer Marketing:",
        description:
          "Partner with relevant influencers to amplify your brand message and reach a wider audience.",
      },
    ],
  },
  optimizingNetworkInfrastructure1: {
    title: "Google Marketing: Be the Top Search Result",
    image:
      "https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png",
    sections: [
      {
        icon: <Network size={26} />,
        heading: "Dominate Search Engine Results Pages (SERPs): ",
        description:
          "Make sure your business appears at the top of relevant Google searches.",
      },
      {
        icon: <Server size={26} />,
        heading: "Keyword Research & Optimization: ",
        description:
          "We identify high-performing keywords and optimize your website content for better ranking.",
      },
      {
        icon: <Activity size={26} />,
        heading: "Pay-Per-Click (PPC) Advertising: ",
        description:
          "Reach targeted users actively searching for products and services like yours.",
      },

    ],
  },
  optimizingNetworkInfrastructure2: {
    title: "LinkedIn Marketing: Connect with Professionals",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/986/926/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png",
    sections: [
      {
        icon: <Network size={26} />,
        heading: "Tap into the B2B Powerhouse: ",
        description:
          "LinkedIn is the perfect platform for connecting with businesses and potential partners",
      },
      {
        icon: <Server size={26} />,
        heading: "Targeted Content & Lead Generation: ",
        description:
          "Develop engaging content to showcase your expertise and attract valuable leads.",
      },
      {
        icon: <Activity size={26} />,
        heading: "Company Page Optimization: ",
        description:
          "Create a strong company profile that highlights your brand's value proposition.",
      },

    ],
  },
  optimizingNetworkInfrastructure3: {
    title: "Pinterest Marketing: Visually Inspire Your Audience",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/018/930/744/small_2x/pinterest-logo-pinterest-transparent-free-png.png",
    sections: [
      {
        icon: <Network size={26} />,
        heading: "Ideal for Creative Businesses: ",
        description:
          "Reach a highly engaged audience looking for inspiration and ideas on Pinterest.",
      },
      {
        icon: <Server size={26} />,
        heading: "Eye-Catching Pins & Boards: ",
        description:
          "We help you create visually stunning pins and boards that showcase your products or services.",
      },
      {
        icon: <Activity size={26} />,
        heading: "Drive Traffic to Your Website: ",
        description:
          "Direct potential customers to your website for further information or sales.",
      },

    ],
  },
};

const networkSecurityApproach = [
  {
    name: "WhatsApp Marketing: ",
    description:
      "The iOS app store is competitive, and keeping your app updated is crucial. We provide ongoing maintenance and update services to ensure your app remains secure, optimized, and delivers the best possible user experience.",
    icon: "Globe",
  },
  {
    name: "App Store Optimization (ASO): ",
    description:
      "Our team optimizes your app listing to improve discoverability within the App Store, ensuring your app reaches its target audience.",
    icon: "Shield",
  },

];

const networkSecurityBenefits = [
  {
    name: "Experienced & Agile Development Team",
    description:
      "Our team has a proven track record of delivering high-quality iOS apps across various industries.",
    icon: "Zap",
  },
  {
    name: "Scalable Solutions",
    description:
      "We design apps that can grow with your business, accommodating future feature additions and user base expansion.",
    icon: "BarChart",
  },
  {
    name: "Data Security & Privacy",
    description:
      "We prioritize the security of your app and user data, adhering to Apple's strict App Store guidelines and industry best practices.",
    icon: "Server",
  },


];

// ===== Section Component =====
const Section = ({ title, image, sections, reverse }) => {
  const content = (
    <div className="flex flex-col px-8 justify-center">
      <h2 className="text-left text-3xl font-bold mb-4 text-[#0A1721]">
        {title}
      </h2>
      <div className="space-y-6">
        {sections.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex">
                <div className="text-center text-[#0A1721] inline w-5 h-5 mr-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 text-left">
                  {item.heading}
                </h3>
              </div>
              <br />
              <p className="text-gray-600 text-left">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const imageDiv = (
    <div className="flex justify-center">
      <div className="relative w-full h-[480px] max-w-md">
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
      </div>
    </div>
  );
  return (
    <section className="pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {reverse ? imageDiv : content}
        {reverse ? content : imageDiv}
      </div>
    </section>
  );
};


// ===== NetworkSecurityOverview Component =====
const NetworkSecurityOverview = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { optimizingNetworkInfrastructure, fortifyingSecurityPosture, optimizingNetworkInfrastructure1, optimizingNetworkInfrastructure2, optimizingNetworkInfrastructure3 } =
    networkAndSecurityData;
  return (
    <div className="bg-gray-100">
      <Section {...optimizingNetworkInfrastructure} />
      <Section {...fortifyingSecurityPosture} reverse />
      <Section {...optimizingNetworkInfrastructure1} />
      <Section {...optimizingNetworkInfrastructure2} reverse />
      <Section {...optimizingNetworkInfrastructure3} />
    </div>
  );
};



const LayoutComponent = () => {
  const data = [
    {
      heading: "WhatsApp Marketing:",
      paragraph:
        "Cultivate closer customer relationships by offering personalized support and targeted promotions through secure WhatsApp communication.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/029/204/552/small/phone-icon-3d-rendering-png.png",
    },
    {
      heading: "SMS Marketing: ",
      paragraph:
        "Deliver time-sensitive offers, appointment reminders, and exclusive updates directly to your customer's mobile devices through targeted SMS campaigns.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1200px-IMessage_logo.svg.png",
    },
    {
      heading: "Email Marketing: ",
      paragraph:
        "Build lasting connections with your audience through personalized email marketing campaigns that nurture leads, promote special offers, and drive customer engagement.By utilizing a combination of these services, you can create a holistic digital marketing strategy that delivers exceptional results. Let Megascale help you unlock the full potential of digital business marketing!",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/022/484/508/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png",
    },
    {
      heading: "Content Creation: ",
      paragraph:
        " High-quality content is the backbone of any successful digital marketing strategy. Our team of skilled writers, videographers, and graphic designers creates engaging content, from blog posts and articles to eye-catching videos and social media posts, that resonates with your target audience and drives action.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/8164/8164240.png",
    },
    {
      heading: "Search Engine Optimization (SEO): ",
      paragraph:
        "Get found by your ideal customers online. We implement proven SEO strategies to improve your website's ranking in search engine results pages (SERPs) for relevant keywords, driving organic traffic and qualified leads.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/10701/10701004.png",
    },
    {
      heading: "Performance Marketing:",
      paragraph:
        "Track your results and maximize your return on investment (ROI). We employ data-driven strategies for paid advertising campaigns across various platforms like Google Ads and social media advertising, ensuring your marketing budget is spent efficiently.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/010/872/839/small/3d-mobile-marketing-with-loudspeaker-png.png",
    },


    {
      heading: "Local SEO: ",
      paragraph:
        "Attract customers searching for businesses in your area. We optimize your Google My Business listing and other local directories to ensure your business appears at the top of local search results.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/12072/12072189.png",
    },
    {
      heading: "Curated Business Marketing Solutions:",
      paragraph:
        "We don't believe in a one-size-fits-all approach. We take the time to understand your unique business goals and challenges, then tailor a personalized marketing strategy that leverages the most effective tactics to achieve your desired outcomes.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/050/544/573/small/the-logo-for-a-company-that-sells-financial-products-free-png.png",
    },
  ];

  return (
    <div className="min-h-screen px-8 bg-white pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => {
          const isEven = index % 2 === 0; // for alternating layout
          return (
            <div
              key={index}
              className={`mb-16 flex flex-col items-center md:flex-row gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Text Section */}
              <div
                className={`w-full md:w-1/2 ${isEven ? "text-left" : "text-right"
                  }`}
              >
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-4 text-[#0A1721] ${isEven ? "md:text-left" : "md:text-right"
                    }`}
                >
                  {item.heading}
                </h2>
                <p
                  className={`text-lg text-gray-700 leading-relaxed transition-colors ${isEven ? "md:text-left" : "md:text-right"
                    }`}
                >
                  {item.paragraph}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="w-[200px] h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

const LayoutComponent111 = () => {

  const [hoveredValue, setHoveredValue] = useState(null);

  const data = [
    {
      name: "Cutting-Edge Strategies: ",
      description: "We stay ahead of the curve, utilizing the latest digital marketing trends and technologies to deliver exceptional results.",
      icon: "Industry",
    },
    {
      name: "Data-Driven Approach: ",
      description: "Every decision we make is backed by data, ensuring your marketing campaigns are optimized for maximum impact.",
      icon: "Expertise",
    },
    {
      name: "Measurable Results: ",
      description: "We track key performance indicators (KPIs) to demonstrate the effectiveness of our strategies and the positive impact on your business.",
      icon: "Robotics",
    },
    {
      name: "Dedicated Team: ",
      description: "You'll have a dedicated team of experts working with you every step of the way, ensuring clear communication and a successful partnership.",
      icon: "Lock",
    }
  ];

  return (
    <section className="py-8 px-8">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-[#0A1721]">
            Why Choose Megascale for Your Software Testing Needs?
          </h2>
          {/* <p className="text-xl" style={{ color: "#000" }}>
              Driving success through innovation
            </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((value, idx) => {
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
  );
};



// ===== Parent Component =====
const Iphone = () => {
  return (
    <>
      <div className="container mx-auto text-center  max-w-7xl  px-8 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]" >
          Digital Marketing: Your Path to Success
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-colors" >
          Engage your audience across all major platforms, including Facebook, Instagram, Google My Business, LinkedIn, and Pinterest. We craft compelling content, manage your online presence, and run targeted ad campaigns to maximize reach and brand awareness.   </p>
      </div>
      <NetworkSecurityOverview />
      <LayoutComponent />
      <LayoutComponent111 />
      {/* <CloudSections /> */}
    </>
  );
};

export default Iphone;

