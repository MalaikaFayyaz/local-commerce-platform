import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

type OrderType = 'pickup' | 'delivery'

interface FormData {
  customerName: string
  customerPhone: string
  orderType: OrderType
  pickupTime?: string
  deliveryAddress?: string
  deliveryNotes?: string
}

function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    customerPhone: '',
    orderType: 'pickup',
  })

  const formatPrice = (paisa: number) => {
    return (paisa / 100).toFixed(2)
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-slate-600">Your cart is empty</p>
          <a
            href="/menu"
            className="mt-4 inline-block text-amber-600 font-semibold hover:text-amber-700"
          >
            Back to Menu
          </a>
        </div>
      </div>
    )
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleOrderTypeChange = (type: OrderType) => {
    setFormData((prev) => ({
      ...prev,
      orderType: type,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In production, this would call the backend API
      const orderId = Math.random().toString(36).substr(2, 9)
      
      clearCart()
      navigate(`/order/${orderId}`)
    } catch (error) {
      console.error('Error placing order:', error)
      alert('Failed to place order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isPickup = formData.orderType === 'pickup'
  const isDelivery = formData.orderType === 'delivery'

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Checkout</h1>
          <p className="mt-2 text-lg text-slate-600">Complete your order</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Customer Info */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Customer Information</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="customerPhone" className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Order Type Selection */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Delivery Method</h2>
              <div className="mt-6 space-y-4">
                {/* Pickup Option */}
                <button
                  type="button"
                  onClick={() => handleOrderTypeChange('pickup')}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-colors duration-200 ${
                    isPickup
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-5 w-5 rounded-full border-2 ${
                        isPickup
                          ? 'border-amber-600 bg-amber-600'
                          : 'border-slate-300'
                      }`}
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Pickup</p>
                      <p className="text-sm text-slate-600">Pick up your order at our location</p>
                    </div>
                  </div>
                </button>

                {/* Pickup Time */}
                {isPickup && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <label htmlFor="pickupTime" className="block text-sm font-medium text-slate-700">
                      Preferred Pickup Time
                    </label>
                    <input
                      type="datetime-local"
                      id="pickupTime"
                      name="pickupTime"
                      value={formData.pickupTime || ''}
                      onChange={handleInputChange}
                      required={isPickup}
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                )}

                {/* Delivery Option */}
                <button
                  type="button"
                  onClick={() => handleOrderTypeChange('delivery')}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-colors duration-200 ${
                    isDelivery
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-5 w-5 rounded-full border-2 ${
                        isDelivery
                          ? 'border-amber-600 bg-amber-600'
                          : 'border-slate-300'
                      }`}
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Delivery</p>
                      <p className="text-sm text-slate-600">We'll deliver to your address</p>
                    </div>
                  </div>
                </button>

                {/* Delivery Address */}
                {isDelivery && (
                  <div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div>
                      <label htmlFor="deliveryAddress" className="block text-sm font-medium text-slate-700">
                        Delivery Address
                      </label>
                      <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={formData.deliveryAddress || ''}
                        onChange={handleInputChange}
                        required={isDelivery}
                        rows={3}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                        placeholder="Street address, apartment, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryNotes" className="block text-sm font-medium text-slate-700">
                        Delivery Notes (Optional)
                      </label>
                      <textarea
                        id="deliveryNotes"
                        name="deliveryNotes"
                        value={formData.deliveryNotes || ''}
                        onChange={handleInputChange}
                        rows={2}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                        placeholder="Gate code, building number, etc."
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-amber-600 px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-amber-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-20">
            <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>

            <div className="mt-6 max-h-64 space-y-3 overflow-y-auto border-b border-slate-200 pb-6">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span className="text-slate-600">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-slate-900">
                    Rs. {formatPrice(item.price_in_paisa * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold">Rs. {formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="font-semibold">TBD</span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>Rs. {formatPrice(subtotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
