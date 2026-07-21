import { NavLink } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
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
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {link.label}
                </NavLink>
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
              <a href="mailto:hello@grandir.app" className="block transition hover:text-slate-900">
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
