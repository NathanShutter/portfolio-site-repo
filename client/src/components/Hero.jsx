import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>Nathan Shutter</h1>
          <p className="subtitle">Technical Support Specialist | IT Professional</p>
          <p className="bio">Delivering end-to-end IT solutions with expertise in troubleshooting, system optimization, and client support.</p>
          <div className="hero-ctas">
            <a href="#projects" className="cta-button">View Projects</a>
            <a href="/resume.pdf" className="cta-button secondary" download>Download Resume</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-illustration" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}

