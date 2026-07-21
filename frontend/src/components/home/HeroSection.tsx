import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Fresh Artisan
              <span className="block text-amber-400">Baked Goods</span>
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Discover the finest selection of fresh, handcrafted baked goods made with premium ingredients. Order now for pickup or delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/menu"
                className="rounded-lg bg-amber-600 px-8 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
              >
                Order Now
              </Link>
              <a
                href="#about"
                className="rounded-lg border-2 border-white px-8 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="hidden md:block">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300 shadow-xl">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🥖</div>
                  <p className="mt-4 text-lg font-semibold text-orange-900">Fresh Baked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
