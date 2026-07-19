import { NavLink, Outlet } from 'react-router-dom'


function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-900">
            Grandir
          </NavLink>
          <header className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
            header placeholder
          </header>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white/70">
        Footer Placeholder
      </footer>
    </div>
  )
}

export default AppLayout
