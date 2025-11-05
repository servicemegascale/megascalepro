// import React, { useState, useEffect } from 'react';

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState(''); // Added for newsletter signup
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Check localStorage to prevent showing popup multiple times (e.g., once per 7 days for uniqueness)
//   const popupKey = 'newsletterPopupShown';
//   const hasShownPopup = localStorage.getItem(popupKey);
//   const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

//   // Auto-open popup after 5 seconds if not shown in last 7 days (unique timing)
//   useEffect(() => {
//     if (hasShownPopup && parseInt(hasShownPopup) > sevenDaysAgo) return;

//     const timer = setTimeout(() => {
//       setIsOpen(true);
//       setIsVisible(true);
//       localStorage.setItem(popupKey, Date.now().toString()); // Timestamp for 7-day reset
//     }, 5000); // Unique: 5 seconds delay

//     return () => clearTimeout(timer);
//   }, [hasShownPopup, sevenDaysAgo]);

//   const closePopup = () => {
//     setIsVisible(false);
//     setTimeout(() => setIsOpen(false), 300);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsSubmitting(true);
//     // Simulate API call for newsletter signup (replace with real endpoint)
//     await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
//     alert(`Thanks for subscribing with ${email}! We'll keep you updated.`); // Placeholder
//     setEmail('');
//     setIsSubmitting(false);
//     closePopup();
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Enhanced Overlay with blur effect for uniqueness */}
//       <div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           backdropFilter: 'blur(5px)', // Unique blur effect
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 1000,
//           opacity: isVisible ? 1 : 0,
//           transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Smooth cubic-bezier animation
//         }}
//         onClick={closePopup}
//         aria-hidden="true"
//       />

//       {/* Modal Card with bounce-in animation */}
//       <div
//         style={{
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: `translate(-50%, -50%) ${isVisible ? 'scale(1) rotateX(0deg)' : 'scale(0.9) rotateX(10deg)'} translateY(-20px)`,
//           background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', // Unique gradient bg
//           borderRadius: '16px', // Slightly larger radius
//           padding: '24px',
//           maxWidth: '420px',
//           width: '90%',
//           fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Unique font stack
//           boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)', // Enhanced shadow
//           zIndex: 1001,
//           maxHeight: '90vh',
//           overflowY: 'auto',
//           transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.4s ease', // Bounce-like easing
//           opacity: isVisible ? 1 : 0,
//           border: '1px solid rgba(255, 193, 7, 0.2)' // Subtle border glow
//         }}
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="popup-title"
//       >
//         {/* Close Button with icon */}
//         <button
//           onClick={closePopup}
//           style={{
//             position: 'absolute',
//             top: '12px',
//             right: '16px',
//             background: 'rgba(108, 117, 125, 0.1)',
//             border: '1px solid rgba(108, 117, 125, 0.2)',
//             fontSize: '20px',
//             cursor: 'pointer',
//             color: '#6c757d',
//             width: '32px',
//             height: '32px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: '50%',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = '#dc3545';
//             e.target.style.color = '#fff';
//             e.target.style.transform = 'scale(1.1)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = 'rgba(108, 117, 125, 0.1)';
//             e.target.style.color = '#6c757d';
//             e.target.style.transform = 'scale(1)';
//           }}
//           aria-label="Close popup"
//         >
//           ✕
//         </button>

//         {/* Top Badge with glow */}
//         {/* <div style={{
//           position: 'absolute',
//           top: '-12px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           backgroundColor: '#fff',
//           padding: '6px 18px',
//           borderRadius: '24px',
//           border: '2px solid #ffc107',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           boxShadow: '0 2px 8px rgba(255, 193, 7, 0.3)' // Unique glow shadow
//         }}>
//           <span style={{ fontSize: '12px', color: '#333', fontWeight: 'bold' }}>SAME DAY RESPONSE</span>
//           <div style={{ display: 'flex', gap: '2px' }}>
//             {[...Array(4)].map((_, i) => (
//               <span key={i} style={{ fontSize: '12px', color: '#ffc107' }}>⭐</span>
//             ))}
//           </div>
//           <span style={{ fontSize: '12px', color: '#333', fontWeight: 'bold' }}>GUARANTEED</span>
//         </div> */}

//         {/* Main Header */}
//         <div
//           id="popup-title"
//           style={{
//             background: 'linear-gradient(90deg, #ffc107 0%, #fd7e14 100%)', // Unique gradient header
//             color: '#333',
//             padding: '16px',
//             borderRadius: '10px',
//             textAlign: 'center',
//             fontSize: '20px',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//             boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)'
//           }}
//         >
//           GET IN TOUCH
//         </div>

//         {/* Description */}
//         <div style={{
//           color: '#495057',
//           fontSize: '14px',
//           lineHeight: '1.6',
//           marginBottom: '20px',
//           textAlign: 'center'
//         }}>
//           <p>Let's talk about your project!</p>
//           <p style={{ fontStyle: 'italic', color: '#6c757d' }}>
//             No Spam, No Upselling! Just a detailed discussion.
//           </p>
//         </div>

//         {/* Newsletter Signup Form - Unique addition for newsletter theme */}
//         <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//           <div style={{ marginBottom: '12px' }}>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email for updates"
//               style={{
//                 width: '100%',
//                 padding: '10px 12px',
//                 border: '1px solid #ced4da',
//                 borderRadius: '6px',
//                 fontSize: '14px',
//                 transition: 'border-color 0.3s'
//               }}
//               onFocus={(e) => e.target.style.borderColor = '#ffc107'}
//               onBlur={(e) => e.target.style.borderColor = '#ced4da'}
//               required
//               aria-label="Email for newsletter"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting || !email}
//             style={{
//               width: '100%',
//               backgroundColor: '#ffc107',
//               color: '#333',
//               padding: '12px',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '16px',
//               fontWeight: 'bold',
//               cursor: isSubmitting ? 'not-allowed' : 'pointer',
//               transition: 'all 0.3s ease',
//               opacity: isSubmitting ? 0.7 : 1
//             }}
//             onMouseEnter={(e) => {
//               if (!isSubmitting && email) {
//                 e.target.style.backgroundColor = '#e0a800';
//                 e.target.style.transform = 'translateY(-1px)';
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (!isSubmitting && email) {
//                 e.target.style.backgroundColor = '#ffc107';
//                 e.target.style.transform = 'translateY(0)';
//               }
//             }}
//           >
//             {isSubmitting ? 'Subscribing...' : 'SUBSCRIBE & BOOK CALL'}
//           </button>
//         </form>

//         {/* Contact Options - Kept but made more compact */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-around',
//           marginBottom: '16px',
//           flexWrap: 'wrap',
//           opacity: 0.8 // Slightly faded for focus on form
//         }}>
//           <div style={{ textAlign: 'center', margin: '4px' }}>
//             <span style={{ fontSize: '22px', color: '#007bff' }}>📞</span>
//             <div style={{ fontSize: '11px', color: '#6c757d' }}>Book a Call</div>
//           </div>
//           <div style={{ textAlign: 'center', margin: '4px' }}>
//             <span style={{ fontSize: '22px', color: '#25d366' }}>💬</span>
//             <div style={{ fontSize: '11px', color: '#6c757d' }}>WhatsApp</div>
//           </div>
//           <div style={{ textAlign: 'center', margin: '4px' }}>
//             <span style={{ fontSize: '22px', color: '#dc3545' }}>📧</span>
//             <div style={{ fontSize: '11px', color: '#6c757d' }}>Email Us</div>
//           </div>
//         </div>

//         {/* Phone Numbers - Compact grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '8px',
//           marginBottom: '16px',
//           fontSize: '11px',
//           color: '#495057',
//           opacity: 0.8
//         }}>
//           <div><span style={{ fontSize: '14px', color: '#28a745' }}>📞</span> India: +91977301990</div>
//           <div><span style={{ fontSize: '14px', color: '#28a745' }}>📞</span> UK: +4475378459</div>
//           <div><span style={{ fontSize: '14px', color: '#28a745' }}>📞</span> USA: +12028746888</div>
//           <div><span style={{ fontSize: '14px', color: '#28a745' }}>📞</span> AUS: +61485921488</div>
//         </div>

//         {/* Bottom Checks */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '16px',
//           fontSize: '11px',
//           color: '#28a745'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//             <span>✅</span> 100% Confidential
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//             <span>✅</span> We Sign NDA
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsletterPopup;































// import React, { useState, useEffect } from "react";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const popupKey = "newsletterPopupShown";
//   const hasShownPopup = localStorage.getItem(popupKey);
//   const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

//   useEffect(() => {
//     if (hasShownPopup && parseInt(hasShownPopup) > sevenDaysAgo) return;

//     const timer = setTimeout(() => {
//       setIsOpen(true);
//       setIsVisible(true);
//       localStorage.setItem(popupKey, Date.now().toString());
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [hasShownPopup, sevenDaysAgo]);

//   const closePopup = () => {
//     setIsVisible(false);
//     setTimeout(() => setIsOpen(false), 400);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     alert(`Thanks for subscribing with ${email}!`);
//     setEmail("");
//     setIsSubmitting(false);
//     closePopup();
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* --- Overlay --- */}
//       <div
//         onClick={closePopup}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "rgba(0,0,0,0.55)",
//           backdropFilter: "blur(6px)",
//           zIndex: 999,
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.5s ease",
//         }}
//       />

//       {/* --- Modal --- */}
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.9})`,
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
//           zIndex: 1000,
//           width: "90%",
//           maxWidth: "420px",
//           background:
//             "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(245,247,250,0.95))",
//           borderRadius: "20px",
//           boxShadow:
//             "0 12px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.2) inset",
//           padding: "28px",
//           fontFamily: "Poppins, sans-serif",
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           style={{
//             position: "absolute",
//             top: "14px",
//             right: "16px",
//             background: "rgba(255,255,255,0.6)",
//             border: "none",
//             borderRadius: "50%",
//             width: "32px",
//             height: "32px",
//             fontSize: "18px",
//             color: "#555",
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = "#ff4d4f";
//             e.target.style.color = "#fff";
//             e.target.style.transform = "rotate(90deg)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = "rgba(255,255,255,0.6)";
//             e.target.style.color = "#555";
//             e.target.style.transform = "rotate(0deg)";
//           }}
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <div
//           style={{
//             textAlign: "center",
//             fontSize: "22px",
//             fontWeight: "700",
//             background:
//               "linear-gradient(90deg, #ffb703 0%, #fb8500 50%, #ffb703 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "16px",
//           }}
//         >
//           Let's Build Something Amazing 🚀
//         </div>

//         {/* Description */}
//         <p
//           style={{
//             color: "#555",
//             fontSize: "14px",
//             textAlign: "center",
//             marginBottom: "20px",
//           }}
//         >
//           Get in touch with our experts — subscribe now and book a free project
//           consultation.
//         </p>

//         {/* Input */}
//         <form onSubmit={handleSubmit}>
//           {/* <input
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               width: "100%",
//               padding: "12px 14px",
//               fontSize: "14px",
//               border: "1px solid #dee2e6",
//               borderRadius: "8px",
//               outline: "none",
//               marginBottom: "12px",
//               transition: "all 0.3s ease",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#fb8500")}
//             onBlur={(e) => (e.target.style.borderColor = "#dee2e6")}
//           /> */}

//           <button
//             type="submit"
//             disabled={isSubmitting || !email}
//             style={{
//               width: "100%",
//               padding: "12px",
//               background:
//                 "linear-gradient(90deg, #ffb703 0%, #fb8500 100%)",
//               border: "none",
//               borderRadius: "8px",
//               color: "#fff",
//               fontWeight: "600",
//               fontSize: "15px",
//               cursor: "pointer",
//               transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               boxShadow: "0 4px 10px rgba(251,133,0,0.3)",
//               opacity: isSubmitting ? 0.7 : 1,
//             }}
//             onMouseEnter={(e) =>
//               (e.target.style.transform = "translateY(-3px)")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.transform = "translateY(0)")
//             }
//           >
//             {isSubmitting ? "Submitting..." : "Subscribe & Book Call"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div
//           style={{
//             margin: "20px 0",
//             height: "1px",
//             background:
//               "linear-gradient(90deg, transparent, #ddd, transparent)",
//           }}
//         ></div>

//         {/* Contact Options */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             flexWrap: "wrap",
//             marginBottom: "12px",
//             color: "#666",
//           }}
//         >
//           {/* BOOK CALL BUTTON */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={() =>
//               window.open("https://calendly.com/your-company-link", "_blank")
//             }
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             📞
//             <div style={{ fontSize: "12px", color: "#fb8500" }}>Book a Call</div>
//           </div>

//           {/* WHATSAPP BUTTON */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={() =>
//               window.open("https://wa.me/91977301990", "_blank")
//             }
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             💬
//             <div style={{ fontSize: "12px", color: "#25D366" }}>WhatsApp</div>
//           </div>

//           {/* EMAIL BUTTON */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={() => (window.location.href = "mailto:info@megascale.com")}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             ✉️
//             <div style={{ fontSize: "12px", color: "#007BFF" }}>Email Us</div>
//           </div>
//         </div>

//         {/* Phone Numbers */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "8px",
//             fontSize: "12px",
//             color: "#555",
//             textAlign: "center",
//           }}
//         >
//           <div>🇮🇳 +91 977301990</div>
//           <div>🇬🇧 +44 75378459</div>
//           <div>🇺🇸 +1 2028746888</div>
//           <div>🇦🇺 +61 485921488</div>
//         </div>

//         {/* Footer */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "14px",
//             fontSize: "11px",
//             color: "#28a745",
//             marginTop: "14px",
//           }}
//         >
//           <div>✅ 100% Confidential</div>
//           <div>✅ We Sign NDA</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsletterPopup;

































// import React, { useState, useEffect } from "react";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const popupKey = "newsletterPopupShown";
//   const hasShownPopup = localStorage.getItem(popupKey);
//   const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

//   useEffect(() => {
//     if (hasShownPopup && parseInt(hasShownPopup) > sevenDaysAgo) return;

//     const timer = setTimeout(() => {
//       setIsOpen(true);
//       setIsVisible(true);
//       localStorage.setItem(popupKey, Date.now().toString());
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [hasShownPopup, sevenDaysAgo]);

//   const closePopup = () => {
//     setIsVisible(false);
//     setTimeout(() => setIsOpen(false), 400);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     alert(`Thanks for subscribing with ${email}!`);
//     setEmail("");
//     setIsSubmitting(false);
//     closePopup();
//   };

//   // 📧 Email link auto-detect Gmail or default mail app
//   const handleEmailClick = () => {
//     const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
//     const gmailLink =
//       "https://mail.google.com/mail/?view=cm&fs=1&to=info@megascale.com&su=Project%20Inquiry&body=Hi%20Team%20Megascale,";
//     const mailtoLink =
//       "mailto:info@megascale.com?subject=Project%20Inquiry&body=Hi%20Team%20Megascale,";

//     window.open(isMobile ? mailtoLink : gmailLink, "_blank");
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={closePopup}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "rgba(0,0,0,0.55)",
//           backdropFilter: "blur(6px)",
//           zIndex: 999,
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.5s ease",
//         }}
//       />

//       {/* Popup Modal */}
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.9})`,
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
//           zIndex: 1000,
//           width: "90%",
//           maxWidth: "420px",
//           background:
//             "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(245,247,250,0.95))",
//           borderRadius: "20px",
//           boxShadow:
//             "0 12px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.2) inset",
//           padding: "28px",
//           fontFamily: "Poppins, sans-serif",
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           style={{
//             position: "absolute",
//             top: "14px",
//             right: "16px",
//             background: "rgba(255,255,255,0.6)",
//             border: "none",
//             borderRadius: "50%",
//             width: "32px",
//             height: "32px",
//             fontSize: "18px",
//             color: "#555",
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = "#ff4d4f";
//             e.target.style.color = "#fff";
//             e.target.style.transform = "rotate(90deg)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = "rgba(255,255,255,0.6)";
//             e.target.style.color = "#555";
//             e.target.style.transform = "rotate(0deg)";
//           }}
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <div
//           style={{
//             textAlign: "center",
//             fontSize: "22px",
//             fontWeight: "700",
//             background:
//               "linear-gradient(90deg, #ffb703 0%, #fb8500 50%, #ffb703 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "16px",
//           }}
//         >
//           Let's Build Something Amazing 🚀
//         </div>

//         {/* Description */}
//         <p
//           style={{
//             color: "#555",
//             fontSize: "14px",
//             textAlign: "center",
//             marginBottom: "20px",
//           }}
//         >
//           Get in touch with our experts — subscribe now and book a free project
//           consultation.
//         </p>

//         {/* Email Form */}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               width: "100%",
//               padding: "12px 14px",
//               fontSize: "14px",
//               border: "1px solid #dee2e6",
//               borderRadius: "8px",
//               outline: "none",
//               marginBottom: "12px",
//               transition: "all 0.3s ease",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#fb8500")}
//             onBlur={(e) => (e.target.style.borderColor = "#dee2e6")}
//           />

//           <button
//             type="submit"
//             disabled={isSubmitting || !email}
//             style={{
//               width: "100%",
//               padding: "12px",
//               background: "linear-gradient(90deg, #ffb703 0%, #fb8500 100%)",
//               border: "none",
//               borderRadius: "8px",
//               color: "#fff",
//               fontWeight: "600",
//               fontSize: "15px",
//               cursor: "pointer",
//               transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               boxShadow: "0 4px 10px rgba(251,133,0,0.3)",
//               opacity: isSubmitting ? 0.7 : 1,
//             }}
//             onMouseEnter={(e) =>
//               (e.target.style.transform = "translateY(-3px)")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.transform = "translateY(0)")
//             }
//           >
//             {isSubmitting ? "Submitting..." : "Subscribe & Book Call"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div
//           style={{
//             margin: "20px 0",
//             height: "1px",
//             background:
//               "linear-gradient(90deg, transparent, #ddd, transparent)",
//           }}
//         ></div>

//         {/* Contact Options */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             flexWrap: "wrap",
//             marginBottom: "12px",
//             color: "#666",
//           }}
//         >
//           {/* BOOK CALL */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={() => window.open("tel:+91977301990")}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.1)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           >
//             📞
//             <div style={{ fontSize: "12px", color: "#fb8500" }}>Book a Call</div>
//           </div>

//           {/* WHATSAPP */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={() =>
//               window.open(
//                 "https://wa.me/91977301990?text=Hi! I’d like to know more about your services.",
//                 "_blank"
//               )
//             }
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.1)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           >
//             💬
//             <div style={{ fontSize: "12px", color: "#25D366" }}>WhatsApp</div>
//           </div>

//           {/* EMAIL */}
//           <div
//             style={{
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onClick={handleEmailClick}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.1)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1)")
//             }
//           >
//             ✉️
//             <div style={{ fontSize: "12px", color: "#007BFF" }}>Email Us</div>
//           </div>
//         </div>

//         {/* Phone Numbers */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "8px",
//             fontSize: "12px",
//             color: "#555",
//             textAlign: "center",
//           }}
//         >
//           <div>🇮🇳 +91 977301990</div>
//           <div>🇬🇧 +44 75378459</div>
//           <div>🇺🇸 +1 2028746888</div>
//           <div>🇦🇺 +61 485921488</div>
//         </div>

//         {/* Footer
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "14px",
//             fontSize: "11px",
//             color: "#F15124",
//             marginTop: "14px",
//           }}
//         >
//           <div>100% Confidential</div>
//           <div>✅ We Sign NDA</div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default NewsletterPopup;






























// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiOutlineMail, HiPhone, HiOutlineChatAlt2 } from "react-icons/hi";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [dontShowAgain, setDontShowAgain] = useState(false);

//   const storageKey = "newsletterPopupDismissed";
//   const dismissDays = 7;

//   useEffect(() => {
//     const data = localStorage.getItem(storageKey);
//     if (data) {
//       const parsed = JSON.parse(data);
//       if (Date.now() < parsed.expiresAt) return;
//     }
//     setIsOpen(true);
//   }, []);

//   const validateEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       alert("Thank you for subscribing!");
//       setEmail("");
//       setLoading(false);
//       closePopup();
//     } catch {
//       setError("Something went wrong. Try again.");
//       setLoading(false);
//     }
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//     if (dontShowAgain) {
//       const expiresAt = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
//       localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center px-4"
//         >
//           {/* Background overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={closePopup}
//           />

//           {/* Popup container */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="relative z-10 max-w-md w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden"
//           >
//             {/* Decorative circles */}
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-pulse"></div>
//             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>

//             {/* Header */}
//             <div className="flex items-start justify-between">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
//                   <HiOutlineMail className="text-indigo-500" /> Stay Updated!
//                 </h2>
//                 <p className="text-gray-600 mt-1">
//                   Subscribe for latest updates, tips, and exclusive insights.
//                 </p>
//               </div>
//               <button
//                 onClick={closePopup}
//                 className="text-gray-400 hover:text-gray-700 text-2xl ml-3"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@company.com"
//                   className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 shadow-sm"
//                   required
//                 />
//                 {error && (
//                   <p className="text-red-600 text-sm mt-1">{error}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition-all disabled:opacity-50"
//               >
//                 {loading ? "Subscribing..." : "Subscribe Now"}
//               </button>
//             </form>

//             {/* Additional actions */}
//             <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
//               <a
//                 href="tel:+1234567890"
//                 className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:scale-105 transform transition-all"
//               >
//                 <HiPhone /> Book a Call
//               </a>
//               <a
//                 href="https://wa.me/1234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-green-400 text-white rounded-xl shadow hover:scale-105 transform transition-all"
//               >
//                 <HiOutlineChatAlt2 /> WhatsApp
//               </a>
//               <a
//                 href="mailto:info@company.com"
//                 className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-indigo-500 text-white rounded-xl shadow hover:scale-105 transform transition-all"
//               >
//                 <HiOutlineMail /> Email Us
//               </a>
//             </div>

//             {/* Don't show again */}
//             <div className="flex items-center mt-4">
//               <input
//                 type="checkbox"
//                 checked={dontShowAgain}
//                 onChange={(e) => setDontShowAgain(e.target.checked)}
//                 className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label className="ml-2 text-sm text-gray-500">
//                 Don't show again for {dismissDays} days
//               </label>
//             </div>

//             <p className="text-xs text-gray-400 mt-3 text-center">
//               100% Confidential — We never share your email.
//             </p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;



































// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineX,
//   HiOutlineMail,
//   HiPhone,
//   HiOutlineChatAlt2,
//   HiCheckCircle,
// } from "react-icons/hi";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dontShowAgain, setDontShowAgain] = useState(false);

//   const storageKey = "newsletterPopupDismissed";
//   const dismissDays = 7;

//   useEffect(() => {
//     const data = localStorage.getItem(storageKey);
//     if (data) {
//       const parsed = JSON.parse(data);
//       if (Date.now() < parsed.expiresAt) return;
//     }
//     const timer = setTimeout(() => setIsOpen(true), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => {
//     setIsOpen(false);
//     if (dontShowAgain) {
//       const expiresAt = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
//       localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 30 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 30 }}
//             transition={{ duration: 0.4 }}
//             className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden text-center p-7 md:p-9 border border-gray-200"
//           >
//             {/* ✖ Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
//             >
//               <HiOutlineX size={22} />
//             </button>

//             {/* 🌟 Animated Stars */}
//             {/* <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
//               className="flex justify-center mb-4 text-yellow-400 text-2xl"
//             >
//               {[...Array(5)].map((_, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 + i * 0.1 }}
//                 >
//                   ⭐
//                 </motion.span>
//               ))}
//             </motion.div> */}

//             {/* 🔰 Badge
//             <div className="inline-block bg-yellow-100 border border-yellow-400 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full mb-5">
//               SAME DAY RESPONSE — GUARANTEED
//             </div> */}

//             {/* 🚀 Title Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold text-lg py-3 rounded-xl shadow-lg hover:shadow-yellow-300/50 transition-all"
//             >
//               GET IN TOUCH
//             </motion.button>

//             {/* 💬 Info Box
//             <div className="bg-[#002B5B] text-white rounded-xl mt-6 py-4 px-4">
//               <p className="font-medium text-sm leading-relaxed">
//                 Let’s talk about your project! <br />
//                 No Spam, No Upselling! <br />
//                 Just a detailed discussion.
//               </p>
//             </div> */}





//             {/* 📩 Subscribe Form */}
//             <div className="bg-[#002B5B] text-white rounded-xl mt-6 py-5 px-5">
//               <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
//               <p className="text-sm text-gray-200 mb-4">
//                 Get updates, insights, and offers directly to your inbox!
//               </p>

//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   alert("🎉 Thank you for subscribing!");
//                 }}
//                 className="flex flex-col sm:flex-row items-center gap-3"
//               >
//                 <input
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="submit"
//                   className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-yellow-300/50 transition-all"
//                 >
//                   Subscribe
//                 </motion.button>
//               </form>
//             </div>




//             {/* ☎ Contact Options */}
//             <div className="flex justify-center mt-5 text-sm text-gray-700 divide-x divide-gray-300">
//               <a
//                 href="tel:+919773901990"
//                 className="px-3 flex items-center gap-1 hover:text-yellow-600 transition"
//               >
//                 <HiPhone /> Book a Call
//               </a>
//               <a
//                 href="https://wa.me/919773901990"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-3 flex items-center gap-1 hover:text-green-600 transition"
//               >
//                 <HiOutlineChatAlt2 /> Whatsapp
//               </a>
//               <a
//                 href="mailto:info@company.com"
//                 className="px-3 flex items-center gap-1 hover:text-blue-600 transition"
//               >
//                 <HiOutlineMail /> Email Us
//               </a>
//             </div>

//             {/* 🌍 Country Numbers */}
//             {/* <div className="mt-5 text-gray-700 text-sm space-y-2">
//               <div className="flex justify-center gap-3 flex-wrap">
//                 <span>🇮🇳 India: +91 97739 01990</span>
//                 <span>🇬🇧 UK: +44 75371 88459</span>
//               </div>
//               <div className="flex justify-center gap-3 flex-wrap">
//                 <span>🇺🇸 USA: +1 202 847 6988</span>
//                 <span>🇦🇺 AUS: +61 485 921 488</span>
//               </div>
//             </div> */}

//             {/* 💎 Discovery Button */}
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 20px rgba(250, 204, 21, 0.6)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold text-base py-3 mt-6 rounded-xl shadow-md hover:shadow-yellow-300/60 transition-all"
//             >
//               BOOK A DISCOVERY CALL NOW
//             </motion.button>

//             {/* ✅ Bottom Info */}
//             <div className="flex justify-center items-center gap-5 mt-5 text-gray-600 text-sm">
//               <div className="flex items-center gap-1">
//                 <HiCheckCircle className="text-green-500" /> 100% Confidential
//               </div>
//               <div className="flex items-center gap-1">
//                 <HiCheckCircle className="text-green-500" /> We Sign NDA
//               </div>
//             </div>

//             {/* ⛔ Don’t Show Again */}
//             <div className="flex items-center justify-center mt-5">
//               <input
//                 type="checkbox"
//                 checked={dontShowAgain}
//                 onChange={(e) => setDontShowAgain(e.target.checked)}
//                 className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label className="ml-2 text-sm text-gray-500">
//                 Don’t show again for {dismissDays} days
//               </label>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;



























// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineX,
//   HiOutlineMail,
//   HiPhone,
//   HiOutlineChatAlt2,
//   HiCheckCircle,
// } from "react-icons/hi";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dontShowAgain, setDontShowAgain] = useState(false);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const storageKey = "newsletterPopupDismissed";
//   const dismissDays = 7;

//   useEffect(() => {
//     const saved = localStorage.getItem(storageKey);
//     if (saved) {
//       const parsed = JSON.parse(saved);
//       if (Date.now() < parsed.expiresAt) return;
//     }
//     const timer = setTimeout(() => setIsOpen(true), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => {
//     setIsOpen(false);
//     if (dontShowAgain) {
//       const expiresAt = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
//       localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setSubmitted(true);
//     setTimeout(() => {
//       setEmail("");
//       setSubmitted(false);
//       alert("🎉 Thank you for subscribing!");
//     }, 1000);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 sm:px-0"
//         >
//           <motion.div
//             initial={{ scale: 0.85, opacity: 0, y: 40 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.85, opacity: 0, y: 40 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl w-full max-w-md text-center overflow-hidden"
//           >
//             {/* ✖ Close Button */}
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
//             >
//               <HiOutlineX size={22} />
//             </button>

//             {/* Header Section */}
//             <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 p-6 rounded-t-3xl">
//               <h2 className="text-xl font-extrabold text-gray-900">
//                 🚀 Let’s Build Something Great
//               </h2>
//               <p className="text-sm text-gray-800 mt-1">
//                 Subscribe for project insights & offers
//               </p>
//             </div>

//             {/* 📩 Subscribe Form */}
//             <div className="p-6 bg-gradient-to-b from-white to-gray-50">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   Subscribe to Our Newsletter
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-4">
//                   Get updates, insights, and offers directly to your inbox!
//                 </p>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col sm:flex-row items-center gap-3"
//                 >
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-300"
//                   />
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.97 }}
//                     type="submit"
//                     disabled={submitted}
//                     className={`${
//                       submitted
//                         ? "bg-green-500"
//                         : "bg-gradient-to-r from-yellow-500 to-amber-500"
//                     } text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-yellow-300/50 transition-all`}
//                   >
//                     {submitted ? "Subscribed ✅" : "Subscribe"}
//                   </motion.button>
//                 </form>
//               </motion.div>

//               {/* ☎ Contact Options */}
//               <div className="flex justify-center mt-6 text-sm text-gray-700 divide-x divide-gray-300">
//                 <a
//                   href="tel:+919773901990"
//                   className="px-3 flex items-center gap-1 hover:text-yellow-600 transition"
//                 >
//                   <HiPhone /> Call
//                 </a>
//                 <a
//                   href="https://wa.me/919773901990"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-3 flex items-center gap-1 hover:text-green-600 transition"
//                 >
//                   <HiOutlineChatAlt2 /> WhatsApp
//                 </a>
//                 <a
//                   href="mailto:info@company.com"
//                   className="px-3 flex items-center gap-1 hover:text-blue-600 transition"
//                 >
//                   <HiOutlineMail /> Email
//                 </a>
//               </div>

//               {/* 🌍 Country Numbers */}
//               <div className="mt-5 text-gray-700 text-sm space-y-1">
//                 <div className="flex justify-center gap-3 flex-wrap">
//                   <span>🇮🇳 +91 97739 01990</span>
//                   <span>🇬🇧 +44 75371 88459</span>
//                 </div>
//                 <div className="flex justify-center gap-3 flex-wrap">
//                   <span>🇺🇸 +1 202 847 6988</span>
//                   <span>🇦🇺 +61 485 921 488</span>
//                 </div>
//               </div>

//               {/* ✅ Bottom Info */}
//               <div className="flex justify-center items-center gap-5 mt-5 text-gray-600 text-sm">
//                 <div className="flex items-center gap-1">
//                   <HiCheckCircle className="text-green-500" /> 100% Confidential
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <HiCheckCircle className="text-green-500" /> We Sign NDA
//                 </div>
//               </div>

//               {/* ⛔ Don’t Show Again */}
//               <div className="flex items-center justify-center mt-6 mb-2">
//                 <input
//                   type="checkbox"
//                   checked={dontShowAgain}
//                   onChange={(e) => setDontShowAgain(e.target.checked)}
//                   className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 text-sm text-gray-500">
//                   Don’t show again for {dismissDays} days
//                 </label>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;
















// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiOutlineX,
//   HiOutlineMail,
//   HiPhone,
//   HiOutlineChatAlt2,
//   HiCheckCircle,
// } from "react-icons/hi";

// const NewsletterPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dontShowAgain, setDontShowAgain] = useState(false);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const storageKey = "newsletterPopupDismissed";
//   const dismissDays = 7;

//   useEffect(() => {
//     const saved = localStorage.getItem(storageKey);
//     if (saved) {
//       const parsed = JSON.parse(saved);
//       if (Date.now() < parsed.expiresAt) return;
//     }
//     const timer = setTimeout(() => setIsOpen(true), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => {
//     setIsOpen(false);
//     if (dontShowAgain) {
//       const expiresAt = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
//       localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setSubmitted(true);
//     setTimeout(() => {
//       setEmail("");
//       setSubmitted(false);
//       alert("🎉 Thank you for subscribing!");
//     }, 1000);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 pt-20"
//         >
//           {/* ✨ Outer Glow Border */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 50 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="relative w-full max-w-lg rounded-[2rem] overflow-hidden bg-[#ffffff] shadow-[#132e41]"
//           >
//             {/* 🌙 Inner Glass Box */}
//             <div className="relative rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 overflow-hidden">
//               {/* ❌ Close Button */}
//               <button
//                 onClick={closePopup}
//                 className="absolute top-4 right-4 text-white/70 hover:text-white transition"
//               >
//                 <HiOutlineX size={22} />
//               </button>

//               {/* 🔥 Header */}
//               <div className="bg-[#132e41] p-7 text-center shadow-inner">
//                 <h2 className="text-2xl font-bold text-white drop-shadow-sm">
//                   Let’s Build Something Great 🚀
//                 </h2>
//                 <p className="text-sm text-[#FFFFFF] mt-1 opacity-90">
//                   Subscribe for design insights, trends & exclusive offers!
//                 </p>
//               </div>

//               {/* 💌 Content */}
//               <div className="p-8 text-center text-[#132e41]">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h3 className="text-lg font-semibold mb-2">
//                     Subscribe to Our Newsletter
//                   </h3>
//                   <p className="text-sm text-[#132e41] mb-6">
//                     Get updates on digital strategy, UI design & development tips directly to your inbox.
//                   </p>

//                   {/* 📬 Form */}
//                   <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col sm:flex-row items-center gap-3"
//                   >
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                       placeholder="Enter your email"
//                       className="flex-1 px-4 py-3 rounded-xl text-[#132e41] placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#132e41] bg-white/90"
//                     />
//                     <motion.button
//                       whileHover={{
//                         scale: 1.05,
//                         // boxShadow: "0 0 20px rgba(251,191,36,0.7)",
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       type="submit"
//                       disabled={submitted}
//                       className={`${submitted
//                           ? "bg-green-500"
//                           : "bg-[#F15124]"
//                         } text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#132e41] transition-all`}
//                     >
//                       {submitted ? "Subscribed ✅" : "Subscribe"}
//                     </motion.button>
//                   </form>
//                 </motion.div>

//                 {/* 🌐 Divider */}
//                 <div className="border-t border-white/20 mt-8 mb-5"></div>

//                 {/* 📞 Contact Options */}
//                 <div className="flex justify-center text-sm text-[#132e41] divide-x divide-white/20">
//                   <a
//                     href="tel:+919773901990"
//                     className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
//                   >
//                     <HiPhone /> Call
//                   </a>
//                   <a
//                     href="https://wa.me/919773901990"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
//                   >
//                     <HiOutlineChatAlt2 /> WhatsApp
//                   </a>
//                   <a
//                     href="mailto:info@company.com"
//                     className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
//                   >
//                     <HiOutlineMail /> Email
//                   </a>
//                 </div>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     // boxShadow: "0 0 20px rgba(250, 204, 21, 0.6)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-[#F15124] text-white font-bold text-base py-3 mt-6 rounded-xl hover:bg-[#132e41] transition-all"
//                 >
//                   BOOK A DISCOVERY CALL NOW
//                 </motion.button>

//                 {/* ✅ Confidentiality */}
//                 <div className="flex justify-center items-center gap-5 mt-6 text-[#132e41] text-sm">
//                   <div className="flex items-center gap-1">
//                     <HiCheckCircle className="text-[#F15124]" /> 100% Confidential
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <HiCheckCircle className="text-[#F15124]" /> We Sign NDA
//                   </div>
//                 </div>

//                 {/* 🧠 Don't Show Again */}
//                 <div className="flex items-center justify-center mt-6 mb-1">
//                   <input
//                     type="checkbox"
//                     checked={dontShowAgain}
//                     onChange={(e) => setDontShowAgain(e.target.checked)}
//                     className="h-4 w-4 text-[#132e41] border-[#F15124] rounded focus:ring-amber-400"
//                   />
//                   <label className="ml-2 text-sm text-[#132e41]">
//                     Don’t show again for {dismissDays} days
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;

























import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineX,
  HiOutlineMail,
  HiPhone,
  HiOutlineChatAlt2,
  HiCheckCircle,
} from "react-icons/hi";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [email, setEmail] = useState("");

  const storageKey = "newsletterPopupDismissed";
  const dismissDays = 7;

  // Show popup after delay unless previously dismissed
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Date.now() < parsed.expiresAt) return;
    }
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Close popup & optionally save preference
  const closePopup = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      const expiresAt = Date.now() + dismissDays * 24 * 60 * 60 * 1000;
      localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
    }
  };

  // Discovery Call button
  const handleDiscoveryCall = () => {
    window.open(
      "https://wa.me/919773901990?text=Hi! I’d like to book a discovery call.",
      "_blank"
    );
  };

  // Handle mailto subscription
  const handleSubscribe = () => {
    if (!email) return;

    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(
      `Hi,\n\nI want to subscribe to your newsletter.\nMy email: ${email}`
    );
    window.location.href = `mailto:info@company.com?subject=${subject}&body=${body}`;

    setEmail("");
    closePopup();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 pt-20 pointer-events-auto"
        >
          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-[2rem] overflow-hidden bg-white shadow-lg"
          >
            <div className="relative rounded-[2rem] bg-white backdrop-blur-xl border border-gray-200 overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white hover:text-[#F15124] z-50"
              >
                <HiOutlineX size={22} />
              </button>

              {/* Header */}
              <div className="bg-[#132e41] p-4 text-center shadow-inner">
                <h2 className="text-2xl font-bold text-white drop-shadow-sm">
                  Let’s Build Something Great 🚀
                </h2>
                <p className="text-sm text-white mt-1 opacity-90">
                  Subscribe for design insights, trends & exclusive offers!
                </p>
              </div>

              {/* Content */}
              <div className="p-4 text-center text-[#132e41]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-sm text-[#132e41] mb-6">
                    Get updates on digital strategy, UI design & development tips directly to your inbox.
                  </p>

                  {/* Form */}
                  {/* <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl text-[#132e41] placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#132e41] bg-white/90"
                    />
                    <button
                      type="button"
                      onClick={handleSubscribe}
                      className="flex items-center justify-center bg-[#F15124] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#132e41] transition-all"
                    >
                      Subscribe
                    </button>
                  </div> */}
                </motion.div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-2 mb-5"></div>

                {/* Contact Options */}
                <div className="flex justify-center text-sm text-[#132e41] divide-x divide-gray-300">
                  <a
                    href="tel:+919773901990"
                    className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
                  >
                    <HiPhone /> Call
                  </a>
                  <a
                    href="https://wa.me/919773901990?text=Hi! I’m interested in your services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
                  >
                    <HiOutlineChatAlt2 /> WhatsApp
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=info@company.com&su=Hello&body=Hi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 flex items-center gap-1 hover:text-[#F15124] transition"
                  >
                    <HiOutlineMail /> Email
                  </a>
                </div>

                {/* Discovery Call Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDiscoveryCall}
                  className="w-full bg-[#F15124] text-white font-bold text-base py-3 mt-6 rounded-xl hover:bg-[#132e41] transition-all"
                >
                  BOOK A DISCOVERY CALL NOW
                </motion.button>

                {/* Confidentiality Section */}
                <div className="flex justify-center items-center gap-5 mt-6 text-[#132e41] text-sm">
                  <div className="flex items-center gap-1">
                    <HiCheckCircle className="text-[#F15124]" /> 100% Confidential
                  </div>
                  <div className="flex items-center gap-1">
                    <HiCheckCircle className="text-[#F15124]" /> We Sign NDA
                  </div>
                </div>

                {/* Don't Show Again */}
                <div className="flex items-center justify-center mt-2 mb-1">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="h-4 w-4 text-[#132e41] border-[#F15124] rounded focus:ring-[#132e41]"
                  />
                  <label className="ml-2 text-sm text-[#132e41]">
                    Don’t show again for {dismissDays} days
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
