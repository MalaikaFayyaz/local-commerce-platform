function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Grandir</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fresh, artisan products from your local bakery. Available for pickup or delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900">Navigation</h4>
            <nav className="mt-4 space-y-2">
              <a href="/" className="block text-sm text-slate-600 hover:text-slate-900">
                Home
              </a>
              <a href="/menu" className="block text-sm text-slate-600 hover:text-slate-900">
                Menu
              </a>
              <a href="/#about" className="block text-sm text-slate-600 hover:text-slate-900">
                About
              </a>
              <a href="/#contact" className="block text-sm text-slate-600 hover:text-slate-900">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-slate-600">
                <a href="tel:+1234567890" className="hover:text-slate-900">
                  +1 (234) 567-890
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <a href="mailto:hello@grandir.com" className="hover:text-slate-900">
                  hello@grandir.com
                </a>
              </p>
              <p className="text-sm text-slate-600">
                123 Bakery Street<br />
                Artisan City, AC 12345
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-slate-900">Hours</h4>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>Monday – Friday: 7am – 8pm</p>
              <p>Saturday: 8am – 9pm</p>
              <p>Sunday: 8am – 6pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-600">
            © {currentYear} Grandir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
