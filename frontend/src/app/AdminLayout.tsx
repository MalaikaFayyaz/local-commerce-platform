import { NavLink, Outlet } from 'react-router-dom'

function AdminLayout() {
  const adminMenuItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Products', href: '/admin/products' },
    { label: 'Orders', href: '/admin/orders' },
    { label: 'Settings', href: '/admin/settings' },
  ]

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-800">
        <div className="p-6">
          <NavLink to="/admin" className="text-2xl font-bold text-white">
            Grandir Admin
          </NavLink>
        </div>

        <nav className="space-y-2 px-3">
          {adminMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-3 right-3">
          <button className="w-full rounded-lg bg-slate-700 px-4 py-3 font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="border-b border-slate-800 bg-slate-800 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium text-white">Business Owner</p>
                <p className="text-sm text-slate-400">Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
