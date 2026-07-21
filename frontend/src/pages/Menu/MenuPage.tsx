import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '@/hooks/useProducts'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/menu/ProductCard'

function MenuPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  )
  const [searchTerm, setSearchTerm] = useState('')
  const { products, categories, loading, error } = useProducts()
  const { addItem } = useCart()

  if (error) {
    return (
      <div className="min-h-[60vh] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-red-600">Error loading products: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category_id === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      productId: product.id,
      name: product.name,
      price_in_paisa: product.price_in_paisa,
      image_url: product.image_url,
    })
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Menu</h1>
          <p className="mt-2 text-lg text-slate-600">Browse our delicious selection</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar: Categories */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 h-fit lg:sticky lg:top-20">
            <h2 className="text-lg font-semibold text-slate-900">Categories</h2>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                  !selectedCategory
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main: Products */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    <div className="aspect-square animate-pulse bg-slate-200" />
                    <div className="p-4 space-y-2">
                      <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                      <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-12 text-center">
                <p className="text-lg text-slate-600">
                  {searchTerm ? 'No products found matching your search.' : 'No products in this category.'}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
