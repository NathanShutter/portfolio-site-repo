import React from 'react'

const skills = [
  'Networking',
  'Active Directory',
  'PowerShell',
  'Microsoft 365',
  'Windows Server',
  'Azure / Entra',
  'Troubleshooting',
  'Automation',
]

export default function About() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p className="skills-intro" style={{textAlign: 'center', color: 'var(--text-muted)', maxWidth: 760, margin: '0.5rem auto 1rem'}}>Experienced across infrastructure, automation, and support — key technologies and tooling used day-to-day.</p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s} className="skill-card">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
