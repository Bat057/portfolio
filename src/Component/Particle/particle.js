import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; 
const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "#000" },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: { resize: true },
    },
    particles: {
      number: { value: 400, density: { enable: true, area: 1080 } },
      color: { value: "#fff" },
      move: { enable: true, speed: 0.05, outModes: { default: "bounce" } },
      shape: { type: "circle" },
      size: { value: { min: 0.7, max: 1.7 }, random: { enable: true, minimumValue: 0.5 } },
      opacity: {
        value: 1,
        random: { enable: true, minimumValue: 0.05 },
        animation: { enable: true, speed: 0.25, minimumValue: 0.05, sync: false },
      },
    },
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default Particle;