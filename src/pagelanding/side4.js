import React from 'react';

const Side4 = () => {
  return (
    <div className="h-auto md:h-[580px] relative bg-[#f4f4f4] mb-10 flex flex-col items-center py-8">
      {/* Header Section */}
      <div className="text-center mb-6 text-black text-2xl md:text-3xl font-normal font-ubuntu leading-[36px] md:leading-[48px]">
        OUR TRACK RECORD
      </div>
      
      <div className="text-center px-6 md:px-36 text-black text-base md:text-lg font-normal font-arial leading-normal">
        Trusted by leading companies across Indonesia, PT Alfatih Pilar Peradaban delivers tailored consulting services in maritime, logistics, and infrastructure. With a commitment to excellence and a track record of results, we’re here to support your projects from start to finish.
      </div>
      
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-8 md:gap-24 mt-10 px-4">
        {/* Card 1 */}
        <div className="w-full md:w-[550px] h-[90px] relative">
          <div className="w-full h-full absolute bg-charcoal rounded-lg shadow"></div>
          <div className="absolute text-center text-[#ead36f] text-lg md:text-2xl font-bold font-['Arial'] leading-normal left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
            Over 150 Projects Completed
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="w-full md:w-[550px] h-[90px] relative">
          <div className="w-full h-full absolute bg-charcoal rounded-lg shadow"></div>
          <div className="absolute text-center text-[#ead36f] text-lg md:text-2xl font-bold font-['Arial'] leading-normal left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
            Serving 75+ Clients Nationwide
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="w-full md:w-[550px] h-[90px] relative">
          <div className="w-full h-full absolute bg-charcoal rounded-lg shadow"></div>
          <div className="absolute text-center text-[#ead36f] text-lg md:text-2xl font-bold font-['Arial'] leading-normal left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
            5+ Years of Industry Insight
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="w-full md:w-[550px] h-[90px] relative">
          <div className="w-full h-full absolute bg-charcoal rounded-lg shadow"></div>
          <div className="absolute text-center text-[#ead36f] text-lg md:text-2xl font-bold font-['Arial'] leading-normal left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
            20+ Regions Covered
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side4;
