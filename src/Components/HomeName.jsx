import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HomeName = () => {
  return (
    <motion.div
      className="flex flex-col justify-between h-full w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Top Section */}
      <div className="mt-[280px] ml-6.5 flex flex-col ">
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold mb-6">
          RAO ASSOCIATES
        </motion.h1>
        <motion.p variants={itemVariants} className=" text-md max-w-md text-left ml-1">
          Specializing in the valuation of immovable properties and providing expert project management consultancy.
        </motion.p>
      </div>

      {/* Bottom Section - Reach Us */}
      <motion.div variants={itemVariants} className="mb-4  flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-2 ml-4">Reach Us</h2>
        <motion.div variants={itemVariants} className="flex flex-col justify-center items-center text-sm ">
          <p>📞 9845113250</p>
          <p>📧 RaoAssociates@gmail.com</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomeName;
