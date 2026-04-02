import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => String(p.id) === String(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-base-content">Project not found</h2>
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <Link to="/" className="btn btn-ghost btn-sm">← Back</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image */}
          {project.image && (
            <div className="card bg-base-200 border border-base-300 overflow-hidden rounded-2xl">
              <figure>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full object-cover"
                />
              </figure>
            </div>
          )}

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-base-content">{project.title}</h1>
              <p className="text-base-content/70 leading-7 mt-3">{project.description}</p>
            </div>

            {project.longDescription && (
              <p className="text-base-content/80 leading-7">{project.longDescription}</p>
            )}

            <div>
              <h3 className="text-xs font-semibold text-base-content/50 uppercase tracking-widest mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="badge badge-outline">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {project.link && (
                <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              )}
              {project.repo && (
                <a className="btn btn-outline" href={project.repo} target="_blank" rel="noopener noreferrer">
                  View Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
