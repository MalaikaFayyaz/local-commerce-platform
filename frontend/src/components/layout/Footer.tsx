import { Link, useLocation, useNavigate } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (targetPath: string) => {
    if (targetPath === '/' || targetPath === '/menu') {
      navigate(targetPath)
      return
    }

    const hash = targetPath.includes('#') ? targetPath.split('#')[1] : ''

    if (location.pathname === '/') {
      navigate(targetPath)
      return
    }

    navigate(`/${hash ? `#${hash}` : ''}`.replace(/#$/, ''))
  }

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid gap-8 text-left sm:text-left md:grid-cols-[1.1fr_0.7fr_0.9fr]">
          <section aria-labelledby="footer-brand">
            <h2 id="footer-brand" className="text-lg font-semibold tracking-tight text-slate-900">
              Grandir
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Premium online ordering for local businesses.
            </p>
          </section>

          <section aria-labelledby="footer-links">
            <h3
              id="footer-links"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={(event) => {
                    event.preventDefault()
                    handleLinkClick(link.to)
                  }}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </section>

          <section aria-labelledby="footer-contact">
            <h3
              id="footer-contact"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <a
                href="mailto:hello@grandir.app"
                className="block break-all transition hover:text-slate-900"
              >
                hello@grandir.app
              </a>
              <a href="tel:+92XXXXXXXXXX" className="block transition hover:text-slate-900">
                +92 XXX XXX XXXX
              </a>
            </div>
          </section>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2026 Grandir. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
