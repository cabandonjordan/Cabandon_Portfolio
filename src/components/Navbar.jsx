import React, { useState, useEffect } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detects when you scroll down to change navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Hexagon className="brand-icon" size={28} />
        <span className="brand-name">J.Cabandon</span>
      </div>

      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#stack" onClick={() => setIsOpen(false)}>Stack</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="nav-btn" onClick={() => setIsOpen(false)}>Deploy Comms</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;