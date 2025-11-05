import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
    isRobot: false,
  });

  const [modal, setModal] = useState({
    show: false,
    type: "", // "success" | "error"
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showModal = (type, message) => {
    setModal({ show: true, type, message });
    setTimeout(() => setModal({ show: false, type: "", message: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.description.trim()
    ) {
      showModal("error", "Please fill all fields.");
      return;
    }

    if (!formData.isRobot) {
      showModal("error", "Please verify that you're not a robot.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/contact_submit.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error("Invalid JSON response from backend.");
      }

      if (data.status === "success") {
        showModal("success", "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          description: "",
          isRobot: false,
        });
      } else {
        showModal("error", data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      showModal("error", "There was a problem sending your message.");
    }
  };

  const bgPattern =
    "url(\"data:image/svg+xml;utf8,<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23dbeafe' fill-opacity='0.4'><circle cx='30' cy='30' r='2'/></g></g></svg>\")";

  return (
    <div className="relative flex items-center justify-center py-12 px-8">
      {/* ✅ Modal Popup */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl shadow-2xl text-white text-center z-50 ${modal.type === "success"
              ? "bg-green-500"
              : "bg-red-500"
              }`}
          >
            <div className="flex items-center gap-3">
              {modal.type === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span className="font-semibold text-lg">{modal.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Form */}
      <motion.div
        className="max-w-7xl w-full bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-indigo-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div
            className="relative p-12 flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: bgPattern,
              backgroundColor: "#EEF2FF",
              backgroundSize: "60px 60px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl text-[#2C3E50] leading-tight">
                Let’s Build Something Great
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Have an idea or project in mind? Get in touch and let’s
                transform your vision into reality — quickly and creatively.
              </p>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <img src="./contact.avif" alt="" className="w-full" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-[#2C3E50] mb-8 text-center lg:text-left">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "firstName", label: "First Name", type: "text", icon: "👤" },
                  { name: "lastName", label: "Last Name", type: "text", icon: "👤" },
                  { name: "email", label: "Email", type: "email", icon: "✉️" },
                  { name: "mobile", label: "Mobile Number", type: "tel", icon: "📱" },
                ].map(({ name, label, type, icon }) => (
                  <div key={name} className="relative group">
                    <div className="absolute left-0 top-3 text-lg opacity-0 -translate-x-2 transition-all duration-300 group-focus-within:opacity-100 group-focus-within:translate-x-0">
                      {icon}
                    </div>

                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 py-3.5 pl-0 focus:pl-8 placeholder-transparent outline-none text-gray-800 transition-all duration-300 bg-transparent group-focus-within:bg-gradient-to-r group-focus-within:from-indigo-50/30 group-focus-within:to-transparent rounded-t-lg px-2"
                      placeholder={label}
                      required
                    />

                    <label
                      className="absolute left-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none 
                     peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                     peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:text-xs peer-focus:font-semibold
                     top-0 font-semibold 
                     peer-[&:not(:placeholder-shown)]:top-0 
                     peer-[&:not(:placeholder-shown)]:text-xs 
                     peer-[&:not(:placeholder-shown)]:text-indigo-600 
                     peer-[&:not(:placeholder-shown)]:font-semibold"
                    >
                      {label}
                    </label>

                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 peer-focus:w-full"></div>
                  </div>
                ))}
              </div>

              {/* Textarea */}
              <div className="relative group">
                <div className="absolute left-0 top-3 text-lg opacity-0 -translate-x-2 transition-all duration-300 group-focus-within:opacity-100 group-focus-within:translate-x-0 z-10">
                  📝
                </div>

                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  className="peer w-full border-2 border-gray-300 focus:border-indigo-500 py-3.5 px-4 focus:pl-10 placeholder-transparent outline-none resize-none text-gray-800 rounded-xl transition-all duration-300 bg-white focus:bg-gradient-to-br focus:from-indigo-50/30 focus:to-transparent focus:shadow-lg focus:shadow-indigo-100/50"
                  placeholder="Project Description"
                />

                <label
                  className="absolute transition-all duration-300 pointer-events-none
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-indigo-600 peer-focus:text-xs peer-focus:font-semibold
                 peer-focus:bg-white peer-focus:px-2
                 top-2.5 left-3 text-xs font-semibold text-indigo-600 bg-white px-2
                 peer-[&:not(:placeholder-shown)]:-top-2.5 
                 peer-[&:not(:placeholder-shown)]:left-3 
                 peer-[&:not(:placeholder-shown)]:text-xs 
                 peer-[&:not(:placeholder-shown)]:text-indigo-600 
                 peer-[&:not(:placeholder-shown)]:font-semibold 
                 peer-[&:not(:placeholder-shown)]:bg-white 
                 peer-[&:not(:placeholder-shown)]:px-2"
                >
                  Project Description
                </label>

                {/* Character counter */}
                <div className="absolute bottom-3 right-3 text-xs text-gray-400 opacity-0 transition-opacity duration-300 peer-focus:opacity-100">
                  {formData.description.length} characters
                </div>
              </div>

              {/* Robot Verification */}
              <div className="group relative">
                <input
                  type="checkbox"
                  name="isRobot"
                  checked={formData.isRobot}
                  onChange={handleChange}
                  className="peer sr-only"
                  id="robot-check"
                />

                <label
                  htmlFor="robot-check"
                  className="flex items-center justify-between p-5 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 peer-checked:border-indigo-500 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:to-blue-50 peer-checked:shadow-xl peer-checked:shadow-indigo-200/50 active:scale-[0.98]"
                >
                  <div className="flex items-center space-x-4">
                    {/* Custom checkbox visual */}
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-xl border-2 bg-white transition-all duration-300 shadow-sm ${formData.isRobot
                        ? "border-transparent bg-gradient-to-br from-indigo-500 to-indigo-600 scale-110 shadow-md"
                        : "border-gray-300 group-hover:border-indigo-400"
                        }`}
                    >
                      <svg
                        className={`w-5 h-5 text-white transition-all duration-300 ${formData.isRobot ? "opacity-100 scale-100" : "opacity-0 scale-50"
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span
                        className={`text-base font-semibold transition-colors duration-300 ${formData.isRobot ? "text-indigo-700" : "text-gray-800"
                          }`}
                      >
                        I'm not a robot
                      </span>
                      <span
                        className={`text-xs transition-colors duration-300 ${formData.isRobot ? "text-indigo-600" : "text-gray-500"
                          }`}
                      >
                        Verify you're human
                      </span>
                    </div>
                  </div>

                  {/* Animated robot emoji */}
                  <div
                    className={`text-3xl transition-all duration-500 group-hover:scale-110 ${formData.isRobot ? "scale-125 rotate-12" : ""
                      }`}
                  >
                    🤖
                  </div>
                </label>

                {/* Success indicator */}
                <div
                  className={`absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 transition-all duration-300 ${formData.isRobot ? "opacity-100 scale-100 animate-bounce" : "opacity-0 scale-0"
                    }`}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-end"
              >
                <button
                  type="submit"
                  className="group relative px-12 py-4 rounded-full font-semibold text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] to-[#34495E] transition-all duration-300"></div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F15124] to-[#E74C3C] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                  {/* Button content */}
                  <span className="relative flex items-center gap-2 tracking-wide">
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </form>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
