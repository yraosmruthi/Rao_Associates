import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
        backdropFilter: 'blur(10px)'
      }}
      className="font-Sans text-white px-3 py-3 fixed w-full top-0 z-50"
    >
      <div className="flex flex-row justify-between ml-6 mt-2">
        <div>
          
          
            <NavLink to="/">Rao Associates</NavLink>
        
        </div>
        
        <div>
          <div className="flex flex-row gap-8 mr-15">
            
              
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;