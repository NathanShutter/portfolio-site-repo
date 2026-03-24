import React from 'react'
import headshot from '../../assets/images/hero/headshot.jpg'

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center md:justify-items-stretch">

          {/* Left: intro card */}
          <div className="flex justify-center md:justify-start">
            <div className="card card-compact w-full max-w-[720px] bg-base-200 border border-base-300 p-8 shadow-sm mx-auto md:mx-0">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Nathan Shutter
                </h1>
                <p className="text-base-content/80 leading-7 text-lg md:text-xl">Technical Support Specialist | IT Professional</p>
                <p className="text-base-content/70 leading-7 max-w-prose mx-auto md:mx-0">Delivering end-to-end IT solutions with expertise in troubleshooting, system optimization, and client support.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <a href="/resume.pdf" download className="btn btn-outline">Download Resume</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: headshot framed */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img src={headshot} alt="Nathan Shutter" className="w-full h-72 md:h-80 object-cover rounded-2xl border border-base-300 shadow-lg" />
              {/* subtle frame */}
              <div className="absolute -inset-px rounded-2xl border border-base-200 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
