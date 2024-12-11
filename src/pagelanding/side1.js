import React from 'react';
import { useNavigate } from 'react-router-dom';
import port from '../gambar/headermain.jpg';

const Side1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about'); // Navigate to the About Us page
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="h-[107px] text-center py-20 mt-8 mb-8 bg-silver-55 relative z-30">
        <h1 className="font-poly text-2xl md:text-6xl text-golden-55">PT ALFATIH PILAR PERADABAN</h1>
      </div>

      {/* Background Image Section */}
      <div
        className="h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${port})`,
          filter: '',
        }}
      >
        <div className="absolute inset-0 mt-48 bg-black opacity-70"></div>
      </div>

      {/* Text and Button over the image */}
      <div className="absolute bottom-20 right-16 text-center text-white z-20 px-4">
        <h1 className="text-5xl font-poly sm:text-4xl font-bold mb-6">Bersama Membangun Peradaban!</h1>
        <button
          onClick={handleButtonClick}
          className="w-[275px] h-[55px] font-bold bg-golden-55 text-center shadow-black leading-normal text-white font-arial py-2 px-6 rounded-md shadow-inner text-2xl hover:bg-goldLight-100 hover:text-golden-55 transition duration-300"
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default Side1;
