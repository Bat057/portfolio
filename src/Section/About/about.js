import './about.css';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: p1Ref, inView: p1InView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: '60px 0px'
  });

  const { ref: p2Ref, inView: p2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '100px 0px'
  });
  
  return (
    <section ref={titleRef} id="about" className="apropos main">
      <h2
        
        className={`fade-up ${titleInView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Qui suis-je ?
      </h2>

      <p
        ref={p1Ref}
        className={`fade-up ${p1InView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Je suis développeur web Full stack, j'aime concevoir et réaliser des sites web optimisés et sécurisés.
        <br />
        Âgé de 30 ans, j'ai commencé à me former en autodidacte, avec notamment le cours CS50 proposé par Harvard, qui m'a permis d'apprendre les bases et la théorie du développement.
        <br />
        Je me suis ensuite lancé officiellement en tant que Développeur web avec une formation OpenClassRooms.
      </p>

      <p
        ref={p2Ref}
        className={`fade-up ${p2InView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Dans le cadre de cette formation, j'ai réalisé des sites avec HTML/CSS, Javascript, React, Node.js et MongoDB.
        <br />
        J'ai également les capacités d'améliorer nettement les performances et le SEO, que j'ai pu développer lors de la refonte d'un portfolio de photographe.
        <br />
        J'ai également pu développer mes compétences en langage C et en algorithmie, en réalisant plusieurs projets avec CS50.
      </p>
    </section>
  );
}


export default About;



