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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-x-2">
          <button className="btn ">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills</h2>
        <p className="text-slate-300 leading-7 max-w-3xl mx-auto mt-4 mb-8 text-center">Experienced across infrastructure, automation, and support — key technologies and tooling used day-to-day.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch justify-items-center">
          {skills.map((s, idx) => (
            <div key={s} className="hover-3d inline-grid w-full place-items-center">
              <div className="card card-compact w-full max-w-[240px] min-h-[84px] bg-base-200 border border-base-300 text-base-content flex items-center justify-center px-6 py-5 font-semibold break-words rounded-2xl">
                <span className="leading-6">{s}</span>
              </div>
              {/* eight invisible hotspots for directional hover (daisyui requires 8 zones) */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} aria-hidden />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
