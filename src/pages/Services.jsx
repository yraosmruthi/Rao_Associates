import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen relative text-black overflow-hidden">
      {/* Background */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-black/[0.5] scale-110 blur-sm"
          style={{
            backgroundImage:
              "url('https://www.alm.com/wp-content/uploads/2017/09/Industry-Real-Estate.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <motion.div
          className="backdrop-blur-xl shadow-xl rounded-xl p-6 sm:p-10"
          style={{ backgroundColor: 'rgba(173, 216, 230, 0.3)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Our Services
          </motion.h1>

          <div className="grid gap-6 grid-cols-1">
            {/* Service Card 1 */}
            <motion.div
              className="bg-blue-100/10 backdrop-blur-md p-6 rounded-lg border border-blue-200 transition hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                Valuation Services
              </h2>
              <p className="text-sm sm:text-base text-gray-800">
                Led by <strong>Mr. D.V. Yogisha Rao</strong>, a government approved certified valuer with over <strong>30 years of experience</strong> in the field,
                we offer precise and government-recognized valuations for immovable properties. Our services support loan applications,
                legal compliance, asset declarations, and investment analysis.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              className="bg-blue-100/10 backdrop-blur-md p-6 rounded-lg border border-blue-200 transition hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                Estimation of Land & Built-Up Area
              </h2>
              <p className="text-sm sm:text-base text-gray-800">
                We provide accurate estimations for land and constructed areas, crucial for property documentation, pricing, taxation,
                and legal processing. Our assessments are backed by technical expertise and thorough on-site inspections.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              className="bg-blue-100/10 backdrop-blur-md p-6 rounded-lg border border-blue-200 transition hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                Valuation Partner for Banks & Financial Institutions
              </h2>
              <p className="text-sm sm:text-base text-gray-800">
                Rao Associates is empaneled with most <strong>national banks, NBFCs, and PSUs in Mysore</strong> for property valuation.
                We assist in asset appraisal for mortgage approvals, refinancing, and secured lending.
              </p>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div
              className="bg-blue-100/10 backdrop-blur-md p-6 rounded-lg border border-blue-200 transition hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                Construction Management & Project Execution
              </h2>
              <p className="text-sm sm:text-base text-gray-800">
                With decades of industry experience, we deliver Total Project Management and Construction Management services
                across Karnataka. From pre-construction planning and budgeting to execution and handover, we ensure quality, timeline,
                and cost control for every project.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 text-center text-xs sm:text-sm text-gray-800">
            <p>© {new Date().getFullYear()} Rao Associates - Construction Engineers & Consultants</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
