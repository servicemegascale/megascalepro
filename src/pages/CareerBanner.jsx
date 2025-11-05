// import React, { useState,useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaPaintBrush,
//   FaChalkboardTeacher,
//   FaBriefcase,
//   FaProjectDiagram,
//   FaUsersCog,
//   FaBullhorn,
// } from "react-icons/fa";
// import { MdOutlineSupportAgent, MdHeadsetMic } from "react-icons/md";
// // Define job data as a JavaScript object
// const jobsData = {
//   featuredJobs: [
//     {
//       id: 1,
//       title: "Marketing Executive",
//       description: "We are looking for a dynamic Marketing Executive to join our growing team. The ideal candidate will have a strong understanding of marketing strategies and tactics, with experience in digital marketing, content creation, and social media management. You will be responsible for developing and implementing marketing campaigns, analyzing market trends, and driving brand awareness.",
//       experience: "0 to 2 year",
//       workingHours: "9:00am to 6:00pm",
//       workingDays: "6 Days (Mon-Sat)",
//       salary: "5,000-20,000",
//       vacancies: 5,
//       deadline: "2025-08-31",
//     },
//     {
//       id: 2,
//       title: "Customer Service Representative",
//       description: "Join our team as a Customer Service Representative. You will handle customer inquiries, resolve issues, and ensure a positive experience. Strong communication skills and empathy are essential.",
//       experience: "1 to 3 years",
//       workingHours: "10:00am to 7:00pm",
//       workingDays: "5 Days (Mon-Fri)",
//       salary: "8,000-25,000",
//       vacancies: 3,
//       deadline: "2025-09-15",
//     },
//     {
//       id: 3,
//       title: "Business Development Manager",
//       description: "Seeking an experienced Business Development Manager to identify new business opportunities and build strong relationships with clients. You'll drive growth strategies and expand our market presence.",
//       experience: "3 to 5 years",
//       workingHours: "9:30am to 6:30pm",
//       workingDays: "5 Days (Mon-Fri)",
//       salary: "25,000-50,000",
//       vacancies: 2,
//       deadline: "2025-09-30",
//     },
//   ],
// };

// // Reusable Job Card Component with unique solid colors
// const JobCard = ({ job, index }) => {
//  useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleApply = (jobTitle) => {
//     alert(`You are applying for: ${jobTitle}\n\nYou will be redirected to the application form.`);
//     // Redirect logic can be added here
//   };

//   // Solid color schemes for each card
//   const colorSchemes = [
//     { bg: "bg-blue-100", text: "text-[#0A1721]", btn: "text-[#0A1721]", lightBg: "bg-blue-50", icon: "💼" },
//     { bg: "bg-orange-100", text: "text-[#f15124]", btn: "text-[#f15124]", lightBg: "bg-orange-50", icon: "🎯" },
//     { bg: "bg-blue-100", text: "text-[#0A1721]", btn: "text-[#0A1721]", lightBg: "bg-blue-50", icon: "🚀" },
//     { bg: "bg-orange-100", text: "text-[#f15124]", btn: "text-[#f15124]", lightBg: "bg-orange-50", icon: "⭐" },
//   ];

//   const currentColor = colorSchemes[index % colorSchemes.length];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
//       viewport={{ once: true }}
//       className="relative"
//     >
//       <div
//         className={`relative flex flex-col lg:flex-row ${currentColor.lightBg} border-2 border-gray-200 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2`}
//       >
//         {/* Left Side - Job Title with Icon */}
//         <div className="lg:w-2/5 p-10 flex flex-col justify-center items-center text-center relative">
//           {/* Icon Badge */}
//           <motion.div
//             className={`${currentColor.bg} w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative group-hover:scale-110 transition-transform duration-300`}
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-white text-4xl">{currentColor.icon}</span>
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
//               {job.vacancies}
//             </div>
//           </motion.div>

//           <h4 className={`text-3xl font-bold ${currentColor.text} leading-tight mb-3`}>
//             {job.title}
//           </h4>

//           {/* Now Hiring Badge */}
//           <motion.div
//             className={`${currentColor.bg}  py-2 rounded-full shadow-lg`}
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <span className="px-2 text-[12px] font-bold text-[#0A1721] tracking-wider">NOW HIRING</span>
//           </motion.div>

//           {/* Salary Badge */}
//           <div className={`${currentColor.lightBg} mt-4 px-4 py-2 rounded-full`}>
//             <span className={`text-sm font-semibold ${currentColor.text}`}>₹{job.salary}/month</span>
//           </div>
//         </div>

//         {/* Right Side - Job Details */}
//         <div className="lg:w-3/5 p-10 bg-white relative">
//           {/* Description */}
//           <p className={`text-gray-700 mb-6 leading-relaxed ${!isExpanded && 'line-clamp-3'}`}>
//             {job.description}
//           </p>

//           {isExpanded && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               className="mb-6"
//             >
//               <div className={`${currentColor.lightBg} p-4 rounded-xl mb-4`}>
//                 <h5 className={`font-bold ${currentColor.text} mb-2`}>Key Responsibilities:</h5>
//                 <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
//                   <li>Develop and implement strategic plans</li>
//                   <li>Collaborate with cross-functional teams</li>
//                   <li>Monitor and report on key metrics</li>
//                 </ul>
//               </div>
//             </motion.div>
//           )}

//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className={`text-sm ${currentColor.text} font-semibold mb-6 hover:underline`}
//           >
//             {isExpanded ? '← Show Less' : 'Read More →'}
//           </button>

//           {/* Info Grid with Icons */}
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             <motion.div
//               className="flex items-center space-x-3 p-3 bg-white text-[#0A1721] rounded-full shadow-sm hover:shadow-md transition-shadow"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className={`${currentColor.bg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
//                 <span className="text-white text-lg">⏱️</span>
//               </div>
//               <div className="text-start">
//                 <p className="text-sm text-gray-500 font-medium">Experience</p>
//                 <p className={`font-medium ${currentColor.text} text-sm`}>{job.experience}</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className={`${currentColor.bg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
//                 <span className="text-white text-lg">🕐</span>
//               </div>
//               <div className="text-start">
//                 <p className="text-sm text-gray-500 font-medium">Work Hours</p>
//                 <p className={`font-medium ${currentColor.text} text-sm`}>{job.workingHours}</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className={`${currentColor.bg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
//                 <span className="text-white text-lg">📅</span>
//               </div>
//               <div className="text-start">
//                 <p className="text-sm text-gray-500 font-medium">Work Days</p>
//                 <p className={`font-medium ${currentColor.text} text-sm`}>{job.workingDays}</p>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className={`${currentColor.bg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
//                 <span className="text-white text-lg">⏰</span>
//               </div>
//               <div className="text-start">
//                 <p className="text-sm text-gray-500 font-medium">Deadline</p>
//                 <p className={`font-medium ${currentColor.text} text-sm`}>{job.deadline}</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Apply Button */}
//           <motion.button
//             onClick={() => handleApply(job.title)}
//             className={`${currentColor.bg} ${currentColor.btn}  font-bold py-2 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group w-full`}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             {/* <span className="text-lg">Apply Now</span> */}
//             <a
//               href="/"
//               className=" inline-flex items-center space-x-2  px-6 py-3 rounded-full transition-all"
//             >
//               <span className="text-lg text-dark font-bold">Apply Now</span>
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="text-xl"
//               >
//                 →
//               </motion.span>
//             </a>

//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CareerBanner = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Banner Section */}
//       <section className="relative text-white overflow-hidden flex flex-col justify-center items-center py-40 px-8 text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/123.jpg')" }}>
//         <div className="absolute inset-0 bg-black/80"></div>

//         {/* Floating Elements */}
//         <motion.div
//           className="absolute top-20 left-20 w-8 h-8 bg-orange-500 rounded-full z-10 shadow-lg"
//           animate={{ y: [0, -20, 0], rotate: 360 }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute top-32 right-32 w-6 h-6 bg-orange-500 rounded-full z-10 shadow-lg"
//           animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-24 right-24 w-10 h-10 bg-white/30 rounded-full rotate-12 z-10 backdrop-blur-sm"
//           animate={{ y: [0, 10, 0], rotate: [12, 30, 12] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-40 w-7 h-7 bg-orange-500 rounded-full z-10 shadow-lg"
//           animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />

//         <div className="relative z-10 max-w-5xl">
//           <div className="relative z-10">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Career & Opportunities
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-7xl mx-auto">
//               Connect with trusted parties — there's transparency and accuracy, every step of the way.
//             </p>
//           </div>

//           {/* CTA Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-8 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
//           >
//             <span className="text-orange-500 text-2xl"></span>
//             <span className="text-white font-semibold">Join Our Growing Team</span>
//           </motion.div>
//         </div>
//       </section>

//       {/* Career Grid Section */}
//       <section className=" py-12 px-8">
//         <div className="container mx-auto">

//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0A1721]"
//           >
//             MegaScale
//             <span className="text-orange-500"> employees enjoy these perks</span>
//           </h2>

//           {/* Image Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative group overflow-hidden rounded-2xl shadow-xl"
//               >
//                 <img
//                   src={`/career${i}.jpg`}
//                   alt={`Career opportunity ${i}`}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <p className="text-white font-semibold text-lg">Explore Opportunity</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-[#F9FAFB]  p-10 rounded-3xl shadow-lg mb-0"
//           >
//             <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-5xl mx-auto">
//               <strong className="text-[#f15124] text-2xl">Megascale, </strong> we take pride in enticing the most brilliant minds to join our team. We want to talk to you if you're driven to have a significant effect and push the envelope of what's feasible.
//               At Megascale, where there are always fresh challenges and chances for development, you may realize your potential. Become a member of our vibrant team and take part in something absolutely remarkable.
//             </p>
//           </motion.div>

//           {/* Featured Job Listings */}
//           <section className="py-12 mb-0">
//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
//             >
//               Featured Job Openings
//             </motion.h3>
//             <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto">
//               {jobsData.featuredJobs.map((job, index) => (
//                 <JobCard key={job.id} job={job} index={index} />
//               ))}
//             </div>
//           </section>

//           {/* Job Categories Grid */}
//           <section className="bg-gray-50 py-5 md:px-0  rounded-3xl mb-12">
//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
//             >
//               Explore Open Positions
//             </motion.h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//               {[
//                 { icon: <FaBullhorn className="text-[#0A1721]" />, title: "Marketing", vacancies: 123, color: "bg-[blue-100]" },
//                 { icon: <MdHeadsetMic className="text-[#0A1721]" />, title: "Customer Service", vacancies: 123, color: "bg-orange-100" },
//                 { icon: <FaUsersCog className="text-[#0A1721]" />, title: "Human Resource", vacancies: 123, color: "bg-green-100" },
//                 { icon: <FaProjectDiagram className="text-[#0A1721]" />, title: "Project Management", vacancies: 123, color: "bg-purple-100" },
//                 { icon: <FaBriefcase className="text-[#0A1721]" />, title: "Business Development", vacancies: 123, color: "bg-red-100" },
//                 { icon: <MdOutlineSupportAgent className="text-[#0A1721]" />, title: "Sales & Communication", vacancies: 123, color: "bg-indigo-100" },
//                 { icon: <FaChalkboardTeacher className="text-[#0A1721]" />, title: "Teaching & Education", vacancies: 123, color: "bg-yellow-100" },
//                 { icon: <FaPaintBrush className="text-[#0A1721]" />, title: "Design & Creative", vacancies: 123, color: "bg-pink-100" }
//               ].map((category, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   whileHover={{ y: -8, scale: 1.03 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg relative z-10`}>
//                     <span className="text-white text-3xl" role="img" aria-label={`${category.title} icon`}>{category.icon}</span>
//                   </div>

//                   <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{category.title}</h4>
//                   <p className={`text-${category.color.replace('bg-', '')} font-bold text-lg relative z-10`}>
//                     {category.vacancies} Vacancies
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* Decorative Elements */}
//           <motion.div
//             className="absolute top-20 right-20 w-6 h-6 bg-orange-500 rounded-full"
//             animate={{ y: [0, -15, 0], rotate: 360 }}
//             transition={{ duration: 5, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute bottom-40 left-20 w-8 h-8 bg-gray-800 rounded-full opacity-20"
//             animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareerBanner;




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaChalkboardTeacher,
  FaBriefcase,
  FaProjectDiagram,
  FaUsersCog,
  FaBullhorn,
} from "react-icons/fa";
import { MdOutlineSupportAgent, MdHeadsetMic } from "react-icons/md";
import FloatingApplyForm from "/src/pages/Apply.jsx";

const jobsData = {
  featuredJobs: [
    {
      id: 1,
      title: "Marketing Executive",
      description:
        "We are looking for a dynamic Marketing Executive to join our growing team. The ideal candidate will have a strong understanding of marketing strategies and tactics, with experience in digital marketing, content creation, and social media management.",
      experience: "0 to 2 years",
      workingHours: "9:00am to 6:00pm",
      workingDays: "6 Days (Mon-Sat)",
      salary: "₹5,000–20,000",
      vacancies: 5,
      deadline: "2025-08-31",
    },
    {
      id: 2,
      title: "Customer Service Representative",
      description:
        "Join our team as a Customer Service Representative. You will handle customer inquiries, resolve issues, and ensure a positive experience. Strong communication skills and empathy are essential.",
      experience: "1 to 3 years",
      workingHours: "10:00am to 7:00pm",
      workingDays: "5 Days (Mon-Fri)",
      salary: "₹8,000–25,000",
      vacancies: 3,
      deadline: "2025-09-15",
    },
    {
      id: 3,
      title: "Business Development Manager",
      description:
        "Seeking an experienced Business Development Manager to identify new business opportunities and build strong relationships with clients. You'll drive growth strategies and expand our market presence.",
      experience: "3 to 5 years",
      workingHours: "9:30am to 6:30pm",
      workingDays: "5 Days (Mon-Fri)",
      salary: "₹25,000–50,000",
      vacancies: 2,
      deadline: "2025-09-30",
    },
  ],
};

// Reusable Job Card Component
const JobCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  const colorSchemes = [
    { bg: "bg-blue-100", text: "text-blue-900", btn: "text-blue-900", lightBg: "bg-blue-50", icon: "💼" },
    { bg: "bg-orange-100", text: "text-orange-700", btn: "text-orange-700", lightBg: "bg-orange-50", icon: "🎯" },
    { bg: "bg-green-100", text: "text-green-900", btn: "text-green-900", lightBg: "bg-green-50", icon: "🚀" },
  ];
  const currentColor = colorSchemes[index % colorSchemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div
        className={`flex flex-col md:flex-row ${currentColor.lightBg} border rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500`}
      >
        {/* Left Section */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-center items-center text-center">
          <motion.div
            className={`${currentColor.bg} w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-3xl sm:text-4xl">{currentColor.icon}</span>
          </motion.div>

          <h4 className={`text-2xl sm:text-3xl font-bold ${currentColor.text} mb-2`}>
            {job.title}
          </h4>

          <div className={`${currentColor.bg} py-1 px-3 rounded-full text-sm font-semibold`}>
            NOW HIRING
          </div>

          <p className={`mt-3 ${currentColor.text} font-semibold text-sm sm:text-base`}>
            {job.salary}/month
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 p-6 sm:p-10 bg-white">
          <p className={`text-gray-700 mb-4 leading-relaxed ${!isExpanded && "line-clamp-3"}`}>
            {job.description}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm sm:text-base ${currentColor.text} font-semibold mb-4 hover:underline`}
          >
            {isExpanded ? "← Show Less" : "Read More →"}
          </button>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <InfoCard icon="⏱️" label="Experience" value={job.experience} color={currentColor.bg} />
            <InfoCard icon="🕐" label="Work Hours" value={job.workingHours} color={currentColor.bg} />
            <InfoCard icon="📅" label="Work Days" value={job.workingDays} color={currentColor.bg} />
            <InfoCard icon="⏰" label="Deadline" value={job.deadline} color={currentColor.bg} />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${currentColor.bg} ${currentColor.btn} font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-xl w-full`}
            onClick={() => setShowForm(true)}
          >
            Apply Now →
          </motion.button>
          {/* Floating Form */}
         <FloatingApplyForm forceOpen={showForm} onCloseExternally={() => setShowForm(false)} />
        </div>
      </div>
    </motion.div>
  );
};

// Reusable Info Card Component
const InfoCard = ({ icon, label, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm"
  >
    <div className={`${color} w-10 h-10 flex items-center justify-center rounded-lg text-lg`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  </motion.div>
);

const CareerBanner = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Banner Section */}
      <section
        className="relative text-white flex flex-col justify-center items-center py-32 sm:py-40 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/123.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Career & Opportunities</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Connect with trusted parties — transparency and accuracy at every step.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="max-w-[1430px] mx-auto  py-12 px-6 sm:px-10 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-10 text-[#0A1721] text-center">
          MegaScale <span className="text-orange-500">employees enjoy these perks</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={`/career${i}.jpg`}
                alt={`Perk ${i}`}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm sm:text-lg">Explore Opportunity</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg text-center"
        >
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            <strong className="text-orange-500 text-xl sm:text-2xl">Megascale, </strong>
            we take pride in attracting the most brilliant minds. If you’re driven to make a real
            impact, this is the place for you.
          </p>
        </motion.div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12 px-6 sm:px-10 lg:px-16 bg-gray-100">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Featured Job Openings
        </motion.h3>
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {jobsData.featuredJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-12 px-6 sm:px-10 lg:px-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Explore Open Positions
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaBullhorn />, title: "Marketing" },
            { icon: <MdHeadsetMic />, title: "Customer Service" },
            { icon: <FaUsersCog />, title: "Human Resource" },
            { icon: <FaProjectDiagram />, title: "Project Management" },
            { icon: <FaBriefcase />, title: "Business Development" },
            { icon: <MdOutlineSupportAgent />, title: "Sales & Communication" },
            { icon: <FaChalkboardTeacher />, title: "Teaching" },
            { icon: <FaPaintBrush />, title: "Design & Creative" },
          ].map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-xl text-2xl mb-3">
                {cat.icon}
              </div>
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{cat.title}</h4>
              <p className="text-sm text-gray-500">123 Vacancies</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerBanner;
