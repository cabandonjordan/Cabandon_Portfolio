import React from 'react';
import { Cpu, Database, Wrench, Shield, Terminal, Target, Mail, Link, Phone } from 'lucide-react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const ABOUT_MODULES = [
    {
      title: "Subject Profile / Identification",
      icon: <Cpu className="category-icon text-[#ff003c]" />,
      content: (
        <>
          <p className="data-row"><span className="label">SUBJECT_NAME:</span> JORDAN A. CABANDON</p>
          <p className="data-row"><span className="label">STATUS:</span> 3RD YEAR UNIT (CIT-U) // COMP_ENG</p>
          <div className="typing-animation-container">
            <span className="status-label">STATUS_UPDATE: </span>
            <span className="typing-text">System initialization... complete. Subject online.</span>
          </div>
        </>
      ),
      image: "/src/assets/about-1.jpg", 
    },
    {
      title: "Operational Objectives",
      icon: <Target className="category-icon text-[#ff003c]" />,
      content: (
        <ul className="objective-list">
          <li>Architecting constructs built with <strong>great effort & good quality</strong>.</li>
          <li>Unyielding optimism. Wired to <strong>face difficult challenges</strong> head-on.</li>
          <li><span className="label">GOAL:</span> Secure fully <strong>FULLSTACK_DEVELOPER</strong> status.</li>
        </ul>
      ),
      image: "/src/assets/about-2.jpg", 
    },
    {
      title: "Core Traits & Environment",
      icon: <Shield className="category-icon text-[#ff003c]" />,
      content: (
        <>
          <p className="data-row"><span className="label">DESIGNATION:</span> A7-JAC_CABANDON_OS</p>
          <p className="description-text">
            I am an optimistic person that would greatly be happy to face more difficult challenges since I strive to become a good developer where I would be able to build anything.
          </p>
          <div className="icon-data-block">
            <Database className="data-icon" size={16} /> <span>Pinecone: ACTIVE</span>
          </div>
          <div className="icon-data-block">
            <Wrench className="data-icon" size={16} /> <span>Gemini AI // TensorFlow: ACTIVE</span>
          </div>
          <div className="icon-data-block">
            <Cpu className="data-icon" size={16} /> <span>Git // VS Code // GitHub: ACTIVE</span>
          </div>
        </>
      ),
      image: "/src/assets/about-3.jpg", 
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="os-console-panel">
        <div className="os-window-header">
          <div className="window-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot red-dot"></span>
          </div>
          <span className="window-title">sys_profile.exe</span>
        </div>

        <div className="os-window-body">
          {/* LEFT PANEL: Stacked Interactive Cards */}
          <div className="panel-console left-panel-console">
            <h2 className="glitch-title-console" data-text="SYSTEM_PROFILE // SUBJECT">
              SYSTEM_PROFILE // SUBJECT
            </h2>
            
            <div className="about-cards-grid">
              {ABOUT_MODULES.map((module, index) => (
                <div key={index} className="about-card-console">
                  <div className="category-header-about">
                    {module.icon}
                    <h3>{module.title}</h3>
                  </div>
                  {module.image && (
                    <div className="about-card-image-wrapper">
                      <img src={module.image} alt={module.title} className="about-card-image" />
                    </div>
                  )}
                  <div className="about-card-content">
                    {module.content}
                  </div>
                </div>
              ))}
            </div>

            <button className="cyber-button shiny-sweep">
              INITIALIZE_LOG
            </button>
          </div>

          {/* RIGHT PANEL: Visual Radar & Comms */}
          <div className="panel-console right-panel-console">
            <div className="visual-elements-container">
              <div className="radar-container-console">
                <div className="radar-ring-console outer-ring-console"></div>
                <div className="radar-ring-console middle-ring-console"></div>
                <div className="radar-ring-console inner-ring-console">
                  <Shield className="core-icon-console" size={48} />
                </div>
                <div className="radar-scanner-console"></div>
                <h3 className="radar-text-console glowing-text">3RD_YEAR_UNIT</h3>
              </div>
            </div>

            <div className="comms-footer-console">
              <p className="sub-label"><Terminal size={16} /> OPEN_COMM_CHANNELS</p>
              <div className="social-links-console">
                <a href="#" className="social-btn-console"><Mail size={20} /></a>
                <a href="#" className="social-btn-console"><Link size={20} /></a>
                <a href="#" className="social-btn-console"><Phone size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;