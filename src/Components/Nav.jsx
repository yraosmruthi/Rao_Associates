import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue with 20% opacity
        backdropFilter: 'blur(10px)',
      }}
      className="font-Sans text-white px-3 py-3 fixed w-full top-0 z-50"
    >
      <div className="flex flex-row justify-between ml-2 md:ml-6 mt-2">
        <div>
          <NavLink
            to="/"
            className="text-lg sm:text-md tracking-wide text-slate-950 drop-shadow-md hover:text-blue-600 transition-colors font-bold mr-1"
          >
            Rao Associates
          </NavLink>
        </div>

        <div>
          <div className="flex flex-row gap-3 md:gap-8 md:mr-15 text-sm md:text-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-850 font-semibold'
                  : 'text-slate-950 hover:text-blue-800 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-850 font-semibold'
                  : 'text-slate-950 hover:text-blue-800 transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-850 font-semibold'
                  : 'text-slate-950 hover:text-blue-800 transition-colors'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-850 font-semibold'
                  : 'text-slate-950 hover:text-blue-800 transition-colors'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
