# Grandir Application Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client                          │
│                                                              │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐  │
│  │   Customer UI  │  │   Admin UI     │  │   404 Page   │  │
│  │  (6 pages)     │  │  (4 pages)     │  │              │  │
│  └────────────────┘  └────────────────┘  └──────────────┘  │
└──────────────────────────────────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│              React Router (Client-Side)                      │
│                                                              │
│  AppLayout         ────────────────────────    AdminLayout   │
│  └─── Home                                     └─── Dashboard│
│  └─── Menu         (Products, Checkout)        └─── Products│
│  └─── Cart                                      └─── Orders  │
│  └─── Checkout                                  └─── Settings│
│  └─── OrderStatus                                            │
└──────────────────────────────────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│          React Components & Hooks Layer                      │
│                                                              │
│  Components:                  Hooks:        Contexts:       │
│  ├─ Navbar                    ├─ useProducts └─ CartContext │
│  ├─ Footer                    └─ (mock data)   (cart state) │
│  ├─ HeroSection                                             │
│  ├─ FeaturedProducts                                        │
│  ├─ CategoriesSection                                       │
│  ├─ AboutSection                                            │
│  └─ ProductCard                                             │
└──────────────────────────────────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│              Service Layer (Data Operations)                 │
│                                                              │
│  ├─ productService.ts                                       │
│  │  ├─ getCategories()                                      │
│  │  ├─ getProducts()                                        │
│  │  ├─ getFeaturedProducts()                                │
│  │  ├─ getProductsByCategory()                              │
│  │  ├─ searchProducts()                                     │
│  │  ├─ createProduct()                                      │
│  │  ├─ updateProduct()                                      │
│  │  └─ archiveProduct()                                     │
│  │                                                          │
│  ├─ orderService.ts                                         │
│  │  ├─ createOrder()                                        │
│  │  ├─ getOrderById()                                       │
│  │  ├─ getAllOrders()                                       │
│  │  ├─ getOrdersByStatus()                                  │
│  │  ├─ updateOrderStatus()                                  │
│  │  └─ getOrderItems()                                      │
│  │                                                          │
│  ├─ settingsService.ts                                      │
│  │  ├─ getSettings()                                        │
│  │  ├─ updateSettings()                                     │
│  │  ├─ getBusinessName()                                    │
│  │  ├─ isPickupEnabled()                                    │
│  │  └─ isDeliveryEnabled()                                  │
│  │                                                          │
│  └─ supabaseClient.ts                                       │
│     └─ createClient() + TypeScript types                    │
└──────────────────────────────────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                  Supabase (Backend)                          │
│                                                              │
│  PostgreSQL Database:                                        │
│  ├─ categories table       (product categories)             │
│  ├─ products table         (product catalog)                │
│  ├─ orders table           (customer orders)                │
│  ├─ order_items table      (items in orders)                │
│  └─ settings table         (business config)                │
│                                                              │
│  Features:                                                   │
│  ├─ Row Level Security (RLS) policies                       │
│  ├─ Database triggers for timestamps                        │
│  ├─ Indexes for query performance                           │
│  └─ Referential integrity constraints                       │
└──────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

### Customer App Flow

```
AppLayout
├── Navbar
│   ├── Logo (NavLink to /)
│   ├── Navigation Links
│   ├── Cart Icon (with badge)
│   └── Mobile Menu Button
│
├── Route Children:
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── CategoriesSection
│   │   ├── FeaturedProducts
│   │   ├── AboutSection
│   │   └── CTA Section
│   │
│   ├── MenuPage
│   │   ├── Search Bar
│   │   ├── Categories Sidebar
│   │   └── ProductGrid
│   │       └── ProductCard (×N)
│   │
│   ├── CartPage
│   │   ├── CartItemList
│   │   │   └── CartItem (×N)
│   │   │       ├── Image
│   │       ├── Info
│   │       ├── Quantity Controls
│   │       └── Remove Button
│   │   └── OrderSummary
│   │
│   ├── CheckoutPage
│   │   ├── CheckoutForm
│   │   │   ├── CustomerInfoForm
│   │   │   ├── DeliveryMethodSelector
│   │   │   ├── PickupTimeForm (conditional)
│   │   │   └── DeliveryAddressForm (conditional)
│   │   └── OrderSummary
│   │
│   └── OrderStatusPage
│       ├── Success Message
│       ├── Status Timeline
│       ├── OrderDetails
│       └── Contact Info
│
└── Footer
    ├── Brand Section
    ├── Navigation Links
    ├── Contact Info
    └── Hours & Copyright
```

### Admin App Flow

```
AdminLayout
├── Sidebar Navigation
│   ├── Logo
│   ├── Dashboard Link
│   ├── Products Link
│   ├── Orders Link
│   ├── Settings Link
│   └── Logout Button
│
├── Header
│   ├── Page Title
│   └── User Info
│
└── Route Children:
    ├── AdminDashboard
    │   ├── Stats Grid (4 cards)
    │   └── Recent Orders Table
    │
    ├── AdminProducts
    │   ├── Add Product Button
    │   ├── Add Product Form (conditional)
    │   └── Products Table
    │
    ├── AdminOrders
    │   ├── Status Filters
    │   └── Orders Table
    │       └── Status Dropdown (per row)
    │
    └── AdminSettings
        ├── Business Info Form
        ├── Features Toggle
        └── Operating Hours Form
```

## State Management Flow

```
CartContext (Global State)
├── items: CartItem[]
├── addItem(product)
├── removeItem(productId)
├── updateQuantity(productId, quantity)
├── clearCart()
├── subtotal: number (computed)
└── itemCount: number (computed)
    │
    └─ Persisted in localStorage
       Key: 'grandir_cart'
```

## Data Flow Examples

### Adding a Product to Cart
```
ProductCard
    ↓ (onClick Add)
useCart() hook
    ↓ (calls addItem)
CartContext
    ↓ (updates state)
localStorage
    ↓ (persists cart)
Navbar Badge Updates
```

### Creating an Order
```
CheckoutPage (Form)
    ↓ (onSubmit)
Validate Form Data
    ↓
orderService.createOrder()
    ↓
Supabase API
    ├─ INSERT into orders
    ├─ INSERT into order_items
    └─ RETURN order
    ↓
CartContext.clearCart()
    ↓
Navigate to /order/:id
```

### Fetching Products for Menu
```
MenuPage mounts
    ↓
useProducts() hook (useEffect)
    ↓
productService.getProducts()
    ↓
Supabase Query:
    SELECT * FROM products
    WHERE archived_at IS NULL
    └─ For mock: Return mock array
    ↓
Hook returns products array
    ↓
MenuPage renders ProductCard (×N)
```

## Directory Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── Router.tsx              # Main router with all routes
│   │   ├── AppLayout.tsx           # Customer layout wrapper
│   │   └── AdminLayout.tsx         # Admin layout wrapper
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── HomePage.tsx
│   │   ├── Menu/
│   │   │   └── MenuPage.tsx
│   │   ├── Cart/
│   │   │   └── CartPage.tsx
│   │   ├── Checkout/
│   │   │   └── CheckoutPage.tsx
│   │   ├── OrderStatus/
│   │   │   └── OrderStatusPage.tsx
│   │   ├── NotFound/
│   │   │   └── NotFoundPage.tsx
│   │   └── Admin/
│   │       ├── AdminDashboard.tsx
│   │       ├── AdminProducts.tsx
│   │       ├── AdminOrders.tsx
│   │       └── AdminSettings.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   └── AboutSection.tsx
│   │   └── menu/
│   │       └── ProductCard.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx         # Cart state provider
│   │
│   ├── hooks/
│   │   └── useProducts.ts          # Products data fetching
│   │
│   ├── services/
│   │   ├── supabaseClient.ts       # Supabase client init
│   │   ├── productService.ts       # Product operations
│   │   ├── orderService.ts         # Order operations
│   │   └── settingsService.ts      # Settings operations
│   │
│   ├── App.tsx                     # Root component
│   └── main.tsx                    # Entry point
│
├── public/
│   └── favicon.svg
│
├── .env.example                    # Example env vars
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## Data Models

### Product
```typescript
{
  id: UUID
  name: string
  description?: string
  price_in_paisa: number        // Store in paisa (1 PKR = 100 paisa)
  image_url?: string
  featured: boolean
  available: boolean
  category_id: UUID
  archived_at?: timestamp       // Soft delete
  created_at: timestamp
  updated_at: timestamp
}
```

### Category
```typescript
{
  id: UUID
  name: string
  description?: string
  display_order: number
  created_at: timestamp
  updated_at: timestamp
}
```

### Order
```typescript
{
  id: UUID
  customer_name: string
  customer_phone: string
  order_type: 'pickup' | 'delivery'
  pickup_time?: timestamp
  delivery_address?: string
  delivery_notes?: string
  total_price_in_paisa: number
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  created_at: timestamp
  updated_at: timestamp
}
```

### Settings
```typescript
{
  id: UUID
  business_name: string
  description?: string
  phone?: string
  email?: string
  address?: string
  logo_url?: string
  hero_image_url?: string
  pickup_enabled: boolean
  delivery_enabled: boolean
  opening_hours: JSON
  social_links: JSON
  created_at: timestamp
  updated_at: timestamp
}
```

## Deployment Architecture

```
GitHub Repository
    ↓ (Push to main/deploy branch)
Vercel
    ├─ Build: npm run build
    ├─ Install: npm install
    ├─ Deploy: dist/ folder
    └─ Environment Variables:
        ├─ VITE_SUPABASE_URL
        └─ VITE_SUPABASE_ANON_KEY
    ↓
CDN + Edge Network
    ↓
User Browser (Worldwide)
    ↓ (API calls)
Supabase
    ├─ PostgreSQL Database
    ├─ Real-time subscriptions
    └─ Authentication
```

## Security Considerations

1. **Database**: Supabase Row Level Security (RLS) policies
   - Public can read products
   - Only authorized can modify products
   - Orders protected by customer info

2. **API Keys**: Environment variables
   - ANON_KEY for public read operations
   - Only public products visible

3. **Admin Protection**: 
   - Add authentication layer
   - Protect admin routes with middleware
   - Admin-only service operations

4. **Input Validation**:
   - Form validation on client
   - Server-side validation needed on API

## Performance Optimizations

1. **Frontend**:
   - Code splitting via React Router
   - Lazy loading images ready
   - Memoization for expensive renders
   - localStorage for cart (instant load)

2. **Database**:
   - Indexes on frequently queried columns
   - Pagination support ready
   - Query optimization

3. **Caching**:
   - Browser cache for static assets
   - localStorage for cart
   - Ready for Redis/CDN integration

## Scalability Considerations

1. **Multi-tenant Support**:
   - Settings table stores per-business config
   - Easy to add business_id column

2. **Inventory Management**:
   - Add stock column to products
   - Decrement on order creation

3. **Analytics**:
   - All orders stored for analysis
   - Ready for BI integration

4. **Additional Features**:
   - Reviews table
   - Coupons table
   - Analytics events table
   - User accounts table
