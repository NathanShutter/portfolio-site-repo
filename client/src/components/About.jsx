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
          <p className="mono text-xs text-primary mb-3">// What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills</h2>
          <p className="text-base-content/75 leading-7 max-w-2xl mx-auto mt-4">
            Experienced across infrastructure, automation, and support — key technologies and tooling used day-to-day.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map((s) => (
            <span
              key={s}
              className="px-5 py-2.5 bg-base-200 border border-base-300 rounded-full font-medium text-base-content hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 text-sm cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
