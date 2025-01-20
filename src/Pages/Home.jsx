import React from 'react';
import Layout from '../Layout/Layout';

function Home() {
  return (
    <Layout>
      <div 
        className="relative w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/home-bg.jpg')",
          opacity: ".92", 
        }}
      >
        
        <div 
          className="absolute inset-0 bg-[#672d0c] opacity-50" 
        ></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            EMPOWER EDUCATORS
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 italic">
            Inspire Change
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            This is an online review platform designed to support teachers in their professional journey.
          </p>
          <button className="bg-[#FF5900] hover:bg-[#FF7A33] text-white px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
