import React from 'react'

export default function Experience() {
  const jobs = [
    {
      id: 1,
      title: 'Technical Support Specialist I',
      company: 'PointSolve Technology, Inc.',
      location: 'Lebanon, PA',
      period: 'DEC 2024 - PRESENT',
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
      period: 'SEP 2024 - DEC 2024',
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
      period: 'JAN 2022 - MAY 2024',
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
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Professional Experience</h2>
        <div className="mt-8 space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <p className="text-slate-300 mt-1">{job.company}</p>
                </div>
                <div className="text-slate-300 font-medium">{job.period}</div>
              </div>
              <p className="text-slate-300 leading-7 mt-4">📍 {job.location}</p>
              <p className="text-slate-300 leading-7 mt-3">{job.description}</p>
              <ul className="text-slate-300 mt-3 list-disc list-inside space-y-1">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
