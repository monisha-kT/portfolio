import React, { useState } from 'react';
import image1 from '../assets/moni.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-img1">
          <img src={image1} alt="Monisha Krishnan" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'} {/* Hamburger icon or close icon */}
        </button>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Hire Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;