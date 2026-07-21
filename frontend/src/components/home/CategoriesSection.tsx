import { Link } from 'react-router-dom'

interface Category {
  id: string
  name: string
  description?: string
}

interface CategoriesSectionProps {
  categories: Category[]
}

const categoryEmojis: Record<string, string> = {
  'croissants': '🥐',
  'bread': '🍞',
  'pastries': '🥧',
  'cakes': '🎂',
  'cookies': '🍪',
  'donuts': '🍩',
  'desserts': '🍰',
  'savory': '🥖',
}

function CategoriesSection({ categories }: CategoriesSectionProps) {
  const getEmoji = (name: string) => {
    const lower = name.toLowerCase()
    for (const [key, emoji] of Object.entries(categoryEmojis)) {
      if (lower.includes(key)) return emoji
    }
    return '🥐'
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore our diverse selection of fresh baked goods
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white py-12 text-center">
            <p className="text-slate-600">No categories available yet.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.name}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl transition-transform duration-200 group-hover:scale-110">
                    {getEmoji(category.name)}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{category.name}</h3>
                  {category.description && (
                    <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoriesSection
