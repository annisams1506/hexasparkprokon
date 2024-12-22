import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

// Gambar
import banner from '../gambar/port.jpg';
import surveyImage from '../gambar/poto1.jpeg';
import foundationImage from '../gambar/poto2.jpeg';
import materialImage from '../gambar/poto3.jpeg';
import portImage from '../gambar/poto4.jpeg';
import gambar1 from '../gambar/poto5.jpeg';
import gambar2 from '../gambar/poto6.jpeg';
import gambar3 from '../gambar/poto7.jpeg';
import gambar4 from '../gambar/poto8.jpeg';
import gambar5 from '../gambar/poto9.jpeg';
import gambar6 from '../gambar/poto10.jpeg';

const Pageport = () => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderItems = [
        { image: surveyImage, alt: "TUSK", label: "Tuks & Tersus", path: '/pageconsul' },
        { image: foundationImage, alt: "BUP", label: "BUP", path: '/foundation' },
        { image: materialImage, alt: "Garis Pantai", label: "Garis Pantai", path: '/metal' },
        { image: portImage, alt: "Pemanduan & Penundaan Kapal", label: "Pemanduan & Penanduan Kapal ", path: '/port' },
        { image: gambar1, alt: "Reklamasi", label: "Reklamasi", path: '/port' },
        { image: gambar2, alt: "Pengerukan", label: "Pengerukan", path: '/port' },
        { image: gambar3, alt: "SIUPPAK", label: "SIUPPAK", path: '/port' },
        { image: gambar4, alt: "SIUPAL", label: "SIUPAL", path: '/port' },
        { image: gambar5, alt: "SIUPKK", label: "SIUPKK", path: '/port' },
        { image: gambar6, alt: "SIKK", label: "SIKK", path: '/port' },
    ];

    return (
        <div>
            <main>
                {/* Banner */}
                <div
                    className="relative h-[423px]"
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[#e0aa3e] text-7xl font-normal font-['Poly'] leading-tight">
                            Port Services
                        </h1>
                    </div>
                </div>

                {/* Deskripsi */}
                <p className="textprt text-lg p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium at, earum nisi quis, hic distinctio voluptate, molestias odio necessitatibus autem facilis itaque eum. Veritatis placeat veniam nobis dolor numquam?
                </p>

                {/* Slider */}
                <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
                    <Slider {...settings}>
                        {sliderItems.map((item, index) => (
                            <div key={index} className="px-2">
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl z-20">
                                        {item.label}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    );
};

export default Pageport;
