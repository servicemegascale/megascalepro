// import React from "react";

// const technologies = {
//   "Front End": [
//     { id: 1, name: "Angular", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" },
//     { id: 2, name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
//     { id: 3, name: "Vue", icon: "https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" },
//     { id: 4, name: "Next.js", icon: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg" },
//     { id: 5, name: "NuxtJS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ494s97h7aVykAjvgNeKOGnjjgUPqCAP_BA&s" },
//   ],
//   "Back End": [
//     { id: 6, name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" },
//     { id: 7, name: "Django", icon: "https://www.svgrepo.com/show/353657/django-icon.svg" },
//     { id: 8, name: "Java", icon: "https://img.icons8.com/color/512/java-coffee-cup-logo.png" },
//     { id: 9, name: "PHP", icon: "https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png" },
//     { id: 10, name: "DotNet", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png" },
//   ],
//   "Mobile": [
//     { id: 11, name: "Android", icon: "https://cdn.freebiesupply.com/logos/large/2x/android-logo-png-transparent.png" },
//     { id: 12, name: "Flutter", icon: "https://img.icons8.com/color/512/flutter.png" },
//     { id: 13, name: "React Native", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
//     { id: 14, name: "iOS", icon: "https://www.svgrepo.com/show/123010/apple-brand-hand-drawn-logo-outline.svg" },
//   ],
//   "CMS": [
//     { id: 15, name: "WordPress", icon: "https://images.seeklogo.com/logo-png/29/2/wordpress-icon-logo-png_seeklogo-299143.png" },
//     { id: 16, name: "Shopify", icon: "https://www.svgrepo.com/show/303503/shopify-logo.svg" },
//     { id: 17, name: "Wix", icon: "https://brandlogos.net/wp-content/uploads/2022/08/wix-logo_brandlogos.net_w0pfv-512x512.png" },
//   ],
//   "Database": [
//     { id: 18, name: "MongoDB", icon: "https://images.icon-icons.com/2415/PNG/512/mongodb_plain_logo_icon_146422.png" },
//     { id: 19, name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" },
//     { id: 20, name: "MySQL", icon: "https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png" },
//     { id: 21, name: "Firebase", icon: "https://www.svgrepo.com/show/303670/firebase-1-logo.svg" },
//   ],
//   "DevOps and Cloud": [
//     { id: 22, name: "Microsoft Team", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" },
//     { id: 23, name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
//     { id: 24, name: "Slack", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png" },
//     { id: 25, name: "Docker", icon: "https://img.icons8.com/color/512/docker.png" },
//   ],
//   "Design": [
//     { id: 26, name: "Adobe Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png" },
//     { id: 27, name: "Adobe Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png" },
//     { id: 28, name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" },
//     { id: 29, name: "Figma", icon: "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png" },
//   ],
// };

// const TechnologiesSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//       <div className="container mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
//             Technologies & Platforms We Work With
//           </h2>
//           <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
//             Our teams excel across the most modern stacks — powering innovation across web, mobile, and enterprise.
//           </p>
//         </div>

//         {/* Categories */}
//         <div className="space-y-1">
//           {Object.entries(technologies).map(([category, techList]) => (
//             <div key={category} className="md:flex items-center text-center">
//               <h3 className="w-full sm:ps-4 md:w-40 lg:w-60 md:text-2xl text-xl font-bold text-start text-[#0A1721] md:mb-8 mb-0 md:ps-0">
//                 {category}
//               </h3>

//               <div className=" grid justify-center grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 md:gap-14 gap-5 place-items-center">
//                 {techList.map((tech) => (
//                   <div
//                     key={tech.id}
//                     className="flex flex-col items-center justify-center p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl md:w-28 md:h-28 sm:w-20 sm:h-20 w-18 h-18"
//                   >
//                     <img
//                       src={tech.icon}
//                       alt={tech.name}
//                       className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-2"
//                     />
//                     <p className="hidden md:block text-gray-800 font-medium md:text-sm text-[10px]">{tech.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologiesSection;









import React, { useState } from "react";

const technologies = {
  "Front End": [
    { id: 1, name: "Angular", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" },
    { id: 2, name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
    { id: 3, name: "Vue", icon: "https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" },
    { id: 4, name: "Next.js", icon: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg" },
    { id: 5, name: "NuxtJS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ494s97h7aVykAjvgNeKOGnjjgUPqCAP_BA&s" },
  ],
  "Back End": [
    { id: 6, name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" },
    { id: 7, name: "Django", icon: "https://www.svgrepo.com/show/353657/django-icon.svg" },
    { id: 8, name: "Java", icon: "https://img.icons8.com/color/512/java-coffee-cup-logo.png" },
    { id: 9, name: "PHP", icon: "https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png" },
    { id: 10, name: "DotNet", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png" },
  ],
  "Mobile": [
    { id: 11, name: "Android", icon: "https://cdn.freebiesupply.com/logos/large/2x/android-logo-png-transparent.png" },
    { id: 12, name: "Flutter", icon: "https://img.icons8.com/color/512/flutter.png" },
    { id: 13, name: "React Native", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
    { id: 14, name: "iOS", icon: "https://www.svgrepo.com/show/123010/apple-brand-hand-drawn-logo-outline.svg" },
  ],
  "CMS": [
    { id: 15, name: "WordPress", icon: "https://images.seeklogo.com/logo-png/29/2/wordpress-icon-logo-png_seeklogo-299143.png" },
    { id: 16, name: "Shopify", icon: "https://www.svgrepo.com/show/303503/shopify-logo.svg" },
    { id: 17, name: "Wix", icon: "https://brandlogos.net/wp-content/uploads/2022/08/wix-logo_brandlogos.net_w0pfv-512x512.png" },
  ],
  "Database": [
    { id: 18, name: "MongoDB", icon: "https://images.icon-icons.com/2415/PNG/512/mongodb_plain_logo_icon_146422.png" },
    { id: 19, name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" },
    { id: 20, name: "MySQL", icon: "https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png" },
    { id: 21, name: "Firebase", icon: "https://www.svgrepo.com/show/303670/firebase-1-logo.svg" },
  ],
  "DevOps and Cloud": [
    { id: 22, name: "Microsoft Team", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" },
    { id: 23, name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
    { id: 24, name: "Slack", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png" },
    { id: 25, name: "Docker", icon: "https://img.icons8.com/color/512/docker.png" },
  ],
  "Design": [
    { id: 26, name: "Adobe Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png" },
    { id: 27, name: "Adobe Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png" },
    { id: 28, name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" },
    { id: 29, name: "Figma", icon: "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png" },
  ],
};

const TechnologiesSection = () => {
  
  const categories = Object.keys(technologies);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="bg-[#F9FAFB] py-12 px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1721]">
          Technologies & Platforms
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Choose a category to explore the technologies we work with.
        </p>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-3 mb-6 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? "bg-[#F15124] text-white shadow-md scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-[#F15124] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center items-center transition-all duration-500">
          {technologies[selectedCategory].map((tech) => (
            <div
              key={tech.id}
              className=" text-md
  bg-white/70 backdrop-blur-md rounded-2xl p-2 md:p-5 flex flex-col items-center
  border-2 border-blue-50 hover:border-blue-300
  hover:shadow-2xl hover:scale-110
  transition-transform duration-500 ease-in-out transform
">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 object-contain mb-0 md:mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-gray-800 font-medium text-md">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
