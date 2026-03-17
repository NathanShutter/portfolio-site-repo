import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

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
      <div className="container">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <h3>Tech</h3>
        <ul>
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Visit project</a>
        </p>
        <p>
          <Link to="/">← Back</Link>
        </p>
      </div>
    </section>
  )
}
