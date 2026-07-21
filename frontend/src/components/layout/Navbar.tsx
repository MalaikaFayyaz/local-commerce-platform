import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { itemCount } = useCart()

  const navItems = [
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return location.pathname === href
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Grandir
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-amber-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Order Now Button */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Shopping cart"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <Link
            to="/menu"
            className="inline-flex items-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-700"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="border-t border-slate-200 bg-slate-50 md:hidden">
          <div className="space-y-1 px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
