import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Offers', href: '#offers' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Made to Order', href: '#made-to-order' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center group">
            <Logo size="sm" variant="circle" />
            <div className="ml-2">
              <span className="font-serif font-bold text-farm-red text-lg leading-tight block">NANNU</span>
              <span className="text-xs text-farm-red-light tracking-widest font-medium">MILK</span>
            </div>
       
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-farm-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#app"
              className="hidden sm:inline-flex items-center gap-2 bg-farm-red hover:bg-farm-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Get the App
            </a>
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open main menu"
            >
              <svg className="w-6 h-6" fill-in="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-red-50 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-farm-red hover:bg-red-50 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#app"
                className="mt-2 inline-flex justify-center bg-farm-red text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Get the App
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
