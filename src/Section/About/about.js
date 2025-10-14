import './about.css';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: p1Ref, inView: p1InView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '60px 0px'
  });

  const { ref: p2Ref, inView: p2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  const { ref: p3Ref, inView: p3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '120px 0px'
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
        Âgé de 30 ans, j'ai commencé mon parcours par une première année de licence en informatique, puis j’ai poursuivi en autodidacte avec le cours CS50x de Harvard, qui m’a permis d’acquérir de solides bases en algorithmie et en logique de programmation.
        <br />
        J’ai ensuite consolidé mes compétences au sein de la formation Développeur web d’OpenClassRooms, où j’ai conçu plusieurs projets concrets en HTML/CSS, JavaScript, React, Node.js et MongoDB.
      </p>

      <p
        ref={p2Ref}
        className={`fade-up ${p2InView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Cette expérience m’a aussi permis de renforcer mes connaissances en performance web et en SEO, notamment à travers la refonte complète d’un portfolio de photographe.
        <br />
        Parmi mes projets, j’ai développé une API de notation de livres avec Node.js, Express et MongoDB, incluant authentification, gestion d’images et opérations CRUD sécurisées. 
        Ce projet m’a permis d’approfondir mes compétences en back-end et en optimisation des performances.
        <br />
        Enfin, mes projets en langage C de CS50x ont approfondi ma compréhension des fondements du développement et de la rigueur algorithmique.
      </p>

      <p
        ref={p3Ref}
        className={`fade-up ${p3InView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Je suis quelqu’un de polyvalent, rigoureux et soucieux du détail, toujours motivé à apprendre et à m’améliorer. J’aime collaborer en équipe et appliquer les méthodes agiles pour concevoir des solutions fiables, performantes et bien structurées.
        <br />
        Mon objectif est d’intégrer une équipe dynamique en tant que développeur full stack, afin de continuer à progresser, découvrir de nouvelles technologies et contribuer à des projets à forte valeur ajoutée.
      </p>
    </section>
  );
}


export default About;



