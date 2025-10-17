import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import ProjectCard from "../../Component/ProjectCard/projectCard.js";
import ProjectModal from "../../Component/ProjectModal/projectModal.js";
import FilterButtons from "../../Component/FilterButtons/filterButtons.js";
import projectsData from "../../data/projects.json";

import './projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '120px 0px 0px 0px',
  });

  const { ref: filtersRef, inView: filtersInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '70px 0px 0px 0px',
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: '100px 0px 0px 0px',
  });

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-section main" id="projects" ref={sectionRef}>
      <h2
        className={`fade-up ${sectionInView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        Mes projets
      </h2>

      <div
        ref={filtersRef}
        className={`fade-up ${filtersInView ? 'visible' : ''}`}
        style={{ transitionDelay: '0ms' }}
      >
        <FilterButtons current={filter} changeFilter={setFilter} />
      </div>

      <div
        ref={gridRef}
        className={`projects-grid fade-up ${gridInView ? 'visible' : ''}`}
        style={{ transitionDelay: '200ms' }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={() => setSelectedProject(project)}
            tabIndex="0"
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}


