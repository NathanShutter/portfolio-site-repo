import React from 'react'
import headshot from '../../assets/images/hero/headshot.jpg'

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center md:justify-items-stretch">

          {/* Left: intro card */}
          <div className="flex justify-center md:justify-start">
            <div className="rounded-2xl border border-white/6 bg-white/4 p-8 shadow-sm mx-auto md:mx-0 max-w-[720px]">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Nathan Shutter
                </h1>
                <p className="text-slate-300 leading-7 text-lg md:text-xl">Technical Support Specialist | IT Professional</p>
                <p className="text-slate-300 leading-7 max-w-prose mx-auto md:mx-0">Delivering end-to-end IT solutions with expertise in troubleshooting, system optimization, and client support.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#projects" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl px-5 py-3">View Projects</a>
                  <a href="/resume.pdf" download className="border border-white/15 hover:border-white/30 text-white rounded-xl px-5 py-3">Download Resume</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: headshot framed */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img src={headshot} alt="Nathan Shutter" className="w-full h-72 md:h-80 object-cover rounded-2xl border border-white/10 shadow-lg" />
              {/* subtle frame */}
              <div className="absolute -inset-px rounded-2xl border border-white/6 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
