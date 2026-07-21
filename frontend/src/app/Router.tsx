import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import HomePage from '@/pages/Home/HomePage'
import MenuPage from '@/pages/Menu/MenuPage'
import CartPage from '@/pages/Cart/CartPage'
import CheckoutPage from '@/pages/Checkout/CheckoutPage'
import OrderStatusPage from '@/pages/OrderStatus/OrderStatusPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order/:id" element={<OrderStatusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
