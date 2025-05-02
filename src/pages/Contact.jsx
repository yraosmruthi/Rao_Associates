import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // This ensures the page scrolls to top when loaded and removes any padding
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // Optionally add a class to body for full height pages
  //   document.body.classList.add('full-page');
  //   return () => {
  //     document.body.classList.remove('full-page');
  //   };
  // }, []);

  return (
    <div
      className="h-screen w-screen fixed inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')" 
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="backdrop-blur-md bg-white/10 p-10 mt-8 rounded-xl max-w-lg w-[90%] text-white shadow-xl"
         >
        <h1 className="text-3xl font-extrabold tracking-wide mb-4 text-center drop-shadow-md">Contact Us </h1>
          <p className="mb-6 text-center">We'd love to hear from you.</p>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;