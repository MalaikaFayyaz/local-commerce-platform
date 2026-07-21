import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoriesSection from '@/components/home/CategoriesSection'
import AboutSection from '@/components/home/AboutSection'
import { useProducts } from '@/hooks/useProducts'

function HomePage() {
  const { featuredProducts, categories, loading, error } = useProducts()

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading products: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProducts products={loading ? [] : featuredProducts} />
      <AboutSection />
      
      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 sm:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Order?</h2>
          <p className="mt-4 text-lg text-amber-50">
            Browse our full menu and place your order today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="/menu"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition-colors duration-200 hover:bg-slate-100"
            >
              Order Now
            </a>
            <a
              href="tel:+1234567890"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
