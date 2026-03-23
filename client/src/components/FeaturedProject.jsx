import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
const placeholder = '/images/projects/wip.png'

export default function FeaturedProject() {
  const project = projects[0]
  if (!project) return null

  return (
    <section className="py-20" aria-labelledby="featured-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={project.image || placeholder} alt={`${project.title} screenshot`} className="w-full rounded-2xl border border-white/10 bg-white/5 object-cover h-64" />
          </div>
          <div>
            <h2 id="featured-title" className="text-3xl md:text-4xl font-semibold tracking-tight">{project.title}</h2>
            <p className="text-slate-300 leading-7 mt-4">{project.description}</p>
            <div className="text-slate-300 mt-4">{project.tech.join(' · ')}</div>
            <div className="mt-6">
              <Link to={`/projects/${project.id}`} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl px-5 py-3">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
