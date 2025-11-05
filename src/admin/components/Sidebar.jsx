    // // ==== src/admin/components/Sidebar.jsx ====
    // import React from "react";
    // import { NavLink } from "react-router-dom";

    // const Sidebar = () => {
    // const linkClasses = ({ isActive }) =>
    //     `block py-2.5 px-4 rounded transition-all duration-200 ${
    //     isActive
    //         ? "bg-blue-600 text-white"
    //         : "text-gray-700 hover:bg-blue-100 hover:text-blue-800"
    //     }`;

    // return (
    //     <div className="w-64 bg-white shadow-lg flex flex-col p-4">
    //     <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
    //         Admin Panel
    //     </h1>
    //     <nav className="flex-1 space-y-1">
    //         <NavLink to="/admin/dashboard" end className={linkClasses}>
    //         🏠 Dashboard
    //         </NavLink>
    //         <NavLink to="/admin/dashboard/blogs" className={linkClasses}>
    //         📰 Manage Blogs
    //         </NavLink>
    //         <NavLink to="/admin/dashboard/users" className={linkClasses}>
    //         👥 Manage Users
    //         </NavLink>
    //         <NavLink to="/admin/dashboard/settings" className={linkClasses}>
    //         ⚙️ Settings
    //         </NavLink>
    //     </nav>
    //     </div>
    // );
    // };

    // export default Sidebar;





    // ==== src/admin/components/Sidebar.jsx ====
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Home, FileText, Users, Settings, ChevronLeft, Sparkles, TrendingUp, Award } from "lucide-react";

// const Sidebar = ({ isOpen, onClose }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const menuItems = [
//     { 
//       to: "/admin/dashboard", 
//       icon: Home, 
//       label: "Dashboard", 
//       end: true,
//       color: "from-blue-500 to-cyan-500"
//     },
//     { 
//       to: "/admin/dashboard/blogs", 
//       icon: FileText, 
//       label: "Manage Blogs",
//       color: "from-purple-500 to-pink-500"
//     },
//     { 
//       to: "/admin/dashboard/users", 
//       icon: Users, 
//       label: "Manage Users",
//       color: "from-green-500 to-emerald-500"
//     },
//     { 
//       to: "/admin/dashboard/settings", 
//       icon: Settings, 
//       label: "Settings",
//       color: "from-orange-500 to-red-500"
//     },
//   ];

//   const linkClasses = ({ isActive }) => {
//     const baseClasses = `group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden ${
//       isCollapsed ? 'justify-center' : ''
//     }`;
    
//     return isActive
//       ? `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg`
//       : `${baseClasses} text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700`;
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm animate-fadeIn"
//           onClick={onClose}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:static inset-y-0 left-0 z-50
//           ${isCollapsed ? 'w-20' : 'w-72 md:w-80'}
//           bg-gradient-to-b from-white via-blue-50 to-purple-50
//           shadow-2xl flex flex-col
//           transition-all duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//           border-r border-blue-100
//         `}
//       >
//         {/* Header Section */}
//         <div className="p-6 border-b border-blue-100 bg-white bg-opacity-80 backdrop-blur-sm">
//           <div className="flex items-center justify-between">
//             {!isCollapsed && (
//               <div className="flex items-center gap-3 animate-slideIn">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
//                   <Sparkles className="w-6 h-6 text-white animate-pulse" />
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     Admin Panel
//                   </h1>
//                   <p className="text-xs text-gray-500 mt-0.5">Control Center</p>
//                 </div>
//               </div>
//             )}
            
//             {/* Desktop Collapse Toggle */}
//             <button
//               onClick={() => setIsCollapsed(!isCollapsed)}
//               className="hidden lg:flex p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 active:scale-95"
//             >
//               <ChevronLeft
//                 className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
//                   isCollapsed ? 'rotate-180' : ''
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards - Hidden when collapsed */}
//         {!isCollapsed && (
//           <div className="p-4 space-y-3 animate-slideIn">
//             <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs opacity-90">Total Views</p>
//                   <p className="text-2xl font-bold mt-1">12,543</p>
//                   <p className="text-xs opacity-75 mt-1">↑ 12% from last month</p>
//                 </div>
//                 <TrendingUp className="w-8 h-8 opacity-80" />
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs opacity-90">Active Users</p>
//                   <p className="text-2xl font-bold mt-1">1,829</p>
//                   <p className="text-xs opacity-75 mt-1">↑ 8% from last week</p>
//                 </div>
//                 <Award className="w-8 h-8 opacity-80" />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Navigation */}
//         <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
//           {menuItems.map((item, index) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end={item.end}
//               className={linkClasses}
//               onClick={() => window.innerWidth < 1024 && onClose()}
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               {/* Icon with gradient background on hover */}
//               <div className={`
//                 relative flex items-center justify-center w-10 h-10 rounded-lg
//                 group-hover:bg-gradient-to-r group-hover:${item.color}
//                 transition-all duration-300
//               `}>
//                 <item.icon className="w-5 h-5 group-hover:text-white transition-colors relative z-10" />
//               </div>
              
//               {!isCollapsed && (
//                 <>
//                   <span className="font-medium text-base flex-1 group-hover:translate-x-1 transition-transform duration-300">
//                     {item.label}
//                   </span>
                  
//                   {/* Arrow indicator on hover */}
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </>
//               )}

//               {/* Tooltip for collapsed state */}
//               {isCollapsed && (
//                 <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
//                   {item.label}
//                 </div>
//               )}

//               {/* Active Indicator */}
//               <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
//             </NavLink>
//           ))}
//         </nav>

//         {/* Footer */}
//         <div className={`p-4 border-t border-blue-100 bg-white bg-opacity-80 ${isCollapsed ? 'text-center' : ''}`}>
//           {!isCollapsed ? (
//             <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 animate-pulse-slow">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-xl">🚀</span>
//                 <p className="text-xs font-semibold text-gray-700">Need Help?</p>
//               </div>
//               <p className="text-xs text-gray-600 mb-3">Check our comprehensive documentation</p>
//               <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
//                 View Documentation
//               </button>
//             </div>
//           ) : (
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center animate-pulse-slow">
//               <span className="text-white text-lg">?</span>
//             </div>
//           )}
//         </div>

//         {/* Version Info */}
//         {!isCollapsed && (
//           <div className="px-4 pb-4 text-center">
//             <p className="text-xs text-gray-400">Version 2.0.1</p>
//           </div>
//         )}

//         {/* Animated Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none animate-gradient-slow" />
//       </aside>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }
//         @keyframes gradient-slow {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
//         .animate-gradient-slow {
//           background-size: 200% 200%;
//           animation: gradient-slow 10s ease infinite;
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #2563eb, #7c3aed);
//         }
//       `}</style>
//     </>
//   );
// };

// export default Sidebar;










// ==== src/admin/components/Sidebar.jsx ====
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, FileText, Users, Settings, Briefcase, Mail, ChevronLeft } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { to: "/admin/dashboard", icon: Home, label: "Dashboard", end: true },
    { to: "/admin/dashboard/applications", icon: Briefcase, label: "Applications" },
    { to: "/admin/dashboard/messages", icon: Mail, label: "Messages" },
    { to: "/admin/dashboard/users", icon: Users, label: "Users" },
    { to: "/admin/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  const linkClasses = ({ isActive }) => {
    const baseClasses = `
      group flex items-center gap-3 py-1 px-4 rounded-xl transition-all duration-300
      transform hover:scale-105 active:scale-95 relative overflow-hidden
      ${isCollapsed ? "justify-center" : ""}
    `;

    return isActive
      ? `${baseClasses} bg-[#F15124]/10 text-white `
      : `${baseClasses} text-gray-200 hover:bg-[#F15124]/10 hover:text-[#F15124]`;
  };

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${isCollapsed ? "w-20" : "w-72 md:w-70"}
          bg-white  text-white flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          border-r border-[#F15124]/20
        `}
      >
        {/* Header */}
        <div className="h-[80px] px-4 md:px-6 py-3 border-b border-[#F15124]/30 flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-2xl font-bold text-[#F15124]">Admin Panel</h1>    
              <p className="text-left font-semibold text-xs text-[#0A1721]">Control Center</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-2 rounded-lg hover:bg-[#F15124]/20 transition-all duration-300"
          >
            <ChevronLeft
              className={`w-5 h-5 text-[#F15124] transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClasses}
              onClick={() => window.innerWidth < 1024 && onClose()}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white  transition-all duration-300`}
              >
                <item.icon className="w-5 h-5 text-[#0A1721] " />
              </div>

              {!isCollapsed && (
                <span className="text-left font-medium text-base text-[#0A1721]  flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 text-center border-t border-[#F15124]/30">
            <p className="text-xs text-gray-400">© 2025 IT Admin</p>
          </div>
        )}
      </aside>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f15124;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f15b2c;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
