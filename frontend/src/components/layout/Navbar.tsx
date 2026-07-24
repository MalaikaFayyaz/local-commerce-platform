import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/#about' },
  { label: 'Contact', path: '/#contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const location = useLocation()
  const navigate = useNavigate()

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
          setActiveSection(visibleEntry.target.id)
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

  const handleSectionNav = (targetPath: string) => {
    if (location.pathname === '/' && targetPath === '/') {
      window.history.pushState({}, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const hash = targetPath.includes('#') ? targetPath.split('#')[1] : ''

    if (location.pathname === '/') {
      navigate(targetPath, { replace: false })
      return
    }

    navigate(`/${hash ? `#${hash}` : ''}`.replace(/#$/, ''))
  }

  const getLinkClasses = (isActive: boolean) =>
    `border-b-2 border-transparent pb-1 text-sm font-medium transition-colors duration-150 ${
      isActive ? 'border-amber-600 text-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`

  const isHomeRoute = location.pathname === '/'
  const activeLabel = isHomeRoute
    ? activeSection === 'about'
      ? 'About'
      : activeSection === 'contact'
        ? 'Contact'
        : 'Home'
    : location.pathname === '/menu'
      ? 'Menu'
      : null

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <Link
          to="/"
          className="order-1 flex-shrink-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
        >
          Grandir
        </Link>

        <Link
          to="/cart"
          className="order-2 flex-shrink-0 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700 sm:order-3 sm:px-5 sm:py-2.5"
        >
          Order Now
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full basis-full flex-wrap items-center justify-center gap-4 sm:order-2 sm:w-auto sm:basis-auto sm:flex-1 sm:gap-6"
        >
          {navItems.map((item) => {
            const isActive =
              (item.label === 'Home' && activeLabel === 'Home') ||
              (item.label === 'Menu' && activeLabel === 'Menu') ||
              (item.label === 'About' && activeLabel === 'About') ||
              (item.label === 'Contact' && activeLabel === 'Contact')

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={(event) => {
                  event.preventDefault()
                  handleSectionNav(item.path)
                }}
                className={getLinkClasses(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
