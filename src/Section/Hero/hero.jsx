import React, { forwardRef, useEffect, useMemo, useState } from "react";
import Particle from "../../Component/Particle/particle.js"
import './hero.css';

const Hero = forwardRef((props, ref) => {
  return (
    <section id="hero" ref={ref} className="hero">
      <div className="particles-container" alt="Fond animé imitant un ciel étoilées" >
        <Particle />
        </div>
      <div className="overlay-text">
        <h1 className="typing-container">
          <span className="mot">Bonjour, </span>
          <br />
          <span className="mot name">je </span>
          <span className="mot name">suis </span>
          <span className="mot name">Baptiste </span>
          <span className="mot name">Poussing</span>
          <br />
          <span className='mot'>Développeur web</span>
        </h1>
      </div>
      
    </section>
  );
});

export default Hero;

