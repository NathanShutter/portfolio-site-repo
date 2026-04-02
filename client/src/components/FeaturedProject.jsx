import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
const placeholder = '/images/projects/wip.png'

export default function FeaturedProject() {
  const project = projects[0]
  if (!project) return null

  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Spotlight</p>
          <h2 id="featured-title" className="text-3xl md:text-4xl font-semibold tracking-tight">{project.title}</h2>
        </div>
        <div className="card bg-base-200 border border-base-300 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-base-300/40 min-h-64">
              <img
                src={project.image || placeholder}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center gap-5">
              <p className="text-base-content/80 leading-7">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge badge-outline text-base-content/75">{t}</span>
                ))}
              </div>
              <div>
                <Link to={`/projects/${project.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
