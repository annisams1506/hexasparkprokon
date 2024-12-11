import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Side3 = () => {
  const settings = {
    dots: true,          // Show indicator dots under the slider
    infinite: true,      // Makes slider loop
    speed: 500,          // Transition speed (ms)
    slidesToShow: 4,     // Number of cards to show
    slidesToScroll: 1,   // Number of cards to scroll when clicking
    responsive: [
      {
        breakpoint: 1024, // Untuk tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Untuk ukuran layar yang lebih kecil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pageconsul'); 
  };

  const handeldua = () => {
    navigate('/foundation'); 
  };

  const handeltiga = () => {
    navigate('/metal'); 
  };

  const handelpat = () => {
    navigate('/port'); 
  };

  return (
    <div className="h-auto md:h-[640px] mb-8  relative bg-gray-100 flex flex-col justify-start items-center py-2">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 px-4">
        <h1 className="text-justify ml-2 mb-1 text-black text-2xl md:text-3xl leading-[36px] md:leading-[48px] font-ubuntu">
          Expert Solutions for Infrastructure and Operational Success
        </h1>
        <p className="text-center text-black text-base md:text-lg font-arial leading-normal px-28">
          PT Alfatih Pilar Peradaban offers a complete range of services to meet your project's unique demands. From precision surveying and strategic consulting to foundation expertise, advanced material solutions, and specialized port services—we provide the expertise and innovation you need to succeed. Discover how each of our services can drive your project forward; explore the options below.
        </p>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="px-2">
            <button 
              onClick={handleButtonClick} 
              className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white"
            >
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                Surveying & Consulting Service
              </div>
            </button>
          </div>

          {/* Card 2 */}
          <div className="px-2">
            <button 
              onClick={handeldua} 
              className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white"
            >
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                Foundation Service
              </div>
            </button>
          </div>

          {/* Card 3 */}
          <div className="px-2">
            <button 
              onClick={handeltiga} 
              className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white"
            >
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                Material & Structure Service
              </div>
            </button>
          </div>

          {/* Card 4 */}
          <div className="px-2">
            <button 
              onClick={handelpat} 
              className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white"
            >
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                Port Service
              </div>
            </button>
          </div>

          {/* Additional Cards */}
          <div className="px-2">
            <div className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white">
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                LOREM IPSUM
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className="w-full h-[300px] md:h-[360px] bg-charcoal-400 rounded-lg flex flex-col justify-center items-center text-white">
              <div className="text-lg md:text-xl font-bold font-['Ubuntu'] text-center px-4">
                LOREM IPSUM
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Side3;
