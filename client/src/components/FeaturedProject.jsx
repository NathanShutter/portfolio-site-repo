import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function FeaturedProject() {
  const project = projects[0]
  if (!project) return null

  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="container featured-grid">
        <div className="featured-media">
          {project.image ? (
            <img src={project.image} alt={`${project.title} screenshot`} className="featured-image" />
          ) : (
            <div className="featured-placeholder" />
          )}
        </div>
        <div className="featured-body">
          <h2 id="featured-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-tech" aria-label={`Technologies used: ${project.tech.join(', ')}`}>{project.tech.join(' · ')}</div>
          <div style={{marginTop: '1rem'}}>
            <Link to={`/projects/${project.id}`} className="cta-button">View Details</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
