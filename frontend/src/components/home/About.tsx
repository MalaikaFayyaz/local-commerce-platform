function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            About Grandir
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Crafted for modern local businesses and their communities.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Grandir brings together beautiful storefront experiences and simple ordering so local
            businesses can serve customers with warmth, clarity, and confidence.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            From morning pastries to thoughtful everyday essentials, the experience is designed to
            feel welcoming, premium, and easy to navigate.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Order Now
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh bakery goods arranged on a warm wooden table"
            className="h-72 w-full object-cover sm:h-80 lg:h-[24rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
