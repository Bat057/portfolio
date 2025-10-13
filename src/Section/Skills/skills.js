import './skills.css';
import { useInView } from 'react-intersection-observer';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiMongodb, SiC } from "react-icons/si";

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
  { name: 'Langage C', icon: <SiC color="#00599C" /> },
];

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-100px 0px',
  });

  return (
    <section id="skills" ref={ref} className="skills main">
      <h2 className={`fade-up ${inView ? 'visible' : ''}`}>Mes compétences</h2>

      <div className={`skillsGrid fade-up ${inView ? 'visible' : ''}`}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skillCard"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
