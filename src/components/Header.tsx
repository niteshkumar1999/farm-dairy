import { useState } from 'react'

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
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-farm-red flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 4 7v4h6v-4c2.5-1.5 4-4 4-7 0-4-3-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-1 4-3 5.2V18h-4v-3.8C8 13 7 11.2 7 9c0-2.8 2.2-5 5-5z"/>
              </svg>
            </div>
            <div>
              <span className="font-serif font-bold text-farm-red text-lg leading-tight block">NANNU</span>
              <span className="text-xs text-farm-red-light tracking-widest font-medium">FARM</span>
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
