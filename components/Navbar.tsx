'use client'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collab', href: '#collab' },
  { label: 'Stats', href: '#stats' },
  { label: 'Projects', href: '#projects-1' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header  style={{ backgroundColor: '#f5f1ee' }} className="w-full pt-4 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[540px] mx-auto flex items-center justify-center">
        <ul className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-[0_5px_20px_rgba(0,0,0,0.05)] text-sm font-medium text-neutral-700">
          {links.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative px-4 py-2 rounded-full transition-colors inline-block ${
                  i === 0
                    ? 'bg-red text-white'
                    : 'hover:text-black text-neutral-600'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
