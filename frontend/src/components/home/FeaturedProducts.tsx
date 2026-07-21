import { Link } from 'react-router-dom'

interface Product {
  id: string
  name: string
  description?: string
  price_in_paisa: number
  image_url?: string
}

interface FeaturedProductsProps {
  products: Product[]
}

function FeaturedProducts({ products }: FeaturedProductsProps) {
  const formatPrice = (paisa: number) => {
    return (paisa / 100).toFixed(2)
  }

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-slate-600">
            Handpicked selections from our finest offerings
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <p className="text-slate-600">No featured products available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl">🥐</div>
                        <p className="mt-2 text-xs text-slate-600">No image</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  {product.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.description}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      Rs. {formatPrice(product.price_in_paisa)}
                    </span>
                    <button className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center rounded-lg border-2 border-amber-600 px-6 py-3 font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-50"
          >
            Browse Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
