import ProductCard from '@/components/product/ProductCard'

const featuredProducts = [
  {
    id: 1,
    name: 'Honey Brioche',
    description: 'Buttery brioche layered with a soft honey glaze.',
    price: '$8.50',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 2,
    name: 'Rose Tart',
    description: 'A delicate tart with floral notes and vanilla cream.',
    price: '$10.00',
    imageUrl:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 3,
    name: 'Morning Loaf',
    description: 'Soft sourdough crafted for slow mornings and fresh slices.',
    price: '$7.25',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 4,
    name: 'Cinnamon Twist',
    description: 'Warm spiced pastry finished with a light sugar crust.',
    price: '$6.75',
    imageUrl:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
]

function FeaturedProducts() {
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

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product) => (
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

export default FeaturedProducts
