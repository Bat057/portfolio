import logo from '../../logo.svg';
import './hero.css';
import Particle from "../../Component/Particle/particle.js"
import Header from "../../Component/Header/header.js"
import React, { forwardRef } from 'react';


const Hero = forwardRef((props, ref) => {
  return (
    <section id="hero" ref={ref} className="hero">
      <div className="particles-container">
        <Particle />
        <div className="overlay-text">
          <p className="typing-container">
            <span className="mot">Bonjour, </span>
            <br></br>
            <span className="mot name">je </span>
            <span className="mot name">suis </span>
            <span className="mot name">Baptiste </span>
            <span className="mot name">Poussing</span>
            <br></br>
            <span className='mot'>Developpeur web</span>
          </p>
        </div>
      </div>
    </section>
  );
});



export default Hero;
