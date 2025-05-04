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
      className="flex flex-col justify-between w-full h-full text-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Top Section */}
      <div className="mt-24 sm:mt-32 md:mt-60 px-2 sm:px-4">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-950 drop-shadow-md"
        >
          RAO ASSOCIATES
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base max-w-md text-left text-slate-700 mb-8"
        >
          Specializing in the valuation of immovable properties and providing expert project management consultancy.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base max-w-md text-left text-slate-700"
        >
          Owned and operated by <strong className="text-slate-900">DV Yogisha Rao</strong>,
          <br />
          <span className="block">Government-Approved Valuer and Chartered Accountant.</span>
        </motion.p>
      </div>


      {/* Bottom Section - Reach Us */}
      <motion.div
        variants={itemVariants}
        className="mb-6 sm:mb-10 text-sm sm:text-base flex flex-col items-start px-2 sm:px-4"
      >
        <h2 className="text-lg font-semibold mb-2 text-slate-800">Reach Us</h2>
        <div className="space-y-2 flex flex-col">
          {/* Email Link */}
          <a
            href="mailto:yogishrao_dv06@yahoo.com"
            className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
          >
            <img
              src="./images/mail.png"
              alt="Email Icon"
              className="w-6 h-6 mr-2"
            />
            yogishrao_dv06@yahoo.com
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/9845113250?text=Hi%20I%20would%20like%20to%20get%20in%20touch."
            className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Icon"
              className="w-6 h-6 mr-2"
            />
            WhatsApp
          </a>

          {/* Location Link */}
          <a
            href="https://maps.app.goo.gl/x4xmh7PosnW5teSd9"
            className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
          >
            <img
              src="./images/location.png"
              alt="Location Icon"
              className="w-6 h-6 mr-2"
            />
            Location
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeName;
