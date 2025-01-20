import React from 'react';
import Layout from '../Layout/Layout';

const Features = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10">
        <h1 className="text-[#000] text-[65px] font-bold">
          What <span className="text-[#FF5900] text-[65px] font-bold">awaits</span> you?
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center mb-4">
        {/* Card 1 */}
        <div 
          className="bg-gradient-to-b from-gradient-from via-gradient-via to-gradient-to p-8 rounded-lg opacity-98 shadow-lg w-[352px] h-[496px]"
        >
          <h2 className="text-[35px] font-semibold text-center">Practice quizzes</h2>
          <div className='flex flex-col justify-center items-center'>
           <img src='/images/quiz.png' alt='quiz' className='w-[100px] h-[100px] my-5'/>
           <p className='text-justify'>Our quizzes cover a wide range of exam topics, offering a comprehensive practice experience. Results are provided along with detailed answer keys, step-by-step solutions, and thorough explanations to help you fully understand the material and improve your skills.</p>
          </div>
           
        </div>

        {/* Card 2 */}
        <div 
          className="bg-gradient-to-b from-gradient-from via-gradient-via to-gradient-to p-8 rounded-lg opacity-98 shadow-lg w-[352px] h-[496px]"
        >
          <h2 className="text-[35px] font-semibold text-center text-nowrap">Discover Resources</h2>
          <div className='flex flex-col justify-center items-center'>
           <img src='/images/discover.png' alt='discover' className='w-[100px] h-[100px] my-5'/>
           <p className='text-justify'>Discover a curated collection of resources tailored to support your teaching journey. Access articles, lesson plans, tools, and professional development materials designed to enhance your skills, foster student engagement, and keep you up-to-date with the latest educational trends.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-gradient-to-b from-gradient-from via-gradient-via to-gradient-to p-8 rounded-lg opacity-98 shadow-lg w-[352px] h-[496px]"
        >
          <h2 className="text-[35px] font-semibold text-center ">Connect</h2>
          <div className='flex flex-col justify-center items-center'>
           <img src='/images/connect.png' alt='connect' className='w-[100px] h-[100px] my-5'/>
           <p className='text-justify'>Connect with fellow educators to share insights, exchange teaching strategies, collaborate on projects, and build a supportive professional network. Engage in meaningful discussions, offer feedback, and learn from the experiences of others to enhance your teaching practice.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
