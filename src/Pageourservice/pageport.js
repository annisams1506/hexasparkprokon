
import React from "react";
import '../App.css';
import banner from '../gambar/port.jpg';

function Pageport() {
    return (
        <div>
                <main>
                <div
                className="relative h-[423px]"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="overlay">
                            <h1>Port Services</h1>
                        </div>
                    </div>
                    <p class= "textprt  text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium at, earum nisi quis, hic distinctio voluptate, molestias odio necessitatibus autem facilis itaque eum. Veritatis placeat veniam nobis dolor numquam?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nisi veniam accusantium ullam, aspernatur hic! Accusamus quidem neque tempore? Id aperiam, commodi rem odio at distinctio eum excepturi laudantium rerum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, hic doloremque magnam aut excepturi temporibus vero, reiciendis voluptate voluptas perspiciatis laborum est! Est sed quis atque quos quam, quia laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium at, earum nisi quis, hic distinctio voluptate, molestias odio necessitatibus autem facilis itaque eum. Veritatis placeat veniam nobis dolor numquam?
                    </p>
                    {/* Card Section */}
                    <section className="card-port">
                        <a href="/tusktersus" className="card">
                            <h2>TURKS & TERSUS</h2>
                        </a>
                        <a href="/bup" className="card">
                            <h2>BUP</h2>
                        </a>
                        <a href="/gpantai" className="card">
                            <h2>Garis Pantai</h2>
                        </a>
                        <a href="/ppkapal" className="card">
                            <h2>Pemanduan & Penundaan Kapal</h2>
                        </a>
                    </section>
                </main>
        </div>
    );
}

export default Pageport;