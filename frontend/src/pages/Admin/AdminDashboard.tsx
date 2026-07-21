function AdminDashboard() {
  const stats = [
    { label: 'Total Orders', value: '24', color: 'bg-blue-500' },
    { label: 'Pending', value: '3', color: 'bg-yellow-500' },
    { label: 'Ready', value: '5', color: 'bg-green-500' },
    { label: 'Revenue Today', value: 'Rs. 12,500', color: 'bg-purple-500' },
  ]

  const recentOrders = [
    {
      id: '1',
      customer: 'John Doe',
      items: '2 Croissants, 1 Bread',
      status: 'preparing',
      time: '10 minutes ago',
    },
    {
      id: '2',
      customer: 'Jane Smith',
      items: '3 Cakes',
      status: 'pending',
      time: '5 minutes ago',
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      items: '1 Pastry',
      status: 'ready',
      time: '2 minutes ago',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-slate-400">Welcome back! Here&apos;s your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <div className={`inline-block h-12 w-12 rounded-lg ${stat.color} p-3 text-white`}>
              <div className="text-xl">📊</div>
            </div>
            <p className="mt-4 text-slate-400">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="rounded-lg border border-slate-700 bg-slate-800">
        <div className="border-b border-slate-700 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Customer</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Items</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-white">#{order.id}</td>
                  <td className="px-6 py-4 text-white">{order.customer}</td>
                  <td className="px-6 py-4 text-slate-300">{order.items}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : order.status === 'preparing'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
