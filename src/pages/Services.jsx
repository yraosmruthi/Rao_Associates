import React from 'react';
import { motion } from 'framer-motion';

const servicePhases = [
  {
    title: 'Pre-Bid Phase',
    points: [
      'Feasibility studies',
      'Consultant appraisal and selection',
      'Cost analyses and budget estimates',
      'Structural designs',
      'Government licensing coordination',
      'Pre-construction planning services',
    ],
  },
  {
    title: 'Post-Bid / Pre-Construction Phase',
    points: [
      'Tender scrutiny',
      'Contract negotiation assistance',
      'Legal documentation',
      'Scheduling',
      'Value engineering',
    ],
  },
  {
    title: 'Construction Phase',
    points: [
      'Project scheduling (CPM)',
      'Cash-flow charts',
      'Material requirement schedules',
      'Drawing coordination',
      'Quality monitoring',
      'Progress reporting',
    ],
  },
  {
    title: 'Post-Construction Phase',
    points: [
      'Machinery installation coordination',
      'Warranty documentation',
      'Compliance monitoring',
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen relative text-black overflow-hidden">
      {/* Background */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')",
          }}
        />
        <div className="absolute inset-0 bg-blue-100/30 backdrop-blur-sm " /> 
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="backdrop-blur-xl shadow-xl rounded-xl p-6 sm:p-10"
          style={{ backgroundColor: 'rgba(173, 216, 230, 0.3)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Services
          </motion.h1>

          {/* Highlighted Service */}
          <motion.div
            className="bg-blue-100/10 backdrop-blur-md border border-blue-200/30 text-black p-4 sm:p-6 rounded-md mb-10 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Government-Approved Valuations</h2>
            <p className="text-sm sm:text-base">
              We specialize in government-approved valuations for immovable properties, supporting loan applications, asset assessments, and legal compliance.
            </p>
          </motion.div>

          {/* Service Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {servicePhases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-blue-100/10 backdrop-blur-md p-4 sm:p-6 rounded-md border border-white/20 text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
              >
                <motion.h2
                  className="text-lg sm:text-xl font-semibold text-blue-900 mb-4"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  {phase.title}
                </motion.h2>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  {phase.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.3 + i * 0.2 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
