import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Beams from './components/Beams';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 

function App() {
  // Initialize smooth scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      mirror: true,
    });
  }, []);

  return (
    <div className="main-viewport">
      <Beams lightColor="#ff003c" />
      
      <div className="content-layer">
        <Navbar />
        {/* Wrapping components in AOS data attributes */}
        <div data-aos="fade-up"><SystemInit /></div>
        <div data-aos="fade-right"><AboutMe /></div>
        <div data-aos="fade-left"><TechStack /></div>
      </div>
    </div>
  );
}

export default App;