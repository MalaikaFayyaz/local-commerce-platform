type CategoryFilter = {
  id: string
  name: string
}

type CategoryFilterBarProps = {
  categories: CategoryFilter[]
  onSelectCategory: (categoryId: string | null) => void
  selectedCategoryId: string | null
}

function CategoryFilterBar({
  categories,
  onSelectCategory,
  selectedCategoryId,
}: CategoryFilterBarProps) {
  const getFilterClasses = (isActive: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 ${
      isActive
        ? 'border-amber-600 bg-amber-600 text-white'
        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
    }`

  return (
    <nav className="mt-6 flex flex-wrap gap-2" aria-label="Product categories">
      <button
        type="button"
        onClick={() => onSelectCategory(null)}
        className={getFilterClasses(selectedCategoryId === null)}
        aria-pressed={selectedCategoryId === null}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onSelectCategory(category.id)}
          className={getFilterClasses(category.id === selectedCategoryId)}
          aria-pressed={category.id === selectedCategoryId}
        >
          {category.name}
        </button>
      ))}
    </nav>
  )
}

export default CategoryFilterBar
