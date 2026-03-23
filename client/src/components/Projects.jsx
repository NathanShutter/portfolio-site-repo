import { Link } from 'react-router-dom'
import projects from '../data/projects'
const placeholder = '/images/projects/wip.png'

export default function Projects() {
  // Ensure the grid evens out to multiples of 3 for large screens so spacing feels balanced
  const items = [...projects]
  const targetCols = 3
  while (items.length % targetCols !== 0) items.push(null)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items.map((project, idx) => (
            project ? (
              <div key={project.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <img src={project.image || placeholder} alt={`${project.title} thumbnail`} className="w-full h-44 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-slate-300 leading-7 mt-2">{project.description}</p>
                <div className="text-slate-300 mt-3">{project.tech.join(' · ')}</div>
                <Link to={`/projects/${project.id}`} className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl px-5 py-3">View Project</Link>
              </div>
            ) : (
              <div key={`placeholder-${idx}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center opacity-60">
                <div className="text-slate-400">Coming soon</div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
