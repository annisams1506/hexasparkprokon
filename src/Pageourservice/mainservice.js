import React from "react";
import { Link } from "react-router-dom"; // Mengimpor Link untuk navigasi
import gambar1 from '../gambar/tusk.jpg'; // Correct image import

// Komponen untuk Kartu Layanan
const ServiceCard = ({ title, to, imageSrc }) => (
  <div className="w-full sm:w-[500px] h-[256px] bg-[#616161]  rounded-lg flex flex-col items-center justify-between  text-white shadow-md relative">
    {/* Gambar Layanan */}
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
    <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-lg" />
    {/* Title and Button Container */}
    <div className="absolute bottom-4 w-full flex flex-col items-center">
      <h3 className="text-lg font-bold font-['Open_Sans'] text-center mb-2">{title}</h3>
      <Link to={to}>
        <button className="bg-golden-55 w-[266px] h-[40px] text-white rounded-md shadow-inner font-['Open_Sans'] hover:bg-white hover:text-golden-55 transition duration-300">
          More
        </button>
      </Link>
    </div>
  </div>
);

// Komponen Utama untuk Halaman Layanan
const Mainservice = () => {
  const services = [
    { title: "Surveying & Consulting Services", to: "/pageconsul", imageSrc: gambar1 },  // Correct usage of imported image
    { title: "Foundation Services", to: "/foundation", imageSrc: require("../gambar/surveying.jpg") }, // Using require for dynamic imports
    { title: "Metal & Structure Services", to: "/metal", imageSrc: require("../gambar/metal.jpg") },
    { title: "Port Services", to: "/port", imageSrc: require("../gambar/port.jpg") },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center py-6 sm:py-12 font-['Open_Sans']">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 max-w-5xl mx-auto px-4 sm:px-0">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} to={service.to} imageSrc={service.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Mainservice;
