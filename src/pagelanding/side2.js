import React from 'react';
import { useNavigate } from 'react-router-dom';
import city from '../gambar/potrait.jpg'; 

const Side2 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/services'); 
    window.scrollTo({ top: 0 });
  // Close mobile menu if it's open
  };
 
  return (
    <div className="h-auto md:h-[850px] mt-[50px] md:mt-[130px] mb-16 relative bg-[#f4f4f4] flex flex-col md:flex-row justify-start items-center md:items-start">

      <div className="flex flex-col md:flex-row items-center">
        {/* Gambar */}
        <img 
          className="w-[300px] h-[450px] md:w-[475px] md:h-[750px] md:ml-[90px] md:mr-[90px] bg-black mb-6 md:mb-0" 
          src={city} 
          alt="port" 
        />

        {/* Teks dan Tombol */}
        <div className="w-full md:w-auto px-4 md:px-0 md:mr-14 mt-6 md:mt-[50px] text-justify text-black">
          <div className="mb-6">
            <div className="text-xl md:text-3xl mb-6 font-normal font-ubuntu leading-[30px] md:leading-[48px]">
              Entrust the Management of Your Company to Our Experienced Team of Expert
            </div>
            <div className="ml-1 mb-6 text-base md:text-lg text-black font-normal font-arial leading-normal">
              At PT Alfatih Pilar Peradaban, we bring a depth of expertise and a commitment 
              to excellence across Surveying & Consulting, Foundation, Material & Structure, and Port Services. 
              Our team of specialists designs and implements solutions tailored to your unique needs, ensuring precision, reliability, and lasting impact. 
              With a focus on innovation and sustainable growth, we lay strong foundations not only for your projects but also for the communities you serve. 
              Let us transform challenges into opportunities and elevate your operations to new heights.
            </div>
            <button 
              onClick={handleButtonClick} 
              className="w-[200px] md:w-[250px] h-[45px] md:h-[56px] mx-auto md:ml-44 bg-golden-55 py-1 px-4 md:px-24 rounded-md shadow shadow-black hover:bg-goldLight-100 hover:text-golden-55 flex justify-center items-center cursor-pointer text-center text-white text-base md:text-lg font-bold font-arial leading-normal"
            >
              OUR SERVICES
            </button>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side2;
