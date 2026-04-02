import React, { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (!panelRef.current) return
      if (!panelRef.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [open])

  const links = [
    { href: '#home',       label: 'Home' },
    { href: '#about',      label: 'About' },
    { href: '#projects',   label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#resume',     label: 'Resume' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-6">

        {/* Logo */}
        <div className="navbar-start">
          <a href="#home" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Nathan Shutter
          </a>
        </div>

        {/* Desktop nav links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 text-base-content/80 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-lg hover:bg-base-200 hover:text-base-content">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="navbar-end gap-2">
          <a href="#contact" className="btn btn-primary btn-sm hidden md:flex">Contact</a>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost btn-sm text-lg"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div ref={panelRef} className="md:hidden border-t border-base-300 bg-base-100 animate-slide-fade">
          <ul className="menu p-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-base-content/80 hover:text-base-content">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary btn-sm justify-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
