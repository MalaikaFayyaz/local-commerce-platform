import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import AdminLayout from './AdminLayout'
import HomePage from '@/pages/Home/HomePage'
import MenuPage from '@/pages/Menu/MenuPage'
import CartPage from '@/pages/Cart/CartPage'
import CheckoutPage from '@/pages/Checkout/CheckoutPage'
import OrderStatusPage from '@/pages/OrderStatus/OrderStatusPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import AdminDashboard from '@/pages/Admin/AdminDashboard'
import AdminProducts from '@/pages/Admin/AdminProducts'
import AdminOrders from '@/pages/Admin/AdminOrders'
import AdminSettings from '@/pages/Admin/AdminSettings'
import { CartProvider } from '@/context/CartContext'

function Router() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order/:id" element={<OrderStatusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default Router
