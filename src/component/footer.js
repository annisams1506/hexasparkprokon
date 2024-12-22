import React from 'react';
import logoupi from "../images/alfat.png";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-black">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col sm:flex-row sm:justify-between">
        
        {/* Logo and Social Media Section */}
        <div className="flex items-start sm:space-x-8 mb-4 sm:mb-0">
          {/* Logo */}
          <img src={logoupi} alt="Alfatih Pilar Peradaban Logo" className="mt-10 h-32" />

          {/* Social Media Icons and Address */}
          <div className="flex flex-col">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" className="text-black hover:text-gray-700">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://wa.me/+6281281232019" className="text-black hover:text-gray-700">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-black hover:text-gray-700">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>

            {/* Address and Contact Information */}
            <div className="text-left">
              <h5 className="font-semibold">ALFATIH PILAR PERADABAN OFFICE:</h5>
              <p>Jl. Bhayangkara I Kp. Buaran RT. 005/001<br />
                Kel. Pakujaya, Kec. Serpong Utara<br />
                Kota Tangerang Selatan, Banten
              </p>
              <a href="mailto:alfatihpilarperadaban@gmail.com" className="text-black hover:underline">
                alfatihpilarperadaban@gmail.com
              </a><br />
              <a href="https://wa.me/+6281281232019" className="text-black hover:underline">
                (+62) 81281232019
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-col space-x-4">
          <h5 className="font-semibold">Lokasi Kami:</h5>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.31787584241!2d106.673083!3d-6.234884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDUuNiJTIDEwNsKwNDAnMjMuMSJF!5e0!3m2!1sen!2sid!4v1618332091334"
              width="100%"
              height="200"
              style={{ order: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Small footer bar */}
      <div className="bg-golden-500 text-gray-900 text-left px-12 py-4">
        &copy; 2024 Alfatih Pilar Peradaban
      </div>
    </footer>
  );
};

export default Footer;
