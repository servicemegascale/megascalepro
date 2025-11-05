// import React, { useState } from "react";
// import { FaUserTie } from "react-icons/fa";

// export default function FloatingApplyForm() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     field: "",
//     cv: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "cv") {
//       setFormData({ ...formData, cv: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("Application submitted successfully!");
//     onClick={handleClose};;
//     setFormData({ name: "", email: "", phone: "", field: "", cv: null });
//   };

//   return (
//     <div>
//       {/* Floating Button */}
//       <div className="fixed bottom-6 left-6 flex flex-col items-center z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition transform hover:scale-110"
//           style={{ backgroundColor: "#ffff" }}
//         >
//           <FaUserTie size={32} color="#F15124" />
//         </button>
//       </div>

//       {/* Dropdown Form */}
//       {open && (
//         <div
//           className="fixed bottom-24 left-6 w-80 bg-white shadow-2xl rounded-2xl p-6 transition-all duration-500 z-50"
//           style={{ border: "2px solid #0A1721" }}
//         >
//           <h2
//             className="text-2xl font-bold mb-4 text-center"
//             style={{ color: "#0A1721" }}
//           >
//             Apply Now
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="block font-semibold mb-1 text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#F15124]"
//               />
//             </div>

//             <div className="mb-3">
//               <label className="block font-semibold mb-1 text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#F15124]"
//               />
//             </div>

//             <div className="mb-3">
//               <label className="block font-semibold mb-1 text-gray-700">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#F15124]"
//               />
//             </div>

//             <div className="mb-3">
//               <label className="block font-semibold mb-1 text-gray-700">
//                 Which Field
//               </label>
//               <select
//                 name="field"
//                 value={formData.field}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#F15124]"
//               >
//                 <option value="">Select Field</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="UI/UX Design">UI/UX Design</option>
//                 <option value="Digital Marketing">Digital Marketing</option>
//                 <option value="Content Writing">Content Writing</option>
//                 <option value="App Development">App Development</option>
//               </select>
//             </div>

//             <div className="mb-4">
//               <label className="block font-semibold mb-1 text-gray-700">
//                 Upload CV
//               </label>
//               <input
//                 type="file"
//                 name="cv"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleChange}
//                 required
//                 className="w-full"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white font-semibold py-2 rounded-md transition"
//               style={{ backgroundColor: "#0A1721" }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { UserCircle, X, Send, Upload, Check } from "lucide-react";

// export default function FloatingApplyForm() {
//   const [open, setOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     field: "",
//     cv: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "cv") {
//       setFormData({ ...formData, cv: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       onClick={handleClose};;
//       setSubmitted(false);
//       setFormData({ name: "", email: "", phone: "", field: "", cv: null });
//     }, 2000);
//   };

//   return (
//     <div className="  bg-gradient-to-br from-slate-50 to-slate-100 p-8">
//       {/* Demo Content */}

//       {/* Floating Button */}
//       <div className="fixed bottom-6 left-6 z-50">
//         <div className="relative group">
//           {/* Pulse Ring Animation */}
//           {!open && (
//             <div className="absolute inset-0 rounded-full bg-[#F15124] opacity-75 animate-ping" />
//           )}

//           <button
//             onClick={() => setOpen(!open)}
//             className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl overflow-hidden"
//             style={{ border: "2px solid #F15124" }}
//           >
//             {/* Background Gradient on Hover */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#F15124] to-[#ff6b47] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

//             {open ? (
//               <X size={32} color="#F15124" className="transition-transform duration-300 rotate-0 group-hover:rotate-90" />
//             ) : (
//               <UserCircle size={32} color="#F15124" className="transition-transform duration-300 group-hover:rotate-12" />
//             )}
//           </button>

//           {/* Tooltip */}
//           {!open && (
//             <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
//               Apply Now
//               <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Backdrop */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
//           onClick={() => onClick={handleClose};}
//           style={{ animation: "fadeIn 0.3s ease-out" }}
//         />
//       )}

//       {/* Dropdown Form */}
//       {open && (
//         <div
//           className="fixed bottom-24 left-6 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
//           style={{
//             border: "2px solid #0A1721",
//             animation: "slideUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
//           }}
//         >
//           {/* Header with Gradient */}
//           <div className="bg-gradient-to-r from-[#0A1721] to-slate-700 p-6 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#F15124]/10 to-transparent" />
//             <div className="relative flex items-center justify-between">
//               <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//                 <UserCircle className="animate-bounce" />
//                 Apply Now
//               </h2>
//               <button
//                 onClick={() => onClick={handleClose};}
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <p className="text-white/80 text-sm mt-2 relative">Start your journey with us today</p>
//           </div>

//           {/* Form Content */}
//           <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto">
//             {submitted ? (
//               <div className="text-center py-12" style={{ animation: "scaleIn 0.5s ease-out" }}>
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Check size={40} className="text-green-600" style={{ animation: "checkmark 0.6s ease-out" }} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-800 mb-2">Success!</h3>
//                 <p className="text-slate-600">Your application has been submitted</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div className="relative" style={{ animation: "slideInLeft 0.5s ease-out 0.1s both" }}>
//                   <label className="block font-semibold text-start mb-2 text-slate-700 text-sm">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3  border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#F15124] transition-all duration-300 focus:shadow-lg"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="relative" style={{ animation: "slideInLeft 0.5s ease-out 0.2s both" }}>
//                   <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#F15124] transition-all duration-300 focus:shadow-lg"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div className="relative" style={{ animation: "slideInLeft 0.5s ease-out 0.3s both" }}>
//                   <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#F15124] transition-all duration-300 focus:shadow-lg"
//                     placeholder="+1 (555) 000-0000"
//                   />
//                 </div>

//                 <div className="relative" style={{ animation: "slideInLeft 0.5s ease-out 0.4s both" }}>
//                   <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
//                     Field of Interest
//                   </label>
//                   <select
//                     name="field"
//                     value={formData.field}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#F15124] transition-all duration-300 focus:shadow-lg appearance-none cursor-pointer"
//                     style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
//                   >
//                     <option value="">Select Your Field</option>
//                     <option value="Web Development">Web Development</option>
//                     <option value="UI/UX Design">UI/UX Design</option>
//                     <option value="Digital Marketing">Digital Marketing</option>
//                     <option value="Content Writing">Content Writing</option>
//                     <option value="App Development">App Development</option>
//                   </select>
//                 </div>

//                 <div className="relative" style={{ animation: "slideInLeft 0.5s ease-out 0.5s both" }}>
//                   <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
//                     Upload CV/Resume
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       name="cv"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#F15124] transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F15124] file:text-white hover:file:bg-[#d44420] file:cursor-pointer cursor-pointer"
//                     />
//                     <Upload className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
//                   </div>
//                   {formData.cv && (
//                     <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
//                       <Check size={14} /> {formData.cv.name}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-gradient-to-r from-[#0A1721] to-slate-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group mt-6"
//                   style={{ animation: "slideInLeft 0.5s ease-out 0.6s both" }}
//                 >
//                   Submit Application
//                   <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes checkmark {
//           0% {
//             transform: scale(0) rotate(-45deg);
//           }
//           50% {
//             transform: scale(1.2) rotate(0deg);
//           }
//           100% {
//             transform: scale(1) rotate(0deg);
//           }
//         }

//         /* Custom Scrollbar */
//         *::-webkit-scrollbar {
//           width: 8px;
//         }

//         *::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }

//         *::-webkit-scrollbar-thumb {
//           background: #F15124;
//           border-radius: 10px;
//         }

//         *::-webkit-scrollbar-thumb:hover {
//           background: #d44420;
//         }
//       `}</style>
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import { UserCircle, X, Send, Upload, Check, AlertCircle } from "lucide-react";

export default function FloatingApplyForm({ forceOpen = false, onCloseExternally }) {
  const [open, setOpen] = useState(forceOpen);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    field: "",
    cv: null,
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

  // 🧩 Handle manual close (via X button or backdrop)
  const handleClose = () => {
    setOpen(false);
    if (onCloseExternally) onCloseExternally();
  };


  // handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.field) newErrors.field = "Please select a field.";
    if (!formData.cv) newErrors.cv = "Please upload your CV.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("field", formData.field);
      formDataToSend.append("cv", formData.cv);

      try {
        const response = await fetch(`${API_BASE_URL}/apply.php`, {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.status === "success") {
          setSubmitted(true);
          setTimeout(() => {
            onClick = { handleClose };;
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", field: "", cv: null });
            handleClose(); // 👈 Notify parent to close
          }, 2000);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Error submitting form. Please try again.");
        console.error(error);
      }
    }
  };


  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 ">
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative group">
          {!open && (
            <div className="absolute inset-0 rounded-full bg-[#F15124] opacity-75 animate-ping" />
          )}

          <button
            onClick={() => setOpen(!open)}
            className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl overflow-hidden"
            style={{ border: "2px solid #F15124" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F15124] to-[#ff6b47] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            {open ? (
              <X size={32} color="#F15124" className="transition-transform duration-300 rotate-0 group-hover:rotate-90" />
            ) : (
              <UserCircle size={32} color="#F15124" className="transition-transform duration-300 group-hover:rotate-12" />
            )}
          </button>

          {!open && (
            <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              Apply Now
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800" />
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={handleClose}
          style={{ animation: "fadeIn 0.3s ease-out" }}
        />
      )}

      {/* Form Popup */}
      {open && (
        <div
          className="fixed bottom-24 left-6 md:w-96 w-85  bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          style={{
            border: "2px solid #0A1721",
            animation: "slideUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A1721] to-slate-700 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F15124]/10 to-transparent" />
            <div className="relative flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <UserCircle className="animate-bounce" />
                Apply Now
              </h2>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-white/80 text-sm mt-2 relative">Start your journey with us today</p>
          </div>

          {/* Form */}
          <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-12" style={{ animation: "scaleIn 0.5s ease-out" }}>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={40} className="text-green-600" style={{ animation: "checkmark 0.6s ease-out" }} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Success!</h3>
                <p className="text-slate-600">Your application has been submitted</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="relative">
                  <label className="block font-semibold text-start mb-2 text-slate-700 text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 focus:shadow-lg ${errors.name ? "border-red-500" : "border-slate-200 focus:border-[#F15124]"
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs flex items-center mt-1 gap-1">
                      <AlertCircle size={14} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 focus:shadow-lg ${errors.email ? "border-red-500" : "border-slate-200 focus:border-[#F15124]"
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center mt-1 gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 focus:shadow-lg ${errors.phone ? "border-red-500" : "border-slate-200 focus:border-[#F15124]"
                      }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs flex items-center mt-1 gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Field */}
                <div className="relative">
                  <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
                    Field of Interest
                  </label>
                  <select
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 focus:shadow-lg appearance-none cursor-pointer ${errors.field ? "border-red-500" : "border-slate-200 focus:border-[#F15124]"
                      }`}
                  >
                    <option value="">Select Your Field</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="App Development">App Development</option>
                  </select>
                  {errors.field && (
                    <p className="text-red-500 text-xs flex items-center mt-1 gap-1">
                      <AlertCircle size={14} /> {errors.field}
                    </p>
                  )}
                </div>

                {/* CV Upload */}
                <div className="relative">
                  <label className="block text-start font-semibold mb-2 text-slate-700 text-sm">
                    Upload CV/Resume
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F15124] file:text-white hover:file:bg-[#d44420] cursor-pointer ${errors.cv ? "border-red-500" : "border-slate-200 focus:border-[#F15124]"
                        }`}
                    />
                    <Upload className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                  </div>
                  {formData.cv && (
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <Check size={14} /> {formData.cv.name}
                    </p>
                  )}
                  {errors.cv && (
                    <p className="text-red-500 text-xs flex items-center mt-1 gap-1">
                      <AlertCircle size={14} /> {errors.cv}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0A1721] to-slate-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group mt-6"
                >
                  Submit Application
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes checkmark {
          0% { transform: scale(0) rotate(-45deg); }
          50% { transform: scale(1.2) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        *::-webkit-scrollbar { width: 8px; }
        *::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        *::-webkit-scrollbar-thumb { background: #F15124; border-radius: 10px; }
        *::-webkit-scrollbar-thumb:hover { background: #d44420; }
      `}</style>
    </div>
  );
}
