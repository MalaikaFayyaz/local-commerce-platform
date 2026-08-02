import ProductCard from '@/components/product/ProductCard'
import type { DisplayProduct } from '@/services/products'

type ProductGridProps = {
  products: DisplayProduct[]
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description ?? ''}
          price={new Intl.NumberFormat('en-PK', {
            currency: 'PKR',
            style: 'currency',
          }).format(product.price_in_paisa / 100)}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}

export default ProductGrid
