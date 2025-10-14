import React, { useState, useEffect } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header({ isHeroVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navClass = isMobile ? 'opaque' : (isHeroVisible ? 'transparent' : 'opaque');

  return (
    <header className={`navbar ${navClass}`}>
      <nav>
        <div className='nav-left'>
          <a href="#hero" aria-label="Remonter à l'accueil">
            <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
          </a>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className='link-nav' onClick={closeMenu}>À propos</a>
          <a href="#projects" className='link-nav' onClick={closeMenu}>Projets</a>
          <a href="#skills" className='link-nav' onClick={closeMenu}>Compétences</a>
          <a href="#parcours" className='link-nav' onClick={closeMenu}>Parcours</a>
          <a href="#contact" className='link-nav' onClick={closeMenu}>Contact</a>
        </div>

        <div className='nav-right'>
          <a href="https://github.com/Bat057" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className='github' />
          </a>
          <div className='icon-nav-mobile' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;