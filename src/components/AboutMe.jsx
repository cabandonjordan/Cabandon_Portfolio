import React from 'react';
import { Compass, X, Target, Zap, Rocket } from 'lucide-react';
import Deadpool3D from './DeadPool3D';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const coreProtocols = [
    { icon: <Target size={28} />, label: 'Optimism' },
    { icon: <Zap size={28} />, label: 'Precision' },
    { icon: <Rocket size={28} />, label: 'Growth' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* LEFT COLUMN - TEXT */}
        <div className="about-left">
          <div className="about-header">
            <h1 className="about-title">
              About <span className="highlight-peach">Me.</span>
            </h1>
            <p className="about-subtitle">
              A glimpse into the journey, the mindset, and the aesthetics<br />
              driving the code.
            </p>
          </div>

          <div className="about-section-item" data-aos="fade-up">
            <div className="section-header-about">
              <Compass size={24} className="section-icon" />
              <h2>The Mindset</h2>
            </div>
            <p className="section-description">
              I believe that great software is built at the intersection of unwavering optimism and rigorous technical discipline. Every line of code is an opportunity to solve a problem more elegantly than the last time. My journey isn't just about frameworks; it's about continuously refining a craft.
            </p>
          </div>

          <div className="about-section-item" data-aos="fade-up">
            <div className="section-header-about">
              <X size={24} className="section-icon" />
              <h2>The Vision</h2>
            </div>
            <p className="section-description">
              Growing up, I was fascinated by the mechanics of the digital world. That curiosity evolved into a deep-seated passion for creating seamless, high-performance user experiences. I strive to build interfaces that don't just function flawlessly, but evoke a sense of futuristic sophistication.
            </p>
          </div>

          <div className="core-protocols" data-aos="fade-up">
            <p className="core-label">CORE PROTOCOLS</p>
            <div className="protocols-grid">
              {coreProtocols.map((protocol, index) => (
                <div key={index} className="protocol-item">
                  <div className="protocol-icon">
                    {protocol.icon}
                  </div>
                  <p className="protocol-label">{protocol.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - DEADPOOL HUD & 3D */}
        <div className="about-right">
          <div className="obsidian-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            MERC WITH A MOUTH
          </div>
          
          {/* HUD WRAPPER PLACED DIRECTLY IN HTML */}
          <div className="deadpool-container">
            {/* 2D HUD Elements */}
            <div className="dp-hud-bracket top-left"></div>
            <div className="dp-hud-bracket top-right"></div>
            <div className="dp-hud-bracket bottom-left"></div>
            <div className="dp-hud-bracket bottom-right"></div>
            <div className="dp-scanline"></div>
            <div className="dp-target-lock">BIOMETRIC_LOCKED</div>
            
            {/* 3D Canvas sits perfectly behind the HUD */}
            <Deadpool3D />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;