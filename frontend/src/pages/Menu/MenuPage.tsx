import { useEffect, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryFilterBar from '@/components/menu/CategoryFilterBar'
import ProductGrid from '@/components/menu/ProductGrid'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategoryId = searchParams.get('category')
  const selectedSearchTerm = searchParams.get('search')?.trim() ?? ''
  const { categories } = useCategories()
  const { error, isLoading, products } = useProducts(selectedCategoryId, selectedSearchTerm)

  const selectCategory = (categoryId: string | null) => {
    const nextSearchParams = new URLSearchParams(searchParams)

    if (categoryId) {
      nextSearchParams.set('category', categoryId)
    } else {
      nextSearchParams.delete('category')
    }

    setSearchParams(nextSearchParams)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextSearchParams = new URLSearchParams(searchParams)
    const trimmedValue = event.target.value.trim()

    if (trimmedValue) {
      nextSearchParams.set('search', trimmedValue)
    } else {
      nextSearchParams.delete('search')
    }

    setSearchParams(nextSearchParams)
  }

  const clearFilters = () => {
    const nextSearchParams = new URLSearchParams(searchParams)

    nextSearchParams.delete('category')
    nextSearchParams.delete('search')

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

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
        <label htmlFor="product-search" className="text-sm font-medium text-slate-700">
          Search products
        </label>
        <input
          id="product-search"
          type="search"
          value={selectedSearchTerm}
          onChange={handleSearchChange}
          placeholder="Try a pastry or flavor"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
          aria-label="Search products"
        />
      </div>

      <CategoryFilterBar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={selectCategory}
      />

      {isLoading ? <p className="mt-4 text-base text-slate-600">Loading products...</p> : null}

      {error ? (
        <p className="mt-4 text-base text-slate-600" role="alert">
          Products are unavailable right now. Please try again later.
        </p>
      ) : null}

      {!isLoading && !error && products.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">
            No products match your current filters.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Try a different name or clear the current search and category selection to browse
            everything.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Clear filters
          </button>
        </div>
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
