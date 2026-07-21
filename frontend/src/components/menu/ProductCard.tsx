import { Product } from '@/hooks/useProducts'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (paisa: number) => {
    return (paisa / 100).toFixed(2)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="text-5xl">🥐</div>
              <p className="mt-2 text-xs text-slate-600">No image</p>
            </div>
          </div>
        )}
        
        {product.featured && (
          <div className="absolute top-2 right-2 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        {product.description && (
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.description}</p>
        )}

        {/* Availability Badge */}
        <div className="mt-3 mb-4">
          {product.available ? (
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Available
            </span>
          ) : (
            <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
              Out of Stock
            </span>
          )}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-amber-600">
            Rs. {formatPrice(product.price_in_paisa)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.available}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
