import './parcours.css';
import { useInView } from 'react-intersection-observer';

function Parcours() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '-150px 0px',
  });

  const parcoursData = [
    {
      title: 'Formation Développeur Web – OpenClassrooms',
      date: '2025 (6 mois)',
      description: '',
    },
    {
      title: 'CS50x – Harvard University',
      date: '2024',
      description: 'Online course',
    },
    {
      title: 'Vendeur polyvalent - GammVert',
      date: '2022-2024',
      description: '',
    },
    {
      title: 'Stages et CAP Pâtisserie',
      date: '2018-2020',
      description: '',
    },
    {
      title: '1ère année de Licence Informatique',
      date: '2017',
      description: '',
    },
    {
      title: 'Baccalauréat Scientifique',
      date: '2013',
      description: '',
    },
  ];

  return (
    <section ref={ref} id="parcours" className="parcours main">
      <h2 className={`fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
        Mon parcours
      </h2>

      <div className="parcours-container">
        {parcoursData.map((item, index) => (
          <div
            key={index}
            className={`parcours-item fade-up ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 250}ms` }}
          >
            <h3>{item.title}</h3>
            <span className="date">{item.date}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Parcours;

