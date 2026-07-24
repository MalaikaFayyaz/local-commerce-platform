import About from '@/components/home/About'
import Categories from '@/components/home/Categories'
import Contact from '@/components/home/Contact'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import ProductGrid from '@/components/home/ProductGrid'

function HomePage() {
  return (
    <div className="space-y-4 pt-20 sm:pt-24">
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>
      <FeaturedProducts />
      <Categories />
      <ProductGrid />
      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
