import React, { useState, useEffect } from 'react';
import Hero from './Section/Hero/hero.jsx';
import About from './Section/About/about.js';
import Header from './Component/Header/header.js';
import Projects from './Section/Projects/projects.js';
import Skills from './Section/Skills/skills.js';
import Parcours from './Section/Parcours/parcours.js';
import Contact from './Section/Contact/contact.js';
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.9,
  });

  const [hasMounted, setHasMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 100);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {hasMounted && <Header isHeroVisible={isDesktop ? heroInView : false} />}
      <Hero ref={heroRef} />
      <About />
      <Projects />
      <Skills />
      <Parcours />
      <Contact />
    </>
  );
}

export default App;



