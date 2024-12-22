import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import gambar
import surveyImage from '../gambar/surveying.jpg';
import foundationImage from '../gambar/foundation.jpg';
import materialImage from '../gambar/bup.jpg';
import portImage from '../gambar/port.jpg';
import ntah from '../gambar/tusk.jpg';
import gambar1 from '../images/kapalbaru.jpg';

const Side3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const navigate = useNavigate();

  return (
    <div className="h-auto md:h-[640px] mb-8 relative bg-gray-100 flex flex-col justify-start items-center py-2">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 px-4">
        <h1 className="text-justify ml-2 mb-1 text-black text-2xl md:text-3xl leading-[36px] md:leading-[48px] font-ubuntu">
          Expert Solutions for Infrastructure and Operational Success
        </h1>
        <p className="text-center text-black text-base md:text-lg font-arial leading-normal px-4 md:px-28">
          PT Alfatih Pilar Peradaban offers a complete range of services to meet your project's unique demands. 
          Discover how each of our services can drive your project forward.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/pageconsul')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={surveyImage} 
                alt="Surveying Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Surveying & Consulting Service
              </div>
            </button>
          </div>

          {/* Card 2 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/foundation')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={foundationImage} 
                alt="Foundation Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Foundation Service
              </div>
            </button>
          </div>

          {/* Card 3 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/metal')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={materialImage} 
                alt="Material Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Material & Structure Service
              </div>
            </button>
          </div>

          {/* Card 4 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/port')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={portImage} 
                alt="Port Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Port Service
              </div>
            </button>
          </div>

          {/* Card 5 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/port')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={ntah} 
                alt="Port Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Lorem Ipsum
              </div>
            </button>
          </div>

          {/* Card 4 */}
          <div className="px-2">
            <button 
              onClick={() => navigate('/port')} 
              className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
            >
              <img 
                src={gambar1} 
                alt="Port Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                Lorem Ipsum
              </div>
            </button>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Side3;
