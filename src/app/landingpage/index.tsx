import React from 'react';
import Link from 'next/link';

const UjuziWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center">
       
          <img src='/images/ujuzi.png'className='w-[50%] h-[50%] text-center ml-[28%]'/>
      
        
        <h2 className="text-6xl font-bold text-[#1a315b] mb-6">WELCOME TO UJUZI</h2>
        <p className="text-[#1a315b] mb-6 text-2xl">Discover about CBC training and management</p>
        <Link href="/signup">
        <button className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition duration-300">
          SIGN UP
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UjuziWelcome;