import React from 'react';
import '../styles/SystemInit.css';

const SystemInit = () => {
  return (
    <section className="hero-section" id="about">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">bash - root@jordan-server</span>
        </div>
        <div className="terminal-body">
          <p className="command-line"><span className="prompt">root@jordan:~$</span> ./start_profile.sh</p>
          <h1 className="glitch-text">JORDAN A. CABANDON</h1>
          <h2 className="role-text">BSCpE // BACKEND ENGINEER</h2>
          <p className="bio-text">
            Computer Engineering student compiling raw curiosity into functional code. 
            Exploring the intersection of software and hardware, debugging complex challenges, 
            and engineering tomorrow's solutions one line at a time.
          </p>
          <div className="action-buttons">
            <a href="#projects" className="btn-primary">DEPLOY_PROJECTS</a>
            <a href="#contact" className="btn-secondary">OPEN_COMMS</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemInit;