import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen relative text-black overflow-hidden">
      {/* Stronger Blurred Background Image */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')",
          filter: 'blur(10px)',
          transform: 'scale(1.1)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="backdrop-blur-xl shadow-xl rounded-xl p-6 sm:p-10 max-w-6xl mx-auto"
          style={{
            backgroundColor: 'rgba(173, 216, 230, 0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <div className="space-y-10 text-black">
            {/* Valuation Services Block */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              
              <div className="bg-blue-100/10 backdrop-blur-md p-6 rounded-lg shadow-sm transition-all hover:shadow-blue-200 hover:scale-105">
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-blue-900 mb-3 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  Government-Approved Valuations
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-800 text-center">
                  We specialize in government-recognized valuations for immovable properties such as land, buildings, and assets. Our
                  services support loan applications, legal compliance, asset declarations, and investment analysis.
                </p>
              </div>
            </motion.section>

            {/* Company Profile */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Company Profile</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <p>
                  Rao Associates  was established in 1995 as a professional consultancy organization.
                </p>
                <p>
                  Rao Associates is a proprietary concern with offices in Mysore and Mangalore. We are currently providing valuation
                  services for immovable properties, along with Total Project Management / Construction Management services across various
                  projects in Karnataka. We also offer Structural Design services to a wide range of clients.
                </p>
                <p>
                  Its constituent members are all highly educated professionals with vast experience in handling diverse projects. Our
                  staff is ably supported by experts of various disciplines and associated with organizations that enable us to adopt
                  state-of-the-art technologies.
                </p>
              </div>
            </motion.section>

            {/* Principal Consultant */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Principal Consultant</h2>
              <div className="bg-blue-100/10 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-sm text-sm sm:text-base transition-all hover:shadow-blue-200 hover:scale-105">
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-blue-900 mb-3"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  D V YOGISHA RAO
                </motion.h3>
                <div className="space-y-4">
                  <motion.div
                    className="md:flex md:items-start md:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <div className="font-medium w-[120px]">Education:</div>
                    <div className="space-y-1">
                      <p>B.E. (Civil Engineering)</p>
                      <p>MSc in Real Estate and Management</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <div className="font-medium mb-2">Professional Credentials:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Panel Valuer for All Nationalized Banks & Financial Institutions Since 1995</li>
                      <li>IBBI REGISTERED VALUER</li>
                      <li>Chartered Engineer (India)</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <div className="font-medium mb-2">Area of Specialization:</div>
                    <p>Valuation Of Land & Building</p>
                  </motion.div>
                </div>
              </div>
            </motion.section>

           
            {/* Notable Projects */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Notable Projects</h2>

              {/* Valuation Projects */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Valuation Projects</h3>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
                  {[
                    {
                      title: 'Jubilant Pharmova Limited',
                      location: 'Nanjangud',
                    },
                    {
                      title: 'Kousalya Commercial Complex',
                      location: 'Vinoba Road, Devaraja Mohalla, Mysore – 570005',
                    },
                    {
                      title: 'Payana Car Museum',
                      location: 'Bengaluru – Mysuru Expressway, Brahmapura, Srirangapatna',
                    },
                  ].map((project, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-100/10 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-sm transition-all hover:shadow-blue-200 hover:scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      <h3 className="font-bold text-blue-800">{project.title}</h3>
                      <p>{project.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Commercial Projects */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Commercial Projects</h3>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
                  {[
                    {
                      title: 'Mytri Arcade and Complex',
                      location: '92 residential flats and 64,000 sqft of commercial complex located in Saraswathipuram, Mysore',
                    },
                    {
                      title: 'SDM and MMK College for Women',
                      location: 'Jhansi Rani Lakshmi Bai Road, Krishnamurthy Puram, Mysuru',
                    },
                    {
                      title: 'Prasadhini Enterprises (Formerly Mega More)',
                      location: 'Narayana Shastri Road, Mysore',
                    },
                  ].map((project, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-100/10 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-sm transition-all hover:shadow-blue-200 hover:scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      <h3 className="font-bold text-blue-800">{project.title}</h3>
                      <p>{project.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-xs sm:text-sm text-gray-800">
            <p>© {new Date().getFullYear()} Rao Associates - Construction Engineers & Consultants</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
