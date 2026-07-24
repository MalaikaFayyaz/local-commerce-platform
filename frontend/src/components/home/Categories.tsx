import CategoryCard from '@/components/category/CategoryCard'

const categories = [
  {
    id: 1,
    name: 'Fresh Breads',
    imageUrl:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    productCount: '12 Items',
  },
  {
    id: 2,
    name: 'Pastries',
    imageUrl:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80',
    productCount: '8 Items',
  },
  {
    id: 3,
    name: 'Morning Favorites',
    imageUrl:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
    productCount: '10 Items',
  },
  {
    id: 4,
    name: 'Cakes & Tarts',
    imageUrl:
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
    productCount: '7 Items',
  },
  {
    id: 5,
    name: 'Coffee Pairings',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    productCount: '9 Items',
  },
  {
    id: 6,
    name: 'Seasonal Picks',
    imageUrl:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    productCount: '6 Items',
  },
]

function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Categories
        </p>
        <h2
          id="categories-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Find your favorite everyday staples.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Browse a warm selection of favorites that make ordering simple and inviting.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            productCount={category.productCount}
          />
        ))}
      </div>
    </section>
  )
}

export default Categories
