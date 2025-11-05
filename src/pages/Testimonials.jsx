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
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Continuous Marquee Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const scrollSpeed = 0.7; // speed of marquee

    const step = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // reset to start (infinite loop)
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(step);
    };

    step();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // ✅ Manual Arrow Scroll
  const scrollBy = (distance) => {
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto text-center relative mt-10 px-6 md:px-0">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1721]">
          Our Clients
        </h2>
        <p className="text-gray-600 text-lg mt-4">
         Why companies like Megascale?
        </p>
      </div>

      {/* ✅ Angular Arrows */}
      {/* Previous Button */}
      <button
        onClick={() => scrollBy(-400)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-orange-500 hover:bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={() => scrollBy(400)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-orange-500 hover:bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>



      {/* ✅ Marquee-style Auto Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scroll-smooth select-none "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Duplicate testimonials for infinite effect */}
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="bg-blue-50 flex-shrink-0 w-[340px] sm:w-[380px] md:w-[450px] lg:w-[500px] rounded-3xl p-6 mx-3 hover:scale-105 transition-transform duration-500"
          >
            {/* Image + Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-orange-500"
              />
              <div className="sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {t.name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-2">{t.role}</p>

                {/* Stars */}
                <div className="flex justify-center sm:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(t.rating)
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
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed text-center sm:text-justify">
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
