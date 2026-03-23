import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's Connect</h2>
        <p className="text-slate-300 leading-7 max-w-2xl mx-auto mt-4 mb-8">Open to discussing IT infrastructure, automation, and technical opportunities. Reach out via email or connect on GitHub / LinkedIn.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-items-center">
          <a href="mailto:nateshut1@gmail.com" className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left hover:border-white/30 transition">
            <div className="text-3xl">📧</div>
            <div className="font-semibold text-white mt-3">Email</div>
            <div className="text-slate-300 mt-1">nateshut1@gmail.com</div>
          </a>

          <a href="https://www.linkedin.com/in/nathan-shutter-abc123" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left hover:border-white/30 transition">
            <div className="text-3xl">💼</div>
            <div className="font-semibold text-white mt-3">LinkedIn</div>
            <div className="text-slate-300 mt-1">/in/nathan-shutter-abc123</div>
          </a>

          <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left hover:border-white/30 transition">
            <div className="text-3xl">💻</div>
            <div className="font-semibold text-white mt-3">GitHub</div>
            <div className="text-slate-300 mt-1">@NathanShutter</div>
          </a>
        </div>
      </div>
    </section>
  )
}
