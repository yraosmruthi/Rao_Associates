import React from 'react';
import HomeName from '../Components/HomeName';

const Home = () => {
  return (
    <section id='home'>
      <div
        className="w-full h-screen flex flex-col md:flex-row items-center md:items-stretch"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')",
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
