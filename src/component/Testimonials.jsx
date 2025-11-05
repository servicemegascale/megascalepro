import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "CEO, InnovateTech",
    image: "/I1.jpg",
    feedback:
      "Megascale transformed our digital strategy. Their AI-driven solutions and creativity boosted our growth tremendously.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    role: "CTO, TechWave",
    image: "/I2.jpg",
    feedback:
      "Working with Megascale was seamless. They combine tech expertise with innovative strategies to deliver outstanding results.",
    rating: 4.8,
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupHub",
    image: "/I3.jpg",
    feedback:
      "Their collaborative approach and cutting-edge solutions made our projects successful. Truly exceptional!",
    rating: 5,
  },
  {
    name: "Emma Watson",
    role: "Product Manager, NextGen",
    image: "/I4.jpg",
    feedback:
      "Megascale’s team is highly skilled and creative. They deliver on time and exceed expectations.",
    rating: 4.9,
  },
  {
    name: "Daniel Craig",
    role: "Lead Developer, Cloudify",
    image: "/I5.jpg",
    feedback:
      "The team at Megascale provided next-level tech solutions. Their AI and web strategies are unmatched.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPos = 0;
    const cloneWidth = scrollContainer.scrollWidth / 2;
    let rafId;

    const autoScroll = () => {
      if (!isPaused) {
        scrollPos += 1;
        if (scrollPos >= cloneWidth) scrollPos = 0;
        scrollContainer.scrollLeft = scrollPos;
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const scrollBy = (distance) => {
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-12 px-8  bg-gradient-to-r from-orange-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Experiences from companies and individuals who trust Megascale.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollBy(-300)}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-md transition"
      >
        &lt;
      </button>
      <button
        onClick={() => scrollBy(300)}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 bg-white hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-md transition"
      >
        &gt;
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden px-4 sm:px-6 lg:px-12 scroll-smooth"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] p-6 bg-white rounded-3xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-500 mr-6"
          >
            {/* Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-orange-500 mb-4"
            />

            {/* Name, Role, Stars */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-2">
                {t.role}
              </p>

              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < Math.floor(t.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.443a1 1 0 00-.364 1.118l1.287 3.947c.3.922-.755 1.688-1.54 1.118l-3.361-2.443a1 1 0 00-1.176 0l-3.361 2.443c-.785.57-1.838-.196-1.539-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.034 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Feedback (now below everything) */}
            <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed text-center">
              {t.feedback}
            </p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        scrollbar-width: none;
      `}</style>
    </section>
  );
}
    