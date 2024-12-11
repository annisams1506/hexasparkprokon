import React from 'react';
import logoupi from "../images/alfat.png";


const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-black">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img src={logoupi} alt="Alfatih Pilar Peradaban Logo" className="h-16" />
        </div>

        {/* Social Media and Office Info */}
        <div className="flex flex-col sm:items-start sm:ml-8">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" className="ttext-black hover:text-black">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://wa.me/081281232019" className="ttext-black hover:text-black">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
            <a href="https://linkedin.com" className="ttext-black hover:text-black">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>

          {/* Office Information */}
          <div className="text-left">
            <h5 className="font-semibold small-font">ALFATIH PILAR PERADABAN OFFICE:</h5>
            <p>Jl. Bhayangkara I Kp. Buaran RT. 005/001<br />Kel. Pakujaya, Kec. Serpong Utara<br />Kota Tangerang Selatan Provisi Banten</p>
            <a href="mailto:alfatihpilarperadaban@gmail.com" className="text-black">alfatihpilarperadaban@gmail.com</a><br />
            <a href="tel:+6281281232019" className="text-black">(+62) 81281232019</a>
          </div>
        </div>
      </div>

      {/* Small orange footer bar */}
      <div className="bg-golden-500 text-gray-900 text-left px-12 py-4 ">
        &copy; 2024 Alfatih Pilar Peradaban
      </div>
    </footer>
  );
};

export default Footer;