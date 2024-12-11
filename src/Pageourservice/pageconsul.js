import React from "react";
import pictures from '../gambar/our.jpg'; 

const Surveying = () => {
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
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Centered Text */}
                <div className="absolute inset-0 mt-10 flex justify-center items-center text-center z-20">
                    <div className="text-[#e0aa3e] text-7xl font-normal font-['Poly'] leading-[86.40px]">
                        Surveying & Consulting Services
                    </div>
                </div>
            </div>

            {/* Main Content with Justified Text */}
            <div className="px-16 py-14 text-justify text-lg leading-normal text-black   font-arial ">
                <p>
                Our hydro-oceanography services cover water depth measurements, tidal analysis, and current assessments, critical for marine projects and coastal infrastructure development. In topography, we provide detailed mapping of terrain features, essential for land development, construction planning, and infrastructure projects. Soil investigation services assess subsurface conditions, ensuring that the ground is suitable for construction and infrastructure support.
                </p>
                <p className="mt-6">
                    We also specialize in key testing services, including the sand cone test, which evaluates soil compaction, ensuring the ground is adequately prepared for construction. Our CBR (California Bearing Ratio) test measures soil strength and its ability to support roadways, airstrips, and other pavement structures. In addition, we offer structural monitoring services, utilizing advanced technologies to continuously assess the health and performance of buildings and infrastructure, ensuring long-term safety and structural integrity.
                </p>
                <p className="mt-6">
                Our consulting services extend to architectural, civil, and environmental fields. Our architectural services combine innovative design with practical functionality, focusing on the aesthetics and usability of structures. In civil engineering, we manage the planning and design of infrastructure such as roads, bridges, and utilities, ensuring sustainable and efficient outcomes. Environmental consulting services include impact assessments and regulatory compliance, helping clients to minimize environmental impacts while meeting project goals. Our holistic approach ensures that every aspect of your project is meticulously planned and executed for success.                       </p>
            </div>
        </div>
    );
};

export default Surveying;
