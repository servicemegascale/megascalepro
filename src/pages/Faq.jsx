// import React, { useState } from 'react';

// const FAQSection = () => {
//   const [openItems, setOpenItems] = useState({});

//   const faqs = [
//     {
//       id: 1,
//       question: 'What services does Megascale  provide as a leading software development company?',
//       answer: 'Megascale  offers a wide range of services including custom software development, web and mobile app development, game development, cloud solutions, and DevOps consulting to help businesses innovate and scale.'
//     },
//     {
//       id: 2,
//       question: 'Why should I choose Megascale  as my game development company?',
//       answer: 'We stand out with our expertise in both 2D and 3D games, using cutting-edge technologies like Unity and Unreal Engine, combined with a proven track record of delivering engaging, high-performance games on time and within budget.'
//     },
//     {
//       id: 3,
//       question: 'How does your app development company ensure project success?',
//       answer: 'We follow an agile methodology, conduct regular client check-ins, perform thorough testing at every stage, and leverage experienced teams to mitigate risks and deliver high-quality apps that meet your goals.'
//     },
//     {
//       id: 4,
//       question: 'What industries do you serve with your software development solutions?',
//       answer: 'Our solutions cater to diverse industries such as healthcare, finance, e-commerce, education, gaming, and logistics, providing tailored software that drives efficiency and growth.'
//     },
//     {
//       id: 5,
//       question: 'Can you rescue a project that is behind schedule or over budget?',
//       answer: 'Yes, our team specializes in project rescue services. We assess the current state, optimize processes, allocate additional resources, and implement recovery plans to get your project back on track.'
//     },
//     {
//       id: 6,
//       question: 'Do you provide maintenance and support after app or game development?',
//       answer: 'Absolutely. We offer comprehensive post-launch maintenance, including bug fixes, updates, performance monitoring, and 24/7 support to ensure your app or game remains reliable and up-to-date.'
//     },
//     {
//       id: 7,
//       question: 'How does your game development company handle 2D and 3D game projects?',
//       answer: 'We use industry-standard tools like Unity for 2D and Unreal Engine for 3D, following a structured pipeline from concept to deployment, with focus on immersive storytelling, optimized graphics, and cross-platform compatibility.'
//     },
//     {
//       id: 8,
//       question: 'What sets your software development company apart from others?',
//       answer: 'Our unique blend of innovative solutions, client-centric approach, transparent communication, and commitment to using the latest technologies ensures we deliver exceptional value and long-term partnerships.'
//     },
//     {
//       id: 9,
//       question: 'Can you assist with cloud hosting and DevOps for my software projects?',
//       answer: 'Yes, we provide end-to-end cloud hosting on AWS, Azure, or Google Cloud, along with DevOps practices like CI/CD pipelines, containerization, and infrastructure as code to streamline your deployments.'
//     },
//     {
//       id: 10,
//       question: 'How do you ensure data security in your app development and software solutions?',
//       answer: 'We implement robust security measures including encryption, secure coding practices, regular vulnerability assessments, compliance with standards like GDPR and HIPAA, and continuous monitoring to protect your data.'
//     }
//   ];

//   const toggleItem = (id) => {
 
//     setOpenItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Frequently asked questions
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {faqs.map((faq) => (
//             <div
//               key={faq.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg self-start"
//             >
//               <div
//                 className="p-6 cursor-pointer text-left flex justify-between items-center w-full"
//                 onClick={() => toggleItem(faq.id)}
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 flex-1 ">
//                   {faq.question}
//                 </h3>
//                 <span className="text-2xl font-bold text-blue-600 transition-transform duration-300 ease-in-out">
//                   {openItems[faq.id] ? '−' : '+'}
//                 </span>
//               </div>
//               <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                   openItems[faq.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-6 pb-6 bg-gray-50 text-left">
//                   <p className="text-gray-700 leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;


import React, { useState,useEffect } from 'react';

const FAQSection = () => {
 useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const [activeItem, setActiveItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What types of software solutions do you develop?',
      answer: 'We specialize in developing custom software solutions tailored to our clients specific needs, including web applications, mobile apps, enterprise software, and more.'
    },
    {
      id: 2,
      question: 'How do you ensure the quality of software development?',
      answer: 'We follow industry best practices and employ experienced developers who adhere to rigorous quality assurance processes, including code reviews, testing, and validation at each stage of development.'
    },
    {
      id: 3,
      question: 'Can you integrate third-party APIs with custom software solutions?',
      answer: 'Yes, we have extensive experience in integrating third-party APIs to enhance the functionality and capabilities of our software solutions, ensuring seamless integration with existing systems and services.'
    },
    {
      id: 4,
      question: 'What types of software testing services do you offer?',
      answer: 'We offer a comprehensive range of software testing services, including manual testing, automated testing, performance testing, security testing, and usability testing, to ensure the quality and reliability of our clients software products.'
    },
    {
      id: 5,
      question: 'What cloud services do you offer?',
      answer: 'We offer cloud services for Software as a Service (SaaS), to help businesses leverage the scalability, flexibility, and cost-effectiveness of cloud computing.'
    },
    {
      id: 6,
      question: 'How do you measure the effectiveness of digital marketing campaigns?',
      answer: 'We utilize advanced analytics tools and tracking technologies to monitor key performance indicators (KPIs), such as website traffic, conversion rates, engagement metrics, and return on investment (ROI), allowing us to assess the success of our digital marketing efforts and make data-driven optimizations for continuous improvement.'
    },
    {
      id: 7,
      question: 'How does your game development company handle 2D and 3D game projects?',
      answer: 'We use industry-standard tools like Unity for 2D and Unreal Engine for 3D, following a structured pipeline from concept to deployment, with focus on immersive storytelling, optimized graphics, and cross-platform compatibility.'
    },
    {
      id: 8,
      question: 'What sets your software development company apart from others?',
      answer: 'Our unique blend of innovative solutions, client-centric approach, transparent communication, and commitment to using the latest technologies ensures we deliver exceptional value and long-term partnerships.'
    },
    {
      id: 9,
      question: 'Can you assist with cloud hosting and DevOps for my software projects?',
      answer: 'Yes, we provide end-to-end cloud hosting on AWS, Azure, or Google Cloud, along with DevOps practices like CI/CD pipelines, containerization, and infrastructure as code to streamline your deployments.'
    },
    {
      id: 10,
      question: 'How do you ensure data security in your app development and software solutions?',
      answer: 'We implement robust security measures including encryption, secure coding practices, regular vulnerability assessments, compliance with standards like GDPR and HIPAA, and continuous monitoring to protect your data.'
    }
  ];

  const toggleItem = (id) => {
    setActiveItem(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-[#F9FAFB] py-12 px-8 ">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg self-start"
            >
              <div
                className="p-4 cursor-pointer flex justify-between   w-full"
                onClick={() => toggleItem(faq.id)}
              >
                {/* <h2 className="text-md font-semibold text-gray-900 flex-1 text-left"> */}
                <h2 className="text-md font-semibold text-[#132e41] flex-1 text-left">
                  {faq.question}
                </h2>
                {/* <span className="text-2xl font-bold text-blue-600 pl-5 transition-transform duration-300 ease-in-out"> */}
                <span className="text-2xl font-bold text-[#132e41] pl-0 md:pl-5 transition-transform duration-300 ease-in-out">
                  {activeItem === faq.id ? '−' : '+'}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-1500 ease-in-out ${
                  activeItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 pt-2 bg-gray-50 text-md">
                  {/* <p className="text-gray-700 leading-relaxed text-left"> */}
                  <p className="text-[#132e41] leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;