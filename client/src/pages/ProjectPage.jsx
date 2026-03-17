import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectPage.css'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => String(p.id) === String(id))

  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <section className="project-page">
      <div className="container project-grid">
        <aside className="project-media">
          {project.image && (
            <div className="media-wrapper">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            </div>
          )}
        </aside>

        <main className="project-content">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-summary">{project.description}</p>
          {project.longDescription && <p className="project-long">{project.longDescription}</p>}

          <h3>Tech</h3>
          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>

          <div className="project-actions">
            {project.link && (
              <a className="btn primary" href={project.link} target="_blank" rel="noopener noreferrer">Visit project</a>
            )}
            {project.repo && (
              <a className="btn" href={project.repo} target="_blank" rel="noopener noreferrer">View repo</a>
            )}
          </div>

          <p className="back-link"><Link to="/">← Back to projects</Link></p>
        </main>
      </div>
    </section>
  )
}
