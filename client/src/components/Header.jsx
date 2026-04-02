import React, { useState, useEffect } from 'react'

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const links = [
    { href: '#home',       label: 'Home' },
    { href: '#about',      label: 'About' },
    { href: '#projects',   label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#resume',     label: 'Resume' },
  ]

  const isDark = theme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-6">

        {/* Logo */}
        <div className="navbar-start">
          <a href="#home" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
            Nathan Shutter
          </a>
        </div>

        {/* Desktop nav */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-lg hover:bg-transparent hover:text-primary transition-colors duration-150">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: theme toggle + desktop CTA */}
        <div className="navbar-end gap-2">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-sm"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-outlined text-xl leading-none">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm hidden md:inline-flex">Contact</a>
        </div>

      </div>
    </header>
  )
}
