import './projectModal.css';

function ProjectModal({ project, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>


        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.context && (
          <>
            <h4>Contexte</h4>
            <p>{project.context}</p>
          </>
        )}

        {project.objectives && (
          <>
            <h4>Objectifs</h4>
            <p>{project.objectives}</p>
          </>
        )}

        {project.skills && (
          <>
            <h4>Compétences développées</h4>
            <p>{project.skills}</p>
          </>
        )}

        {project.results && (
          <>
            <h4>Résultats</h4>
            <p>{project.results}</p>
          </>
        )}

        {project.improvements && (
          <>
            <h4>Perspectives d’amélioration</h4>
            <p>{project.improvements}</p>
          </>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <>
            <h4>Technologies</h4>
            <p className="tech-inline">
              {project.technologies.join(', ')}
            </p>
          </>
        )}

        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub du projet
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

