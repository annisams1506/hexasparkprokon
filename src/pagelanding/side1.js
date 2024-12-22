import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import port1 from '../gambar/headermain.jpg'; // Gambar pertama
import port2 from '../gambar/foundation.jpg'; // Gambar kedua
import port3 from '../gambar/kapal.jpg'; // Gambar ketiga

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Side1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about'); // Navigate to the About Us page
  };

  const slides = [
    { id: 1, image: port1 },
    { id: 2, image: port2 },
    { id: 3, image: port3 },
  ];

  return (
    <div className="relative w-full h-[550px]">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[550px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[550px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              {/* Text and Button */}
              <div className="absolute bottom-20 right-16 text-center text-white z-20 px-4">
                <h1 className="text-5xl font-poly sm:text-4xl font-bold mb-6">
                  Bersama Membangun Peradaban!
                </h1>
                <button
                  onClick={handleButtonClick}
                  className="w-[275px] h-[55px] font-bold bg-golden-55 text-center shadow-black leading-normal text-white font-arial py-2 px-6 rounded-md shadow-inner text-2xl hover:bg-goldLight-100 hover:text-golden-55 transition duration-300"
                >
                  About us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Side1;
