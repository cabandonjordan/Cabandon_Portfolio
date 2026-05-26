import React from 'react';
import '../styles/Contact.css'; // Make sure this matches your folder structure!

// ==========================================
// 1. INLINE ICONS (Bypasses the Vite Error)
// ==========================================
const GithubIcon = ({ size, strokeWidth, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size, strokeWidth, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size, strokeWidth, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = ({ size, strokeWidth, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const SendIcon = ({ size, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const Contact = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: GithubIcon,
      url: 'https://github.com/cabandonjordan',
      coordinate: '[DX_01]'
    },
    { 
      name: 'LinkedIn', 
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/jordan-cabandon-a07640377/',
      coordinate: '[DX_02]'
    },
    { 
      name: 'Twitter', 
      icon: TwitterIcon,
      url: 'https://twitter.com/cabandonjordan',
      coordinate: '[DX_03]'
    },
    { 
      name: 'Instagram', 
      icon: InstagramIcon,
      url: 'https://www.instagram.com/jordancbandon/',
      coordinate: '[DX_04]'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:cabandonjordan@gmail.com';
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        <div className="grid-overlay"></div>
        
        <div className="glow-effect glow-top"></div>
        <div className="glow-effect glow-bottom"></div>

        <div className="terminal-wrapper">
          <div className="terminal-header">
            <div className="header-left">
              <span className="system-id">SYS.CONTACT.88.9</span>
              <div className="scanner-bar">
                <div className="scanner-line"></div>
              </div>
            </div>
            <div className="header-right">
              <span className="coordinate-system">COORD: [UPLINK-ACTIVE]</span>
              <span className="signal-strength">⬤ SIGNAL: OPTIMAL</span>
            </div>
          </div>

          <div className="terminal-content">
            <h2 className="terminal-title">TERMINAL</h2>
            
            <div className="connection-status">
              <span className="status-dot"></span>
              <span className="status-text">AWAITING INBOUND SIGNAL</span>
            </div>

            <div className="data-blades-container">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="data-blade"
                  >
                    <div className="blade-header">
                      <span className="blade-coordinate">{social.coordinate}</span>
                      <span className="blade-label">{social.name}</span>
                    </div>
                    <div className="blade-content">
                      <IconComponent className="blade-icon" size={32} strokeWidth={1.5} />
                    </div>
                    <div className="blade-footer">
                      <span className="blade-status">
                        <span className="status-indicator"></span>
                        STATUS: ACTIVE
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="uplink-section">
              <button className="uplink-button" onClick={handleEmailClick}>
                <SendIcon size={20} strokeWidth={1.5} />
                <span>INITIATE DIRECT UPLINK</span>
              </button>
              <div className="uplink-description">
                Deploy primary communication channel
              </div>
            </div>

            <div className="terminal-footer">
              <div className="footer-module">
                <div className="footer-label">ENCRYPTION</div>
                <div className="footer-value">AES-256-QUANTUM</div>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-module">
                <div className="footer-label">LATENCY</div>
                <div className="footer-value">&lt; 12ms</div>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-module">
                <div className="footer-label">BANDWIDTH</div>
                <div className="footer-value">UNLIMITED</div>
              </div>
            </div>
          </div>

          <div className="corner-glow corner-tl"></div>
          <div className="corner-glow corner-tr"></div>
          <div className="corner-glow corner-bl"></div>
          <div className="corner-glow corner-br"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;