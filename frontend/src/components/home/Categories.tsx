import CategoryCard from '@/components/category/CategoryCard'
import { useCategories } from '@/hooks/useCategories'

function Categories() {
  const { categories, error, isLoading } = useCategories()

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

      {isLoading ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-64 rounded-2xl border border-slate-200 bg-white shadow-sm"
            />
          ))}
        </div>
      ) : null}

      {error ? (
        <p className="mt-8 text-base text-slate-600" role="alert">
          Categories are unavailable right now. Please try again later.
        </p>
      ) : null}

      {!isLoading && !error && categories.length === 0 ? (
        <p className="mt-8 text-base text-slate-600">No categories available.</p>
      ) : null}

      {!isLoading && !error && categories.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              imageUrl={category.image_url}
              productCount={category.productCount}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default Categories
