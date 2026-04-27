import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 

function App() {
  // Initialize smooth scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation lasts 1 second
      once: false,    // Animates every time you scroll up/down
      mirror: true,
    });
  }, []);

  return (
    <div className="main-viewport">
      <div className="css-grid-bg"></div>
      <div className="css-vignette"></div>
      
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