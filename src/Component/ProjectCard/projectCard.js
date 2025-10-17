import './projectCard.css';
import { SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

function ProjectCard({ project, openModal, tabIndex }) {
  const iconMap = {
    SiJavascript: <SiJavascript size={40} color="#F0DB4F" />,
    FaReact: <FaReact size={40} color="#61DBFB" />,
    FaNodeJs: <FaNodeJs size={40} color="#68A063" />,
  };

  const enterModal = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <div className="project-card" onClick={openModal} tabIndex={tabIndex} onKeyDown={enterModal}>
      <img src={`${process.env.PUBLIC_URL}${project.thumbnail}`} alt={project.alt} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        {iconMap[project.icon]}
      </div>
    </div>
  );
}

export default ProjectCard;

  