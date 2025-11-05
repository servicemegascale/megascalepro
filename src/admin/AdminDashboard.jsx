// ==== src/admin/AdminDashboard.jsx ====
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import DashboardHome from "./pages/DashboardHome";
// import ManageBlogs from "./pages/ManageBlogs";
// import ManageUsers from "./pages/ManageUsers";
// import Settings from "./pages/Settings";
// import Vacancies from "./pages/Vacancies";
// import Messages from "./pages/Messages";

// const AdminDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Left Sidebar */}
//       <Sidebar />

//       {/* Right Content Area */}
//       <div className="flex flex-col flex-1 overflow-y-auto">
//         <Topbar />

//         {/* Page content will switch here */}
//         <div className="">
//           <Routes>
//             <Route path="/" element={<DashboardHome />} />
//             <Route path="blogs" element={<ManageBlogs />} />
//             <Route path="users" element={<ManageUsers />} />
//             <Route path="settings" element={<Settings />} />

//             <Route path="vacancies" element={<Vacancies />} />
//             <Route path="messages" element={<Messages />} />

//             {/* fallback */}
//             <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;













import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardHome from "./pages/DashboardHome";
import ManageUsers from "./pages/ManageUsers";
import Settings from "./pages/Settings";
import Vacancies from "./pages/Vacancies";
import Messages from "./pages/Messages";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen  text-[#0A1721] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Topbar */}
        <Topbar onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Page Container */}
        <div className="p-4 md:p-4 bg-white ">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="applications" element={<Vacancies />} />
            <Route path="messages" element={<Messages />} />
            {/* fallback */}
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
