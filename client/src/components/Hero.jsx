import React from 'react'
import headshot from '../../assets/images/hero/headshot.webp'

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <img
            src={headshot}
            alt="Nathan Shutter"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-base-300 shadow-md"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent mb-4">
          Nathan Shutter
        </h1>

        {/* Role + description */}
        <p className="text-lg font-medium text-base-content/80 mb-3">
          Technical Support Specialist · IT Professional
        </p>
        <p className="text-base-content/60 leading-7 max-w-xl mx-auto mb-10">
          Delivering end-to-end IT solutions — from infrastructure and automation to hands-on client support.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/resume.pdf" download className="btn btn-outline">Download Resume</a>
        </div>

      </div>
    </section>
  )
}
