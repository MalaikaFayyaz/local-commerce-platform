import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '@/components/menu/ProductGrid'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategoryId = searchParams.get('category')
  const { categories } = useCategories()
  const { error, isLoading, products } = useProducts(selectedCategoryId)
  const selectedCategory = categories.find((category) => category.id === selectedCategoryId)

  const removeCategoryFilter = () => {
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.delete('category')
    setSearchParams(nextSearchParams)
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="pt-20 sm:pt-8">
      <h1 className="text-2xl font-semibold text-slate-900">Menu Page</h1>

      {selectedCategory ? (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span>Showing:</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-900">
            {selectedCategory.name}
            <button
              type="button"
              onClick={removeCategoryFilter}
              className="text-slate-600 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              aria-label={`Remove ${selectedCategory.name} filter`}
            >
              <span aria-hidden="true">×</span>
            </button>
          </span>
        </div>
      ) : null}

      {isLoading ? <p className="mt-4 text-base text-slate-600">Loading products...</p> : null}

      {error ? (
        <p className="mt-4 text-base text-slate-600" role="alert">
          Products are unavailable right now. Please try again later.
        </p>
      ) : null}

      {!isLoading && !error && products.length === 0 ? (
        <p className="mt-4 text-base text-slate-600">
          {selectedCategoryId
            ? 'No products available in this category.'
            : 'No products available.'}
        </p>
      ) : null}

      {!isLoading && !error && products.length > 0 ? (
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      ) : null}
    </div>
  )
}

export default MenuPage
