import { useEffect, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/services/products'
import type { DisplayProduct } from '@/services/products'

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<DisplayProduct[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadFeaturedProducts() {
      setIsLoading(true)
      setError(false)

      try {
        const products = await getFeaturedProducts(4)

        if (isMounted) {
          setFeaturedProducts(products)
        }
      } catch {
        if (isMounted) {
          setError(true)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadFeaturedProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section
      aria-labelledby="featured-products-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Featured Products
        </p>
        <h2
          id="featured-products-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Signature favorites made to share.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Discover a curated selection of bakery staples designed to feel special, simple, and
          memorable.
        </p>
      </div>

      {isLoading ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4" aria-live="polite">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="h-72 rounded-2xl border border-slate-200 bg-white shadow-sm"
            />
          ))}
        </div>
      ) : null}

      {error ? (
        <p className="mt-8 text-base text-slate-600" role="alert">
          Featured products are unavailable right now. Please try again later.
        </p>
      ) : null}

      {!isLoading && !error && featuredProducts.length === 0 ? (
        <p className="mt-8 text-base text-slate-600">No featured products available right now.</p>
      ) : null}

      {!isLoading && !error && featuredProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description ?? 'No description available'}
              priceInPaisa={product.price_in_paisa}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default FeaturedProducts
