import React, { useEffect, useState } from 'react';
import RobotCore3D from './RobotCore3D';
import profilePic from '../assets/about-4.jpg'; 
import '../styles/SystemInit.css';

const SystemInit = () => {
  const [bootStage, setBootStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setBootStage(1), 300),
      setTimeout(() => setBootStage(2), 900),
      setTimeout(() => setBootStage(3), 1500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Built-in 3D Tilt Effect for the card
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="hero-section cyber-hud" id="home">
      <RobotCore3D />

      <div className="hud-container">
        
        {/* --- LEFT COLUMN: TERMINAL TEXT --- */}
        <div className="hud-left">
          <div className={`hud-sys-info ${bootStage >= 1 ? 'power-on' : ''}`}>
            <p>STATUS: ONLINE</p>
            <p>BIOMETRIC: J.CABANDON</p>
            <div className="hud-line"></div>
          </div>

          <div className={`hud-main ${bootStage >= 2 ? 'power-on' : ''}`}>
            <div className="glitch-container">
              <h1 className="hud-name" data-text="JORDAN A. CABANDON">JORDAN A. CABANDON</h1>
            </div>
            <h2 className="hud-role">&gt; COMPUTER ENGINEER</h2>
            
            <div className="hud-metrics">
              <div className="metric-box">
                <span className="metric-label">EXP_</span>
                <span className="metric-value">5+ YRS</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">PRJ_</span>
                <span className="metric-value">6+</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">CLI_</span>
                <span className="metric-value">80+</span>
              </div>
            </div>

            <div className="hud-actions">
              <a href="#projects" className="cyber-btn primary">
                <span className="bracket">[</span> INITIATE PROJECTS <span className="bracket">]</span>
              </a>
              <a href="#contact" className="cyber-btn secondary">
                CONNECT.EXE
              </a>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: INLINE 3D CARD --- */}
        <div className={`hud-right ${bootStage >= 3 ? 'power-on' : ''}`}>
          
          <div className="cyber-card-wrapper">
            {/* The Red Background Glow */}
            <div className="cyber-card-glow"></div>
            
            {/* The Tilting Card */}
            <div 
              className="cyber-card-inner"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cyber-card-overlay"></div>
              
              <div className="cyber-card-info">
                <h3>Jordan A. Cabandon</h3>
                <p>Computer Engineer</p>
              </div>

              <img src={profilePic} alt="Jordan" className="cyber-card-image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemInit;