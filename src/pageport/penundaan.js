
import React from "react";
import '../App.css';
import banner from '../gambar/tusk.jpg';

function Penundaan() {
    return (
        <div>
            <main>
                <div className="img-container">
                    <img 
                        src={banner} 
                        alt="portsvc" 
                        className="portsvc-img" 
                    />
                    <div className="overlay">
                        <h1>Port Services</h1>
                    </div>
                </div>

                <h1 className="judulsvc">
                    Vessel Piloting & Towing Services
                </h1>

                <p class= "textprt">
                    Our port services feature specialized terminal facilities tailored to meet the unique operational needs of various industries. We offer two main terminal solutions: Terminal for Own Use (TUKS) and Special Terminal (TERSUS), each designed to support and streamline the key business activities of our clients. <br /> <br />
                    A Terminal for Own Use (TUKS) is a dedicated terminal located within the port’s working environment and designated area of interest. This terminal type directly serves the needs of its main business, whether in mining, energy production, forestry, agriculture, fisheries, industrial manufacturing, tourism, or shipyard and docking operations. TUKS terminals are designed to enhance efficiency and security by allowing companies to manage their logistics internally without relying on shared facilities within the port. <br /> <br />
                    Meanwhile, the Special Terminal, or TERSUS, operates independently outside the main port's designated boundaries but remains strategically located near the port. Built exclusively for specific companies, TERSUS terminals cater to industries requiring dedicated logistics support for activities like mining, energy, and manufacturing. TERSUS terminals allow companies greater flexibility and control, offering custom-built infrastructure that ensures secure and efficient management of supply chains near port access. <br /> <br />
                    These specialized terminal options underscore our commitment to delivering business-aligned port solutions that improve productivity, reduce logistical complexities, and support the strategic growth of our clients. <br /> <br />

                    <b>Guidelines for Required Service Documents</b><br /> <br />
                    To set up and operate either a Terminal for Own Use (TUKS) or a Special Terminal (TERSUS), companies typically need documentation that verifies their business eligibility, location compliance, and operational safety. Key documents may include:<br /> <br />

                    - Business Registration & Licenses<br />
                    - Environmental Impact Assessment (EIA)<br /> 
                    - Operational Safety Plan<br /> 
                    - Facility Layout & Design Plans<br /> 
                    - Customs and Regulatory Approvals<br />
                </p>
            </main>
        </div>
    );
}

export default Penundaan;