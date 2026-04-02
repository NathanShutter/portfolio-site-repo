import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's Connect</h2>
          <p className="text-base-content/75 leading-7 max-w-xl mx-auto mt-4">
            Open to IT infrastructure, automation, and technical opportunities. Reach out via any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <a href="mailto:nateshut1@gmail.com" className="card bg-base-200 border border-base-300 p-6 text-left hover:border-primary transition-colors duration-200">
            <span className="material-symbols-outlined text-2xl mb-3 block">mail</span>
            <div className="font-semibold text-base-content text-sm">Email</div>
            <div className="text-base-content/70 text-sm mt-1 break-all">nateshut1@gmail.com</div>
          </a>

          <a href="https://www.linkedin.com/in/nathan-shutter-abc123" target="_blank" rel="noopener noreferrer" className="card bg-base-200 border border-base-300 p-6 text-left hover:border-primary transition-colors duration-200">
            <span className="material-symbols-outlined text-2xl mb-3 block">docs</span>
            <div className="font-semibold text-base-content text-sm">LinkedIn</div>
            <div className="text-base-content/70 text-sm mt-1">/in/nathan-shutter</div>
          </a>

          <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" className="card bg-base-200 border border-base-300 p-6 text-left hover:border-primary transition-colors duration-200">
            <span className="material-symbols-outlined text-2xl mb-3 block">commit</span>
            <div className="font-semibold text-base-content text-sm">GitHub</div>
            <div className="text-base-content/70 text-sm mt-1">@NathanShutter</div>
          </a>
        </div>
      </div>
    </section>
  )
}
