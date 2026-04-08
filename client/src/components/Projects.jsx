import { Link } from 'react-router-dom'
import projects from '../data/projects'
const placeholder = '/images/projects/wip.png'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">My Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="text-base-content/75 leading-7 max-w-2xl mx-auto mt-4">
            A selection of things I've built — spanning hardware integration, web apps, and automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group card bg-base-200 border border-base-300 rounded-2xl overflow-hidden hover:border-primary transition-colors duration-200">
              <img src={project.image || placeholder} alt={`${project.title} thumbnail`} className="w-full h-44 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-base-content group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                <p className="text-base-content/75 leading-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="badge badge-outline text-base-content/70 text-xs">{t}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2 hover:gap-2 transition-all duration-150">
                  View Project <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
