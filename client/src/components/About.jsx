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
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills</h2>
          <p className="text-base-content/75 leading-7 max-w-2xl mx-auto mt-4">
            Experienced across infrastructure, automation, and support — key technologies and tooling used day-to-day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div
              key={s}
              className="card bg-base-200 border border-base-300 px-6 py-5 flex items-center justify-center text-center font-semibold text-base-content rounded-2xl hover:border-primary hover:text-primary transition-all duration-200"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
