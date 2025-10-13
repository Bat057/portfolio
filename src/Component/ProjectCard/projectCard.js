import './projectCard.css';
import { SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

function ProjectCard({ project, openModal }) {
  const iconMap = {
    SiJavascript: <SiJavascript size={40} color="#F0DB4F" />,
    FaReact: <FaReact size={40} color="#61DBFB" />,
    FaNodeJs: <FaNodeJs size={40} color="#68A063" />,
  };

  return (
    <div className="project-card" onClick={openModal}>
      <img src={project.thumbnail} alt={project.alt} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        {iconMap[project.icon]}
      </div>
    </div>
  );
}

export default ProjectCard;

  