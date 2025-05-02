import React from 'react';
import { motion } from 'framer-motion';



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HomeName = () => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Top Section */}
      <div className="mt-24 sm:mt-32 md:mt-60 px-2 sm:px-4">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-shadow-blue-200"
        >
          RAO ASSOCIATES
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base max-w-md text-left text-shadow-blue-300"
        >
          Specializing in the valuation of immovable properties and providing expert project management consultancy.
        </motion.p>
      </div>

      {/* Bottom Section - Reach Us */}
      <motion.div
        variants={itemVariants}
        className="mb-6 sm:mb-10 text-sm sm:text-base flex flex-col items-start px-2 sm:px-4"
      >
        <h2 className="text-lg font-semibold  mb-2 text-shadow-blue-300">Reach Us</h2>
        <div className="space-y-1 flex flex-col">
          <a href="mailto:RaoAssociates@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">
            RaoAssociates@gmail.com
          </a>
          <a href="https://wa.me/9845113250?text=Hi%20I%20would%20like%20to%20get%20in%20touch." className="text-blue-500 hover:text-blue-400 transition-colors">
            Message on WhatsApp
          </a>
          <a href="https://maps.app.goo.gl/x4xmh7PosnW5teSd9" className="text-blue-500 hover:text-blue-400 transition-colors">
            Location Details
          </a>
        </div>
        

        
      </motion.div>
    </motion.div>
  );
};

export default HomeName;
