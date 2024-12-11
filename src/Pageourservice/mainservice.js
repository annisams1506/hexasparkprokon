import React from "react";
import { Link } from "react-router-dom"; // Mengimpor Link untuk navigasi

// Komponen untuk Kartu Layanan
const ServiceCard = ({ title, to }) => (
  <div className="w-full sm:w-[500px] h-[256px] bg-[#616161] rounded-lg flex flex-col items-center justify-between p-6 text-white shadow-md">
    <h3 className="text-lg font-bold font-['Open_Sans'] text-center mt-6 sm:mt-14">{title}</h3>
    {/* Tombol More dengan Link */}
    <Link to={to}>
      <button className="bg-golden-55 w-full sm:w-[266px] h-[40px] text-white rounded-md shadow-inner font-['Open_Sans'] hover:bg-white hover:text-golden-55 transition duration-300 mb-4">
        More
      </button>
    </Link>
  </div>
);

// Komponen Utama untuk Halaman Layanan
const Mainservice = () => {
  const services = [
    { title: "Surveying & Consulting Services", to: "/pageconsul" },
    { title: "Foundation Services", to: "/foundation" },
    { title: "Metal & Structure Services", to: "/metal" },
    { title: "Port Services", to: "/port" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center py-6 sm:py-12 font-['Open_Sans']">
      <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 max-w-5xl mx-auto px-4 sm:px-0">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} to={service.to} />
        ))}
      </div>
    </div>
  );
};

export default Mainservice;
