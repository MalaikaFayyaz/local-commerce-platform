import { useSearchParams } from 'react-router-dom'
import ProductGrid from '@/components/menu/ProductGrid'
import { useProducts } from '@/hooks/useProducts'

function MenuPage() {
  const [searchParams] = useSearchParams()
  const selectedCategoryId = searchParams.get('category')
  const { error, isLoading, products } = useProducts(selectedCategoryId)

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Menu Page</h1>

      {!selectedCategoryId ? (
        <p className="mt-4 text-base text-slate-600">Select a category to view products.</p>
      ) : null}

      {isLoading ? <p className="mt-4 text-base text-slate-600">Loading products...</p> : null}

      {error ? (
        <p className="mt-4 text-base text-slate-600" role="alert">
          Products are unavailable right now. Please try again later.
        </p>
      ) : null}

      {!isLoading && !error && selectedCategoryId && products.length === 0 ? (
        <p className="mt-4 text-base text-slate-600">No products available in this category.</p>
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
