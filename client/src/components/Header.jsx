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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: desktop logo */}
        <div className="hidden md:flex items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">IT Portfolio</div>
        </div>

        {/* Center: mobile logo (absolutely centered) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">IT Portfolio</div>
        </div>

        {/* Center nav (desktop) */}
        <div className="hidden md:flex">
          <nav className="menu menu-horizontal px-1 text-base-content">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Right: mobile menu button */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="btn btn-ghost">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu panel (centered, not full-width) */}
      {open && (
        <div className="mt-2">
          <div ref={panelRef} className="max-w-3xl mx-auto px-4">
            <div className="card bg-base-200 border border-base-300 p-4 space-y-3 text-center animate-slide-fade">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-base-content py-2 hover:text-white">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

