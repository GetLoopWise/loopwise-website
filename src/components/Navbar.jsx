import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary no-underline" onClick={() => setOpen(false)}>
          LoopWise
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium no-underline transition-colors ${
                pathname === l.to ? 'text-accent' : 'text-dark hover:text-accent'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.getloopwise.com/signup"
            className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg no-underline transition-colors"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-dark no-underline hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.getloopwise.com/signup"
            className="block mt-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg no-underline text-center"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  )
}
