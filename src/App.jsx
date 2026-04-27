import React from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import AboutMe from './components/AboutMe'; // 1. Import new component
import TechStack from './components/TechStack';
import './App.css'; 

function App() {
  return (
    <div className="main-viewport">
      {/* Background Layers */}
      <div className="css-grid-bg"></div>
      <div className="css-vignette"></div>
      
      {/* Portfolio Content */}
      <div className="content-layer">
        <Navbar />
        <SystemInit />
        <AboutMe /> {/* 2. Place it here */}
        <TechStack />
      </div>
    </div>
  );
}

export default App;