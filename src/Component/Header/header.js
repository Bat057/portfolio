import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header({ isHeroVisible }) {
    return (
        <header className={`navbar ${isHeroVisible ? 'transparent' : 'opaque'}`}>
            <nav>
                <div className='nav-left'>
                    <a href="#hero"><FontAwesomeIcon icon={faRocket} className="rocket-icon" /></a>
                </div>
                <div className='nav-link'>
                    <a href="#about" className='link-nav'>À propos</a>
                    <a href="#about" className='link-nav'>Projets</a>
                    <a href="#about" className='link-nav'>Compétences</a>
                    <a href="#about" className='link-nav'>Parcours</a>
                    <a href="#about" className='link-nav'>Contact</a>
                </div>
                <div className='nav-right'>
                    <a href="https://github.com/Bat057" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='github'  /></a>
                </div>
            </nav>
        </header>
    );
}


export default Header;
