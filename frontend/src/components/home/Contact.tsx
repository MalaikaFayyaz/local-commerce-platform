function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contact Us
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Visit us or send a message.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            We would love to welcome you in person or help with any questions about our menu,
            offerings, or pickup options.
          </p>

          <div className="mt-8 space-y-5 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p className="mt-1">12 Market Street, North Quarter</p>
              <p>London, SW1A 1AA</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="mt-1">+44 20 5555 0101</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-1">hello@grandir.co.uk</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Hours</p>
              <p className="mt-1">Mon–Sat: 8:00 AM – 6:00 PM</p>
              <p>Sunday: 9:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us how we can help"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
