import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import ProductGrid from '@/components/home/ProductGrid'

function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <ProductGrid />
    </div>
  )
}

export default HomePage
