import React from 'react';
import Layout from '../Layout/Layout';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the check circle icon from react-icons

const Subscribe = () => {
  return (
    <Layout>
      <div 
        className="relative w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center -z-30"
        style={{
          backgroundImage: "url('/images/home-bg.jpg')",
          opacity: ".92", 
        }}
      >
        <div 
          className="absolute inset-0 bg-[#672d0c] opacity-50 -z-30" 
        ></div>

        {/* Text Content */}
        <div className="relative z-10">
          <div className="flex justify-center items-center -mt-[10rem]">
            <h1 className="text-[#fff] text-[65px] font-bold">
              Choose your Plan
            </h1>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center mb-4 -mt-[10rem]">
        {/* Card 1 */}
        <div 
          className="bg-[#f0f0f0] p-8 rounded-lg opacity-90 shadow-lg w-[352px] h-[450px] cursor-pointer"
        >
          <h1 className="text-[32px] font-bold text-center text-[#A33900] mb-6">Basic Plan</h1>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[32px] font-bold text-center mb-4'>$4.55 /month</p>
            <button className='px-[60px] py-2 rounded-sm bg-[#A33900] font-bold text-[#fff]'>SELECT BASIC</button>
            {/* Circle Check and Description Below the Button */}
          </div>

          <div className='flex flex-col justify-center pl-6'>
            <div className="mt-6 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Limited quizzes (10/month).</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Small resource library.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Connect with up to 5 teachers.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Basic performance stats.</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-[#f0f0f0] p-8 rounded-lg opacity-90 shadow-lg w-[352px] h-[450px] cursor-pointer relative overflow-hidden"
        >
          {/* Popular Tag */}
          <span className="text-[15px] font-medium bg-[#FFB84D] text-[#000] absolute top-4 -right-10 px-[3rem] py-1 rounded-sm shadow-lg transform rotate-45">
            Popular
          </span>

          <h1 className="text-[32px] font-bold text-center text-[#A33900] mb-6">Advanced Plan</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[32px] font-bold text-center mb-4">$9.99/month</p>
            <button className="px-[60px] py-2 rounded-sm bg-[#A33900] font-bold text-[#fff]">SELECT ADVANCED</button>
            {/* Circle Check and Description Below the Button */}
          </div>

          <div className="flex flex-col justify-center pl-6">
            <div className="mt-6 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Unlimited quizzes.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Expanded resources.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Unlimited teacher networking.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Custom quizzes.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Performance trends.</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-[#f0f0f0] p-8 rounded-lg opacity-90 shadow-lg w-[352px] h-[450px] cursor-pointer"
        >
          <h1 className="text-[32px] font-bold text-center text-[#A33900] mb-6">Premium Plan</h1>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[32px] font-bold text-center mb-4'>$19.99/month</p>
            <button className='px-[60px] py-2 rounded-sm bg-[#A33900] font-bold text-[#fff]'>SELECT PREMIUM</button>
            {/* Circle Check and Description Below the Button */}
          </div>

          <div className='flex flex-col justify-center pl-6'>
            <div className="mt-6 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Adaptive quizzes.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Exclusive resources.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Advanced analytics.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Certificates and badges.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Live webinars.</span>
            </div>
            <div className="mt-2 text-left flex items-center">
              <FaCheckCircle className="text-[#000] inline-block mr-2" />
              <span>Offline access.</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Subscribe;
