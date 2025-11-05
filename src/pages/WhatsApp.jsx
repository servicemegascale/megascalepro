// import React, { useEffect, useState } from "react";

// export default function FloatingWhatsApp() {
//   // Replace this with your number (country code + phone, no + sign). Example: India: 919876543210
//   const PHONE = "919876543210";
//   const MESSAGE = "Hello Sir"; // change the prefilled message if you want
//   const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

//   const [mounted, setMounted] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 300);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div
//       className={`fixed right-6 bottom-6 z-50 transition-all duration-700 ease-out ${
//         mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75"
//       }`}
//     >
//       {/* Animated pulsing rings */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping" style={{ animationDuration: '2s' }} />
//         <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
//       </div>

//       {/* Link opens WhatsApp */}
//       <a
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
//       >
//         {/* Gradient background with glow effect */}
//         <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 opacity-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/60" />

//         {/* Animated rotating ring */}
//         <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ${isHovered ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} />

//         {/* Sparkle effect on hover */}
//         {isHovered && (
//           <>
//             <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
//             <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
//           </>
//         )}

//         {/* WhatsApp icon with bounce animation */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className={`relative z-10 w-8 h-8 fill-white transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}
//           aria-hidden="true"
//         >
//           <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .083 5.29.083 11.917c0 2.1.547 4.154 1.587 5.98L0 24l6.407-1.66A11.895 11.895 0 0012 23.834C18.627 23.834 23.917 18.544 23.917 11.917a11.94 11.94 0 00-3.397-8.437zM12 21.334c-1.22 0-2.416-.278-3.48-.803l-.25-.123-3.808.984.99-3.71-.128-.263A8.416 8.416 0 013.583 11.92c0-4.65 3.767-8.417 8.417-8.417 4.65 0 8.417 3.767 8.417 8.417 0 4.65-3.767 8.417-8.417 8.417z" />
//           <path d="M17.04 14.29c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.72.94-.88 1.13-.16.19-.32.21-.6.07-.29-.14-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.98-.17-.28-.02-.43.12-.57.12-.12.29-.31.43-.46.15-.15.2-.26.3-.44.1-.19.04-.35-.02-.49-.06-.14-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49-.17 0-.37-.01-.57-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3.01.14.19 2.03 3.1 4.92 4.34 3.08 1.32 3.08.88 3.64.82.57-.06 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.48-.07-.12-.26-.19-.55-.33z" />
//         </svg>

//         {/* Enhanced tooltip with slide animation */}
//         <span 
//           className={`pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-xl transition-all duration-300 ${
//             isHovered ? 'opacity-100 -translate-x-full' : 'opacity-0 translate-x-2'
//           }`}
//         >
//           <span className="relative z-10">💬 Chat on WhatsApp</span>
//           {/* Tooltip arrow */}
//           <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-neutral-900" />
//         </span>

//         {/* Notification badge (optional - you can show/hide this) */}
//         <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce">
//           <span className="text-white text-xs font-bold">1</span>
//         </div>
//       </a>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";

export default function FloatingButtons() {
  // WhatsApp setup
  const PHONE = "919876543210";
  const MESSAGE = "Hello Sir";
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  const [mounted, setMounted] = useState(false);
  const [isWAHovered, setIsWAHovered] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ===== WhatsApp Button ===== */}
      <div
        className={`fixed right-6 bottom-24 z-50 transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75"
        }`}
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          />
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setIsWAHovered(true)}
          onMouseLeave={() => setIsWAHovered(false)}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 opacity-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/60" />

          <div
            className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ${
              isWAHovered ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          />

          {isWAHovered && (
            <>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.3s" }}
              />
            </>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`relative z-10 w-8 h-8 fill-white transition-all duration-300 ${
              isWAHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
            }`}
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .083 5.29.083 11.917c0 2.1.547 4.154 1.587 5.98L0 24l6.407-1.66A11.895 11.895 0 0012 23.834C18.627 23.834 23.917 18.544 23.917 11.917a11.94 11.94 0 00-3.397-8.437zM12 21.334c-1.22 0-2.416-.278-3.48-.803l-.25-.123-3.808.984.99-3.71-.128-.263A8.416 8.416 0 013.583 11.92c0-4.65 3.767-8.417 8.417-8.417 4.65 0 8.417 3.767 8.417 8.417 0 4.65-3.767 8.417-8.417 8.417z" />
            <path d="M17.04 14.29c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.72.94-.88 1.13-.16.19-.32.21-.6.07-.29-.14-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.98-.17-.28-.02-.43.12-.57.12-.12.29-.31.43-.46.15-.15.2-.26.3-.44.1-.19.04-.35-.02-.49-.06-.14-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49-.17 0-.37-.01-.57-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3.01.14.19 2.03 3.1 4.92 4.34 3.08 1.32 3.08.88 3.64.82.57-.06 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.48-.07-.12-.26-.19-.55-.33z" />
          </svg>

          <span
            className={`pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-xl transition-all duration-300 ${
              isWAHovered ? "opacity-100 -translate-x-full" : "opacity-0 translate-x-2"
            }`}
          >
            <span className="relative z-10">💬 Chat on WhatsApp</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-neutral-900" />
          </span>

          <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </a>
      </div>

      {/* ===== Scroll to Top Button ===== */}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#F15124] text-white2134567
           shadow-2xl hover:scale-110 transition-transform duration-300 text-white focus:outline-none focus:ring-4 focus:ring-[#F15124]/50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
          </svg>
        </button>
      )}
    </>
  );
}
