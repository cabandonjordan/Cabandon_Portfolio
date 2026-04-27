import React from 'react';
import Navbar from './components/Navbar';
import SystemInit from './components/SystemInit';
import TechStack from './components/TechStack';
import './App.css'; 

function App() {
  return (
    <div className="main-viewport">
      {/* Background Layers */}
      <div className="css-grid-bg"></div>
      <div className="css-vignette"></div>
      
      {/* Portfolio Contents */}
      <div className="content-layer">
        <Navbar />
        <SystemInit />
        <TechStack />
      </div>
    </div>
  );
}

export default App;