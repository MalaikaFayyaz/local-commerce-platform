import { useState } from 'react'

interface Order {
  id: string
  customer: string
  phone: string
  type: 'pickup' | 'delivery'
  status: 'pending' | 'preparing' | 'ready' | 'completed'
  total: number
  items: number
  time: string
}

function AdminOrders() {
  const [orders] = useState<Order[]>([
    {
      id: '1',
      customer: 'John Doe',
      phone: '+1 (555) 123-4567',
      type: 'pickup',
      status: 'preparing',
      total: 12500,
      items: 3,
      time: '10 min ago',
    },
    {
      id: '2',
      customer: 'Jane Smith',
      phone: '+1 (555) 234-5678',
      type: 'delivery',
      status: 'pending',
      total: 8500,
      items: 2,
      time: '5 min ago',
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      phone: '+1 (555) 345-6789',
      type: 'pickup',
      status: 'ready',
      total: 15000,
      items: 5,
      time: '2 min ago',
    },
  ])

  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} status to ${newStatus}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'preparing':
        return 'bg-blue-500/20 text-blue-400'
      case 'ready':
        return 'bg-green-500/20 text-green-400'
      case 'completed':
        return 'bg-slate-500/20 text-slate-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Orders</h1>
        <p className="mt-1 text-slate-400">Manage incoming orders</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {['All', 'Pending', 'Preparing', 'Ready', 'Completed'].map((filter) => (
          <button
            key={filter}
            className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-700"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="rounded-lg border border-slate-700 bg-slate-800 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Order ID</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Customer</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Type</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Items</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Total</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className={`border-b border-slate-700 hover:bg-slate-700/50 cursor-pointer ${
                  selectedOrder === order.id ? 'bg-slate-700/50' : ''
                }`}
                onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
              >
                <td className="px-6 py-4 text-white font-semibold">#{order.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-white">{order.customer}</p>
                    <p className="text-sm text-slate-400">{order.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                    {order.type.charAt(0).toUpperCase() + order.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-white">{order.items} items</td>
                <td className="px-6 py-4 text-white font-semibold">Rs. {(order.total / 100).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <select
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    defaultValue={order.status}
                    className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-1 text-sm text-white focus:border-amber-600 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminOrders
