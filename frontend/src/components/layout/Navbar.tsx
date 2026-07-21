const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Menu', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-semibold tracking-tight text-slate-900">
          Grandir
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition duration-200 ease-out hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition duration-200 ease-out hover:bg-amber-700"
        >
          Order Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
