// import React from "react";
// import {
//   FaLinkedin,
//   FaYoutube,
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaSkype,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";
// // import Image from "next/image"; // ✅ if not using Next.js, replace with <img>

// const Footer = () => {
//   // Footer content data
//   const footerData = {
//     contact: {
//       logo: "/logo1.png", // ✅ update with your logo path
//       homeurl: "/",
//       review: "/google-review.png", // ✅ update with your logo path
//       tagline: "Empowering digital innovation worldwide.",
//       phone: "+91 88500 11652",
//       email: "Megascale .surat@gmail.com",
//     },
//     services: {
//       title: "Services",
//       items: [
//         "Web Development",
//         "Mobile App Development",
//         "Software Development",
//         "E-commerce Services",
//         "Cloud Solutions",
//         "Software Testing",
//         "Offshore Development Services",
//         "IT Staff Augmentation Services",
//         "Customer / Technical Support",
//         "Robotics",
//         "iPad and iPhone App Development",
//         "Networking & Security Solutions",
//         "Digital Marketing",
//         "Android App Development",
//         "Big Data Analytics",
//         "Artificial Intelligence",
//       ],
//     },
//     technologies: {
//       title: "Technologies",
//       items: [
//         "Shopify",
//         "ReactJS",
//         "AngularJS",
//         "NodeJS",
//         "Python",
//         "Django",
//         "PHP",
//         ".NET",
//         "Laravel",
//         "Android",
//         "iOS",
//         "React Native",
//         "Flutter",
//         "Unity 3D",
//       ],
//     },
//     resources: {
//       title: "Resources",
//       items: [
//         "Our Story",
//         "Case Studies",
//         "Blogs",
//         "Agile Methodologies",
//         "Engagement Models",
//       ],
//     },
//     globalPresence: {
//       offices: [
//         {
//           country: "Australia",
//           address: "17 Belford St Schofields NSW 2762, Australia",
//           flag: "https://flagcdn.com/w40/au.png",
//           url: "https://goo.gl/maps/7M5L1kWnCbxAaQFs5",
//         },
//         {
//           country: "France",
//           address: "3 Rue Jean Jaurès, Puteaux 92800, France",
//           flag: "https://flagcdn.com/w40/fr.png",
//           url: "https://goo.gl/maps/6C5Qyb1PC9E2",
//         },
//         {
//           country: "United Kingdom",
//           address: "CV1 Coventry, West Midlands, United Kingdom",
//           flag: "https://flagcdn.com/w40/gb.png",
//           url: "https://goo.gl/maps/hYQ4ozGgkzA2",
//         },
//       ],
//       developmentCenters: [
//         {
//           city: "Surat",
//           address: "5th Floor, Unity Corner, TP 10 Main Road, Pal, Surat 395009",
//           flag: "https://flagcdn.com/w40/in.png",
//           url: "https://goo.gl/maps/VkN5zYqj6yp8YqZJ9",
//         },
//       ],
//     },
//     socialLinks: [
//       { icon: FaLinkedin, url: "#" },
//       { icon: FaYoutube, url: "#" },
//       { icon: FaInstagram, url: "#" },
//       { icon: FaFacebook, url: "#" },
//       { icon: FaTwitter, url: "#" },
//       { icon: FaSkype, url: "#" },
//     ],
//   };

//   // Reusable section component
//   const FooterSection = ({ title, items }) => (
//     <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4 mb-8 md:mb-0">
//       <h3 className="text-xl font-semibold mb-4 text-[#F15124]">{title}</h3>
//       <ul className="space-y-2 ">
//         {items.map((item, index) => (
//           <li key={index}>
//             <a
//               href="#"
//               className="text-start text-white hover:text-[#f15124] transition text-sm"
//             >
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   // Global Presence with flags and clickable maps
//   const GlobalPresenceSection = ({ offices, developmentCenters }) => (
//     <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4">
//       <h3 className="text-lg font-semibold mb-4 text-[#f15124]">
//         Global Presence
//       </h3>

//       <div className="mb-4">
//         <h4 className="text-lg font-medium mb-2 text-white">Offices</h4>

//         <div>
//           {/* <h4 className="text-[#f15124] text-lg font-medium mb-2">Development Centers</h4> */}
//           {developmentCenters.map((center, index) => (
//             <div key={index} className="mb-3 text-white text-sm">
//               <div className="flex items-center space-x-2 mb-1">
//                 <img
//                   src={center.flag}
//                   alt={center.city}
//                   className="w-8 h-6"
//                 />
//                 <p className="text-lg font-medium text-white">{center.city}</p>
//               </div>
//               <a
//                 href={center.map}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" block"
//               >
//                 {center.address}
//               </a>
//             </div>
//           ))}
//         </div>
//         {offices.map((office, index) => (
//           <a
//             key={index}
//             href={office.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block mb-3 text-white text-sm  transition-all"
//           >
//             <div className="flex items-center space-x-2 mb-1">
//               <img
//                 src={office.flag}
//                 alt={office.country}
//                 className="w-8 h-6 "
//               />
//               <p className="text-lg font-medium text-white">{office.country}</p>
//             </div>
//             <p>{office.address}</p>
//           </a>

//         ))}
//       </div>


//     </div>
//   );

//   // Contact + logo section
//   const ContactSection = ({ contact }) => (
//     <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4 mb-8 md:mb-0">
//       <div className="flex flex-col items-start">
//         <a href={contact.homeurl}>
//           <img
//             src={contact.logo}
//             alt="Megascale  Logo"
//             className="w-70 mb-3"
//           />
//         </a>
//         {/* Logo */}
//         <p className="text-white text-sm mb-4">{contact.tagline}</p>

//         {/* Contact Info */}
//         <div className="flex items-center text-white mb-2 text-sm">
//           <FaPhoneAlt className="text-[#f15124] mr-2" />
//           <a href={`tel:${contact.phone}`} className="hover:text-[#f15124]">
//             {contact.phone}
//           </a>
//         </div>
//         <div className="flex items-center text-white text-sm">
//           <FaEnvelope className="text-[#f15124] mr-2" />
//           <a href={`mailto:${contact.email}`} className="hover:text-[#f15124]">
//             {contact.email}
//           </a>
//         </div>

//         <img
//           src={contact.review}
//           alt="Megascale  Logo"
//           className="w-50 h-20 mb-3 mt-3"
//         />
//       </div>
//     </div>
//   );

//   const SocialIcons = ({ socialLinks }) => (
//     <div className="flex space-x-4 mt-4 md:mt-0">
//       {socialLinks.map(({ icon: Icon, url }, index) => (
//         <a
//           key={index}
//           href={url}
//           className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f15124] text-white hover:bg-white hover:text-[#014487] transition"
//         >
//           <Icon size={18} />
//         </a>
//       ))}
//     </div>
//   );

//   return (
//     <footer className="h-auto bg-[#0A1721] text-white pt-12 pb-2">
//       <div className="bg-[#0A1721] max-w-7xl mx-auto px-6">
//         {/* Top Grid */}
//         <div className="flex flex-wrap -mx-4">
//           <ContactSection contact={footerData.contact} />
//           <FooterSection
//             title={footerData.services.title}
//             items={footerData.services.items}
//           />
//           <FooterSection
//             title={footerData.resources.title}
//             items={footerData.resources.items}
//           />
//           <FooterSection
//             title={footerData.technologies.title}
//             items={footerData.technologies.items}
//           />
//           <GlobalPresenceSection
//             offices={footerData.globalPresence.offices}
//             developmentCenters={footerData.globalPresence.developmentCenters}
//           />
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-blue-900 mt-10 pt-3 pb-2 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-white text-[12px]">
//             © {new Date().getFullYear()} by Megascale . All Rights Reserved.
//           </p>
//           <SocialIcons socialLinks={footerData.socialLinks} />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSkype,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const footerData = {
    contact: {
      logo: "/Megascale White.avif",
      // logo: "/logob.png",
      homeurl: "/",
      review: "/google-review.png",
      tagline: "Empowering digital innovation worldwide.",
      phone: "+91 88500 11652",
      email: "Megascale.surat@gmail.com",
    },
    services: {
      title: "Services",
      items: [
        { name: "Our Services", url: "/services" },
        { name: "Web Development", url: "/services/webdevleopment" },
        { name: "Mobile App Development", url: "/services/MobileAppDevelopment" },
        { name: "Software Development", url: "/services/softwareDevelopment" },
        { name: "E-commerce Services", url: "/services/EcommerceServices" },
        { name: "Cloud Solutions", url: "/services/cloudsolutions" },
        { name: "Software Testing", url: "/services/SoftwareTesting" },
        { name: "Offshore Development Services", url: "/services/Offshore-development" },
        { name: "IT Staff Augmentation Services", url: "/services/it-staff-augmentation-services" },
        { name: "Customer / Technical Support", url: "/services/support" },
        { name: "Robotics", url: "/services/robotics" },
        { name: "iPad and iPhone App Development", url: "/services/ios" },
        { name: "Networking & Security Solutions", url: "/services/network" },
        { name: "Digital Marketing", url: "/services/marketing" },
        { name: "Android App Development", url: "/services/Andorid-app" },
        { name: "Big Data Analytics", url: "/services/Big-data" },
        { name: "Artificial Intelligence", url: "/services/artificial-intellegence" },
      ],
    },
    technologies: {
      title: "Technologies",
      items: [
        { name: "Shopify", url: "/technologies/shopify" },
        { name: "ReactJS", url: "/technologies/reactjs" },
        { name: "AngularJS", url: "/technologies/angularjs" },
        { name: "NodeJS", url: "/technologies/nodejs" },
        { name: "Python", url: "/technologies/python" },
        { name: "Django", url: "/technologies/django" },
        { name: "PHP", url: "/technologies/php" },
        { name: ".NET", url: "/technologies/dotnet" },
        { name: "Laravel", url: "/technologies/laravel" },
        { name: "Android", url: "/technologies/android" },
        { name: "iOS", url: "/technologies/ios" },
        { name: "React Native", url: "/technologies/react-native" },
        { name: "Flutter", url: "/technologies/flutter" },
        { name: "Unity 3D", url: "/technologies/unity" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        // { name: "Home", url: "" },
        { name: "Our Story", url: "about-us" },
        { name: "Contact Us", url: "contact" },
        { name: "Blogs", url: "blog" },
        { name: "Faq", url: "faq" },
        { name: "Career", url: "career" },
        { name: "Our Projects", url: "projects" },
        { name: "Why Choose Us", url: "why-choose-us" },
      ],
    },
    globalPresence: {
      offices: [
        {
          country: "Australia",
          address: "17 Belford St Schofields NSW 2762, Australia",
          flag: "https://flagcdn.com/w40/au.png",
          url: "https://goo.gl/maps/7M5L1kWnCbxAaQFs5",
        },
        {
          country: "France",
          address: "3 Rue Jean Jaurès, Puteaux 92800, France",
          flag: "https://flagcdn.com/w40/fr.png",
          url: "https://goo.gl/maps/6C5Qyb1PC9E2",
        },
        {
          country: "United Kingdom",
          address: "CV1 Coventry, West Midlands, United Kingdom",
          flag: "https://flagcdn.com/w40/gb.png",
          url: "https://goo.gl/maps/hYQ4ozGgkzA2",
        },
      ],
      developmentCenters: [
        {
          city: "Surat",
          address: "411-412,New Escon Plaza,Chhaprabhatha Road,Chhaprabhatha,Amroli,Surat,Gujarat, India. ",
          flag: "https://flagcdn.com/w40/in.png",
          url: "https://goo.gl/maps/VkN5zYqj6yp8YqZJ9",
        },
      ],
    },
    socialLinks: [
      { icon: FaLinkedin, url: "#" },
      { icon: FaYoutube, url: "#" },
      { icon: FaInstagram, url: "#" },
      { icon: FaFacebook, url: "#" },
      { icon: FaTwitter, url: "#" },
      { icon: FaSkype, url: "#" },
    ],
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const FooterSection = ({ title, items }) => {
    const isOpen = openSections[title];
    return (
      <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4 mb-8 md:mb-0">
        <div
          className="flex justify-between items-center md:block cursor-pointer"
          onClick={() => toggleSection(title)}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#F15124]">{title}</h3>
          <div className="md:hidden">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
        </div>
        <ul
          className={`space-y-2 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[1000px]" : "max-h-0 md:max-h-full"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url || "#"}
                className="text-start text-white hover:text-[#f15124] transition text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const GlobalPresenceSection = ({ offices, developmentCenters }) => {
    const title = "Global Presence";
    const isOpen = openSections[title];

    return (
      <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4 mb-8 md:mb-0">
        <div
          className="flex justify-between items-center md:block cursor-pointer"
          onClick={() => toggleSection(title)}
        >
          <h3 className="text-lg font-semibold mb-4 text-[#f15124]">{title}</h3>
          <div className="md:hidden">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[2000px]" : "max-h-0 md:max-h-full"
          }`}
        >
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2 text-white">Development Centers</h4>
            {developmentCenters.map((center, index) => (
              <div key={index} className="mb-3 text-white text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <img src={center.flag} alt={center.city} className="w-8 h-6" />
                  <p className="text-lg font-medium text-white">{center.city}</p>
                </div>
                <a
                  href={center.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#f15124]"
                >
                  {center.address}
                </a>
              </div>
            ))}

            <h4 className="text-lg font-medium mb-2 text-white">Offices</h4>
            {offices.map((office, index) => (
              <a
                key={index}
                href={office.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3 text-white text-sm hover:text-[#f15124] transition-all"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <img src={office.flag} alt={office.country} className="w-8 h-6" />
                  <p className="text-lg font-medium text-white">{office.country}</p>
                </div>
                <p>{office.address}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ContactSection = ({ contact }) => (
    <div className="text-start w-full sm:w-1/2 md:w-1/5 px-4 mb-8 md:mb-0">
      <div className="flex flex-col items-start">
        <a href={contact.homeurl}>
          <img src={contact.logo} alt="Megascale Logo" className="w-40 mb-3" />
        </a>
        <p className="text-white text-sm mb-4">{contact.tagline}</p>
        <div className="flex items-center text-white mb-2 text-sm">
          <FaPhoneAlt className="text-[#f15124] mr-2" />
          <a href={`tel:${contact.phone}`} className="hover:text-[#f15124]">
            {contact.phone}
          </a>
        </div>
        <div className="flex items-center text-white text-sm">
          <FaEnvelope className="text-[#f15124] mr-2" />
          <a href={`mailto:${contact.email}`} className="hover:text-[#f15124]">
            {contact.email}
          </a>
        </div>
        {/* <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={contact.review} alt="Megascale Review" className="w-50 h-20 mb-3 mt-3" />
        </a> */}
      </div>
    </div>
  );

  const SocialIcons = ({ socialLinks }) => (
    <div className="flex space-x-4 mt-4 md:mt-0">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f15124] text-white hover:bg-white hover:text-[#014487] transition"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );

  return (
    <footer className="h-auto bg-[#0A1721] text-white pt-12 pb-2">
      <div className="bg-[#0A1721] max-w-7xl mx-auto ">
        <div className="flex flex-wrap">
          <ContactSection contact={footerData.contact} />
          <FooterSection title={footerData.services.title} items={footerData.services.items} />
          <FooterSection title={footerData.resources.title} items={footerData.resources.items} />
          <FooterSection title={footerData.technologies.title} items={footerData.technologies.items} />
          <GlobalPresenceSection
            offices={footerData.globalPresence.offices}
            developmentCenters={footerData.globalPresence.developmentCenters}
          />
        </div>

        <div className="border-t border-blue-900 p-10 mt-10 pt-3 pb-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-[12px]">
            © {new Date().getFullYear()} by Megascale. All Rights Reserved.
          </p>
          <SocialIcons socialLinks={footerData.socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
