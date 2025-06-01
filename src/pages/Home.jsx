import React from 'react';
import HomeName from '../Components/HomeName';

const Home = () => {
  return (
    <section id='home'>
      <div
        className="w-full h-screen flex flex-col md:flex-row items-center md:items-stretch"
        style={{
          backgroundImage:
            "url('https://www.alm.com/wp-content/uploads/2017/09/Industry-Real-Estate.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="w-full md:w-[35%] h-full bg-blue-100/50 backdrop-blur-md text-white px-6 py-10 sm:px-10 flex items-center"
        >
          <HomeName />
        </div>
      </div>
    </section>
  );
};

export default Home;
