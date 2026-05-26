import React from 'react';
import { Compass, X, Target, Zap, Rocket } from 'lucide-react';
import Stack from './Stack';
import '../styles/AboutMe.css';

// IMPORT IMAGES HERE so Vercel bundles them correctly
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import about3 from '../assets/about-3.jpg';

const AboutMe = () => {
  const coreProtocols = [
    { icon: <Target size={28} />, label: 'Optimism' },
    { icon: <Zap size={28} />, label: 'Precision' },
    { icon: <Rocket size={28} />, label: 'Growth' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT COLUMN */}
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

          {/* THE MINDSET SECTION */}
          <div className="about-section-item" data-aos="fade-up">
            <div className="section-header-about">
              <Compass size={24} className="section-icon" />
              <h2>The Mindset</h2>
            </div>
            <p className="section-description">
              I believe that great software is built at the intersection of unwavering optimism and rigorous technical discipline. Every line of code is an opportunity to solve a problem more elegantly than the last time. My journey isn't just about frameworks; it's about continuously refining a craft.
            </p>
          </div>

          {/* THE VISION SECTION */}
          <div className="about-section-item" data-aos="fade-up">
            <div className="section-header-about">
              <X size={24} className="section-icon" />
              <h2>The Vision</h2>
            </div>
            <p className="section-description">
              Growing up, I was fascinated by the mechanics of the digital world. That curiosity evolved into a deep-seated passion for creating seamless, high-performance user experiences. I strive to build interfaces that don't just function flawlessly, but evoke a sense of futuristic sophistication.
            </p>
          </div>

          {/* CORE PROTOCOLS */}
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

        {/* RIGHT COLUMN - IMAGES & OBSIDIAN PULSE */}
        <div className="about-right">
          <div className="obsidian-label">
            OBSIDIAN PULSE
          </div>
          
          <div className="about-images">
            <Stack 
              cards={[
                (
                  <img
                    src={about1}
                    alt="portfolio-1"
                    className="about-card-image"
                  />
                ),
                (
                  <img
                    src={about2}
                    alt="portfolio-2"
                    className="about-card-image"
                  />
                ),
                (
                  <img
                    src={about3}
                    alt="portfolio-3"
                    className="about-card-image"
                  />
                )
              ]}
              randomRotation={true}
              sensitivity={150}
              sendToBackOnClick={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;