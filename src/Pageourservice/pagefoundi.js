import React from "react";
import pictures from '../gambar/foundation.jpg'; 

const PageFoundi = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative h-[423px]"
        style={{
          backgroundImage: `url(${pictures})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay Background */}

        {/* Centered Text */}
        <div className="absolute inset-0 mt-10 flex justify-center items-center text-center z-20">
          <div className="text-[#e0aa3e] text-5xl md:text-7xl font-normal font-['Poly'] leading-tight">
            Foundation Services
          </div>
        </div>
      </div>

      {/* Main Content with Justified Text */}
      <div className="px-6 md:px-16 py-10 md:py-14 text-justify text-lg md:text-lg leading-relaxed text-black font-arial">
        <p>
          At PT. Alfatih Pilar Peradaban, our Foundation Services are centered on ensuring the structural stability and reliability of construction projects. We utilize advanced tools such as the Pile Driving Analyzer® (PDA) Model PAX, which provides real-time analysis of pile driving efficiency and foundation performance. The Turangga Hammer is another essential tool, delivering precise impact energy during pile driving to ensure proper foundation installation.
        </p>
        <p className="mt-6">
          Our services are enhanced by SMART Sensors, which offer real-time monitoring during pile driving operations, helping us collect dynamic data on foundation behavior. The CAse Pile Wave Analysis Program (CAPWAP) allows us to analyze the load-bearing capacity of piles based on the data collected during installation. This detailed analysis ensures that every foundation is capable of supporting the intended structural loads.
        </p>
        <p className="mt-6">
          Post-installation, we use the Pile Integrity Tester (PIT) and accelerometers to detect any flaws in the foundation. The PIT-W software processes this data to provide a thorough quality check. Additionally, the Cross Hole Analyzer (CHAMP) and CHA-W software use ultrasonic waves to assess the integrity of deep foundations, while Tomosonic technology offers advanced imaging of foundation structures for a more detailed internal evaluation. These comprehensive methods ensure that every foundation meets the highest standards of safety and durability.
        </p>
      </div>
    </div>
  );
};

export default PageFoundi;
