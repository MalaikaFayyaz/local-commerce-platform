import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '#' },
  { label: 'Contact', path: '#' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0 text-2xl font-bold tracking-tight text-slate-900">
          Grandir
        </NavLink>

        {/* Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/cart"
          className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700"
        >
          Order Now
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
