// // ==== src/admin/components/Topbar.jsx ====
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Topbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isAdminAuthenticated");
//     localStorage.removeItem("adminUser");
//     navigate("/alogin");
//   };

//   return (
//     <div className="flex justify-between items-center bg-white shadow px-6 py-3">
//       <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-all"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Topbar;



// // ==== src/admin/components/Topbar.jsx ====
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LogOut, Bell, Search, User } from "lucide-react";

// const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   const handleLogout = () => {
//     const confirmed = window.confirm("Are you sure you want to logout?");
//     if (confirmed) {
//       localStorage.removeItem("isAdminAuthenticated");
//       localStorage.removeItem("adminUser");
//       navigate("/alogin");
//     }
//   };

//   // const adminUser = JSON.parse(localStorage.getItem("adminUser") || '{"name": "Admin", "email": "admin@example.com"}');

//   let adminUserRaw = localStorage.getItem("adminUser");
//   let adminUser;

//   try {
//     if (!adminUserRaw) {
//       adminUser = { name: "Admin", email: "admin@example.com" };
//     } else if (adminUserRaw.startsWith("{")) {
//       // valid JSON string
//       adminUser = JSON.parse(adminUserRaw);
//     } else {
//       // plain string like "admin"
//       adminUser = { name: adminUserRaw, email: "admin@example.com" };
//     }
//   } catch (error) {
//     console.warn("Invalid adminUser data:", error);
//     adminUser = { name: "Admin", email: "admin@example.com" };
//   }

//   return (
//     <>
//       <div className="sticky top-0 z-40 bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-lg bg-opacity-90 shadow-lg border-b border-blue-100">
//         <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
//           {/* Left Section - Menu & Title */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={onToggleSidebar}
//               className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95"
//               aria-label="Toggle Menu"
//             >
//               {isSidebarOpen ? (
//                 <X className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>

//             {/* Dashboard Title with Animation */}
//             <div className="flex items-center gap-2">
//               <div className="hidden md:flex w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
//                 <span className="text-white font-bold text-xl">A</span>
//               </div>
//               <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
//                 Dashboard
//               </h2>
//             </div>
//           </div>

//           {/* Right Section - Actions */}
//           <div className="flex items-center gap-2 md:gap-4">
//             {/* Search Icon - Hidden on small mobile */}
//             <button className="hidden sm:flex p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95 group">
//               <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//             </button>

//             {/* Notifications */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setShowProfile(false);
//                 }}
//                 className="relative p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
//               >
//                 <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//                 <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
//                   3
//                 </span>
//               </button>

//               {/* Notifications Dropdown */}
//               {showNotifications && (
//                 <div className="absolute right-0 mt-2 w-64 md:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
//                     Notifications
//                   </div>
//                   <div className="max-h-64 overflow-y-auto">
//                     {[
//                       { id: 1, title: "New blog post published", time: "2 minutes ago" },
//                       { id: 2, title: "User registration spike", time: "15 minutes ago" },
//                       { id: 3, title: "System update available", time: "1 hour ago" }
//                     ].map((notif) => (
//                       <div key={notif.id} className="p-3 border-b hover:bg-blue-50 transition-colors cursor-pointer">
//                         <p className="text-sm font-medium text-gray-800">{notif.title}</p>
//                         <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-3 text-center border-t">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                       View All Notifications
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setShowProfile(!showProfile);
//                   setShowNotifications(false);
//                 }}
//                 className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
//               >
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                   <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                 </div>
//                 <span className="hidden md:block text-sm font-medium text-gray-700">
//                   {adminUser.name}
//                 </span>
//               </button>

//               {/* Profile Dropdown Menu */}
//               {showProfile && (
//                 <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//                     <p className="font-semibold">{adminUser.name}</p>
//                     <p className="text-xs opacity-90">{adminUser.email}</p>
//                   </div>
//                   <div className="p-2">
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       👤 Profile Settings
//                     </button>
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       🔐 Account Security
//                     </button>
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       🎨 Appearance
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-medium text-sm"
//             >
//               <LogOut className="w-4 h-4" />
//               <span className="hidden sm:inline">Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Progress Bar Animation */}
//         <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer"></div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-shimmer {
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite linear;
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Topbar;






























// // ==== src/admin/components/Topbar.jsx ====
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LogOut, Bell, Search, User } from "lucide-react";

// const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const notifRef = useRef(null);
//   const profileRef = useRef(null);

//   // ===== Logout Function =====
//   const handleLogout = () => {
//     const confirmed = window.confirm("Are you sure you want to logout?");
//     if (confirmed) {
//       localStorage.removeItem("isAdminAuthenticated");
//       localStorage.removeItem("adminUser");
//       navigate("/alogin");
//     }
//   };

//   // ===== Admin User Parse Safely =====
//   let adminUserRaw = localStorage.getItem("adminUser");
//   let adminUser;

//   try {
//     if (!adminUserRaw) {
//       adminUser = { name: "Admin", email: "admin@example.com" };
//     } else if (adminUserRaw.startsWith("{")) {
//       adminUser = JSON.parse(adminUserRaw);
//     } else {
//       adminUser = { name: adminUserRaw, email: "admin@example.com" };
//     }
//   } catch (error) {
//     console.warn("Invalid adminUser data:", error);
//     adminUser = { name: "Admin", email: "admin@example.com" };
//   }

//   // ===== Handle Click Outside Dropdown =====
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notifRef.current &&
//         !notifRef.current.contains(event.target) &&
//         profileRef.current &&
//         !profileRef.current.contains(event.target)
//       ) {
//         setShowNotifications(false);
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <div className="sticky top-0 z-40 bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-lg bg-opacity-90 shadow-lg border-b border-blue-100">
//         <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
//           {/* ===== Left Section ===== */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Sidebar Toggle */}
//             <button
//               onClick={onToggleSidebar}
//               className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95"
//             >
//               {isSidebarOpen ? (
//                 <X className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>

//             {/* Dashboard Title */}
//             <div className="flex items-center gap-2">
//               {/* ✅ Logo Image Instead of "A" */}
//               <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-500">
//                 <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
//                   <img
//                     src="/logo1.png"
//                     alt="Admin Logo"
//                     className="w-20 h-20 object-contain transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//               </div>

//               <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
//                 Dashboard
//               </h2>
//             </div>
//           </div>

//           {/* ===== Right Section ===== */}
//           <div className="flex items-center gap-2 md:gap-4">
//             {/* Search */}
//             <button className="hidden sm:flex p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95 group">
//               <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//             </button>

//             {/* ===== Notifications ===== */}
//             <div className="relative" ref={notifRef}>
//               <button
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setShowProfile(false);
//                 }}
//                 className="relative p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
//               >
//                 <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//                 <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
//                   3
//                 </span>
//               </button>

//               {showNotifications && (
//                 <div className="absolute right-0 mt-2 w-64 md:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
//                     Notifications
//                   </div>
//                   <div className="max-h-64 overflow-y-auto">
//                     {[{ id: 1, title: "New blog post published", time: "2 min ago" },
//                       { id: 2, title: "User registration spike", time: "15 min ago" },
//                       { id: 3, title: "System update available", time: "1 hr ago" }].map((notif) => (
//                         <div key={notif.id} className="p-3 border-b hover:bg-blue-50 transition-colors cursor-pointer">
//                           <p className="text-sm font-medium text-gray-800">{notif.title}</p>
//                           <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
//                         </div>
//                       ))}
//                   </div>
//                   <div className="p-3 text-center border-t">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                       View All
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* ===== Profile ===== */}
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => {
//                   setShowProfile(!showProfile);
//                   setShowNotifications(false);
//                 }}
//                 className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
//               >
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                   <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                 </div>
//                 <span className="hidden md:block text-sm font-medium text-gray-700">
//                   {adminUser.name}
//                 </span>
//               </button>

//               {showProfile && (
//                 <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//                     <p className="font-semibold">{adminUser.name}</p>
//                     <p className="text-xs opacity-90">{adminUser.email}</p>
//                   </div>
//                   <div className="p-2">
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       👤 Profile Settings
//                     </button>
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       🔐 Account Security
//                     </button>
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">
//                       🎨 Appearance
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* ===== Logout ===== */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg font-medium text-sm"
//             >
//               <LogOut className="w-4 h-4" />
//               <span className="hidden sm:inline">Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Animated Bar */}
//         <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer"></div>
//       </div>

//       {/* ===== CSS Animations ===== */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }
//         .animate-shimmer {
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite linear;
//         }
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Topbar;
































// // ==== src/admin/components/Topbar.jsx ====
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LogOut, Bell, Search, User } from "lucide-react";

// const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const notifRef = useRef(null);
//   const profileRef = useRef(null);

//   // ===== Logout Function =====
//   const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("isAdminAuthenticated");
//       localStorage.removeItem("adminUser");
//       navigate("/alogin");
//     }
//   };

//   // ===== Admin User =====
//   let adminUserRaw = localStorage.getItem("adminUser");
//   let adminUser;
//   try {
//     adminUser = adminUserRaw ? JSON.parse(adminUserRaw) : { name: "Admin", email: "admin@example.com" };
//   } catch {
//     adminUser = { name: "Admin", email: "admin@example.com" };
//   }

//   // ===== Click Outside =====
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notifRef.current &&
//         !notifRef.current.contains(event.target) &&
//         profileRef.current &&
//         !profileRef.current.contains(event.target)
//       ) {
//         setShowNotifications(false);
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* ===== Topbar Wrapper ===== */}
//       <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-blue-100">
//         <div className="flex justify-between items-center px-4 md:px-8 py-3">

//           {/* ===== Left: Logo & Title ===== */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Sidebar Toggle */}
//             <button
//               onClick={onToggleSidebar}
//               className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-110 active:scale-95"
//             >
//               {isSidebarOpen ? (
//                 <X className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>

//             {/* Logo */}
//             <div className="hidden md:flex items-center gap-2">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
//                 <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
//                   <img
//                     src="/logo1.png"
//                     alt="Admin Logo"
//                     className="w-10 h-10 object-contain transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//               </div>

//               <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
//                 Admin Dashboard
//               </h2>
//             </div>
//           </div>

//           {/* ===== Right: Actions ===== */}
//           <div className="flex items-center gap-2 md:gap-4">

//             {/* Search */}
//             <button className="hidden sm:flex p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95">
//               <Search className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
//             </button>

//             {/* Notifications */}
//             <div className="relative" ref={notifRef}>
//               <button
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setShowProfile(false);
//                 }}
//                 className="relative p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
//                 <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center animate-pulse">
//                   3
//                 </span>
//               </button>

//               {showNotifications && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
//                     Notifications
//                   </div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {[
//                       { id: 1, title: "New blog post published", time: "2 min ago" },
//                       { id: 2, title: "User registration spike", time: "15 min ago" },
//                       { id: 3, title: "System update available", time: "1 hr ago" },
//                     ].map((n) => (
//                       <div key={n.id} className="p-3 border-b hover:bg-blue-50 cursor-pointer transition-colors">
//                         <p className="text-sm font-medium text-gray-800">{n.title}</p>
//                         <p className="text-xs text-gray-500 mt-1">{n.time}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-3 text-center border-t">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                       View All
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile */}
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => {
//                   setShowProfile(!showProfile);
//                   setShowNotifications(false);
//                 }}
//                 className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-105 active:scale-95"
//               >
//                 <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="hidden md:block text-sm font-medium text-gray-700">
//                   {adminUser.name}
//                 </span>
//               </button>

//               {showProfile && (
//                 <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//                     <p className="font-semibold">{adminUser.name}</p>
//                     <p className="text-xs opacity-90">{adminUser.email}</p>
//                   </div>
//                   <div className="p-2">
//                     {["👤 Profile Settings", "🔐 Account Security", "🎨 Appearance"].map((opt) => (
//                       <button
//                         key={opt}
//                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Logout */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 md:px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm font-medium"
//             >
//               <LogOut className="w-4 h-4" />
//               <span className="hidden sm:inline">Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Animated Bottom Bar */}
//         <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer" />
//       </div>

//       {/* ===== CSS Animations ===== */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }
//         .animate-shimmer {
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite linear;
//         }
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Topbar;































// ==== src/admin/components/Topbar.jsx ====
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LogOut, Bell, Search, User, Settings } from "lucide-react"; // ✅ Added Settings icon

// const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [showSettings, setShowSettings] = useState(false); // ✅ New state for Settings
//   const notifRef = useRef(null);
//   const profileRef = useRef(null);
//   const settingsRef = useRef(null);

//   // ===== Logout Function =====
//   const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("isAdminAuthenticated");
//       localStorage.removeItem("adminUser");
//       navigate("/alogin");
//     }
//   };

//   // ===== Admin User =====
//   let adminUserRaw = localStorage.getItem("adminUser");
//   let adminUser;
//   try {
//     adminUser = adminUserRaw
//       ? JSON.parse(adminUserRaw)
//       : { name: "Admin", email: "admin@example.com" };
//   } catch {
//     adminUser = { name: "Admin", email: "admin@example.com" };
//   }

//   // ===== Click Outside (for closing dropdowns) =====
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notifRef.current &&
//         !notifRef.current.contains(event.target) &&
//         profileRef.current &&
//         !profileRef.current.contains(event.target) &&
//         settingsRef.current &&
//         !settingsRef.current.contains(event.target)
//       ) {
//         setShowNotifications(false);
//         setShowProfile(false);
//         setShowSettings(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* ===== Topbar Wrapper ===== */}
//       <div className="sticky top-0 z-50 bg-[#0A1721]">
//         <div className="h-[80px] flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#F15124]/30">
//           {/* ===== Left: Logo & Title ===== */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Sidebar Toggle */}
//             <button
//               onClick={onToggleSidebar}
//               className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-110 active:scale-95"
//             >
//               {isSidebarOpen ? (
//                 <X className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>

//             {/* Logo + Title */}
//             <div className="hidden md:flex items-center gap-2">
//               <div className="w-20 h-20 rounded-2xl p-[2px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
//                 <div className="w-full h-full   rounded-2xl flex items-center justify-center overflow-hidden">
//                   <img
//                     src="/logo1.png"
//                     alt="Admin Logo"
//                     className="w-20 h-20 object-contain transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//               </div>

//               <h2 className="text-xl font-bold text-white">
//                 Admin Dashboard
//               </h2>
//             </div>
//           </div>

//           {/* ===== Right: Actions ===== */}
//           <div className="flex items-center gap-2 md:gap-4">
//             {/* Search */}
//             <button className="hidden sm:flex p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95">
//               <Search className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
//             </button>

//             {/* Notifications */}
//             <div className="relative" ref={notifRef}>
//               <button
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setShowProfile(false);
//                   setShowSettings(false);
//                 }}
//                 className="relative p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
//                 <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center animate-pulse">
//                   3
//                 </span>
//               </button>

//               {showNotifications && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
//                     Notifications
//                   </div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {[{ id: 1, title: "New blog post published", time: "2 min ago" },
//                       { id: 2, title: "User registration spike", time: "15 min ago" },
//                       { id: 3, title: "System update available", time: "1 hr ago" }].map((n) => (
//                       <div key={n.id} className="p-3 border-b hover:bg-blue-50 cursor-pointer transition-colors">
//                         <p className="text-sm font-medium text-gray-800">{n.title}</p>
//                         <p className="text-xs text-gray-500 mt-1">{n.time}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-3 text-center border-t">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                       View All
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Settings ⚙️ */}
//             <div className="relative" ref={settingsRef}>
//               <button
//                 onClick={() => {
//                   setShowSettings(!showSettings);
//                   setShowNotifications(false);
//                   setShowProfile(false);
//                 }}
//                 className="p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Settings className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
//               </button>

//               {showSettings && (
//                 <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
//                     Settings
//                   </div>
//                   <div className="p-2">
//                     {[
//                       "⚙️ General Settings",
//                       "🔔 Notification Preferences",
//                       "🌙 Theme Mode",
//                       "🧩 Plugins",
//                     ].map((opt) => (
//                       <button
//                         key={opt}
//                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile */}
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => {
//                   setShowProfile(!showProfile);
//                   setShowNotifications(false);
//                   setShowSettings(false);
//                 }}
//                 className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-105 active:scale-95"
//               >
//                 <div className="w-9 h-9 bg-[#0A1721] rounded-full flex items-center justify-center shadow-md">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="hidden md:block text-sm font-medium text-gray-700">
//                   {adminUser.name}
//                 </span>
//               </button>

//               {showProfile && (
//                 <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
//                   <div className="p-4 bg-[#0A1721] text-white">
//                     <p className="font-semibold">{adminUser.name}</p>
//                     <p className="text-xs opacity-90">{adminUser.email}</p>
//                   </div>
//                   <div className="p-2">
//                     {["👤 Profile Settings", "🔐 Account Security", "🎨 Appearance"].map((opt) => (
//                       <button
//                         key={opt}
//                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Logout */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 bg-[#F15124]  text-white px-3 md:px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm font-medium"
//             >
//               <LogOut className="w-4 h-4" />
//               <span className="hidden sm:inline">Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Animated Bottom Bar */}
//         {/* <div className=" border-b border-[#F15124]/30" /> */}
//       </div>

//       {/* ===== CSS Animations ===== */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }
//         .animate-shimmer {
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite linear;
//         }
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Topbar;









































// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, LogOut, Bell, Search, User, Settings, XCircle } from "lucide-react";

// const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const notifRef = useRef(null);
//   const profileRef = useRef(null);
//   const settingsRef = useRef(null);
//   const searchRef = useRef(null);

//   const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("isAdminAuthenticated");
//       localStorage.removeItem("adminUser");
//       navigate("/alogin");
//     }
//   };

//   let adminUserRaw = localStorage.getItem("adminUser");
//   let adminUser;
//   try {
//     adminUser = adminUserRaw
//       ? JSON.parse(adminUserRaw)
//       : { name: "Admin", email: "admin@example.com" };
//   } catch {
//     adminUser = { name: "Admin", email: "admin@example.com" };
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notifRef.current && !notifRef.current.contains(event.target) &&
//         profileRef.current && !profileRef.current.contains(event.target) &&
//         settingsRef.current && !settingsRef.current.contains(event.target) &&
//         searchRef.current && !searchRef.current.contains(event.target)
//       ) {
//         setShowNotifications(false);
//         setShowProfile(false);
//         setShowSettings(false);
//         setShowSearch(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching for: ${searchQuery}`);
//       setSearchQuery("");
//       setShowSearch(false);
//     }
//   };

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-[#0A1721]">
//         <div className="h-[80px] flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#F15124]/30">
//           {/* Left: Sidebar + Logo */}
//           <div className="flex items-center gap-3 md:gap-4">
//             <button
//               onClick={onToggleSidebar}
//               className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-110 active:scale-95"
//             >
//               {isSidebarOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
//             </button>

//             <div className="hidden md:flex items-center gap-2">
//               <img src="/logo1.png" alt="Admin Logo" className="w-12 h-12 object-contain transition-transform duration-500 hover:scale-110" />
//               <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
//             </div>
//           </div>

//           {/* Right: Actions */}
//           <div className="flex items-center gap-2 md:gap-4">

//             {/* Search */}
//             <div className="relative" ref={searchRef}>
//               <button
//                 onClick={() => {
//                   setShowSearch(!showSearch);
//                   setShowNotifications(false);
//                   setShowProfile(false);
//                   setShowSettings(false);
//                 }}
//                 className="p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Search className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
//               </button>
//               {showSearch && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
//                   <form onSubmit={handleSearchSubmit} className="flex items-center px-3 py-2 bg-gray-50">
//                     <input
//                       type="text"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       placeholder="Search anything..."
//                       className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400 px-2"
//                       autoFocus
//                     />
//                     {searchQuery && <XCircle onClick={() => setSearchQuery("")} className="w-4 h-4 text-gray-500 cursor-pointer hover:text-red-500" />}
//                     <button type="submit" className="ml-2 bg-[#F15124] text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all">Go</button>
//                   </form>
//                 </div>
//               )}
//             </div>

//             {/* Notifications */}
//             <div className="relative" ref={notifRef}>
//               <button
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setShowProfile(false);
//                   setShowSettings(false);
//                   setShowSearch(false);
//                 }}
//                 className="relative p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Bell className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
//                 <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center animate-pulse">3</span>
//               </button>
//               {showNotifications && (
//                 <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">Notifications</div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {[{ id: 1, title: "New blog post published", time: "2 min ago" },
//                       { id: 2, title: "User registration spike", time: "15 min ago" },
//                       { id: 3, title: "System update available", time: "1 hr ago" }].map((n) => (
//                       <div key={n.id} className="p-3 border-b hover:bg-blue-50 cursor-pointer transition-colors">
//                         <p className="text-sm font-medium text-gray-800">{n.title}</p>
//                         <p className="text-xs text-gray-500 mt-1">{n.time}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-3 text-center border-t">
//                     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Settings */}
//             <div className="relative" ref={settingsRef}>
//               <button
//                 onClick={() => {
//                   setShowSettings(!showSettings);
//                   setShowNotifications(false);
//                   setShowProfile(false);
//                   setShowSearch(false);
//                 }}
//                 className="p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110 active:scale-95"
//               >
//                 <Settings className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
//               </button>
//               {showSettings && (
//                 <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">Settings</div>
//                   <div className="p-2 flex flex-col gap-1">
//                     {["⚙️ General Settings", "🔔 Notification Preferences", "🌙 Theme Mode", "🧩 Plugins"].map((opt) => (
//                       <button key={opt} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">{opt}</button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile */}
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => {
//                   setShowProfile(!showProfile);
//                   setShowNotifications(false);
//                   setShowSettings(false);
//                   setShowSearch(false);
//                 }}
//                 className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-105 active:scale-95"
//               >
//                 <div className="w-9 h-9 bg-[#0A1721] rounded-full flex items-center justify-center shadow-md">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="hidden md:block text-sm font-medium text-gray-300">{adminUser.name}</span>
//               </button>
//               {showProfile && (
//                 <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
//                   <div className="p-4 bg-[#0A1721] text-white">
//                     <p className="font-semibold">{adminUser.name}</p>
//                     <p className="text-xs opacity-90">{adminUser.email}</p>
//                   </div>
//                   <div className="p-2 flex flex-col gap-1">
//                     {["👤 Profile Settings", "🔐 Account Security", "🎨 Appearance"].map((opt) => (
//                       <button key={opt} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">{opt}</button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Logout */}
//             <button onClick={handleLogout} className="flex items-center gap-2 bg-[#F15124] text-white px-3 md:px-4 py-2 rounded-lg hover:bg-[#d8431d] transition-all duration-300 transform hover:scale-105 shadow-md text-sm font-medium">
//               <LogOut className="w-4 h-4" />
//               <span className="hidden sm:inline">Logout</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideDown { animation: slideDown 0.3s ease-out; }
//       `}</style>
//     </>
//   );
// };

// export default Topbar;

































import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Bell, Search, User, XCircle } from "lucide-react";

const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isAdminAuthenticated");
      localStorage.removeItem("adminUser");
      navigate("/alogin");
    }
  };

  let adminUserRaw = localStorage.getItem("adminUser");
  let adminUser;
  try {
    adminUser = adminUserRaw ? JSON.parse(adminUserRaw) : { name: "Admin", email: "admin@example.com" };
  } catch {
    adminUser = { name: "Admin", email: "admin@example.com" };
  }

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notifRef.current && !notifRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target) &&
        searchRef.current && !searchRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
        setShowProfile(false);
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="h-[80px] flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#F15124]/30">
          {/* Left: Sidebar + Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              {isSidebarOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
            </button>
            <div className="hidden md:flex items-center gap-2">
              <img src="/logo1.png" alt="Admin Logo" className="w-18 h-18 object-contain transition-transform duration-500 hover:scale-110" />
              {/* <h2 className="text-xl font-bold text-[#0A1721]">Admin Dashboard</h2> */}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => { setShowSearch(!showSearch); setShowNotifications(false); setShowProfile(false); }}
                className="p-2 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Search className="w-5 h-5 text-[#0A1721] hover:text-[#f15124]" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
                  <form onSubmit={handleSearchSubmit} className="flex items-center px-3 py-2 bg-gray-50">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search anything..."
                      className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400 px-2"
                      autoFocus
                    />
                    {searchQuery && <XCircle onClick={() => setSearchQuery("")} className="w-4 h-4 text-gray-500 cursor-pointer hover:text-red-500" />}
                    <button type="submit" className="ml-2 bg-[#F15124] text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all">Go</button>
                  </form>
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); setShowSearch(false); }}
                className="relative p-2 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Bell className="w-5 h-5 text-[#0A1721] hover:text-[#f15124]" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center animate-pulse">3</span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">Notifications</div>
                  <div className="max-h-60 overflow-y-auto">
                    {[{ id: 1, title: "New blog post published", time: "2 min ago" },
                      { id: 2, title: "User registration spike", time: "15 min ago" },
                      { id: 3, title: "System update available", time: "1 hr ago" }].map((n) => (
                      <div key={n.id} className="p-3 border-b hover:bg-blue-50 cursor-pointer transition-colors" onClick={() => alert(`Clicked: ${n.title}`)}>
                        <p className="text-sm font-medium text-gray-800">{n.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t">
                    <button className="text-sm text-[#0A1721] hover:text-blue-800 font-medium">View All</button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); setShowSearch(false); }}
                className="flex items-center gap-2 p-1.5 md:p-2  transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="w-9 h-9 bg-[#0A1721] hover:bg-[#f15124] rounded-full flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white " />
                </div>
                <span className="hidden md:block text-sm font-medium text-[#0A1721] hover:text-[#f15124]">{adminUser.name}</span>
              </button>
              {showProfile && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
                  <div className="p-4 bg-[#0A1721] text-white">
                    <p className="font-semibold">{adminUser.name}</p>
                    <p className="text-xs opacity-90">{adminUser.email}</p>
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    {["👤 Profile Settings", "🔐 Account Security", "🎨 Appearance"].map((opt) => (
                      <button key={opt} onClick={() => alert(`Clicked: ${opt}`)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">{opt}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Logout */}
            <button onClick={handleLogout} className="flex items-center gap-2 bg-[#F15124] text-white px-3 md:px-4 py-2 rounded-lg hover:bg-[#d8431d] transition-all duration-300 transform hover:scale-105 shadow-md text-sm font-medium">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default Topbar;
