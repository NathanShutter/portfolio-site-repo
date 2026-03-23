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
    <header className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 relative flex items-center justify-between">
        {/* Left: desktop logo */}
        <div className="hidden md:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">IT Portfolio</div>

        {/* Center: mobile logo (absolutely centered) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">IT Portfolio</div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center z-20">
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="p-2 rounded-lg bg-white/5 border border-white/6 text-slate-200 hover:bg-white/6">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu panel (centered, not full-width) */}
      {open && (
        <div className="mt-2">
          <div ref={panelRef} className="max-w-3xl mx-auto px-4">
            <div className="animate-container">
            <div className="rounded-xl bg-white/4 border border-white/6 p-4 space-y-3 text-center animate-slide-fade">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 py-2 hover:text-white">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </header>
  )
}

