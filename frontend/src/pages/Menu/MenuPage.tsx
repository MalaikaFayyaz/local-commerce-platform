import { useSearchParams } from 'react-router-dom'

type SelectedCategoryIndicatorProps = {
  categoryId: string
}

function SelectedCategoryIndicator({ categoryId }: SelectedCategoryIndicatorProps) {
  return (
    <aside
      className="mt-4 text-sm text-slate-600"
      aria-label="Selected category development indicator"
    >
      <p>Selected Category ID:</p>
      <p className="font-medium text-slate-900">{categoryId}</p>
    </aside>
  )
}

function MenuPage() {
  const [searchParams] = useSearchParams()
  const selectedCategoryId = searchParams.get('category')

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Menu Page</h1>
      {selectedCategoryId ? <SelectedCategoryIndicator categoryId={selectedCategoryId} /> : null}
    </div>
  )
}

export default MenuPage
