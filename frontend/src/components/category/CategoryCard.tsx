import { Link } from 'react-router-dom'

type CategoryCardProps = {
  categoryId: string
  name: string
  imageUrl: string | null
  productCount: number
}

function CategoryCard({ categoryId, name, imageUrl, productCount }: CategoryCardProps) {
  return (
    <article className="h-full">
      <Link
        to={`/menu?category=${encodeURIComponent(categoryId)}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-inherit no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-44 w-full object-cover" />
        ) : (
          <div
            className="h-44 w-full bg-slate-100"
            role="img"
            aria-label={`${name} category image unavailable`}
          />
        )}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-600">
            {productCount} {productCount === 1 ? 'Item' : 'Items'}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default CategoryCard
