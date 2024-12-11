import React from "react";
import pictures from '../gambar/surveying.jpg'; 

const Headerbout = () => {
    return (
        <div
            className="relative h-[423px]"
            style={{
                backgroundImage: `url(${pictures})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0  bg-black opacity-50 "></div>

            {/* Centered Text */}
            <div className="absolute inset-0 mt-10 flex justify-center items-center text-center z-20">
                <div className="text-[#e0aa3e]  text-7xl font-normal font-['Poly'] leading-[86.40px]">
                    About
                </div>
            </div>
        </div>
    );
};

export default Headerbout;
