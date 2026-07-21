import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()

  const formatPrice = (paisa: number) => {
    return (paisa / 100).toFixed(2)
  }

  if (items.length === 0) {
    return (
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[50vh] flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-6xl">🛒</div>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">Your cart is empty</h1>
              <p className="mt-2 text-lg text-slate-600">
                Browse our menu and add some delicious items to get started.
              </p>
              <Link
                to="/menu"
                className="mt-6 inline-flex items-center rounded-lg bg-amber-600 px-8 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>
          <p className="mt-2 text-lg text-slate-600">
            You have {items.length} item{items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:p-6"
              >
                {/* Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-32 sm:w-32">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-3xl">🥐</div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-amber-600 font-semibold">
                      Rs. {formatPrice(item.price_in_paisa)}
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-slate-900 hover:bg-slate-100"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-slate-900 hover:bg-slate-100"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600">
                        Rs.{' '}
                        {formatPrice(
                          item.price_in_paisa * item.quantity
                        )}
                      </p>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="mt-1 text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-20">
            <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>

            <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold">Rs. {formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="font-semibold">TBD</span>
              </div>
              <div className="border-t border-slate-200 pt-4 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>Rs. {formatPrice(subtotal)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full rounded-lg bg-amber-600 px-4 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={clearCart}
              className="mt-2 w-full rounded-lg border-2 border-slate-300 px-4 py-2.5 font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100"
            >
              Clear Cart
            </button>

            <Link
              to="/menu"
              className="mt-2 block w-full rounded-lg border-2 border-slate-300 px-4 py-2.5 text-center font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
