import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'

function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <FeaturedProducts />
    </div>
  )
}

export default HomePage
