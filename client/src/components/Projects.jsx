import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              {project.image && <img src={project.image} alt={`${project.title} thumbnail`} className="project-thumb" />}
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="project-link">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
