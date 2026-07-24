import ProductCard from '@/components/product/ProductCard'

const products = [
  {
    id: 1,
    name: 'Classic Baguette',
    description: 'Crusty on the outside, soft in the center.',
    price: '$5.50',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Almond Croissant',
    description: 'Flaky pastry with a rich almond finish.',
    price: '$6.25',
    imageUrl:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Cocoa Tart',
    description: 'Velvety chocolate with a crisp pastry shell.',
    price: '$8.00',
    imageUrl:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Vanilla Bean Loaf',
    description: 'Soft loaf with a delicate vanilla aroma.',
    price: '$7.50',
    imageUrl:
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Maple Morning Bun',
    description: 'Tender bun with a warm maple glaze.',
    price: '$6.75',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Pear Galette',
    description: 'Seasonal fruit filling in a buttery crust.',
    price: '$9.25',
    imageUrl:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'Honey Roll',
    description: 'Soft spiral with honey and toasted seeds.',
    price: '$5.75',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Saffron Knot',
    description: 'Golden knot with a fragrant citrus finish.',
    price: '$6.50',
    imageUrl:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80',
  },
]

function ProductGrid() {
  return (
    <section
      aria-labelledby="product-grid-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Our Selection
        </p>
        <h2
          id="product-grid-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Discover everyday favorites and seasonal treats.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          A curated collection of baked goods made to feel special, simple, and beautifully shared.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
