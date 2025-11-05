// // ==== frontend/src/App.jsx ====

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./component/Nav";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";
// import AboutUs from "./pages/AboutUs";
// // import Testimonials from "./component/Testimonials" 
// import WhatsApp from "./pages/WhatsApp"; 
// import Footer from "./component/Footer";
// import Faq from "./pages/Faq";

// import "./App.css";
// import NewsletterPopup from "./component/NewsletterPopup";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import CareerBanner from "./pages/CareerBanner";
// import Abc from "./pages/abc";
// import Robotics from "./services/Robotics";
// import Artificial_intellegence from "./services/Ai";
// import Webdevleopment from "./services/Webdevleopment";
// import Ourservices from "./services/Ourservices";
// import Network from "./services/Network";
// import MobileAppDevelopment from "./services/MobileAppDevelopment";
// import Iphone from "./services/Iphone";
// import Bigdata from "./services/BigdataAnalysis";
// import SoftwareDevelopment from "./services/SoftwareDevelopment";
// import CloudSolutions from "./services/CloudSolutions";
// import Dgmarketing from "./services/Dgmarketing";
// import Andoridapp from "./services/Androidapp"
// import SoftwareTesting from "./services/SoftwareTesting";
// import Itstaff from "./services/it-staff-augmentation-services";
// import Offshoredevelopment from "./services/OffshoreDevelopment";
// import EcommerceServices from "./services/EcommerceServices";
// import ContactForm from "./pages/ContactForm";
// import Apply from "./pages/Apply";
// import Support from "./services/Support";

// import AdminLogin from "./admin/AdminLogin";
// import AdminDashboard from "./admin/AdminDashboard";
// import ProtectedRoute from "./admin/ProtectedRoute";


// function App() {  
//   return (

//     <> 
//     <NewsletterPopup />
//       <Nav />
     
//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           {/* <Route path="/testimonials" element={<Testimonials />} /> */}
//           {/* <Route path="/test"/> */}
//           <Route path="/blog" element={<Blogs />} />
//           <Route path="/blog/:id" element={<BlogDetails />} />
//           <Route path="/career" element={<CareerBanner />} />
//           <Route path="/contact" element={<ContactForm />} />
//           <Route path="/services" element={<Services />} />

//           {/* <Route path="/services/web-development" element={<Abc />} /> */}
//           <Route path="/services/robotics" element={<Robotics />} />
//           <Route path="/services/artificial-intellegence" element={<Artificial_intellegence />} />
//           <Route path="/services/webdevleopment" element={<Webdevleopment />} />
//           <Route path="/services/network" element={<Network />} />
//           <Route path="/services/ourservices" element={<Ourservices />} />
//           <Route path="/faq" element={<Faq />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           <Route path="/services/mobileAppDevelopment" element={<MobileAppDevelopment />} />
//           <Route path="/services/ios" element={<Iphone />} />
//           <Route path="/services/marketing" element={<Dgmarketing />} />
          
//           <Route path="/services/Big-data" element={<Bigdata />} />
//           <Route path="/services/softwareDevelopment" element={<SoftwareDevelopment />} />
//           <Route path="/services/cloudsolutions" element={<CloudSolutions />} />
//           <Route path="/services/Andorid-app" element={<Andoridapp />} />
//           <Route path="/services/softwaretesting" element={<SoftwareTesting />} />
//           <Route path="/services/it-staff-augmentation-services" element={<Itstaff />} />
//           <Route path="/services/Offshore-development" element={<Offshoredevelopment />} />
//           <Route path="/services/EcommerceServices" element={<EcommerceServices />} />
//           <Route path="/services/Support" element={<Support />} />
         


//  <Route path="/alogin" element={<AdminLogin />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         /> 
         

//         </Routes>

//       <WhatsApp />
      
//       <Apply />

//       <Footer />

//     </>

//   );
// }

// export default App;



// ==== src/App.jsx ====

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import WhatsApp from "./pages/WhatsApp";
import NewsletterPopup from "./component/NewsletterPopup";
import Apply from "./pages/Apply";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import WhyChooseUs from "./pages/WhyChooseUs";
import CareerBanner from "./pages/CareerBanner";
import ContactForm from "./pages/ContactForm";

// Services
import Robotics from "./services/Robotics";
import Artificial_intellegence from "./services/Ai";
import Webdevleopment from "./services/Webdevleopment";
import Ourservices from "./services/Ourservices";
import Network from "./services/Network";
import MobileAppDevelopment from "./services/MobileAppDevelopment";
import Iphone from "./services/Iphone";
import Bigdata from "./services/BigdataAnalysis";
import SoftwareDevelopment from "./services/SoftwareDevelopment";
import CloudSolutions from "./services/CloudSolutions";
import Dgmarketing from "./services/Dgmarketing";
import Andoridapp from "./services/Androidapp";
import SoftwareTesting from "./services/SoftwareTesting";
import Itstaff from "./services/it-staff-augmentation-services";
import Offshoredevelopment from "./services/OffshoreDevelopment";
import EcommerceServices from "./services/EcommerceServices";
import Support from "./services/Support";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";

import "./App.css";

function MainLayout({ children }) {
  return (
    <>
      <NewsletterPopup />
      <Nav />
      {children}
      <WhatsApp />
      <Apply />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* 🌐 PUBLIC ROUTES */}
      <Route
        path="/*"
        element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/career" element={<CareerBanner />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />

              {/* Services */}
              <Route path="/services/robotics" element={<Robotics />} />
              <Route path="/services/artificial-intellegence" element={<Artificial_intellegence />} />
              <Route path="/services/webdevleopment" element={<Webdevleopment />} />
              <Route path="/services/network" element={<Network />} />
              <Route path="/services/ourservices" element={<Ourservices />} />
              <Route path="/services/mobileAppDevelopment" element={<MobileAppDevelopment />} />
              <Route path="/services/ios" element={<Iphone />} />
              <Route path="/services/marketing" element={<Dgmarketing />} />
              <Route path="/services/Big-data" element={<Bigdata />} />
              <Route path="/services/softwareDevelopment" element={<SoftwareDevelopment />} />
              <Route path="/services/cloudsolutions" element={<CloudSolutions />} />
              <Route path="/services/Andorid-app" element={<Andoridapp />} />
              <Route path="/services/softwaretesting" element={<SoftwareTesting />} />
              <Route path="/services/it-staff-augmentation-services" element={<Itstaff />} />
              <Route path="/services/Offshore-development" element={<Offshoredevelopment />} />
              <Route path="/services/EcommerceServices" element={<EcommerceServices />} />
              <Route path="/services/Support" element={<Support />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MainLayout>
        }
      />

      {/* 🔐 ADMIN ROUTES */}
      <Route path="/alogin" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Redirect invalid admin URLs */}
      <Route path="/admin/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
