import React from 'react';

const Side5 = () => {
  return (
    <div className="h-auto md:h-[460px] relative bg-[#f4f4f4] flex flex-col justify-center items-center py-8">
      {/* Text Section */}
      <div className="text-center mb-6 px-4 md:px-30">
        <h1 className="text-black text-2xl md:text-3xl font-ubuntu leading-[36px] md:leading-[48px] font-normal mb-8">
          Ready to Strengthen Your Company with Expertise?
        </h1>
        <p className="text-black text-base md:text-lg font-arial leading-normal mb-6 md:mb-10">
          PT Alfatih Pilar Peradaban stands ready to support your ambitions in the maritime and logistics sectors. Our team combines industry knowledge with hands-on experience to deliver exceptional results—because your project deserves nothing less.
          <br />
          Get in touch today to discuss your goals and see how we can add value at every stage!
        </p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Email button */}
        <a href="mailto:alfatihpilarperadaban@gmail.com">
          <button className="w-[220px] md:w-[250px] h-[55px] md:h-[67px] bg-golden-55 rounded-md shadow-inner shadow-black text-white text-base md:text-lg font-bold font-['Open Sans'] hover:bg-goldLight-100 hover:text-golden-55 transition duration-300">
            Contact Us via Email
          </button>
        </a>
        
        {/* WhatsApp button */}
        <a href="https://wa.me/081281232019" target="_blank" rel="noopener noreferrer">
          <button className="w-[220px] md:w-[250px] h-[55px] md:h-[67px] bg-golden-55 rounded-md shadow-inner shadow-black text-white text-base md:text-lg font-bold font-['Open Sans'] hover:bg-goldLight-100 hover:text-golden-55 transition duration-300">
            Contact Us via WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

export default Side5;
