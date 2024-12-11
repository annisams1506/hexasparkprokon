import React from "react";
import Navbar from "./navbar";
import kapalbaru from '../gambar/bup.jpg';
import pertamina from '../images/pertamina.png';
import pln from  '../images/pln.png';
import tiga from '../images/tiga.png';
import empat from '../images/empat.png';
import lima from '../images/lima.png';
import enam from '../images/enam.png';

function Accordion({ title, children }) {
  return (
    <div className="mb-4 border border-gray-300 rounded shadow-sm">
      <div
        className="w-full px-4 py-2 bg-yellow-500 text-black text-center"
        style={{ fontSize: '20px', fontFamily: "'Poly', serif" }} // Ukuran font subjudul menjadi 20px
      >
        {title}
      </div>
      <div className="px-4 py-2 bg-orange-100 text-gray-700">
        {children}
      </div>
    </div>
  );
}

function Pageproject() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>

      {/* Banner Section */}
      <div
        className="relative h-[423px] bg-cover bg-center"
        style={{ backgroundImage: `url(${kapalbaru})` }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-center text-golden-500 text-4xl mt-16 font-bold"
            style={{ fontFamily: "'Poly', serif" }}>
            Projects & Clients
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">
        {/* TUKS Section */}
        <Accordion title="TUKS">
          <ol
            className="list-decimal pl-6 space-y-2"
            style={{ fontFamily: 'Arial', color: 'black', fontSize: '18px' }} // Ukuran normal untuk isi
          >
            <li>
              <p>PT Energi Alam Andalas</p>
              <p>Document Preparation for Special Terminal Use (TUKS) for Nickel Metal Mineral and Coal Transshipment in Mandiangin Village, Minas District, Siak Regency, Riau.</p>
              <p>Location: Mandiangin Village, Minas District, Siak Regency, Riau.</p>
              <p>Year: 2023.</p>
            </li>
            <li>
              <p>PT Bagus Jaya Abadi</p>
              <p>Preparation of Adjustment Permit Documents for Private Terminal Use (TUKS) for Non-Metallic Mineral and Rock Production Operations.</p>
              <p>Location: Kelurahan Supraw, Distrik Maladomes, Sorong City, West Papua.</p>
              <p>Year: 2020.</p>
            </li>
          </ol>
        </Accordion>

        {/* TERSUS Section */}
        <Accordion title="TERSUS">
          <ol
            className="list-decimal pl-6 space-y-2"
            style={{ fontFamily: 'Arial', color: 'black', fontSize: '16px' }} // Ukuran normal untuk isi
          >
            <li>
              <p>PT Balantak Sirtu Utama</p>
              <p>Preparation of Construction and Operational Permit Documents for Special Terminal (TERSUS) for Rock Mining Production Operations.</p>
              <p>Location: Desa Batu Mandi, Kecamatan Balantak Utara, Banggai Regency, Central Sulawesi.</p>
              <p>Year: 2019.</p>
            </li>
            <li>
              <p>PT Fazda Pertambangan Bebatuan</p>
              <p>Preparation of Technical Documents for Construction and Operational Permit for Special Terminal (TERSUS) for Rock Mining.</p>
              <p>Location: Desa Gililana, Kecamatan Petasia, Morowali Utara Regency, Central Sulawesi.</p>
              <p>Year: 2019.</p>
            </li>
            <li>
              <p>PT Hasnur Jaya International</p>
              <p>Preparation of Temporary Usage Permit Documents for Special Terminal (TERSUS) for Public Interest Services.</p>
              <p>Location: Desa Pendang, Kecamatan Dusun Utara, Barito Selatan Regency, Central Kalimantan.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Lamindo Intermultikon</p>
              <p>Preparation of Technical Feasibility Study (FS) Documents for Special Terminal (TERSUS) for Coal Mining.</p>
              <p>Location: Pulau Bunyu, Bulungan Regency, North Kalimantan.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Ganda Alam Makmur</p>
              <p>Preparation of Development Permit Documents for Special Terminal (TERSUS) for Coal Mining.</p>
              <p>Location: Desa Sempayau, Kecamatan Sangkulirang, Kutai Timur Regency, East Kalimantan.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Poliplant Sejahtera</p>
              <p>Preparation of Permit Documents for Special Terminal Open for International Trade.</p>
              <p>Location: Desa Kedondong, Kecamatan Kendawangan, Ketapang Regency, West Kalimantan.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Union Perkasa Buana</p>
              <p>Consulting Services for Technical Planning and Data Processing for the Construction and Operation Permit of Special Terminal.</p>
              <p>Location: Desa Telang Baru, Kecamatan Paju Epat, Barito Timur Regency, Central Kalimantan.</p>
              <p>Year: 2024.</p>
            </li>
            <li>
              <p>PT Marine Del Ray</p>
              <p>Consulting Services for Technical Planning and Data Processing for Adjustment Permit of Special Terminal.</p>
              <p>Location: Desa Gili Gede Indah, Kecamatan Sekotong, Lombok Barat Regency, West Nusa Tenggara.</p>
              <p>Year: 2024.</p>
            </li>
            <li>
              <p>PT Bengalon Jaya Lestari</p>
              <p>Consulting Services for Technical Planning and Data Processing for Extension Permit of TUKS Operations.</p>
              <p>Location: Within the Work Environment and Port Interest Areas of Samarinda.</p>
              <p>Year: 2024.</p>
            </li>
            <li>
              <p>PT Gamatara Trans Ocean Shipyard</p>
              <p>Consulting Services for Technical Planning and Data Processing for the Construction Permit of Special Terminal.</p>
              <p>Location: Kelurahan Panjunan, Kecamatan Lemahwungkuk, Cirebon City, West Java.</p>
              <p>Year: 2024.</p>
            </li>
          </ol>
        </Accordion>

        {/* BUP Section */}
        <Accordion title="BUP">
          <ol
            className="list-decimal pl-6 space-y-2"
            style={{ fontFamily: 'Arial', color: 'black', fontSize: '16px' }} // Ukuran normal untuk isi
          >
            <li>
              <p>PT Jasa Labuh Indonesia</p>
              <p>Preparation of Port Business Entity Permit Documents.</p>
              <p>Location: Tanah Ampo, Bali Province.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Wahana Multi Terminal</p>
              <p>Preparation of Port Business Entity Permit Documents.</p>
              <p>Location: [Details Needed].</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Bukit Batu Antang Coal</p>
              <p>Preparation of Port Business Entity Permit Documents.</p>
              <p>Location: Gunung Anggis, Banjar Baru, South Kalimantan.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Adhiguna Putera</p>
              <p>Preparation of Port Business Entity Permit Documents.</p>
              <p>Location: Jl. Kartini, Sawah Besar, Central Jakarta.</p>
              <p>Year: 2020.</p>
            </li>
            <li>
              <p>PT Bandar Laut Sejahtera</p>
              <p>Preparation of Port Business Entity Permit Documents.</p>
              <p>Location: Jl. Wijaya I No. 381, Kebayuran Baru, South Jakarta.</p>
              <p>Year: 2020.</p>
            </li>
          </ol>
        </Accordion>
        {/* OUR CLIENTS Section */}
        <section className="text-center mt-10 mb-10">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center border-b-4 border-golden-500 inline-block">
            OUR CLIENTS
          </h2>
          <div className="flex justify-center flex-wrap gap-8 mt-6">
            <a href="https://www.pertamina.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={pertamina}
                alt="Pertamina Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.pln.co.id/" target="_blank" rel="noopener noreferrer">
              <img
                src={pln}
                alt="PLN Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.tiga.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={tiga}
                alt="Client 3 Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://gts-shipyard.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={empat}
                alt="Client 4 Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.musagreen.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={lima}
                alt="Client 5 Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.enam.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={enam}
                alt="Client 6 Logo"
                className="w-40 h-40 object-contain transform transition-transform duration-500 hover:scale-110 hover:opacity-80"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pageproject;