import React from "react";
import Navbar from './navbar';

function Pagecontact() {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <main className="flex flex-col items-center text-center mt-20 py-16 px-6">
        <div className="bg-golden-500 text-gray-900 rounded-lg p-10 shadow-lg max-w-5xl py-16 px-16">
          {/* Heading dengan font Ubuntu */}
          <h1
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Ubuntu', sans-serif" }} // Menggunakan font Ubuntu
          >
            LET’S BUILD SUCCESS TOGETHER!
          </h1>
          <p className="text-lg font-arial mb-8">
            At PT Alfatih Pilar Peradaban, our team is dedicated to delivering results that exceed expectations. Whether you have questions, need expert advice, or want to explore a partnership, we’re here to help. Reach out and let’s discuss how we can support your vision with precision and expertise.
          </p>
          <a href="mailto:alfatihpilarperadaban@gmail.com">
            {/* Tombol lebih lebar dengan padding horizontal yang lebih besar */}
            <button className="bg-charcoal-600 text-white px-10 py-2 font-bold hover:bg-gray-700 transition">
              EMAIL US
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Pagecontact;