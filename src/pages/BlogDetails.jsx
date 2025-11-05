import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowLeft, FiUser } from "react-icons/fi";

const BlogDetails = () => {

  
  const { state } = useLocation();
  const navigate = useNavigate();
  const blog = state?.blog;

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-700 mb-4 text-lg">Blog not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-2 bg-[#0A1721] text-white rounded-lg hover:bg-blue-900 transition-all duration-300"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  
  return (
    <div className=" px-8" >
    <article className="container mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className=" flex items-center text-[#0A1721] my-10 text-lg font-semibold hover:underline "
        >
          <FiArrowLeft className="mr-2 " /> Back to Blogs
        </button>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Blog Title over Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight max-w-3xl">
            {blog.title}
          </h1>
          <div className="flex justify-center items-center gap-4 mt-3 text-gray-200 text-sm">
            <span className="flex items-center gap-2">
              <FiCalendar /> {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FiUser /> {blog.author || "Admin"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 md:px-0 pb-6 text-gray-800 leading-relaxed"
      >

        {/* Author Box */}
        {/* <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white p-6 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Author"
            className="w-20 h-20 rounded-full border-4 border-blue-100 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-[#0A1721]">
              {blog.author || "Admin"}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Passionate about technology, UI/UX, and creating smooth digital experiences.
            </p>
          </div>
        </div> */}

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div
          className="prose prose-lg prose-blue text-start"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>


      </motion.div>
    </article>
    </div>
  );
};

export default BlogDetails;
