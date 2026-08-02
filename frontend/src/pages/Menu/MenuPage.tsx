import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryFilterBar from '@/components/menu/CategoryFilterBar'
import ProductGrid from '@/components/menu/ProductGrid'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategoryId = searchParams.get('category')
  const { categories } = useCategories()
  const { error, isLoading, products } = useProducts(selectedCategoryId)

  const selectCategory = (categoryId: string | null) => {
    const nextSearchParams = new URLSearchParams(searchParams)

    if (categoryId) {
      nextSearchParams.set('category', categoryId)
    } else {
      nextSearchParams.delete('category')
    }

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
