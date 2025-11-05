// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// // ---- LEAF FAQ ----
// const LeafFAQ = ({ question, answer, style = {} }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div
//       className="rounded-2xl border border-green-100 bg-white/80 backdrop-blur-sm mb-4 shadow-sm hover:shadow-md transition-all duration-300"
//       style={style}
      
//       whileHover={{ scale: 1.005 }}
//     >
//       <div
//         className="p-4 md:p-5 cursor-pointer flex justify-between items-center bg-gradient-to-b from-white to-green-50 text-gray-800 font-medium   transition-all duration-300"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="flex-1 pr-2 text-base md:text-lg text-green-900">{question}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
//         </motion.div>
//       </div>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="border-t border-gray-100 bg-white"
//           >
//             <div className="p-4 md:p-5 text-gray-700 leading-relaxed text-sm md:text-base">
//               {answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// // ---- SECTION (Nested FAQ) ----
// const MultiStepFAQ = ({ faqData }) => {
//   const [openSections, setOpenSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [sectionId]: !prev[sectionId],
//     }));
//   };

//   const FAQSection = ({ section, level = 0 }) => {
//     const isOpen = openSections[section.id] || false;
//     const indentStyle = { marginLeft: `${level * 16}px` };
//     const borderStyle =
//       // level > 0 ? { borderLeft: "3px solid #047857", paddingLeft: "12px" } : {};
//       level > 0 ? { borderLeft: "3px solid #0d542b", paddingLeft: "12px" } : {};

//     if (section.children?.length) {
//       return (
//         <motion.div
//           key={section.id}
//           className="rounded-2xl border border-green-100 bg-white/90 mb-5 shadow-sm hover:shadow-md transition-all duration-300"
//           style={{ ...indentStyle, ...borderStyle }}
//           whileHover={{ scale: 1.005 }}
//         >
//           <div
//             className="p-4 md:p-5 rounded-2xl cursor-pointer flex justify-between items-center bg-white font-semibold text-gray-900   transition-all duration-300"
//             onClick={() => toggleSection(section.id)}
//           >
//             <span className="flex-1 pr-2 text-base md:text-lg  text-green-900">
//               {section.title}
//             </span>
//             <motion.div
//               animate={{ rotate: isOpen ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
//             </motion.div>
//           </div>

//           <AnimatePresence initial={false}>
//             {isOpen && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="bg-white"
//               >
//                 <div className="p-3 md:p-4">
//                   {section.children.map((child) => (
//                     <FAQSection
//                       key={child.id}
//                       section={child}
//                       level={level + 1}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       );
//     }

//     return (
//       <LeafFAQ
//         key={section.id}
//         question={section.question}
//         answer={section.answer}
//         style={{ ...indentStyle, ...borderStyle }}
//       />
//     );
//   };

//   return (
//     <div className="max-w-5xl mx-auto font-sans px-4 sm:px-6 lg:px-8 py-12  bg-white">
//       <motion.div
//         className="mb-12 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h1 className="text-3xl md:text-3xl font-extrabold text-green-900 mb-4">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-gray-900 text-lg md:text-xl max-w-2xl mx-auto">
//           Find answers to common questions about our volunteering program.
//         </p>
//       </motion.div>

//       {faqData.map((section) => (
//         <FAQSection key={section.id} section={section} level={0} />
//       ))}
//     </div>
//   );
// };

// // ---- EXAMPLE DATA ----
// const ExampleUsage = () => {
//   const faqData = [
//     {
//       id: "volunteeringDetails",
//       title: "Volunteering Details",
//       children: [
//         {
//           id: "stay",
//           question: "Is there a fee to apply for Volunteering?",
//           answer:
//             "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
//         },
//         {
//           id: "food",
//           question: "If I’m interested in extending my stay, who can I reach out to?",
//           answer:
//             "Please express your interest in extending your stay at the Volunteer Reception Office",
//         },
//         {
//           id: "online",
//           question: "Will I be able to work remotely while volunteering?",
//           answer:
//             "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
//         },
//         {
//           id: "abc",
//           question: "Can I bring my child along with me?",
//           answer:
//             "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
//         },
//       ],
//     },
//     {
//       id: "applicationProcess",
//       title: "Application Process",
//       children: [
//         {
//           id: "howToApply",
//           question: "How do I apply to become a volunteer?",
//           answer:
//             "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
//         },
//         {
//           id: "orientation",
//           question: "What happens during the orientation period?",
//           answer:
//             "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
//         },
//       ],
//     },
//     {
//       id: "volunteeringDetails1",
//       title: "Volunteering Details",
//       children: [
//         {
//           id: "stay",
//           question: "Is there a fee to apply for Volunteering?",
//           answer:
//             "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
//         },
//         {
//           id: "food",
//           question: "If I’m interested in extending my stay, who can I reach out to?",
//           answer:
//             "Please express your interest in extending your stay at the Volunteer Reception Office",
//         },
//         {
//           id: "online",
//           question: "Will I be able to work remotely while volunteering?",
//           answer:
//             "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
//         },
//         {
//           id: "abc",
//           question: "Can I bring my child along with me?",
//           answer:
//             "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
//         },
//       ],
//     },
//      {
//       id: "applicationProcess1",
//       title: "Application Process",
//       children: [
//         {
//           id: "howToApply",
//           question: "How do I apply to become a volunteer?",
//           answer:
//             "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
//         },
//         {
//           id: "orientation",
//           question: "What happens during the orientation period?",
//           answer:
//             "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
//         },
//       ],
//     },
//   ];

//   return <MultiStepFAQ faqData={faqData} />;
// };

// export default ExampleUsage;



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// // ---- LEAF FAQ ----
// const LeafFAQ = ({ question, answer, style = {} }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div
//       className="rounded-2xl border border-green-100 bg-white/80 backdrop-blur-sm mb-4 shadow-sm hover:shadow-md transition-all duration-300"
//       style={style}
      
//       whileHover={{ scale: 1.005 }}
//     >
//       <div
//         className="p-4 md:p-5 cursor-pointer flex justify-between items-center bg-gradient-to-b from-white to-green-50 text-gray-800 font-medium   transition-all duration-300"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="flex-1 pr-2 text-base md:text-lg text-green-900">{question}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
//         </motion.div>
//       </div>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="border-t border-gray-100 bg-white"
//           >
//             <div className="p-4 md:p-5 text-gray-700 leading-relaxed text-sm md:text-base">
//               {answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </motion.div>
//   );
// };

// // ---- SECTION (Nested FAQ) ----
// const MultiStepFAQ = ({ faqData, imageUrl = "https://images.unsplash.com/photo-1758599668234-68f52db62425?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHx2b2x1bnRlZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400" }) => {
//   const [openSections, setOpenSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [sectionId]: !prev[sectionId],
//     }));
//   };

//   const FAQSection = ({ section, level = 0 }) => {
//     const isOpen = openSections[section.id] || false;
//     const indentStyle = { marginLeft: `${level * 16}px` };
//     const borderStyle =
//       // level > 0 ? { borderLeft: "3px solid #047857", paddingLeft: "12px" } : {};
//       level > 0 ? { borderLeft: "3px solid #0d542b", paddingLeft: "12px" } : {};

//     if (section.children?.length) {
//       return (
//         <motion.div
//           key={section.id}
//           className="rounded-2xl border border-green-100 bg-white/90 mb-5 shadow-sm hover:shadow-md transition-all duration-300"
//           style={{ ...indentStyle, ...borderStyle }}
//           whileHover={{ scale: 1.005 }}
//         >
//           <div
//             className="p-4 md:p-5 rounded-2xl cursor-pointer flex justify-between items-center bg-white font-semibold text-gray-900   transition-all duration-300"
//             onClick={() => toggleSection(section.id)}
//           >
//             <span className="flex-1 pr-2 text-base md:text-lg  text-green-900">
//               {section.title}
//             </span>
//             <motion.div
//               animate={{ rotate: isOpen ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
//             </motion.div>
//           </div>

//           <AnimatePresence initial={false}>
//             {isOpen && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="bg-white"
//               >
//                 <div className="p-3 md:p-4">
//                   {section.children.map((child) => (
//                     <FAQSection
//                       key={child.id}
//                       section={child}
//                       level={level + 1}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       );
//     }

//     return (
//       <LeafFAQ
//         key={section.id}
//         question={section.question}
//         answer={section.answer}
//         style={{ ...indentStyle, ...borderStyle }}
//       />
//     );
//   };

//   return (
//     <div className="max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8 py-12 bg-white">
//       <motion.div
//         className="mb-12 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h1 className="text-3xl md:text-3xl font-extrabold text-green-900 mb-4">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-gray-900 text-lg md:text-xl max-w-2xl mx-auto">
//           Find answers to common questions about our volunteering program.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           {faqData.map((section) => (
//             <FAQSection key={section.id} section={section} level={0} />
//           ))}
//         </div>
//         <div className="hidden lg:block">
//           <img
//             src={imageUrl}
//             alt="Volunteering illustration"
//             className="w-full h-auto rounded-2xl shadow-lg object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---- EXAMPLE DATA ----
// const ExampleUsage = () => {
//   const faqData = [
//     {
//       id: "volunteeringDetails",
//       title: "Volunteering Details",
//       children: [
//         {
//           id: "stay",
//           question: "Is there a fee to apply for Volunteering?",
//           answer:
//             "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
//         },
//         {
//           id: "food",
//           question: "If I’m interested in extending my stay, who can I reach out to?",
//           answer:
//             "Please express your interest in extending your stay at the Volunteer Reception Office",
//         },
//         {
//           id: "online",
//           question: "Will I be able to work remotely while volunteering?",
//           answer:
//             "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
//         },
//         {
//           id: "abc",
//           question: "Can I bring my child along with me?",
//           answer:
//             "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
//         },
//       ],
//     },
//     {
//       id: "applicationProcess",
//       title: "Application Process",
//       children: [
//         {
//           id: "howToApply",
//           question: "How do I apply to become a volunteer?",
//           answer:
//             "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
//         },
//         {
//           id: "orientation",
//           question: "What happens during the orientation period?",
//           answer:
//             "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
//         },
//       ],
//     },
//     {
//       id: "volunteeringDetails1",
//       title: "Volunteering Details",
//       children: [
//         {
//           id: "stay",
//           question: "Is there a fee to apply for Volunteering?",
//           answer:
//             "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
//         },
//         {
//           id: "food",
//           question: "If I’m interested in extending my stay, who can I reach out to?",
//           answer:
//             "Please express your interest in extending your stay at the Volunteer Reception Office",
//         },
//         {
//           id: "online",
//           question: "Will I be able to work remotely while volunteering?",
//           answer:
//             "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
//         },
//         {
//           id: "abc",
//           question: "Can I bring my child along with me?",
//           answer:
//             "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
//         },
//       ],
//     },
//      {
//       id: "applicationProcess1",
//       title: "Application Process",
//       children: [
//         {
//           id: "howToApply",
//           question: "How do I apply to become a volunteer?",
//           answer:
//             "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
//         },
//         {
//           id: "orientation",
//           question: "What happens during the orientation period?",
//           answer:
//             "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
//         },
//       ],
//     },
//   ];

//   return <MultiStepFAQ faqData={faqData} />;
// };

// export default ExampleUsage;





import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ---- LEAF FAQ ----
const LeafFAQ = ({ question, answer, style = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl border border-green-100 bg-white/80 backdrop-blur-sm mb-4 shadow-sm hover:shadow-md transition-all duration-300"
      style={style}
      
      whileHover={{ scale: 1.005 }}
    >
      <div
        className="p-4 md:p-5 cursor-pointer flex justify-between items-center bg-gradient-to-b from-white to-green-50 text-gray-800 font-medium   transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 pr-2 text-base md:text-lg text-green-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="border-t border-gray-100 bg-white"
          >
            <div className="p-4 md:p-5 text-gray-700 leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
};

// ---- FAQ SECTION (Extracted outside to prevent redefinition/remounting) ----
const FAQSection = ({ section, level = 0, openSections, toggleSection }) => {
  const isOpen = openSections[section.id] || false;
  const indentStyle = { marginLeft: `${level * 16}px` };
  const borderStyle =
    level > 0 ? { borderLeft: "3px solid #0d542b", paddingLeft: "12px" } : {};

  if (section.children?.length) {
    return (
      <motion.div
        key={section.id}
        className="rounded-2xl border border-green-100 bg-white/90 mb-5 shadow-sm hover:shadow-md transition-all duration-300"
        style={{ ...indentStyle, ...borderStyle }}
        whileHover={{ scale: 1.005 }}
      >
        <div
          className="p-4 md:p-5 rounded-2xl cursor-pointer flex justify-between items-center bg-white font-semibold text-gray-900   transition-all duration-300"
          onClick={() => toggleSection(section.id)}
        >
          <span className="flex-1 pr-2 text-base md:text-lg  text-green-900">
            {section.title}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-green-700 w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white"
            >
              <div className="p-3 md:p-4">
                {section.children.map((child) => (
                  <FAQSection
                    key={child.id}
                    section={child}
                    level={level + 1}
                    openSections={openSections}
                    toggleSection={toggleSection}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <LeafFAQ
      key={section.id}
      question={section.question}
      answer={section.answer}
      style={{ ...indentStyle, ...borderStyle }}
    />
  );
};

// ---- SECTION (Nested FAQ) ----
const MultiStepFAQ = ({ faqData, imageUrl = "https://images.unsplash.com/photo-1758599668234-68f52db62425?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHx2b2x1bnRlZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400" }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = useCallback((sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }, []);

  return (
    <div className="max-w-7xl mx-auto font-sans px-8 lg:px-8 py-12 bg-white">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl md:text-3xl font-extrabold text-green-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-900 text-lg md:text-xl max-w-2xl mx-auto">
          Find answers to common questions about our volunteering program.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {faqData.map((section) => (
            <FAQSection 
              key={section.id} 
              section={section} 
              level={0} 
              openSections={openSections}
              toggleSection={toggleSection}
            />
          ))}
        </div>
        <div className="hidden lg:block">
          <img
            src={imageUrl}
            alt="Volunteering illustration"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// ---- EXAMPLE DATA ----
const ExampleUsage = () => {
  const faqData = [
    {
      id: "volunteeringDetails",
      title: "Volunteering Details",
      children: [
        {
          id: "stay",
          question: "Is there a fee to apply for Volunteering?",
          answer:
            "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
        },
        {
          id: "food",
          question: "If I’m interested in extending my stay, who can I reach out to?",
          answer:
            "Please express your interest in extending your stay at the Volunteer Reception Office",
        },
        {
          id: "online",
          question: "Will I be able to work remotely while volunteering?",
          answer:
            "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
        },
        {
          id: "abc",
          question: "Can I bring my child along with me?",
          answer:
            "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
        },
      ],
    },
    {
      id: "applicationProcess",
      title: "Application Process",
      children: [
        {
          id: "howToApply",
          question: "How do I apply to become a volunteer?",
          answer:
            "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
        },
        {
          id: "orientation",
          question: "What happens during the orientation period?",
          answer:
            "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
        },
      ],
    },
    {
      id: "volunteeringDetails1",
      title: "Volunteering Details",
      children: [
        {
          id: "stay",
          question: "Is there a fee to apply for Volunteering?",
          answer:
            "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer.",
        },
        {
          id: "food",
          question: "If I’m interested in extending my stay, who can I reach out to?",
          answer:
            "Please express your interest in extending your stay at the Volunteer Reception Office",
        },
        {
          id: "online",
          question: "Will I be able to work remotely while volunteering?",
          answer:
            "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work.",
        },
        {
          id: "abc",
          question: "Can I bring my child along with me?",
          answer:
            "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home.",
        },
      ],
    },
     {
      id: "applicationProcess1",
      title: "Application Process",
      children: [
        {
          id: "howToApply",
          question: "How do I apply to become a volunteer?",
          answer:
            "Submit the online form with your motivation statement. Applications are reviewed on a rolling basis, and accepted candidates are notified by email.",
        },
        {
          id: "orientation",
          question: "What happens during the orientation period?",
          answer:
            "Orientation covers safety, daily routines, community guidelines, and opportunities to get familiar with the environment before starting your volunteering duties.",
        },
      ],
    },
  ];

  return <MultiStepFAQ faqData={faqData} />;
};

export default ExampleUsage;