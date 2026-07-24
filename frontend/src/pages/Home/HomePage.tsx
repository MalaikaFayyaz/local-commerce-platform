import FeaturedProducts from '@/components/home/FeaturedProducts'
import Categories from '@/components/home/Categories'
import Hero from '@/components/home/Hero'

function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <FeaturedProducts />
    </div>
  )
  return (
    <div className="space-y-4">
      <Hero />
      <Categories />
    </div>
  )
}

export default HomePage
