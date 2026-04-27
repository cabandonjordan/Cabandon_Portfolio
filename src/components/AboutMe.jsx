import React from 'react';
import { Facebook, Instagram, Twitter, Shield, Terminal, Crosshair } from 'lucide-react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      
      {/* Outer Window Container */}
      <div className="os-window-frame">
        <div className="os-window-header">
          <div className="window-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot red-dot"></span>
          </div>
          <span className="window-title">sys_profile.exe</span>
        </div>

        <div className="os-window-body">
          
          {/* LEFT PANEL: Data & Objectives */}
          <div className="panel left-panel">
            <h2 className="glitch-title" data-text="SYSTEM_PROFILE // SUBJECT">
              SYSTEM_PROFILE // SUBJECT
            </h2>
            
            <div className="data-group">
              <p className="data-row"><span className="label">IDENTIFICATION:</span> JORDAN A. CABANDON</p>
              <p className="data-row"><span className="label">STATUS:</span> 3RD YEAR UNIT (CIT-U) // COMP_ENG</p>
            </div>

            <div className="objectives-group">
              <h3 className="sub-label"><Terminal size={16} /> OPERATIONAL_OBJECTIVES:</h3>
              <ul className="objective-list">
                <li>Architecting constructs built with <strong>great effort & good quality</strong>.</li>
                <li>Unyielding optimism. Wired to <strong>face difficult challenges</strong> head-on.</li>
                <li><span className="label">GOAL:</span> Secure fully <strong>FULLSTACK_DEVELOPER</strong> status.</li>
              </ul>
            </div>

            {/* New Shiny Cyber Button (No Brackets) */}
            <button className="cyber-button shiny-sweep">
              INITIALIZE_LOG
            </button>
          </div>

          {/* RIGHT PANEL: Visual Radar & Comms */}
          <div className="panel right-panel">
            <div className="radar-container">
              <div className="radar-ring outer-ring"></div>
              <div className="radar-ring middle-ring"></div>
              <div className="radar-ring inner-ring">
                <Shield className="core-icon" size={48} />
              </div>
              <div className="radar-scanner"></div>
              <h3 className="radar-text glowing-text">3RD_YEAR_UNIT</h3>
            </div>

            <div className="comms-footer">
              <p className="sub-label"><Crosshair size={14} /> OPEN_COMM_CHANNELS</p>
              <div className="social-links">
                <a href="#" className="social-btn"><Facebook size={20} /></a>
                <a href="#" className="social-btn"><Instagram size={20} /></a>
                <a href="#" className="social-btn"><Twitter size={20} /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;