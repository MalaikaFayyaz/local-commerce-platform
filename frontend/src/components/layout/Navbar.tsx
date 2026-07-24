import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/', sectionId: 'home' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '#about', sectionId: 'about' },
  { label: 'Contact', path: '#contact', sectionId: 'contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    const handleScrollWithFrame = () => {
      window.requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScrollWithFrame, { passive: true })

    const sections = ['home', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          const id = visibleEntry.target.id
          setActiveSection(id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScrollWithFrame)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - 96
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (Math.abs(targetTop - window.scrollY) < 2) {
      return
    }

    window.scrollTo({ top: targetTop, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  const getLinkClasses = (isActive: boolean) =>
    `rounded-full px-2 py-1 text-sm font-medium transition-colors duration-150 ${
      isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="order-1 flex-shrink-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
        >
          Grandir
        </NavLink>

        <NavLink
          to="/cart"
          className="order-2 flex-shrink-0 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700 sm:order-3 sm:px-5 sm:py-2.5"
        >
          Order Now
        </NavLink>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full basis-full flex-wrap items-center justify-center gap-4 sm:order-2 sm:w-auto sm:basis-auto sm:flex-1 sm:gap-6"
        >
          {navItems.map((item) => {
            if (item.sectionId) {
              const isActive = activeSection === item.sectionId

              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(event) => {
                    event.preventDefault()
                    if (item.sectionId) {
                      scrollToSection(item.sectionId)
                    }
                  }}
                  className={getLinkClasses(isActive)}
                >
                  {item.label}
                </a>
              )
            }

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => getLinkClasses(isActive)}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
