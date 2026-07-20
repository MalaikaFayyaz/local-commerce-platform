const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Menu', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 text-2xl font-bold tracking-tight text-slate-900">
          Grandir
        </a>

        {/* Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700"
        >
          Order Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
