function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-2 py-10 text-center sm:px-4 sm:py-14 lg:px-6 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Grandir</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Premium online ordering for local businesses.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Customers can browse products, place orders, and enjoy a seamless ordering experience
          designed for warm, modern local commerce.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Order Now
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
