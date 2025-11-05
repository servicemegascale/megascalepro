import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    text: "This product changed my life!",
    author: "Alice",
    description:
      "Alice is a software engineer with 10 years of experience in building scalable web applications.",
    image:
      "http://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing service and support.",
    author: "Bob",
    description:
      "Bob is a product manager who loves to explore new tools and technologies.",
    image:
      "https://thumbs.dreamstime.com/b/beauty-woman-portrait-girl-beautiful-face-smiling-closeup-happy-perfect-smile-white-teeth-camera-attractive-healthy-76138194.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    text: "Highly recommend to everyone.",
    author: "Charlie",
    description:
      "Charlie is a UX designer passionate about creating intuitive user experiences.",
    image:
      "http://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
  },
  {
    id: 4,
    text: "Exceeded my expectations!",
    author: "Diana",
    description:
      "Diana is a marketing specialist who values innovation and creativity.",
    image:
      "https://thumbs.dreamstime.com/b/beauty-woman-portrait-girl-beautiful-face-smiling-closeup-happy-perfect-smile-white-teeth-camera-attractive-healthy-76138194.jpg",
    rating: 4,
  },
  {
    id: 5,
    text: "Simply the best experience.",
    author: "Ethan",
    description:
      "Ethan is a startup founder who believes in the power of great products.",
    image:
      "http://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
  },
];

const TestimonialCard = ({ t }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(t.rating))
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (i - t.rating < 1)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="w-[300px] sm:w-[340px] md:w-[360px] bg-white p-5 rounded-2xl shadow-lg flex-shrink-0 flex flex-col justify-between text-left">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={t.image}
          alt={t.author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{t.author}</h3>
          <div className="flex gap-1">{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-700 italic mb-2">“{t.text}”</p>
      <p className="text-gray-500 text-sm">{t.description}</p>
    </div>
  );
};

const TestimonialSection = () => {
  const containerRef = useRef(null);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const container = containerRef.current;
    const interval = setInterval(() => {
      if (container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({
            left: container.clientWidth * 0.9,
            behavior: "smooth",
          });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="bg-blue-50 py-12 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1721] mb-10 text-center">
          Our Happy Clients
        </h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-[#0A1721] text-white p-3 rounded-full z-10 hover:bg-blue-600"
          >
            <AiOutlineLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-[#0A1721] text-white p-3 rounded-full z-10 hover:bg-blue-600"
          >
            <AiOutlineRight size={20} />
          </button>

          {/* Testimonials */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory justify-center md:justify-start hide-scrollbar"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="snap-center flex-shrink-0 flex justify-center"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
