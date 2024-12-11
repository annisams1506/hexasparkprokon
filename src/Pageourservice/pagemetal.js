import React from "react";
import pictures from '../gambar/metal.jpg'; 

const PageMetal = () => {
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
            Metal & Structure Services
          </div>
        </div>
      </div>

      {/* Main Content with Justified Text */}
      <div className="px-6 md:px-16 py-10 md:py-14 text-justify text-lg md:text-lg leading-relaxed text-black font-arial">
        <p>
        At PT. Alfatih Pilar Peradaban, our Material & Structure Services focus on evaluating the quality and integrity of construction materials and structures. We employ a variety of advanced testing methods to ensure that every component meets the required safety and performance standards. One of our key services is the Ultrasonic Pulse Velocity Test, which measures the speed of ultrasonic waves through materials to assess their quality and detect any internal flaws.
        </p>
        <p className="mt-6">
        We also utilize the Hammer Test to evaluate the hardness and strength of concrete structures. Our Rebar Data Scan service provides precise information about the location and condition of reinforcing bars within concrete, which is essential for assessing structural integrity. In addition, we conduct Core Drill and Crushing Tests to analyze concrete samples, determining their compressive strength and overall quality. 
        </p>
        <p className="mt-6">
        For ongoing structural assessments, our Vibration Monitoring Test measures the response of structures to dynamic loads, ensuring they can withstand environmental and operational stresses. The Plate Loading Test evaluates soil bearing capacity and settlement behavior under load, providing critical data for foundation design. Finally, our Welding Test and Inspection services ensure that all welds meet industry standards for strength and quality. By combining these techniques, we deliver comprehensive evaluations that support safe and durable construction practices.        </p>
      </div>
    </div>
  );
};

export default PageMetal;
