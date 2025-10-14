import React, { useState, useEffect } from 'react';
import Hero from './Section/Hero/hero.js';
import About from './Section/About/about.js';
import Header from './Component/Header/header.js';
import Projects from './Section/Projects/projects.js';
import Skills from './Section/Skills/skills.js';
import Parcours from './Section/Parcours/parcours.js';
import Contact from './Section/Contact/contact.js';
import Footer from './Component/Footer/footer.js';

function App() {
 
  const [hasMounted, setHasMounted] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {hasMounted && <Header isHeroVisible={heroInView} />}
      <Hero onInViewChange={setHeroInView} />
      <About />
      <Projects />
      <Skills />
      <Parcours />
      <Contact />
      <Footer />
    </>
  );
}

export default App;