import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header({ isHeroVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${isHeroVisible ? 'transparent' : 'opaque'}`}>
      <nav>
        <div className='nav-left'>
          <a href="#hero" aria-label="Icone pour remonter à l'accueil du site"><FontAwesomeIcon icon={faRocket} className="rocket-icon" /></a>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className='link-nav' onClick={closeMenu}>À propos</a>
          <a href="#projects" className='link-nav' onClick={closeMenu}>Projets</a>
          <a href="#skills" className='link-nav' onClick={closeMenu}>Compétences</a>
          <a href="#parcours" className='link-nav' onClick={closeMenu}>Parcours</a>
          <a href="#contact" className='link-nav' onClick={closeMenu}>Contact</a>
        </div>

        <div className='nav-right'>
          <a href="https://github.com/Bat057" aria-label="GitHub de Baptiste Poussing" target="_blank" rel="noopener noreferrer">
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


