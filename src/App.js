import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Foundation from './component/foundation';
import Metal from './component/metal';
import Port from './component/port';
import Landingpage from './component/landingpage';
import Services from './component/Service';
import Pageconsul from './component/surveying';
import About from './component/about';
import Project from './component/project';
import Contact from './component/contact';
import Pagetusk from './pageport/pagetusk';
import Pagebup from './pageport/pagebup';
import Pagegarispantai from './pageport/pagegasrispantai';
import Penundaan from './pageport/penundaan';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pageconsul" element={<Pageconsul />} />
        <Route path="/services" element={<Services />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/port" element={<Port />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tusktersus" element={<Pagetusk />} />
          <Route path="/ppkapal" element={<Penundaan />} />
          <Route path="/bup" element={<Pagebup />} />
          <Route path="/gpantai" element={<Pagegarispantai />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
