type ProductCardProps = {
  name: string
  description: string
  price: string
  imageUrl: string
}

function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold text-slate-900">{price}</span>
          <button
            type="button"
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
