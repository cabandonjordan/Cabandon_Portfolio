import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-icon">⚡</span>
        //new line
        <span className="brand-name">CABANDON_OS</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">[ INIT ]</a></li>
        <li><a href="#stack">[ STACK ]</a></li>
        <li><a href="#projects">[ ARCHIVE ]</a></li>
        <li><a href="#contact">[ COMMS ]</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;