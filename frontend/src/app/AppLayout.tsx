import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function AppLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-0">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
