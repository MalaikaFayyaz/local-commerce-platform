import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Order {
  id: string
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  customerName: string
  createdAt: string
  items: Array<{ name: string; quantity: number; price: number }>
  total: number
}

function OrderStatusPage() {
  const { id } = useParams<{ id: string }>()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching order details
    const fetchOrder = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setOrder({
        id: id || '',
        status: 'preparing',
        customerName: 'John Doe',
        createdAt: new Date().toISOString(),
        items: [
          { name: 'Chocolate Croissant', quantity: 2, price: 45000 },
          { name: 'Sourdough Bread', quantity: 1, price: 35000 },
        ],
        total: 125000,
      })
      setLoading(false)
    }
    fetchOrder()
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-amber-600 border-t-transparent" />
          <p className="mt-4 text-lg text-slate-600">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-slate-600">Order not found</p>
          <Link to="/menu" className="mt-4 inline-block text-amber-600 font-semibold hover:text-amber-700">
            Back to Menu
          </Link>
        </div>
      </div>
    )
  }

  const statusSteps = [
    { key: 'pending', label: 'Order Received', icon: '📋' },
    { key: 'preparing', label: 'Being Prepared', icon: '👨‍🍳' },
    { key: 'ready', label: 'Ready for Pickup', icon: '✓' },
    { key: 'completed', label: 'Completed', icon: '🎉' },
  ]

  const currentStepIndex = statusSteps.findIndex((step) => step.key === order.status)
  const formatPrice = (paisa: number) => (paisa / 100).toFixed(2)

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Order Confirmation</h1>
          <p className="mt-2 text-lg text-slate-600">Order #{order.id}</p>
        </div>

        {/* Success Message */}
        <div className="mb-8 rounded-xl border border-green-200 bg-green-50 p-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">✓</div>
            <div>
              <h2 className="text-xl font-semibold text-green-900">Order Placed Successfully!</h2>
              <p className="mt-1 text-green-700">
                Your order has been received and is being prepared.
              </p>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">Order Status</h2>
          <div className="space-y-4">
            {statusSteps.map((step, index) => (
              <div key={step.key} className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg ${
                    index <= currentStepIndex
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-semibold ${
                      index <= currentStepIndex ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {step.label}
                  </p>
                  {index === currentStepIndex && (
                    <p className="mt-1 text-sm text-amber-600">Currently at this stage</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">Order Details</h2>

          <div className="mb-6 space-y-4 border-b border-slate-200 pb-6">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-slate-900">
                  Rs. {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-6 flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>Rs. {formatPrice(order.total)}</span>
          </div>

          <div className="flex gap-4">
            <Link
              to="/menu"
              className="flex-1 rounded-lg bg-slate-100 px-4 py-3 text-center font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-200"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 rounded-lg border-2 border-amber-600 px-4 py-3 text-center font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-50"
            >
              Print Receipt
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Have questions? Contact us at{' '}
            <a href="tel:+1234567890" className="font-semibold text-amber-600 hover:text-amber-700">
              +1 (234) 567-890
            </a>
            {' '}or{' '}
            <a href="mailto:hello@grandir.com" className="font-semibold text-amber-600 hover:text-amber-700">
              hello@grandir.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderStatusPage
