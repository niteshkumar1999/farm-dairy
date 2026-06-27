const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Download App', href: '#app' },
]

const legalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Refund Policy', href: '#' },
]

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-farm-red-dark text-red-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-farm-red flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 4 7v4h6v-4c2.5-1.5 4-4 4-7 0-4-3-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-1 4-3 5.2V18h-4v-3.8C8 13 7 11.2 7 9c0-2.8 2.2-5 5-5z"/>
                </svg>
              </div>
              <span className="font-serif font-bold text-white text-lg">Nannu Farm</span>
            </div>
            <p className="text-sm text-red-200/80 leading-relaxed">
              Premium A2 Desi Cow Milk and fresh dairy essentials — Bengaluru.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-red-200/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-red-200/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-red-200/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center text-sm text-red-300/60">
          © 2026 Nannu Farm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
