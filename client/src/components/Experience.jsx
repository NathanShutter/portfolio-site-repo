import React from 'react'

export default function Experience() {
  const jobs = [
    {
      id: 1,
      title: 'Technical Support Specialist I',
      company: 'PointSolve Technology, Inc.',
      location: 'Lebanon, PA',
      period: 'DEC 2024 – PRESENT',
      description: 'Provide end-to-end IT support for diverse clients including on-site installations, troubleshooting, and remote help desk services within an MSP environment.',
      highlights: [
        'Manage multiple client environments simultaneously',
        'Conduct system reviews and implement proactive improvements',
        'Maintain detailed client documentation',
        'Deliver secure, scalable IT solutions'
      ]
    },
    {
      id: 2,
      title: 'PC Deployment Technician',
      company: 'All Lines Technology',
      location: 'Harrisburg, PA',
      period: 'SEP 2024 – DEC 2024',
      description: 'Executed large-scale hardware rollouts across multiple healthcare facilities, managing imaging and deployment of end-user devices.',
      highlights: [
        'Large-scale hardware deployments across healthcare facilities',
        'Ensured compliance with UPMC IT standards',
        'Integrated systems into Active Directory environment',
        'Conducted comprehensive site surveys'
      ]
    },
    {
      id: 3,
      title: 'Help Desk Analyst',
      company: 'Kutztown University',
      location: 'Kutztown, PA',
      period: 'JAN 2022 – MAY 2024',
      description: 'Provided comprehensive IT support across campus via phone, email, ticketing systems, and on-site assistance.',
      highlights: [
        'Specialized in remote network troubleshooting',
        'Provided on-site support for classrooms and meeting areas',
        'Resolved technical issues promptly and effectively',
        'Collaborated with senior IT leadership'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="mono text-xs text-primary mb-3">// Background</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience</h2>
        </div>
        <div className="space-y-5 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-base-200 border border-base-300 border-l-2 border-l-primary rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-base-content">{job.title}</h3>
                  <p className="text-base-content/75 text-sm mt-0.5">{job.company} · {job.location}</p>
                </div>
                <span className="mono text-xs text-primary whitespace-nowrap mt-0.5">{job.period}</span>
              </div>
              <p className="text-base-content/80 leading-7 text-sm">{job.description}</p>
              <ul className="mt-3 space-y-1">
                {job.highlights.map((h, i) => (
                  <li key={i} className="text-base-content/75 text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
