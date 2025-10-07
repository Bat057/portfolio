import React, { useState, useEffect } from 'react';
import Hero from './Section/Hero/hero.jsx';
import About from './Section/About/about.js';
import Header from './Component/Header/header.js';
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.9,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Retarder l’affichage du header pour éviter le flash
    const timeout = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {hasMounted && <Header isHeroVisible={heroInView} />}
      <Hero ref={heroRef} />
      <About />
    </>
  );
}

export default App;



