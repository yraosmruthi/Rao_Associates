import React from 'react';
import { motion } from 'framer-motion';

import About from './About';
import Services from './Services';
import Contact from './Contact';
import HomeName from '../Components/HomeName';



const Home = () => {
  return (
    // <div>
    <section id='home'>
    <div
      className="w-full h-screen flex  z-0"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(173, 216, 230, 0.5)',
          backdropFilter: 'blur(10px)',
        }}
        className="w-[35%] h-full text-white p-8" //ml-0 mt-0 left-0 w-[34%] h-screen text-white p-8 z-10
      >
       
      <HomeName />
      </div>
    </div>
    </section>

  /* <section id="about" className="min-h-screen  w-full flex items-center justify-center bg-white text-black p-12">
    <div>
      <About />
    </div>
  </section>

  <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100 text-black p-12">
    <div>
      <Services />
    </div>
  </section>

  <section id="contact" className="min-h-screen flex items-center justify-center bg-white text-black p-12">
    <div>
      <Contact />
    </div>
  </section>
</div> */

    
  );
};

export default Home;
