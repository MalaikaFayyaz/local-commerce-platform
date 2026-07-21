import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold text-slate-900">404</div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-2 text-lg text-slate-600">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/"
            className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
          >
            Go Home
          </Link>
          <Link
            to="/menu"
            className="rounded-lg border-2 border-amber-600 px-8 py-3 font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-50"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
