// import React, { useState, useEffect } from "react";
// import { ChevronDown, Menu, X, Check } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     country: "",
//     mobile: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   // ✅ Add shadow when scrolling
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Form handlers
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);

//     // Reset form & close modal
//     setFormData({
//       name: "",
//       country: "",
//       mobile: "",
//       email: "",
//       service: "",
//       message: "",
//     });
//     setModalOpen(false);
//   };

//   // ✅ Dropdown Data
//   const countries = ["India", "USA", "UK", "Canada", "Australia", "Other"];
//   const services = [
//     "Web Development",
//     "App Development",
//     "Digital Marketing",
//     "UI/UX Design",
//     "Other",
//   ];

//   const navItems = [
//     { label: "Home", url: "/" },
//     { label: "About Us", url: "/aboutus" },
//     {
//       label: "Services",
//       url: "/services",
//       megaMenu: [
//         {
//           title: "Web Development",
//           subtitle: "Build modern and fast websites",
//           img: "/services1.jpg",
//           url: "/services/web-development",
//         },
//         {
//           title: "App Development",
//           subtitle: "iOS & Android native apps",
//           img: "/services2.jpg",
//           url: "/services/app-development",
//         },
//         {
//           title: "Digital Marketing",
//           subtitle: "Grow your business online",
//           img: "/services3.jpg",
//           url: "/services/marketing",
//         },
//         {
//           title: "UI/UX Design",
//           subtitle: "Beautiful and intuitive interfaces",
//           img: "/services4.jpg",
//           url: "/services/design",
//         },
//       ],
//     },
//     { label: "Careers", url: "/careers" },
//     { label: "Blog", url: "/blog" },
//   ];

//   const leftItems = navItems.slice(0, Math.ceil(navItems.length / 2));
//   const rightItems = navItems.slice(Math.ceil(navItems.length / 2));

//   return (
//     <>
//       {/* 🟦 Navbar */}
//       <nav className="text-gray-700 sticky top-0 z-50 bg-transparent">
//         <div className="max-w-7xl mx-auto px-4 py-3 relative">
//           <div className="bg-blue-200 rounded-full shadow-md px-6 py-2 flex items-center justify-between relative">
//             <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6">
//               {leftItems.map((item) => (
//                 <li key={item.label} className="relative group">
//                   <Link
//                     to={item.url}
//                     className="flex items-center gap-1 font-medium text-[#021B2D] hover:text-[#021B2D] transition py-1 px-3 rounded-full hover:bg-blue-200"
//                   >
//                     {item.label}
//                     {item.megaMenu && <ChevronDown size={14} />}
//                   </Link>

//                   {/* Mega Menu */}
//                   {item.megaMenu && (
//                     <div className="absolute left-0 top-full mt-3 w-[600px] bg-white text-gray-800 rounded-3xl shadow-2xl py-4 border border-gray-100 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                       <div className="grid grid-cols-2 gap-4 px-4">
//                         {item.megaMenu.map((menu) => (
//                           <Link
//                             key={menu.title}
//                             to={menu.url}
//                             className="flex items-start gap-3 hover:bg-gray-50 rounded-2xl p-2 transition"
//                           >
//                             <img
//                               src={menu.img}
//                               alt={menu.title}
//                               className="w-20 p-10 h-20 object-cover rounded-2xl flex-shrink-0"
//                             />
//                             <div className="flex-1">
//                               <p className="text-md font-semibold text-[#021B2D] group-hover:text-[#021B2D] transition">
//                                 {menu.title}
//                               </p>
//                               <p className="text-[14px] text-gray-700 mt-1">
//                                 {menu.subtitle}
//                               </p>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* 🟩 Center Logo – સેન્ટર કરવા માટે top-1/2 કર્યું */}
//             <Link
//               to="/"
//               className="absolute left-1/2 top-5/6 transform -translate-x-1/2 -translate-y-1/2 z-10"
//             >
//               <div className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
//                 <img
//                   src="/logo1.png"
//                   alt="Logo"
//                   className="w-full h-full object-contain cursor-pointer"
//                 />
//               </div>
//             </Link>

//             {/* 🟥 Right Navigation */}
//             <div className="flex items-center gap-4">
//               <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6">
//                 {rightItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       to={item.url}
//                       className="flex items-center gap-1 font-medium text-[#021B2D] hover:text-[#021B2D] transition py-1 px-3 rounded-full hover:bg-blue-200"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//                 {/* Let's Talk Button */}
//                 <button
//                   onClick={() => setModalOpen(true)}
//                   className="bg-[#132e41] text-white px-6 py-2 rounded-full font-medium hover:bg-[#F15124] transition-all duration-300 hover:scale-105 shadow-lg"
//                 >
//                   Let's Talk
//                 </button>
//               </ul>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden p-1 hover:bg-blue-100 rounded-full transition"
//                 onClick={() => setMobileOpen(!mobileOpen)}
//               >
//                 {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* 🧭 Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto rounded-t-3xl shadow-xl"
//           >
//             <div className="flex justify-between items-center px-2 py-2 border-b border-gray-200 rounded-t-3xl">
//               <h2 className="text-xl font-semibold text-[#014487]">Menu</h2>
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="p-1 rounded-full hover:bg-gray-100 transition"
//               >
//                 <X size={26} className="text-[#014487]" />
//               </button>
//             </div>

//             <div className="px-2 py-4">
//               <ul className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       to={item.url}
//                       onClick={() => setMobileOpen(false)}
//                       className="block text-[#014487] font-medium text-lg hover:text-blue-700 transition px-4 py-2 rounded-full hover:bg-blue-50"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//                 <li>
//                   <button
//                     onClick={() => {
//                       setMobileOpen(false);
//                       setModalOpen(true);
//                     }}
//                     className="block bg-[blue-500] text-white text-lg font-medium py-3 px-4 rounded-full text-center hover:bg-blue-600 hover:text-xl hover:underline transition-all duration-300 mt-4"
//                   >
//                     Let's Talk
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 💬 Modal */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setModalOpen(false)}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
//             >
//               <div className="grid lg:grid-cols-2 bg-teal-800 text-white">
//                 {/* Left Side */}
//                 <div className="bg-[#021B2D] p-5 space-y-6">
//                   <div className="flex justify-between items-start elementor-widget-container">
//                     <h2 className="text-3xl font-bold elementor-heading-title elementor-size-default">
//                       READY TO MAKE YOUR
//                       <span className="text-[#F15124] flex justify-between"> BRAND UNSTOPPABLE?</span>
//                     </h2>

//                   </div>
//                   <p className="text-xl flex justify-between items-start leading-relaxed">
//                     Partner with Probbey Services to build stunning websites,
//                     powerful apps, and growth-driven digital strategies.
//                   </p>

//                   <div>
//                     <p className="text-[26px] font-semibold mb-3 flex items-start">
//                       Trusted by 
//                       <span className="text-[#F15124]"> 2000+ Clients </span>
//                     </p>
//                     {[
//                       "10+ years of experience",
//                       "1000+ 5 star reviews",
//                       "1800+ Projects delivered",
//                     ].map((text) => (
//                       <div key={text} className="flex items-center elementor-element elementor-element-f0fb332 e-con-full e-flex e-con e-child">
//                         <Check className="w-5 h-5 text-[#F15124]" />
//                         <span>{text}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       { name: "DesignRush", reviews: "100+" },
//                       { name: "Sortlist", reviews: "150+" },
//                       { name: "GoodFirms", reviews: "80+" },
//                       { name: "Clutch", reviews: "50+" },
//                     ].map((site) => (
//                       <div
//                         key={site.name}
//                         className="bg-[#021B2D] p-4 rounded-xl border-2 border-[#ffffff] hover:border-[#F15124] transition"
//                       >
//                         <p className="font-semibold text-[20px] flex items-start mb-2">{site.name}</p>
//                         <div className="flex items-center gap-1">
//                           {"★★★★★".split("").map((s, i) => (
//                             <span className="text-[#F15124] text-[20px]" key={i}>{s}</span>
//                           ))}
//                           <span className="ml-1 text-[16px]">{site.reviews} reviews</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right Side - Form */}
//                 <div className="bg-white p-5">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-2xl font-bold mb-6 text-[#021B2D]">
//                     Get in Touch With Us!
//                   </h3>
//                    <button
//                       onClick={() => setModalOpen(false)}
//                       className="bg-[#021B2D] text-[#ffffff] hover:bg-[#F15124] rounded-2xl hover:text-[#021B2D]"
//                     >
//                       <X size={24} />
//                     </button>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Complete Name*"
//                       value={formData.name}
//                       onChange={handleFormChange}
//                       required
//                       className="w-full p-3 rounded-lg border border-gray-300 text-[#021B2D] placeholder-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     />
//                     <div className="grid grid-cols-2 gap-4">
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleFormChange}
//                         className="p-3 rounded-lg border border-gray-300 text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                       >
//                         <option value="">Country</option>
//                         {countries.map((c) => (
//                           <option key={c} value={c}>
//                             {c}
//                           </option>
//                         ))}
//                       </select>
//                       <input
//                         type="tel"
//                         name="mobile"
//                         placeholder="Mobile Number*"
//                         value={formData.mobile}
//                         onChange={handleFormChange}
//                         required
//                         className="p-3 rounded-lg border border-gray-300 text-[#021B2D] placeholder-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                       />
//                     </div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address*"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                       required
//                       className="w-full p-3 rounded-lg border border-gray-300 text-[#021B2D] placeholder-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     />
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleFormChange}
//                       required
//                       className="w-full p-3 rounded-lg border border-gray-300 text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     >
//                       <option value="">Select Service*</option>
//                       {services.map((s) => (
//                         <option key={s} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </select>
//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       value={formData.message}
//                       onChange={handleFormChange}
//                       rows={4}
//                       className="w-full p-3 rounded-lg border border-gray-300 text-[#021B2D] placeholder-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     />
//                     <button
//                       type="submit"
//                       className="w-full bg-[#F15124] text-[#ffffff] font-bold py-3 rounded-lg hover:bg-[#f56740] transition"
//                     >
//                       SUBMIT
//                     </button>
//                   </form>
//                   <div className="flex justify-center rounded-2xl items-center gap-2 mt-4 text-md text-[#021B2D]">
//                     <Check className="w-4 h-4 text-[#F15124] rounded-2xl rounded-bg-[#F15124]" />
//                     <span>100% Confidential</span>
//                     <Check className="w-4 h-4 text-[#F15124] rounded-2xl" />
//                     <span>We Sign NDA</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;


























// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ChevronDown, Menu, X, Check, Globe, Cloud, Smartphone, FileCheck, Code,
//   ShoppingCart, Users, Headphones, Megaphone, SmartphoneCharging, Apple,
//   Database, Shield, Brain, Bot, Globe2
// } from "lucide-react";

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     country: "",
//     mobile: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Form handlers
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({
//       name: "",
//       country: "",
//       mobile: "",
//       email: "",
//       service: "",
//       message: "",
//     });
//     setModalOpen(false);
//   };

//   // Dropdown Data
//   const countries = ["India", "USA", "UK", "Canada", "Australia", "Other"];
//   const services = [
//     "Web Development",
//     "App Development",
//     "Digital Marketing",
//     "UI/UX Design",
//     "Other",
//   ];

//   const iconMap = {
//     Globe, Cloud, Smartphone, FileCheck, Code, ShoppingCart, Users, Headphones,
//     Megaphone, SmartphoneCharging, Apple, Database, Shield, Brain, Bot, Globe2,
//   };

//   const navItems = [
//     { label: "Home", url: "/" },
//     { label: "About Us", url: "/about-us" },
//     {
//       label: "Services",
//       url: "/services",
//       megaMenu: [
//         { title: "Our Services", icon: "Globe", url: "/services/ourservices" },
//         { title: "Our Services", icon: "Globe", url: "/services/ourservices" },
//         { title: "Web Development", icon: "Code", url: "/services/webdevleopment" },
//         { title: "Cloud Solutions", icon: "Cloud", url: "/services/cloudsolutions" },
//         { title: "Mobile Development", icon: "Smartphone", url: "/services/mobileAppDevelopment" },
//         { title: "Software Testing", icon: "FileCheck", url: "/services/SoftwareTesting" },
//         { title: "Software Development", icon: "Code", url: "/services/softwareDevelopment" },
//         { title: "Offshore Development Services", icon: "Globe2", url: "/services/Offshore-development" },
//         { title: "E-commerce Services", icon: "ShoppingCart", url: "/services/EcommerceServices" },
//         { title: "IT Staff Augmentation", icon: "Users", url: "/services/it-staff-augmentation-services" },
//         { title: "IT Support & Customer Care", icon: "Headphones", url: "/services/support" },
//         { title: "Digital Marketing", icon: "Megaphone", url: "/services/marketing" },
//         { title: "Robotics", icon: "Bot", url: "/services/robotics" },
//         { title: "Android App Development", icon: "SmartphoneCharging", url: "/services/Andorid-app" },
//         { title: "iPad and iPhone App Development", icon: "Apple", url: "/services/ios" },
//         { title: "Big Data Analytics", icon: "Database", url: "/services/Big-data" },
//         { title: "Networking & Security Solutions", icon: "Shield", url: "/services/network" },
//         { title: "Artificial Intelligence", icon: "Brain", url: "/services/artificial-intellegence" },
//       ],
//     },
//     { label: "Careers", url: "/career" },
//     { label: "Blog", url: "/blog" },
//     { label: "Contact", url: "/contact" },
//   ];

//   const leftItems = navItems.slice(0, Math.ceil(navItems.length / 2));
//   const rightItems = navItems.slice(Math.ceil(navItems.length / 2));

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="text-gray-700 sticky top-0 z-50 transition-all">
//         <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3 relative">
//           <div className="bg-blue-50 rounded-full shadow-md px-3 sm:px-4 lg:px-6 py-3 flex items-center justify-between relative">
//             {/* Left Navigation - Desktop */}
//             <ul className="hidden lg:flex items-center space-x-2 xl:space-x-4 2xl:space-x-6">
//               {leftItems.map((item) => (
//                 <li
//                   key={item.label}
//                   className="relative group"
//                   onMouseEnter={() => setServicesHover(true)}
//                   onMouseLeave={() => setServicesHover(false)}

//                 >
//                   <Link
//                     to={item.url}
//                     className="flex items-center gap-1 font-medium text-[17px] text-[#021B2D] hover:text-[#F15124] py-1 px-2 xl:px-3 transition"

//                   >
//                     {item.label}
//                     {item.megaMenu && <ChevronDown size={14} />}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Center Logo - Changed from <a> to <Link> */}
//             <Link to="/" className="absolute left-1/2 top-1/1 transform -translate-x-1/2 -translate-y-1/2 z-10">
//               <div className="z-9999999 w-45 h-45 sm:w-45 sm:h-45 md:w-45 md:h-45    flex items-center justify-center p-1 hover:scale-105 transition">
//                 <img src="/logo1.png" alt="Logo" className="w-full h-full object-contain" />
//               </div>
//             </Link>

//             {/* Right Navigation - Desktop */}
//             <div className="flex items-center gap-2 xl:gap-4">
//               <ul className="hidden lg:flex text-[20px] items-center space-x-2 xl:space-x-4 2xl:space-x-6">
//                 {rightItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       to={item.url}
//                       className="flex items-center gap-1 font-medium text-[17px]  text-[#021B2D] hover:text-[#F15124] py-1 px-2 xl:px-3 transition"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//                 <button
//                   onClick={() => setModalOpen(true)}
//                   className="bg-[#132e41] text-white px-3 xl:px-6 py-1.5 xl:py-2 rounded-full text-md xl:text-base font-medium hover:bg-[#F15124] hover:scale-105 shadow-lg transition whitespace-nowrap"
//                 >
//                   Let's Talk
//                 </button>
//               </ul>
//               <button
//                 className="lg:hidden p-1 hover:bg-blue-100 rounded-full transition"
//                 onClick={() => setMobileOpen(!mobileOpen)}
//               >
//                 {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* Mega Menu - Desktop */}
//           {servicesHover && (
//             <div
//               className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95%] bg-white rounded-3xl shadow-2xl border border-gray-100 z-40 overflow-hidden"
//               onMouseEnter={() => setServicesHover(true)}
//               // onMouseLeave={() => setServicesHover(false)}
//             >
//               <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 p-4 lg:p-6">
//                 {/* Left Panel */}
//                 <div className="flex flex-col justify-between border-b xl:border-b-0 xl:border-r border-gray-200 pb-4 xl:pb-0 xl:pr-6 mb-4 xl:mb-0">
//                   <div>
//                     <div className="w-full h-40 lg:h-48 xl:h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center text-gray-400">
//                       <img src="/image1.jpg" alt="Services" className="w-full h-full object-cover rounded-xl" />
//                     </div>
//                     <h3 className="text-base lg:text-lg font-bold text-[#021B2D] mb-2">Your One-Stop Shop for</h3>
//                     <p className="text-[#021B2D] font-bold text-lg lg:text-xl leading-snug mb-4 lg:mb-6">Comprehensive IT Services</p>
//                     <Link
//                       to="/services"
//                       className="block text-center bg-[#021B2D] text-white py-2 lg:py-3 rounded-full font-medium hover:bg-[#f15124] hover:text-[#ffffff] transition text-md lg:text-base"
//                     >
//                       Our Services
//                     </Link>
//                   </div>
//                 </div>
//                 {/* Right Panel */}
//                 <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
//                   {navItems[2].megaMenu.slice(1).map((service) => {
//                     const IconComponent = iconMap[service.icon] || Code;
//                     return (
//                       <Link
//                         key={service.title}
//                         to={service.url}
//                         className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition"
//                       >
//                         <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#f3c1b4] rounded-lg flex items-center justify-center flex-shrink-0">
//                           <IconComponent size={16} className="text-[#F15124] lg:w-5 lg:h-5" />
//                         </div>
//                         <span className="text-md lg:text-md font-medium text-[#021B2D]">{service.title}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
//           <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
//             <h2 className="text-lg sm:text-xl font-semibold text-[#014487]">Menu</h2>
//             <button
//               onClick={() => setMobileOpen(false)}
//               className="p-1 rounded-full hover:bg-gray-100 transition"
//             >
//               <X size={24} className="text-[#014487]" />
//             </button>
//           </div>
//           <div className="px-4 py-4 text-start">
//             <ul className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <li key={item.label}>
//                   {item.megaMenu ? (
//                     <>
//                       <button
//                         onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                         className="w-full flex items-center justify-between text-[#014487] font-medium text-base sm:text-lg hover:text-blue-700 transition px-4 py-2 rounded-full hover:bg-blue-50"
//                       >
//                         {item.label}
//                         <ChevronDown size={18} className={`transform transition ${mobileServicesOpen ? 'rotate-180' : ''}`} />
//                       </button>
//                       {mobileServicesOpen && (
//                         <div className="mt-2 ml-4 space-y-1">
//                           {item.megaMenu.map((service) => {
//                             const IconComponent = iconMap[service.icon] || Code;
//                             return (
//                               <Link
//                                 key={service.title}
//                                 to={service.url}
//                                 onClick={() => setMobileOpen(false)}
//                                 className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition"
//                               >
//                                 <div className="w-8 h-8 bg-[#f3c1b4] rounded-lg flex items-center justify-center flex-shrink-0">
//                                   <IconComponent size={16} className="text-[#F15124]" />
//                                 </div>
//                                 <span className="text-md text-[#014487]">{service.title}</span>
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={item.url}
//                       onClick={() => setMobileOpen(false)}
//                       className="block text-[#014487] font-medium text-base sm:text-lg hover:text-blue-700 transition px-4 py-2 rounded-full hover:bg-blue-50"
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//               <li>
//                 <button
//                   onClick={() => {
//                     setMobileOpen(false);
//                     setModalOpen(true);
//                   }}
//                   className="w-full bg-[#132e41] text-white text-base sm:text-lg font-medium py-3 px-4 rounded-full text-center hover:bg-[#F15124] transition mt-4"
//                 >
//                   Let's Talk
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Modal - Responsive */}
//       {modalOpen && (
//         <div
//           onClick={() => setModalOpen(false)}
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="rounded-2xl lg:rounded-3xl w-full max-w-6xl my-4 max-h-[95vh] overflow-y-auto"
//           >
//             <div className="grid lg:grid-cols-2 bg-teal-800 text-white">
//               {/* Left Side */}
//               <div className="bg-[#021B2D] p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
//                 <div className="flex justify-between items-start">
//                   <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
//                     READY TO MAKE YOUR
//                     <span className="text-[#F15124] block mt-1">BRAND UNSTOPPABLE?</span>
//                   </h2>
//                 </div>
//                 <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
//                   Partner with Probbey Services to build stunning websites, powerful apps, and growth-driven digital strategies.
//                 </p>
//                 <div>
//                   <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 flex flex-wrap items-center gap-1">
//                     Trusted by
//                     <span className="text-[#F15124]">2000+ Clients</span>
//                   </p>
//                   {[
//                     "10+ years of experience",
//                     "1000+ 5 star reviews",
//                     "1800+ Projects delivered",
//                   ].map((text) => (
//                     <div key={text} className="flex items-center gap-2 mb-2">
//                       <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#F15124] flex-shrink-0" />
//                       <span className="text-md sm:text-base">{text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-2 gap-2 sm:gap-4">
//                   {[
//                     { name: "DesignRush", reviews: "100+" },
//                     { name: "Sortlist", reviews: "150+" },
//                     { name: "GoodFirms", reviews: "80+" },
//                     { name: "Clutch", reviews: "50+" },
//                   ].map((site) => (
//                     <div
//                       key={site.name}
//                       className="bg-[#021B2D] p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 border-[#ffffff] hover:border-[#F15124] transition"
//                     >
//                       <p className="font-semibold text-md sm:text-base lg:text-lg mb-1">{site.name}</p>
//                       <div className="flex items-center justify-center gap-1">
//                         {"★★★★★".split("").map((s, i) => (
//                           <span className="text-[#F15124] text-md sm:text-base lg:text-lg" key={i}>{s}</span>
//                         ))}
//                       </div>
//                       <span className="text-md sm:text-md">{site.reviews} reviews</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Side - Form */}
//               <div className="bg-white p-4 sm:p-6 lg:p-8">
//                 <div className="flex justify-between items-start mb-4 sm:mb-6">
//                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#021B2D]">
//                     Get in Touch With Us!
//                   </h3>
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="bg-[#021B2D] text-[#ffffff] hover:bg-[#F15124] rounded-lg p-1 transition flex-shrink-0"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//                 <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Complete Name*"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                     required
//                     className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                   />
//                   <div className="grid grid-cols-2 gap-2 sm:gap-4">
//                     <select
//                       name="country"
//                       value={formData.country}
//                       onChange={handleFormChange}
//                       className="p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     >
//                       <option value="">Country</option>
//                       {countries.map((c) => (
//                         <option key={c} value={c}>{c}</option>
//                       ))}
//                     </select>
//                     <input
//                       type="tel"
//                       name="mobile"
//                       placeholder="Mobile*"
//                       value={formData.mobile}
//                       onChange={handleFormChange}
//                       required
//                       className="p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                     />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address*"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                     required
//                     className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                   />
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleFormChange}
//                     required
//                     className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                   >
//                     <option value="">Select Service*</option>
//                     {services.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                   <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleFormChange}
//                     rows={3}
//                     className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-[#F15124] text-[#ffffff] font-bold py-2.5 sm:py-3 rounded-lg hover:bg-[#f56740] transition text-md sm:text-base"
//                   >
//                     SUBMIT
//                   </button>
//                 </form>
//                 <div className="flex flex-wrap justify-center items-center gap-2 mt-3 sm:mt-4 text-md sm:text-md text-[#021B2D]">
//                   <div className="flex items-center gap-1">
//                     <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#F15124]" />
//                     <span>100% Confidential</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#F15124]" />
//                     <span>We Sign NDA</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;






import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown, Menu, X, Check, Globe, Cloud, Smartphone, FileCheck, Code,
  ShoppingCart, Users, Headphones, Megaphone, SmartphoneCharging, Apple,
  Database, Shield, Brain, Bot, Globe2
} from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const menuRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setServicesHover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: "",
          country: "",
          mobile: "",
          email: "",
          service: "",
          message: "",
        });
        setModalOpen(false);
      } else {
        alert("⚠️ " + data.message);
      }
    } catch (error) {
      alert("❌ Error submitting form. Please try again.");
      console.error(error);
    }
  };

  const countries = ["India", "USA", "UK", "Canada", "Australia", "Other"];
  const services = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "UI/UX Design",
    "Other",
  ];

  const iconMap = {
    Globe, Cloud, Smartphone, FileCheck, Code, ShoppingCart, Users, Headphones,
    Megaphone, SmartphoneCharging, Apple, Database, Shield, Brain, Bot, Globe2,
  };

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us" },
    {
      label: "Services",
      url: "/services",
      megaMenu: [
        // { title: "Our Services", icon: "Globe", url: "/services/ourservices" },
        { title: "Web Development", icon: "Code", url: "/services/webdevleopment" },
        { title: "Cloud Solutions", icon: "Cloud", url: "/services/cloudsolutions" },
        { title: "Mobile Development", icon: "Smartphone", url: "/services/mobileAppDevelopment" },
        { title: "Software Testing", icon: "FileCheck", url: "/services/SoftwareTesting" },
        { title: "Software Development", icon: "Code", url: "/services/softwareDevelopment" },
        { title: "Offshore Development Services", icon: "Globe2", url: "/services/Offshore-development" },
        { title: "E-commerce Services", icon: "ShoppingCart", url: "/services/EcommerceServices" },
        { title: "IT Staff Augmentation", icon: "Users", url: "/services/it-staff-augmentation-services" },
        { title: "IT Support & Customer Care", icon: "Headphones", url: "/services/support" },
        { title: "Digital Marketing", icon: "Megaphone", url: "/services/marketing" },
        { title: "Robotics", icon: "Bot", url: "/services/robotics" },
        { title: "Android App Development", icon: "SmartphoneCharging", url: "/services/Andorid-app" },
        { title: "iOS App Development", icon: "Apple", url: "/services/ios" },
        { title: "Big Data Analytics", icon: "Database", url: "/services/Big-data" },
        { title: "Networking & Security Solutions", icon: "Shield", url: "/services/network" },
        { title: "Artificial Intelligence", icon: "Brain", url: "/services/artificial-intellegence" },
      ],
    },
    { label: "Careers", url: "/career" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" },
  ];

  const leftItems = navItems.slice(0, Math.ceil(navItems.length / 2));
  const rightItems = navItems.slice(Math.ceil(navItems.length / 2));

  return (
    <>
      {/* Navbar */}
      <nav className="text-gray-700 sticky top-0 z-50 transition-all" ref={menuRef}>
        <div className="max-w-[1400px] mx-auto px-4 py-3 relative">
          <div className="bg-blue-50 rounded-full shadow-md px-6 py-3 flex items-center justify-between relative">

            {/* Left Nav */}
            <ul className="hidden lg:flex items-center space-x-6">
              {leftItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && setServicesHover(true)}
                >
                  <Link
                    to={item.url}
                    className="flex items-center gap-1 font-medium text-[17px] text-[#021B2D] hover:text-[#F15124] py-1 px-3 transition"
                  >
                    {item.label}
                    {item.megaMenu && <ChevronDown size={14} />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Center Logo */}
            {/* <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 z-10"
            >
              <img src="/logo1.png" alt="Logo" className="w-24 h-12 object-contain" />
            </Link> */}
            <Link to="/" className="absolute left-1/2 top-1/1 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {/* <div className="z-9999999 w-35 h-30 sm:w-35 sm:h-30 md:w-35 md:h-30    flex items-center justify-center p-1 hover:scale-105 transition"> */}
              <div className="z-9999999 w-30 h-40 sm:w-45 sm:h-40 md:w-45 md:h-40 mb-6 flex items-center justify-center hover:scale-105 transition">
                <img src="/4.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </Link>


            {/* Right Nav */}
            <ul className="hidden lg:flex items-center space-x-6">
              {rightItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.url}
                    className="font-medium text-[17px] text-[#021B2D] hover:text-[#F15124] py-1 px-3 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#132e41] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#F15124] hover:scale-105 shadow-lg transition"
              >
                Let's Talk
              </button>
            </ul>

            {/* Mobile Button */}
            <button
              className="lg:hidden p-2 hover:bg-blue-100 rounded-full transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mega Menu */}
          {servicesHover && (
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95%] bg-white rounded-3xl shadow-2xl border border-gray-100 z-40 overflow-hidden"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <div
                className="grid grid-cols-1 xl:grid-cols-3 gap-0 p-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              >
                {/* Left */}
                <div className="flex flex-col justify-between border-b xl:border-b-0 xl:border-r border-gray-200 pb-4 xl:pb-0 xl:pr-6">
                  <div>
                    <img
                      src="/image1.jpg"
                      alt="Services"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-lg font-bold text-[#021B2D] mb-2">Your One-Stop Shop for</h3>
                    <p className="text-[#021B2D] font-bold text-xl mb-4">Comprehensive IT Services</p>
                    <Link
                      to="/services"
                      className="block text-center bg-[#021B2D] text-white py-3 rounded-full font-medium hover:bg-[#f15124] transition"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>

                {/* Right */}
                <div className="xl:col-span-2 grid grid-cols-2 gap-2">
                  {navItems[2].megaMenu.map((service) => {
                    const IconComponent = iconMap[service.icon] || Code;
                    return (
                      <Link
                        key={service.title}
                        to={service.url}
                        onClick={() => setServicesHover(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className="w-10 h-10 bg-[#f3c1b4] rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={18} className="text-[#F15124]" />
                        </div>
                        <span className="text-md font-medium text-[#021B2D]">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}


          {/* Mobile Menu */}
          {mobileOpen && (
            <div
              // className="lg:hidden mt-4 bg-white rounded-3xl shadow-xl p-4 space-y-2 text-start"
              className="lg:hidden mt-4 bg-white rounded-3xl shadow-xl p-4 space-y-2 text-start
               max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"

            >
              {navItems.map((item) => (
                <div key={item.label}>
                  {/* Normal Links */}
                  {!item.megaMenu ? (
                    <Link
                      to={item.url}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 px-3 text-[#021B2D] font-medium rounded-lg hover:bg-blue-50 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      {/* Services Toggle */}
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex justify-between items-center py-2 px-3 text-[#021B2D] font-medium rounded-lg hover:bg-blue-50 transition"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      {mobileServicesOpen && (
                        <div className="pl-4 space-y-1 mt-2">
                          {item.megaMenu.map((service) => {
                            const IconComponent = iconMap[service.icon] || Code;
                            return (
                              <Link
                                key={service.title}
                                to={service.url}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 py-2 px-3 text-sm text-[#021B2D] rounded-lg hover:bg-gray-50 transition"
                              >
                                <div className="w-8 h-8 bg-[#f3c1b4] rounded-lg flex items-center justify-center">
                                  <IconComponent size={16} className="text-[#F15124]" />
                                </div>
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMobileOpen(false);
                }}
                className="w-full mt-4 bg-[#132e41] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#F15124] transition"
              >
                Let's Talk
              </button>
            </div>
          )}


          {modalOpen && (
            <div
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="rounded-2xl lg:rounded-3xl w-full max-w-6xl my-4 max-h-[95vh] overflow-y-auto"
              >
                <div className="grid lg:grid-cols-2 bg-teal-800 text-white">
                  {/* Left Side */}
                  <div className="bg-[#021B2D] p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        READY TO MAKE YOUR
                        <span className="text-[#F15124] block mt-1">BRAND UNSTOPPABLE?</span>
                      </h2>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                      Partner with Probbey Services to build stunning websites, powerful apps, and growth-driven digital strategies.
                    </p>
                    <div>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 flex flex-wrap items-center gap-1">
                        Trusted by
                        <span className="text-[#F15124]">2000+ Clients</span>
                      </p>
                      {[
                        "10+ years of experience",
                        "1000+ 5 star reviews",
                        "1800+ Projects delivered",
                      ].map((text) => (
                        <div key={text} className="flex items-center gap-2 mb-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#F15124] flex-shrink-0" />
                          <span className="text-md sm:text-base">{text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      {[
                        { name: "DesignRush", reviews: "100+" },
                        { name: "Sortlist", reviews: "150+" },
                        { name: "GoodFirms", reviews: "80+" },
                        { name: "Clutch", reviews: "50+" },
                      ].map((site) => (
                        <div
                          key={site.name}
                          className="bg-[#021B2D] p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 border-[#ffffff] hover:border-[#F15124] transition"
                        >
                          <p className="font-semibold text-md sm:text-base lg:text-lg mb-1">{site.name}</p>
                          <div className="flex items-center justify-center gap-1">
                            {"★★★★★".split("").map((s, i) => (
                              <span className="text-[#F15124] text-md sm:text-base lg:text-lg" key={i}>{s}</span>
                            ))}
                          </div>
                          <span className="text-md sm:text-md">{site.reviews} reviews</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="bg-white p-4 sm:p-6 lg:p-8">
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#021B2D]">
                        Get in Touch With Us!
                      </h3>
                      <button
                        onClick={() => setModalOpen(false)}
                        className="bg-[#021B2D] text-[#ffffff] hover:bg-[#F15124] rounded-lg p-1 transition flex-shrink-0"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Complete Name*"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                      />
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleFormChange}
                          className="p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                        >
                          <option value="">Country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile*"
                          value={formData.mobile}
                          onChange={handleFormChange}
                          required
                          className="p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                      />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        required
                        className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                      >
                        <option value="">Select Service*</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-md sm:text-base text-[#021B2D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F15124]"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#F15124] text-[#ffffff] font-bold py-2.5 sm:py-3 rounded-lg hover:bg-[#f56740] transition text-md sm:text-base"
                      >
                        SUBMIT
                      </button>
                    </form>
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-3 sm:mt-4 text-md sm:text-md text-[#021B2D]">
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#F15124]" />
                        <span>100% Confidential</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#F15124]" />
                        <span>We Sign NDA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </nav>
    </>
  );
};

export default Header;
