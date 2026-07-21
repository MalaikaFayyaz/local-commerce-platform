function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Image */}
          <div className="flex items-center">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl">👨‍🍳</div>
                  <p className="mt-4 text-lg font-semibold text-orange-900">Artisan Crafted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Grandir</h2>
            <p className="mt-6 text-lg text-slate-600">
              At Grandir, we believe that great baked goods start with passion, quality ingredients, and time-honored techniques.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Every product is crafted by hand with care and attention to detail. We source the finest ingredients and bake fresh daily to ensure you receive the best possible quality.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Fresh Daily</h3>
                  <p className="text-sm text-slate-600">Baked fresh every morning</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Premium Ingredients</h3>
                  <p className="text-sm text-slate-600">Only the finest quality supplies</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Quick Delivery</h3>
                  <p className="text-sm text-slate-600">Fast pickup or delivery options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
