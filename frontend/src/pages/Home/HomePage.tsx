import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '@/components/home/About'
import Categories from '@/components/home/Categories'
import Contact from '@/components/home/Contact'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const sectionId = location.hash.replace('#', '')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const frame = window.requestAnimationFrame(() => {
      if (sectionId) {
        const target = document.getElementById(sectionId)

        if (!target) {
          return
        }

        const targetTop = target.getBoundingClientRect().top + window.scrollY - 96

        if (Math.abs(targetTop - window.scrollY) > 2) {
          window.scrollTo({ top: targetTop, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
        }

        return
      }

      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.hash, location.pathname])

  return (
    <div className="space-y-4 pt-20 sm:pt-24">
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>
      <FeaturedProducts />
      <Categories />
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
